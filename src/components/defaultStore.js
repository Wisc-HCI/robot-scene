import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { Timer } from "./Util/Timer";
import lodash from 'lodash';

export const SceneSlice = (set, get) => ({
    clock: new Timer(),
    items: {},
    tfs: {},
    hulls: {},
    lines: {},
    texts: {},
    points: {},
    widgets: {},
    onMove: (id, source, worldTransform, localTransform) => set(state => {
        console.log(localTransform)
        state[source][id].position = {...localTransform.position};
        state[source][id].rotation = localTransform.quaternion;
        state[source][id].rotation.x = localTransform.quaternion.x;
        state[source][id].rotation.y = localTransform.quaternion.y;
        state[source][id].rotation.z = localTransform.quaternion.z;
        state[source][id].rotation.w = localTransform.quaternion.w;
        state[source][id].scale = {...localTransform.scale};
    }),
    onClick: (id,hidden,object,event) => {

        if (!hidden) {
            console.log(`id: ${id} clicked!`,object);
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
    clearTexts: () => set(_ => ({ texts: {} })),
    clearPoints: () => set(_ => ({ points: {} })),
    // Bulk Setting (This causes an entire re-render of the scene)
    setItems: (items) => set(_ => ({ items: items })),
    setLines: (lines) => set(_ => ({ lines: lines })),
    setTfs: (tfs) => set(_ => ({ tfs: tfs })),
    setHulls: (hulls) => set(_ => ({ hulls: hulls })),
    setTexts: (texts) => set(_ => ({ texts: texts })),
    setPoints: (points) => set(_ => ({ points: points })),
    // Removal by key
    removeItem: (key) => set(state => { delete state.items[key] }),
    removeLine: (key) => set(state => { delete state.lines[key] }),
    removeTf: (key) => set(state => { delete state.tfs[key] }),
    removeHull: (key) => set(state => { delete state.hulls[key] }),
    removeText: (key) => set(state => { delete state.texts[key] }),
    removePoint: (key) => set(state => { delete state.points[key] }),
    // Adding items
    setItem: (key, item) => set(state => { state.items[key] = item }),
    setLine: (key, line) => set(state => { state.lines[key] = line }),
    setTf: (key, tf) => set(state => { state.tfs[key] = tf }),
    setHull: (key, hull) => set(state => { state.hulls[key] = hull }),
    setText: (key, text) => set(state => { state.texts[key] = text }),
    setPoint: (key, point) => set(state => { state.points[key] = point }),
    setProperty: (path, value) => set(state => { lodash.set(state,path,value)})
})

export const ImmerSceneSlice = immer(subscribeWithSelector(SceneSlice))

export const useDefaultSceneStore = create(ImmerSceneSlice);