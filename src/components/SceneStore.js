import create from "zustand";
import produce from 'immer';

const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

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
  setItems: (items) => set(_=>({items:items})),
  setLines: (lines) => set(_=>({lines:lines})),
  setTfs: (tfs) => set(_=>({tfs:tfs})),
  // Removal by key
  removeItem: (key) => set(state => {delete state.items[key]}),
  removeLine: (key) => set(state => {delete state.lines[key]}),
  removeTf: (key) => set(state => {delete state.tfs[key]}),
  // Adding items
  setItem: (key, item) => set(state=>({items:{...state.items, [key]:item}})),
  setLine: (key, line) => set(state=>({lines:{...state.lines, [key]:line}})),
  setTf: (key, tf) => set(state=>({tfs:{...state.tfs, [key]:tf}})),
  // Item mutation
  setItemName: (key, name) => set(state => {state.items[key].name = name}),
  setItemPosition: (key, position) => set(state => {state.items[key].position = position}),
  setItemRotation: (key, rotation) => set(state => {state.items[key].rotation = rotation}),
  setItemScale: (key, scale) => set(state => {state.items[key].scale = scale}),
  setItemColor: (key, color) => set(state => {state.items[key].scale = color}),
  setItemHighlighted: (key, value) => set(state => {state.items[key].highlighted = value}),
  setItemOnClick: (key, fn) => set(state => {state.items[key].onClick = fn}),
  setItemOnPointerOver: (key, fn) => set(state => {state.items[key].onPointerOver = fn}),
  setItemOnPointerOut: (key, fn) => set(state => {state.items[key].onPointerOut = fn}),
  setItemTransformMode: (key, mode) => set(state => {state.items[key].transformMode = mode}),
  setItemOnMove: (key, fn) => set(state => {state.items[key].onMove = fn}),
  // Line mutation
  setLineName: (key, name) => set(state => {state.lines[key].name = name}),
  addLineVertex: (key, vertex) => set(state => {state.lines[key].vertices.push(vertex)}),
  removeLineVertex: (key) => set(state => {state.lines[key].vertices.pop()}),
  setLineVertex: (key, index, vertex) => set(state => {state.lines[key].vertices[index] = vertex}),
  removeLineVertex: (key, index) => set(state => {state.lines[key].vertices.splice(index, 1)}),
  // TF mutation
  setTfTranslation: (key, translation) => set(state => {state.tfs[key].translation = translation}),
  setTfRotation: (key, rotation) => set(state => {state.tfs[key].rotation = rotation}),
});

const useSceneStore = create(immer(store));

export default useSceneStore;