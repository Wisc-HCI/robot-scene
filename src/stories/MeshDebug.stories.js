import React, { useLayoutEffect } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';
import { MeshLookupTable } from '../components/MeshLookup';

export default {
    title: 'Mesh Debug',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, ...otherArgs } = args;
    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, items, hulls, lines, texts])
    return <div style={{ height: 'calc(100vh - 2rem)', width: 'calc(100vw - 2rem)' }}><Scene {...otherArgs} store={useDefaultSceneStore} /></div>
};

let debugTfs = {};
let debugItems = {};
let debugTexts = {};

var y = -10;
var x = -12;

Object.keys(MeshLookupTable).forEach((key, i) => {
    if (x === 0) {
        x += 2;
    } else if (x > 0) {
        if (x % 10 === 0) {
            y += 2;
            x = -10;
        } else {
            x += 2;
        }
    } else {
        x += 2;
    }
    debugTfs[`${i}`] = {
        name: `${i}`,
        translation: { x: x, y: y, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 }
    };
    debugItems[key] = {
        shape: key,
        name: key,
        frame: `${i}`,
        position: { x: 0, y: 0, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        scale: key.includes('robotiq_2f_85_gripper_visualization') ? { x: 0.001, y: 0.001, z: 0.001 } : { x: 1, y: 1, z: 1 },
        editMode: 'inactive',
        highlighted: false
    }
    debugTexts[key] = {
        value: key,
        frame: `${i}`,
        position: { x: 0, y: 0, z: 0.5 },
        color: { r: 10, g: 10, b: 255, a: 1 }
    }
})

export const MeshDebug = Template.bind({});
MeshDebug.args = {
    tfs: debugTfs,
    items: debugItems,
    texts: debugTexts,
    lines: {},
    hulls: {},
    displayTfs: false,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#d0d0d0',
    planeColor: '#a8a8a8',
    highlightColor: '#ffffff',
    plane: -0.75,
    fov: 60,
    ar: false,
    vr: false,
    onPointerMissed: () => console.log('Missed Click')
}


