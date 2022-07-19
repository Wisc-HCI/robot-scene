import{r as g}from"./index.972b398d.js";import{S as c,u as r}from"./index.fa0acdbf.js";import{M as u}from"./MeshLookup.f1be3cee.js";import{j as a}from"./jsx-runtime.e3d9650b.js";import"./defineProperty.b0ef6930.js";import"./iframe.a5af5389.js";import"./client.235e3537.js";import"./index.9cb6ff53.js";var D={parameters:{storySource:{source:`import React, { useLayoutEffect } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';
import { MeshLookupTable } from './meshes/MeshLookup';

export default {
    title: 'Mesh Debug',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, ...otherArgs } = args;
    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, items, hulls, lines, texts])
    return <div style={{ height: 'calc(100vh - 2rem)', width: 'calc(100vw - 2rem)' }}><Scene {...otherArgs} store={useDefaultSceneStore} meshLookup={MeshLookupTable}/></div>
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
    debugTfs[\`\${i}\`] = {
        name: \`\${i}\`,
        position: { x: x, y: y, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        scale: {x:1,y:1,z:1}
    };
    debugItems[key] = {
        shape: key,
        name: key,
        frame: \`\${i}\`,
        position: { x: 0, y: 0, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        scale: key.includes('robotiq_2f_85_gripper_visualization') ? { x: 0.001, y: 0.001, z: 0.001 } : { x: 1, y: 1, z: 1 },
        editMode: 'inactive',
        highlighted: false
    }
    debugTexts[key] = {
        value: key,
        frame: \`\${i}\`,
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


`,locationsMap:{"mesh-debug":{startLoc:{col:17,line:11},endLoc:{col:1,line:17},startBody:{col:17,line:11},endBody:{col:1,line:17}}}}},title:"Mesh Debug",component:c};const x=e=>{const{tfs:s,items:t,hulls:o,lines:l,texts:i,...h}=e;return g.exports.useLayoutEffect(()=>{r.setState({tfs:s,items:t,hulls:o,lines:l,texts:i})},[s,t,o,l,i]),a("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:a(c,{...h,store:r,meshLookup:u})})};let d={},m={},p={};var f=-10,n=-12;Object.keys(u).forEach((e,s)=>{n===0?n+=2:n>0&&n%10===0?(f+=2,n=-10):n+=2,d[`${s}`]={name:`${s}`,position:{x:n,y:f,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},m[e]={shape:e,name:e,frame:`${s}`,position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:e.includes("robotiq_2f_85_gripper_visualization")?{x:.001,y:.001,z:.001}:{x:1,y:1,z:1},editMode:"inactive",highlighted:!1},p[e]={value:e,frame:`${s}`,position:{x:0,y:0,z:.5},color:{r:10,g:10,b:255,a:1}}});const y=x.bind({});y.args={tfs:d,items:m,texts:p,lines:{},hulls:{},displayTfs:!1,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};const _=["MeshDebug"];export{y as MeshDebug,_ as __namedExportsOrder,D as default};
//# sourceMappingURL=MeshDebug.stories.839c5884.js.map
