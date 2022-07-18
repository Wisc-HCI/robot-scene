import{r as f}from"./index.972b398d.js";import{S as l,u as s}from"./index.966de248.js";import{j as r}from"./jsx-runtime.e3d9650b.js";import"./defineProperty.b0ef6930.js";import"./iframe.4687d09f.js";import"./client.235e3537.js";import"./index.9cb6ff53.js";var v={parameters:{storySource:{source:`import React, { useLayoutEffect } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';

export default {
    title: 'ItemMovement',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, ...otherArgs } = args;
    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, items, hulls, lines, texts])
    return <div style={{ height: 'calc(100vh - 2rem)', width: 'calc(100vw - 2rem)' }}><Scene {...otherArgs} store={useDefaultSceneStore} /></div>
};

export const ItemMovement = Template.bind({});
ItemMovement.storyName = "ItemMovement";
ItemMovement.args = {
    tfs: {
        moving: {
            frame: 'world',
            // position: { x: (time => Math.cos(time / 1000)), y: (time) => Math.sin(time / 1000), z: 0 },
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        }
    },
    items: {
        immovable: {
            shape: "cube",
            name: "Immovable Cube",
            frame: "moving",
            position: { x: 0, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: true
        },
        translateCube: {
            shape: "cube",
            name: "Translate Cube (Async)",
            frame: "moving",
            position: { x: 1, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            transformMode: 'translate'
        },
        rotateCube: {
            shape: "cube",
            name: "Rotate Cube",
            frame: "moving",
            position: { x: 1, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 255, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            transformMode: 'rotate'
        },
        scaleCube: {
            shape: "cube",
            name: "Scale Cube",
            frame: "moving",
            position: { x: 0, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 255, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            transformMode: 'scale'
        }
    },
    lines: {},
    hulls: {},
    texts: {},
    displayTfs: false,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#d0d0d0',
    planeColor: '#a8a8a8',
    highlightColor: '#ffffff',
    plane: -0.75,
    fov: 60,
    paused: false,
    ar: false,
    vr: false,
    onPointerMissed: () => console.log('Missed Click')
}`,locationsMap:{"item-movement":{startLoc:{col:17,line:10},endLoc:{col:1,line:16},startBody:{col:17,line:10},endBody:{col:1,line:16}}}}},title:"ItemMovement",component:l};const h=m=>{const{tfs:e,items:n,hulls:t,lines:o,texts:a,...c}=m;return f.exports.useLayoutEffect(()=>{s.setState({tfs:e,items:n,hulls:t,lines:o,texts:a})},[e,n,t,o,a]),r("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:r(l,{...c,store:s})})},i=h.bind({});i.storyName="ItemMovement";i.args={tfs:{moving:{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}}},items:{immovable:{shape:"cube",name:"Immovable Cube",frame:"moving",position:{x:0,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!0},translateCube:{shape:"cube",name:"Translate Cube (Async)",frame:"moving",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"translate"},rotateCube:{shape:"cube",name:"Rotate Cube",frame:"moving",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"rotate"},scaleCube:{shape:"cube",name:"Scale Cube",frame:"moving",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1,transformMode:"scale"}},lines:{},hulls:{},texts:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,paused:!1,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};const z=["ItemMovement"];export{i as ItemMovement,z as __namedExportsOrder,v as default};
//# sourceMappingURL=ItemMovement.stories.3d8a9aa5.js.map
