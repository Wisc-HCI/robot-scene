import React, { useLayoutEffect, useState } from 'react';
import Scene from '../components/Scene';
import { SceneSlice } from '../components';
import { Quaternion, Euler, Vector3 } from 'three';
import { range, clamp, toNumber, min } from 'lodash';
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import create from "zustand";
import shallow from 'zustand/shallow';

export default {
    title: 'More Controls',
    component: Scene,
}

const slice = (set,get,api) => ({
    ...SceneSlice(set,get),
    scalarValue: 1,
    rangeValue: [0.5,1.5],
    range: [0,2],
    setScalarValue: (newScalarValue) => set({scalarValue:newScalarValue}),
    setRangeValue: (newRangeValue) => set({rangeValue:newRangeValue}),
    setRange: (newRange) => set({range:newRange}),
    onMove: (id, source, worldTransform, localTransform) => set(state => {
        if (['scalarInputIndicator','bottomRangeInputIndicator','topRangeInputIndicator'].includes(id)) {
            // Special logic for handling the scalar and range inputs;
            // First, update the z-position of the relevant indicator;
            const value = clamp((10 * localTransform.position.z + 0.5) * (state.range[1]-state.range[0]) + state.range[0],state.range[0],state.range[1]);
            if (id === 'scalarInputIndicator') {
                state.scalarValue = value;
                // Update Visuals
                state.items[id].position.z = ((value - state.range[0]) / (state.range[1] - state.range[0])) * 0.1 - 0.05;
                // Update the text above
                state.texts.inputText.value = Math.round(value*100)/100;
            } else {
                console.log('handling range')
                // Be robust to whether the dragged value is greater than or less than the various endpoints;
                if (id == 'bottomRangeInputIndicator' && state.range[1] >= value) {
                    // The bottom input was moved and remains lower than the upper value. Simply set the lower value to the new one.
                    state.rangeValue[0] = value;
                } else if (id == 'bottomRangeInputIndicator' && state.range[1] < value) {
                    // The bottom input was moved and is now greater than the upper value. Set the new top to the new value, and set the previous top to be the new lower value.
                    state.rangeValue[0] = state.rangeValue[1];
                    state.rangeValue[1] = value
                } else if (id == 'topRangeInputIndicator' && state.range[0] <= value) {
                    // The top input was moved and remains greater than the lower value. Simply set the upper value to the new one.
                    state.rangeValue[1] = value;
                } else if (id == 'topRangeInputIndicator' && state.range[0] > value) {
                    // The top input was moved and is now less than the lower value. Set the new bottom to the new value, and set the previous bottom to be the new upper value.
                    state.rangeValue[1] = state.rangeValue[0];
                    state.rangeValue[0] = value;
                }
                // Update visuals
                state.items.topRangeInputIndicator.position.z = ((state.rangeValue[1] - state.range[0]) / (state.range[1] - state.range[0])) * 0.1 - 0.05;
                state.items.bottomRangeInputIndicator.position.z = ((state.rangeValue[0] - state.range[0]) / (state.range[1] - state.range[0])) * 0.1 - 0.05;
                state.items.rangeInputRange.position = {x:0,y:0.05,z:(state.items.topRangeInputIndicator.position.z+state.items.bottomRangeInputIndicator.position.z)/2};
                state.items.rangeInputRange.shapeParams.height = (state.rangeValue[1]-state.rangeValue[0])/(state.range[1]-state.range[0])*0.09;
                // Update the text above
                state.texts.inputRangeText.value = `${Math.round(state.rangeValue[0]*100)/100}, ${Math.round(state.rangeValue[1]*100)/100}`;
            } 
        } else {
            // Handle everything else
            state[source][id].position = {...localTransform.position};
            state[source][id].rotation = localTransform.quaternion;
            state[source][id].rotation.x = localTransform.quaternion.x;
            state[source][id].rotation.y = localTransform.quaternion.y;
            state[source][id].rotation.z = localTransform.quaternion.z;
            state[source][id].rotation.w = localTransform.quaternion.w;
            state[source][id].scale = {...localTransform.scale};
        }
    }),
})

const useStore = create(immer(subscribeWithSelector(slice)));
// console.log('starting',useStore.getState())

const Template = (args) => {
    const { tfs, lines, texts, points, angle, length, rangeInputVal, scalarInputVal, range, ...otherArgs } = args;

    const [play, pause, reset] = useStore(state=>[state.play,state.pause,state.reset]);

    // Define changeable versions of the two range inputs
    const [scalarValue,setScalarValue] = useStore(state=>[state.scalarValue,state.setScalarValue],shallow);
    const [rangeValue,setRangeValue] = useStore(state=>[state.rangeValue,state.setRangeValue],shallow);
    const setRange = useStore(state=>state.setRange,shallow);

    useLayoutEffect(() => {

        setScalarValue(scalarInputVal);
        setRangeValue(rangeInputVal);
        setRange(range);
        const hulls = {
            angleFeedback: getHullMesh(length,angle)
        }
    
        const items = {
            ...getScalarInputItems(range,scalarValue),
            ...getRangeInputItems(range,rangeValue)
        }
        useStore.setState({ tfs, items, hulls, lines, texts, points })
    }, [tfs, lines, texts, points, angle, length, range, scalarInputVal, rangeInputVal])

    return (
        <div style={{ height: 'calc(100vh - 3rem)', width: 'calc(100vw - 2rem)' }}>
            <Scene {...otherArgs} store={useStore} />
            <div style={{textAlign:'center'}}>
                <button onClick={()=>play()}>Play</button>
                <button onClick={()=>play(0.5)}>Play (0.5x)</button>
                <button onClick={()=>play(2)}>Play (2x)</button>
                <button onClick={()=>pause()}>Pause</button>
                <button onClick={()=>reset(0)}>Reset</button>
                <button onClick={()=>reset(Math.PI/2)}>Reset (0.25)</button>
                <button onClick={()=>reset(Math.PI)}>Reset (0.5)</button>
                <button onClick={()=>reset(3*Math.PI/2)}>Reset (0.75)</button>
            </div>
        </div>)
};

const getHullMesh = (length,angle)=>{
    const origin = new Quaternion();
    const eulerA = new Euler(0,Math.PI/2,0);
    const qA = origin.clone().rotateTowards(new Quaternion().setFromEuler(eulerA),angle);
    const qB = origin.clone().rotateTowards(new Quaternion().setFromEuler(eulerA),angle/2);
    const centralVec = new Vector3(0,0,length);
    const vecA = centralVec.clone().applyQuaternion(qA);
    const vecB = centralVec.clone().applyQuaternion(qB);

    const points = [
        {x:0,y:0,z:0},
        {x:centralVec.x,y:centralVec.y,z:centralVec.z},
        {x:vecA.x,y:vecA.y,z:vecA.z},
        ...range(0,2*Math.PI,Math.PI/6).map(a=>{
            return {x: vecA.x * Math.sin(a), y: vecA.x * Math.cos(a), z: vecA.z}
        }),
        ...range(0,2*Math.PI,Math.PI/6).map(a=>{
            return {x: vecB.x * Math.sin(a), y: vecB.x * Math.cos(a), z: vecB.z}
        })
    ]
    return {
        frame: 'world',
        name: 'Robot Space Usage',
        vertices: points,
        color: { r: 10, g: 200, b: 235, a: 0.7 },
        wireframe: false
    }
}

const getScalarInputItems = (rangeBounds,value,offset) => {
    const z = ((value - rangeBounds[0]) / (rangeBounds[1] - rangeBounds[0])) * 0.1 - 0.05;
    return {
        scalarInputHousing: {
            shape: "capsule",
            name: "Input Housing",
            frame: "movingFrame1",
            position: { x: 0, y: offset || 0.05, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 100, g: 100, b: 100, a: 0.3},
            scale: { x:1, y: 1, z: 1 },
            shapeParams: { height: 0.1, radius: 0.02 },
            highlighted: false
        },
        scalarInputIndicator: {
            shape: "sphere",
            name: "Input Indicator",
            frame: "movingFrame1",
            position: { x: 0, y: offset || 0.05, z },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 0, g: 0, b: 255, a: 1 },
            scale: { x: 0.03, y: 0.03, z: 0.03 },
            transformMode: 'translate-z',
            highlighted: false
        }
    }
}

const getRangeInputItems = (rangeBounds,valueRange,offset) => {
    const zSphereTop = (valueRange[1]-rangeBounds[0])/(rangeBounds[1]-rangeBounds[0]) * .1 - 0.05;
    const zSphereBottom = (valueRange[0]-rangeBounds[0])/(rangeBounds[1]-rangeBounds[0]) * .1 - 0.05;
    const rangeHeight = (valueRange[1]-valueRange[0])/(rangeBounds[1]-rangeBounds[0])*0.09;

    return {
        rangeInputHousing: {
            shape: "capsule",
            name: "Input Housing",
            frame: "movingFrame2",
            position: { x: 0, y: offset || 0.05, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 100, g: 100, b: 100, a: 0.3},
            scale: { x:1, y: 1, z: 1 },
            shapeParams: { height: 0.1, radius: 0.02 },
            highlighted: false
        },
        rangeInputRange: {
            shape: "capsule",
            name: "Input Housing",
            frame: "movingFrame2",
            position: {
                x: 0,
                y: offset || 0.05,
                z: (zSphereTop + zSphereBottom) / 2,
              },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 0, g: 0, b: 255, a: 1 },
            scale: { x:1, y: 1, z: 1 },
            shapeParams: { height: rangeHeight, radius: 0.015 },
            highlighted: false
        },
        bottomRangeInputIndicator: {
            shape: "sphere",
            name: "Input Indicator Bottom",
            frame: "movingFrame2",
            position: { x: 0, y: offset || 0.05, z: zSphereBottom },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 0, g: 0, b: 255, a: 1 },
            scale: { x: 0.03, y: 0.03, z: 0.03 },
            transformMode: 'translate-z',
            highlighted: false
        },
        topRangeInputIndicator: {
            shape: "sphere",
            name: "Input Indicator Top",
            frame: "movingFrame2",
            position: { x: 0, y: offset || 0.05, z: zSphereTop },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 0, g: 0, b: 255, a: 1 },
            scale: { x: 0.03, y: 0.03, z: 0.03 },
            transformMode: 'translate-z',
            highlighted: false
        },
    }
}

export const MoreControls = Template.bind({});
MoreControls.args = {
    tfs: {
        movingFrame1: {
            frame: 'world',
            position: { x: (time => Math.cos(time / 5000)), y: (time) => Math.sin(time / 5000), z: 0.5 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
        },
        movingFrame2: {
            frame: 'world',
            position: { x: (time => Math.sin(time / 5000)), y: (time) => Math.cos(time / 5000), z: 0.5 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
        }
    },
    lines: {},
    texts: {
        inputText: {
            value: "0.5",
            frame: "movingFrame1",
            position: { x: 0, y: 0, z: 0.25 },
            color: { r: 0, g: 0, b: 255, a: 1 },
        },
        inputRangeText: {
            value: "0.5, 1.5",
            frame: "movingFrame2",
            position: { x: 0, y: 0, z: 0.25 },
            color: { r: 0, g: 0, b: 255, a: 1 },
        }
    },
    points:{},
    displayTfs: false,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#d0d0d0',
    planeColor: '#a8a8a8',
    highlightColor: '#ffffff',
    plane: 0,
    fov: 90,
    ar: false,
    vr: false,
    angle: Math.PI/6,
    length: 0.5,
    scalarInputVal: 0.5,
    rangeInputVal: [.5,1.5],
    range: [0,2],
    onPointerMissed: () => console.log('Missed Click')
}
