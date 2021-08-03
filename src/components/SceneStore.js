import create from "zustand";
import produce from 'immer';
import {itemToGroupAndChildRefs} from './Util/MeshConvert';
import {createRef} from 'react';

const store = (set,get) => ({
  items: {},
  lines: {},
  tfs: {},
  controls: {},
  transforming: false,
  // Clearing Contents
  clearItems: () => set(_=>({items: {}})),
  clearLines: () => set(_=>({lines: {}})),
  clearTfs: () => set(_=>({tfs: {}})),
  // Bulk Setting (This causes an entire re-render of the scene)
  setItems: (items) => {
    set(_=>({items:{}}));
    Object.keys(items).forEach(key=>get().setItem(key,items[key]))
  },
  setLines: (lines) => set(_=>({lines:lines})),
  setTfs: (tfs) => set(_=>({tfs:tfs})),
  // Removal by key
  removeItem: (key) => set(state => {delete state.items[key]}),
  removeLine: (key) => set(state => {delete state.lines[key]}),
  removeTf: (key) => set(state => {delete state.tfs[key]}),
  // Adding items
  setItem: (key, item) => {
    const [group,childrenRefs] = itemToGroupAndChildRefs(item)
    const ghostRef = ['translate','rotate','scale'].indexOf(item.transformMode)>-1 ? createRef() : null;
    set(state=>({items:{...state.items, [key]:{...item,group,childrenRefs,ghostRef}}}))
  },
  setLine: (key, line) => set(state=>({lines:{...state.lines, [key]:line}})),
  setTf: (key, tf) => set(state=>({tfs:{...state.tfs, [key]:tf}})),
  // Item mutation
  setItemName: (key, name) => set(produce(state => {state.items[key].name = name})),
  setItemPosition: (key, position) => set(produce(state => {state.items[key].position = position})),
  setItemRotation: (key, rotation) => set(produce(state => {state.items[key].rotation = rotation})),
  setItemScale: (key, scale) => set(produce(state => {state.items[key].scale = scale})),
  setItemColor: (key, color) => set(state => {
    // 'color' is either {r, g, b, a} or null
    // Changing the color requires re-generating the groups
    const item = {...state.items[key],color};
    const [group,childrenRefs] = itemToGroupAndChildRefs(item);
    return {items: {...items,[key]:{...item,group,childrenRefs}}}
  }),
  setItemHighlighted: (key, value) => set(produce(state => {state.items[key].highlighted = value})),
  setItemOnClick: (key, fn) => set(produce(state => {state.items[key].onClick = fn})),
  setItemOnPointerOver: (key, fn) => set(produce(state => {state.items[key].onPointerOver = fn})),
  setItemOnPointerOut: (key, fn) => set(produce(state => {state.items[key].onPointerOut = fn})),
  setItemTransformMode: (key, mode) => set(produce(state => {
    state.items[key].ghostRef = createRef();
    state.items[key].transformMode = mode
  })),
  setItemOnMove: (key, fn) => set(produce(state => {state.items[key].onMove = fn})),
  // Line mutation
  setLineName: (key, name) => set(produce(state => {state.lines[key].name = name})),
  addLineVertex: (key, vertex) => set(produce(state => {state.lines[key].vertices.push(vertex)})),
  removeLineVertex: (key) => set(produce(state => {state.lines[key].vertices.pop()})),
  setLineVertex: (key, index, vertex) => set(produce(state => {state.lines[key].vertices[index] = vertex})),
  removeLineVertex: (key, index) => set(produce(state => {state.lines[key].vertices.splice(index, 1)})),
  // TF mutation
  setTfTranslation: (key, translation) => set(produce(state => {state.tfs[key].translation = translation})),
  setTfRotation: (key, rotation) => set(produce(state => {state.tfs[key].rotation = rotation})),
  // Necessary Utility Constructions (Do not use):
  // orbitControls: createRef(),
  // setOrbitControlsEnabled: (enabled) => set(state => {
  //   if (state.orbitControls.current) {
  //     state.orbitControls.current.enabled = enabled
  //   }})
  //setItemGhostRef: (key, ref) => set(produce(state => {state.items[key].ghostRef = ref})),
});

const useSceneStore = create(store);

export default useSceneStore;