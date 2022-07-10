import{r as y}from"./index.972b398d.js";import{S as l,u as i}from"./index.0ab7d79a.js";import{M as c}from"./MeshLookup.c7574bf2.js";import{j as s}from"./jsx-runtime.e3d9650b.js";import"./defineProperty.b0ef6930.js";import"./iframe.5dba5526.js";import"./client.235e3537.js";import"./index.9cb6ff53.js";var M={parameters:{storySource:{source:`import React, { useLayoutEffect } from 'react';
import { Scene, useDefaultSceneStore } from '../components';
import { MeshLookupTable } from './meshes/MeshLookup';

export default {
    title: 'Random Shapes',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, ...otherArgs } = args;
    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, items, hulls, lines, texts])
    return <div style={{ height: 'calc(100vh - 2rem)', width: 'calc(100vw - 2rem)' }}><Scene {...otherArgs} store={useDefaultSceneStore} meshLookup={MeshLookupTable}/></div>
};

export const RandomShapes = Template.bind({});
RandomShapes.args = {
    tfs: {
        other1: {
            frame: 'world',
            position: { x: 1, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        other2: {
            name: 'world',
            position: { x: -2, y: 0, z: 2 },
            rotation: { w: 0.525322, x: 0.8509035, y: 0, z: 0 },
            scale: {x:1,y:1,z:1}
        },
        other3: {
            name: 'world',
            position: { x: 2, y: 0, z: 1 },
            rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
            scale: {x:1,y:1,z:1}
        }
    },
    items: {
        1: {
            shape: "cube",
            name: "My Cube",
            frame: "world",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 50, b: 10, a: 0.75 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: true
        },
        2: {
            shape: "sphere",
            name: "My Sphere",
            frame: "world",
            position: { x: 0, y: 2, z: 2 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 255, b: 30, a: 0.35 },
            scale: { x: 1, y: 2, z: 1 },
            highlighted: true,
            showName: true
        },
        3: {
            shape: "cylinder",
            name: "My Cylinder",
            frame: "other2",
            shapeParams: {height: 1.25},
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 200, b: 235, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false
        },
        a3: {
            shape: "capsule",
            name: "My Capsule",
            frame: "other2",
            shapeParams: {height: 0.25},
            position: { x: 1.2, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 200, b: 235, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false
        },
        4: {
            shape: "flatarrow",
            name: "My Arrow 1",
            frame: "world",
            position: { x: 1, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 70, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: true
        },
        5: {
            shape: "arrow",
            name: "My Arrow 2",
            frame: "other1",
            position: { x: 1, y: 0, z: 0 },
            rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
            color: { r: 255, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: true
        },
        6: {
            shape: "arrow",
            name: "My Arrow 3",
            frame: "other3",
            position: { x: 1, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 2, z: 1 },
            highlighted: false
        },
        7: {
            shape: 'blade_with_transport_jig',
            name: "Blade with Transport Jig",
            frame: "world",
            position: { x: 0, y: 2, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: true,
            colorOverlay : true,
            color: { r:  (time) => (Math.sin(time / 1000) / 2 + 0.5) * 255, g: 255, b: 0, a: (time) => (Math.sin(time / 1000) / 2 + 0.5) },
            highlighted: true
        },
        8: {
            shape: 'warning',
            name: "Nao Ankle",
            frame: "world",
            position: { x: 1, y: 0.5, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            colorOverlay : true,
            color: { r:  
                // (time) => (Math.sin(time / 1000) / 2 + 0.5) * 
                255, g: 255, b: 0, a: 
                //(time) => (Math.sin(time / 1000) / 2 +
                 0.5
                 //) 
                },
            highlighted: false
        },
        9: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
            name: "3d Printer",
            frame: "world",
            position: { x: -1, y: 1, z: .3 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            colorOverlay : true,
            color: { r: (time) => (Math.sin(time / 1000) / 2 + 0.5) * 255, g: 0, b: 0, a:  0.8},
            highlighted: false
        },
        10: {
            frame: 'world',
            name: 'Tag',
            shape: 'tag',
            position: { x: 3, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: -1, y: 1, z: 1 },
            highlighted: false,
            showName: true,
            color: {r:255,g:0,b:0,a:1}
        },
        11: {
            frame: 'world',
            name: 'flag',
            shape: 'flag',
            position: { x: 3, y: 1.4, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: -1, y: 1, z: 1 },
            highlighted: false,
            showName: false,
            color: {r:255,g:0,b:0,a:1}
        },
    },
    lines: {
        line1: {
            name: "Line1",
            frame: "world",
            width: 1,
            vertices: [
                { position: { x: 1, y: 2, z: 0 }, color: { r: 255, g: 0, b: 0 } },
                { position: { x: 2, y: 1, z: 1 }, color: { r: 0, g: 255, b: 0 } },
                { position: { x: 2, y: 2, z: 1 }, color: { r: 0, g: 0, b: 255 } }],
            highlighted: false
        },
        line2: {
            name: "Line1",
            frame: "other1",
            width: 3,
            vertices: [
                { position: { x: 1, y: 0, z: 0 }, color: { r: 0, g: 0, b: 255 } },
                { position: { x: 1, y: 0, z: 1 }, color: { r: 100, g: 100, b: 255 } },
                { position: { x: 2, y: 1, z: 1 }, color: { r: 50, g: 50, b: 255 } },
                { position: { x: 2, y: 2, z: 1 }, color: { r: 255, g: 255, b: 255 } }],
            highlighted: false
        }
    },
    hulls: {},
    texts: {},
    displayTfs: true,
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

`,locationsMap:{"random-shapes":{startLoc:{col:17,line:10},endLoc:{col:1,line:16},startBody:{col:17,line:10},endBody:{col:1,line:16}}}}},title:"Random Shapes",component:l};const m=e=>{const{tfs:n,items:o,hulls:r,lines:a,texts:t,...h}=e;return y.exports.useLayoutEffect(()=>{i.setState({tfs:n,items:o,hulls:r,lines:a,texts:t})},[n,o,r,a,t]),s("div",{style:{height:"calc(100vh - 2rem)",width:"calc(100vw - 2rem)"},children:s(l,{...h,store:i,meshLookup:c})})},g=m.bind({});g.args={tfs:{other1:{frame:"world",position:{x:1,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1}},other2:{name:"world",position:{x:-2,y:0,z:2},rotation:{w:.525322,x:.8509035,y:0,z:0},scale:{x:1,y:1,z:1}},other3:{name:"world",position:{x:2,y:0,z:1},rotation:{w:-.604,x:-.002,y:-.756,z:.252},scale:{x:1,y:1,z:1}}},items:{1:{shape:"cube",name:"My Cube",frame:"world",position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:50,b:10,a:.75},scale:{x:.5,y:.5,z:.5},highlighted:!0},2:{shape:"sphere",name:"My Sphere",frame:"world",position:{x:0,y:2,z:2},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:255,b:30,a:.35},scale:{x:1,y:2,z:1},highlighted:!0,showName:!0},3:{shape:"cylinder",name:"My Cylinder",frame:"other2",shapeParams:{height:1.25},position:{x:0,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:200,b:235,a:.5},scale:{x:1,y:1,z:1},highlighted:!1},a3:{shape:"capsule",name:"My Capsule",frame:"other2",shapeParams:{height:.25},position:{x:1.2,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:200,b:235,a:.5},scale:{x:1,y:1,z:1},highlighted:!1},4:{shape:"flatarrow",name:"My Arrow 1",frame:"world",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:70,g:70,b:250,a:.5},scale:{x:1,y:1,z:1},highlighted:!0},5:{shape:"arrow",name:"My Arrow 2",frame:"other1",position:{x:1,y:0,z:0},rotation:{w:-.604,x:-.002,y:-.756,z:.252},color:{r:255,g:70,b:250,a:.5},scale:{x:1,y:1,z:1},highlighted:!0},6:{shape:"arrow",name:"My Arrow 3",frame:"other3",position:{x:1,y:0,z:0},rotation:{w:1,x:0,y:0,z:0},color:{r:255,g:70,b:250,a:.5},scale:{x:1,y:2,z:1},highlighted:!1},7:{shape:"blade_with_transport_jig",name:"Blade with Transport Jig",frame:"world",position:{x:0,y:2,z:1},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},showName:!0,colorOverlay:!0,color:{r:e=>(Math.sin(e/1e3)/2+.5)*255,g:255,b:0,a:e=>Math.sin(e/1e3)/2+.5},highlighted:!0},8:{shape:"warning",name:"Nao Ankle",frame:"world",position:{x:1,y:.5,z:1},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},colorOverlay:!0,color:{r:255,g:255,b:0,a:.5},highlighted:!1},9:{shape:"package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",name:"3d Printer",frame:"world",position:{x:-1,y:1,z:.3},rotation:{w:1,x:0,y:0,z:0},scale:{x:1,y:1,z:1},colorOverlay:!0,color:{r:e=>(Math.sin(e/1e3)/2+.5)*255,g:0,b:0,a:.8},highlighted:!1},10:{frame:"world",name:"Tag",shape:"tag",position:{x:3,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},scale:{x:-1,y:1,z:1},highlighted:!1,showName:!0,color:{r:255,g:0,b:0,a:1}},11:{frame:"world",name:"flag",shape:"flag",position:{x:3,y:1.4,z:1},rotation:{w:1,x:0,y:0,z:0},scale:{x:-1,y:1,z:1},highlighted:!1,showName:!1,color:{r:255,g:0,b:0,a:1}}},lines:{line1:{name:"Line1",frame:"world",width:1,vertices:[{position:{x:1,y:2,z:0},color:{r:255,g:0,b:0}},{position:{x:2,y:1,z:1},color:{r:0,g:255,b:0}},{position:{x:2,y:2,z:1},color:{r:0,g:0,b:255}}],highlighted:!1},line2:{name:"Line1",frame:"other1",width:3,vertices:[{position:{x:1,y:0,z:0},color:{r:0,g:0,b:255}},{position:{x:1,y:0,z:1},color:{r:100,g:100,b:255}},{position:{x:2,y:1,z:1},color:{r:50,g:50,b:255}},{position:{x:2,y:2,z:1},color:{r:255,g:255,b:255}}],highlighted:!1}},hulls:{},texts:{},displayTfs:!0,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};const v=["RandomShapes"];export{g as RandomShapes,v as __namedExportsOrder,M as default};
//# sourceMappingURL=Random.stories.d1b35bb4.js.map
