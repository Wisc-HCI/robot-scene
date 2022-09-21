import React, { useLayoutEffect } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';
import { Quaternion, Euler, Vector3 } from 'three';
import { get } from 'lodash';
import { range } from 'lodash';

export default {
    title: 'MoreControls',
    component: Scene,
}

const Template = (args) => {
    const { tfs, lines, texts, angle, length, rangeInputVal, scalarInputVal, range, ...otherArgs } = args;

    const [play, pause, reset] = useDefaultSceneStore(state=>[state.play,state.pause,state.reset]);

    useLayoutEffect(() => {
        const hulls = {
            angleFeedback: getHullMesh(length,angle)
        }
    
        const items = {
            ...getScalarInputItems(range,scalarInputVal),
            ...getRangeInputItems(range,rangeInputVal)
        }
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, lines, texts, angle, length, range, scalarInputVal, rangeInputVal])

    return (
        <div style={{ height: 'calc(100vh - 3rem)', width: 'calc(100vw - 2rem)' }}>
            <Scene {...otherArgs} store={useDefaultSceneStore} />
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

const getScalarInputItems = (range,value) => {
    const z = (value-range[0])/(range[1]-range[0]) * .25 - (0.25/2);
    return {
        scalarInputHousing: {
            shape: "capsule",
            name: "Input Housing",
            frame: "movingFrame1",
            position: { x: 0, y: 0.05, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 100, g: 100, b: 100, a: 0.3},
            scale: { x:1, y: 1, z: 1 },
            shapeParams: {height: 0.25, radius:0.05},
            highlighted: false
        },
        scalarInputIndicator: {
            shape: "sphere",
            name: "Input Indicator",
            frame: "movingFrame1",
            position: { x: 0, y: 0.05, z },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 0, g: 255, b: 0, a: 1 },
            scale: { x:0.09, y: 0.09, z: 0.09 },
            transformMode: 'translate-z',
            highlighted: false
        }
    }
}

const getRangeInputItems = (range,valueRange) => {
    const zSphereTop = (valueRange[1]-range[0])/(range[1]-range[0]) * .25 - (0.25/2);
    const zSphereBottom = (valueRange[0]-range[0])/(range[1]-range[0]) * .25 - (0.25/2);
    const rangeHeight = (valueRange[1]-valueRange[0])/(range[1]-range[0])*0.24;

    return {
        rangeInputHousing: {
            shape: "capsule",
            name: "Input Housing",
            frame: "movingFrame2",
            position: { x: 0, y: 0.05, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 100, g: 100, b: 100, a: 0.3},
            scale: { x:1, y: 1, z: 1 },
            shapeParams: {height: 0.25, radius:0.05},
            highlighted: false
        },
        rangeInputRange: {
            shape: "capsule",
            name: "Input Housing",
            frame: "movingFrame2",
            position: { x: 0, y: 0.05, z: (zSphereTop+zSphereBottom)/2 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 0, g: 255, b: 0, a: 1 },
            scale: { x:1, y: 1, z: 1 },
            shapeParams: {height: rangeHeight, radius:0.045},
            highlighted: false
        },
        bottomRangeInputIndicator: {
            shape: "sphere",
            name: "Input Indicator Bottom",
            frame: "movingFrame2",
            position: { x: 0, y: 0.05, z: zSphereBottom },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 0, g: 255, b: 0, a: 1 },
            scale: { x:0.09, y: 0.09, z: 0.09 },
            transformMode: 'translate-z',
            highlighted: false
        },
        topRangeInputIndicator: {
            shape: "sphere",
            name: "Input Indicator Top",
            frame: "movingFrame2",
            position: { x: 0, y: 0.05, z: zSphereTop },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 0, g: 255, b: 0, a: 1 },
            scale: { x:0.09, y: 0.09, z: 0.09 },
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
            value: "Input Text",
            frame: "movingFrame1",
            position: { x: 0, y: 0, z: 0.5 },
            color: { r: 0, g: 255, b: 0, a: 1 },
        }
    },
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
    rangeInputVal: [.2,1],
    range: [0,2],
    onPointerMissed: () => console.log('Missed Click')
}
