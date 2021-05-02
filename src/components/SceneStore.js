import create from "zustand";
import produce from "immer";
import { createRef } from 'react';

const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

const store = (set) => ({
  items: {},
  lines: {},
  tfs: {},
  // Clearing Contents
  clearItems: () => set((state) => ({items: {}})),
  clearLines: () => set((state) => ({lines: {}})),
  clearTfs: () => set((state) => ({tfs: {}})),
  // Bulk Setting (This causes an entire re-render of the scene)
  setItems: (items) => set((state) => ({items:items})),
  setLines: (lines) => set((state) => ({lines:lines})),
  setTfs: (tfs) => set((state) => ({tfs:tfs})),
  // Removal by key
  removeItem: (key) => set((state) => {delete state.items[key]}),
  removeLine: (key) => set((state) => {delete state.lines[key]}),
  removeTf: (key) => set((state) => {delete state.tfs[key]}),
  // Adding items
  addItem: (key, item) => set((state) => {state.items[key] = item}),
  addLine: (key, line) => set((state) => {state.lines[key] = line}),
  addTf: (key, tf) => set((state) => {state.tfs[key] = tf}),
  // Item mutation
  setItemName: (key, name) => set((state) => {state.items[key].name = name}),
  setItemPosition: (key, x, y, z) => set((state) => {state.items[key].position = {x:x,y:y,z:z}}),
  setItemRotation: (key, w, x, y, z) => set((state) => {state.items[key].rotation = {w:w,x:x,y:y,z:z}}),
  setItemColor: (key, w, x, y, z) => set((state) => {state.items[key].rotation = {w:w,x:x,y:y,z:z}}),
  setItemScale: (key, x, y, z) => set((state) => {state.items[key].scale = {x:x,y:y,z:z}}),
  setItemHighlighted: (key, value) => set((state) => {state.items[key].highlighted = value}),
  setItemCanTranslate: (key, value) => set((state) => {state.items[key].canTranslate = value}),
  setItemCanRotate: (key, value) => set((state) => {state.items[key].canRotate = value}),
  setItemCanScale: (key, value) => set((state) => {state.items[key].canScale = value}),
  // Line mutation
  setLineName: (key, name) => set((state) => {state.lines[key].name = name}),
  addLineVertex: (key, vertex) => set((state) => {state.lines[key].vertices.push(vertex)}),
  removeLineVertex: (key) => set((state) => {state.lines[key].vertices.pop()}),
  setLineVertex: (key, index, vertex) => set((state) => {state.lines[key].vertices[index] = vertex}),
  removeLineVertex: (key, index) => set((state) => {state.lines[key].vertices.splice(index, 1)}),
  // TF mutation
  setTfTranslation: (key, x, y, z) => set((state) => {state.tfs[key].translation = {x:x,y:y,z:z}}),
  setTfRotation: (key, w, x, y, z) => set((state) => {state.tfs[key].rotation = {w:w,x:x,y:y,z:z}})
});

const useSceneStore = create(immer(store));

export default useSceneStore;