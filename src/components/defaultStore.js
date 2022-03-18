import create from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'
import produce from "immer";
import { Timer } from "./Util/Timer";

const immer = (config) => (set, get, api) =>
    config(
        (partial, replace) => {
            const nextState =
                typeof partial === "function" ? produce(partial) : partial;
            return set(nextState, replace);
        },
        get,
        api
    );

export const SceneSlice = (set, get) => ({
    clock: new Timer(),
    items: {},
    tfs: {},
    hulls: {},
    lines: {},
    texts: {},
    onMove: (itemId, worldTransform, localTransform) => set(state => {
        console.log(localTransform)
        state.items[itemId].position = {...localTransform.position};
        state.items[itemId].rotation = localTransform.quaternion;
        state.items[itemId].rotation.x = localTransform.quaternion.x;
        state.items[itemId].rotation.y = localTransform.quaternion.y;
        state.items[itemId].rotation.z = localTransform.quaternion.z;
        state.items[itemId].rotation.w = localTransform.quaternion.w;
        state.items[itemId].scale = {...localTransform.scale};
    }),
    onClick: (id,hidden,event) => {

        if (!hidden) {
            console.log(`id: ${id} clicked!`);
        }
        if (get().items[id] && !hidden) {
            event.stopPropagation()
        }
    },
    onPointerOver: (id,hidden,event) => {
        // console.log(`id: ${id} hovered!`)
    },
    onPointerOut: (id,hidden,event) => {
        // console.log(`id: ${id} not hovered!`)
    },
    pause: () => set(state=>{
        // state.clock.enableFixedDelta();
        // state.clock.setFixedDelta(0);
        state.clock.setTimescale(0)
    }),
    play: (speed) => set(state=>{
        // state.clock.disableFixedDelta();
        state.clock.setTimescale(speed ? speed : 1)
    }),
    reset: (time) => set(state=>{
        console.log(`setting time to ${time}`)
        state.clock._elapsed = time ? time * 1000 : 0;
    }),

    // setClockTime: () => set(state=>{
    //     state.clock._elapsed
    // }),
    clearItems: () => set(_ => ({ items: {} })),
    clearLines: () => set(_ => ({ lines: {} })),
    clearTfs: () => set(_ => ({ tfs: {} })),
    clearHulls: () => set(_ => ({ hulls: {} })),
    // Bulk Setting (This causes an entire re-render of the scene)
    setItems: (items) => set(_ => ({ items: items })),
    setLines: (lines) => set(_ => ({ lines: lines })),
    setTfs: (tfs) => set(_ => ({ tfs: tfs })),
    setHulls: (hulls) => set(_ => ({ hulls: hulls })),
    // Removal by key
    removeItem: (key) => set(state => { delete state.items[key] }),
    removeLine: (key) => set(state => { delete state.lines[key] }),
    removeTf: (key) => set(state => { delete state.tfs[key] }),
    removeHull: (key) => set(state => { delete state.hulls[key] }),
    // Adding items
    setItem: (key, item) => set(state => { state.items[key] = item }),
    setLine: (key, line) => set(state => { state.lines[key] = line }),
    setTf: (key, tf) => set(state => { state.tfs[key] = tf }),
    setHull: (key, hull) => set(state => { state.hulls[key] = hull }),
    // Item mutation
    setItemName: (key, name) => set(state => { state.items[key].name = name }),
    setItemShowName: (key, showName) => set(state => { state.items[key].showName = showName }),
    setItemPosition: (key, position) => set(state => { state.items[key].position = position }),
    setItemRotation: (key, rotation) => set(state => { state.items[key].rotation = rotation }),
    setItemScale: (key, scale) => set(state => { state.items[key].scale = scale }),
    setItemColor: (key, color) => set(state => { state.items[key].color = color }),
    setItemWireframe: (key, wireframe) => set(state => { state.items[key].wireframe = wireframe }),
    setItemHighlighted: (key, value) => set(state => { state.items[key].highlighted = value }),
    setItemHidden: (key, value) => set(state => { state.items[key].hidden = value }),
    setItemOnClick: (key, fn) => set(state => { state.items[key].onClick = fn }),
    setItemOnPointerOver: (key, fn) => set(state => { state.items[key].onPointerOver = fn }),
    setItemOnPointerOut: (key, fn) => set(state => { state.items[key].onPointerOut = fn }),
    setItemTransformMode: (key, mode) => set(state => { state.items[key].transformMode = mode }),
    setItemOnMove: (key, fn) => set(state => { state.items[key].onMove = fn }),
    // Line mutation
    setLineName: (key, name) => set(state => { state.lines[key].name = name }),
    setLineWidth: (key, width) => set(state => { state.lines[key].width = width }),
    setLineVertices: (key, vertices) => set(state => { state.items[key].vertices = vertices }),
    addLineVertex: (key, vertex) => set(state => { state.lines[key].vertices.push(vertex) }),
    setLineVertex: (key, index, vertex) => set(state => { state.lines[key].vertices[index] = vertex }),
    setLineHidden: (key, value) => set(state => { state.lines[key].hidden = value }),
    removeLineVertex: (key, index) => set(state => { state.lines[key].vertices.splice(index, 1) }),
    // TF mutation
    setTfTranslation: (key, translation) => set(state => { state.tfs[key].translation = translation }),
    setTfRotation: (key, rotation) => set(state => { state.tfs[key].rotation = rotation }),
    // Hull mutation
    setHullName: (key, name) => set(state => { state.hulls[key].name = name }),
    setHullVertices: (key, vertices) => set(state => { state.hulls[key].vertices = vertices }),
    addHullVertex: (key, vertex) => set(state => { state.hulls[key].vertices.push(vertex) }),
    setHullVertex: (key, index, vertex) => set(state => { state.hulls[key].vertices[index] = vertex }),
    removeHullVertex: (key, index) => set(state => { state.hulls[key].vertices.splice(index, 1) }),
    setHullColor: (key, color) => set(state => { state.hulls[key].scale = color }),
    setHullWireframe: (key, wireframe) => set(state => { state.hulls[key].wireframe = wireframe }),
    setHullHighlighted: (key, value) => set(state => { state.hulls[key].highlighted = value }),
    setHullHidden: (key, value) => set(state => { state.hulls[key].hidden = value }),
    setHullOnClick: (key, fn) => set(state => { state.hulls[key].onClick = fn }),
    setHullOnPointerOver: (key, fn) => set(state => { state.hulls[key].onPointerOver = fn }),
    setHullOnPointerOut: (key, fn) => set(state => { state.hulls[key].onPointerOut = fn }),
})

export const ImmerSceneSlice = immer(subscribeWithSelector(SceneSlice))

export const useDefaultSceneStore = create(ImmerSceneSlice);