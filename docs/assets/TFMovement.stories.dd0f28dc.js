import{r as n}from"./index.972b398d.js";import{S as u,u as o}from"./index.fa0acdbf.js";import{a as f,j as e}from"./jsx-runtime.e3d9650b.js";import"./defineProperty.b0ef6930.js";import"./iframe.a5af5389.js";import"./client.235e3537.js";import"./index.9cb6ff53.js";var P={parameters:{storySource:{source:`import React, { useLayoutEffect, useState } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';

export default {
    title: 'TFMovement',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, ...otherArgs } = args;

    const setProperty = useDefaultSceneStore(state => state.setProperty);
    const [translateSnap, setTranslateSnap] = useState(0);
    const [rotateSnap, setRotateSnap] = useState(0);
    const [scaleSnap, setScaleSnap] = useState(0);

    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, items, hulls, lines, texts])
    return (
        <div style={{ height: 'calc(100vh - 3rem)', width: 'calc(100vw - 2rem)' }}>
            <Scene {...otherArgs} store={useDefaultSceneStore} displayTfs translateSnap={translateSnap} rotateSnap={rotateSnap} scaleSnap={scaleSnap} />
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => { setTranslateSnap(0); setProperty(['tfs', 'moving', 'transformMode'], 'translate') }}>Translate Free</button>
                <button onClick={() => { setTranslateSnap(0.25); setProperty(['tfs', 'moving', 'transformMode'], 'translate') }}>Translate Snapping</button>
                <button onClick={() => { setRotateSnap(0); setProperty(['tfs', 'moving', 'transformMode'], 'rotate') }}>Rotate Free</button>
                <button onClick={() => { setRotateSnap(Math.PI / 6); setProperty(['tfs', 'moving', 'transformMode'], 'rotate') }}>Rotate Snapping</button>
                <button onClick={() => { setScaleSnap(0); setProperty(['tfs', 'moving', 'transformMode'], 'scale') }}>Scale Free</button>
                <button onClick={() => { setScaleSnap(0.1); setProperty(['tfs', 'moving', 'transformMode'], 'scale') }}>Scale Snapping</button>
            </div>
        </div>
    )
};

export const TFMovement = Template.bind({});
TFMovement.storyName = "TFMovement";
TFMovement.args = {
    tfs: {
        moving: {
            frame: 'world',
            // position: { x: (time => Math.cos(time / 1000)), y: (time) => Math.sin(time / 1000), z: 0 },
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            transformMode: 'rotate'
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
            scale: { x: 0.5, y: 0.5, z: 0.5 }
        },
        translateCube: {
            shape: "cube",
            name: "Translate Cube (Async)",
            frame: "moving",
            position: { x: 1, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false
        },
        rotateCube: {
            shape: "cube",
            name: "Rotate Cube",
            frame: "moving",
            position: { x: 1, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 255, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false
        },
        scaleCube: {
            shape: "cube",
            name: "Scale Cube",
            frame: "moving",
            position: { x: 0, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 255, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false
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
}`,locationsMap:{"tf-movement":{startLoc:{col:17,line:10},endLoc:{col:1,line:34},startBody:{col:17,line:10},endBody:{col:1,line:34}}}}},title:"TFMovement",component:u};const x=g=>{const{tfs:a,items:s,hulls:r,lines:l,texts:i,...S}=g,t=o(v=>v.setProperty),[h,c]=n.exports.useState(0),[y,m]=n.exports.useState(0),[b,p]=n.exports.useState(0);return n.exports.useLayoutEffect(()=>{o.setState({tfs:a,items:s,hulls:r,lines:l,texts:i})},[a,s,r,l,i]),f("div",{style:{height:"calc(100vh - 3rem)",width:"calc(100vw - 2rem)"},children:[e(u,{...S,store:o,displayTfs:!0,translateSnap:h,rotateSnap:y,scaleSnap:b}),f("div",{style:{textAlign:"center"},children:[e("button",{onClick:()=>{c(0),t(["tfs","moving","transformMode"],"translate")},children:"Translate Free"}),e("button",{onClick:()=>{c(.25),t(["tfs","moving","transformMode"],"translate")},children:"Translate Snapping"}),e("button",{onClick:()=>{m(0),t(["tfs","moving","transformMode"],"rotate")},children:"Rotate Free"}),e("button",{onClick:()=>{m(Math.PI/6),t(["tfs","moving","transformMode"],"rotate")},children:"Rotate Snapping"}),e("button",{onClick:()=>{p(0),t(["tfs","moving","transformMode"],"scale")},children:"Scale Free"}),e("button",{onClick:()=>{p(.1),t(["tfs","moving","transformMode"],"scale")},children:"Scale Snapping"})]})]})},d=x.bind({});d.storyName="TFMovement";d.args={tfs:{moving:{frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},transformMode:"rotate"}},items:{immovable:{shape:"cube",name:"Immovable Cube",frame:"moving",position:{x:0,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5}},translateCube:{shape:"cube",name:"Translate Cube (Async)",frame:"moving",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1},rotateCube:{shape:"cube",name:"Rotate Cube",frame:"moving",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1},scaleCube:{shape:"cube",name:"Scale Cube",frame:"moving",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!1}},lines:{},hulls:{},texts:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,paused:!1,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};const R=["TFMovement"];export{d as TFMovement,R as __namedExportsOrder,P as default};
//# sourceMappingURL=TFMovement.stories.dd0f28dc.js.map
