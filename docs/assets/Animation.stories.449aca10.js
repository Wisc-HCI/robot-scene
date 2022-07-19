import{r as p}from"./index.972b398d.js";import{S as f,u as a}from"./index.fa0acdbf.js";import{a as h,j as e}from"./jsx-runtime.e3d9650b.js";import"./defineProperty.b0ef6930.js";import"./iframe.a5af5389.js";import"./client.235e3537.js";import"./index.9cb6ff53.js";var k={parameters:{storySource:{source:`import React, { useLayoutEffect } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';

export default {
    title: 'Animation',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, ...otherArgs } = args;

    const [play, pause, reset] = useDefaultSceneStore(state=>[state.play,state.pause,state.reset]);

    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts })
    }, [tfs, items, hulls, lines, texts])

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

export const Animation = Template.bind({});
Animation.args = {
    tfs: {
        movingFrame: {
            frame: 'world',
            position: { x: (time => Math.cos(time / 1000)), y: (time) => Math.sin(time / 1000), z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: time => 0.25*Math.cos(time / 1000)+1, y: 1, z: 1 },
        }
    },
    items: {
        colorshiftlift: {
            shape: "cube",
            name: "ColorShift/Lift",
            frame: "movingFrame",
            position: { x: 0, y: 0, z: (time) => Math.sin(time / 1000) + 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: (time) => (Math.sin(time / 1000) / 2 + 0.5) * 255, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: true
        },
        opacity: {
            shape: "cube",
            name: "Opacity",
            frame: "movingFrame",
            position: { x: 1, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 10, a: (time) => (Math.sin(time / 1000) / 2 + 0.5) },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false
        },
        scale: {
            shape: "cube",
            name: "Scale",
            frame: "movingFrame",
            position: { x: 1, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 255, b: 10, a: 1 },
            scale: { x: 0.5, y: (time) => Math.sin(time / 1000) / 2 + 1, z: 0.5 },
            highlighted: false
        },
        hidden: {
            shape: "cube",
            name: "Hidden",
            frame: "movingFrame",
            position: { x: 0, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 255, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            hidden: (time) => Math.sin(time / 1000) > 0
        }
    },
    lines: {},
    hulls: {},
    texts: {
        colorshiftlift: {
            value: "ColorShift/Lift",
            frame: "movingFrame",
            position: { x: 0, y: 0, z: (time) => Math.sin(time / 1000) + 1.5 },
            color: { r: (time) => (Math.sin(time / 1000) / 2 + 0.5) * 255, g: 10, b: 10, a: 1 },
        },
        opacity: {
            value: "Opacity",
            frame: "movingFrame",
            position: { x: 1, y: 1, z: 1.5 },
            color: { r: 10, g: 10, b: 10, a: (time) => (Math.sin(time / 1000) / 2 + 0.5) },
        },
        scale: {
            value: "Scale",
            frame: "movingFrame",
            position: { x: 1, y: 0, z: 1.5 },
            color: { r: 10, g: 255, b: 10, a: 1 },
        },
        hidden: {
            value: "Hidden",
            frame: "movingFrame",
            position: { x: 0, y: 1, z: 1.5 },
            color: { r: 10, g: 10, b: 255, a: 1 },
            hidden: (time) => Math.sin(time / 1000) > 0
        }
    },
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
`,locationsMap:{animation:{startLoc:{col:17,line:10},endLoc:{col:1,line:33},startBody:{col:17,line:10},endBody:{col:1,line:33}}}}},title:"Animation",component:f};const y=n=>{const{tfs:s,items:r,hulls:l,lines:c,texts:m,...u}=n,[o,d,t]=a(i=>[i.play,i.pause,i.reset]);return p.exports.useLayoutEffect(()=>{a.setState({tfs:s,items:r,hulls:l,lines:c,texts:m})},[s,r,l,c,m]),h("div",{style:{height:"calc(100vh - 3rem)",width:"calc(100vw - 2rem)"},children:[e(f,{...u,store:a}),h("div",{style:{textAlign:"center"},children:[e("button",{onClick:()=>o(),children:"Play"}),e("button",{onClick:()=>o(.5),children:"Play (0.5x)"}),e("button",{onClick:()=>o(2),children:"Play (2x)"}),e("button",{onClick:()=>d(),children:"Pause"}),e("button",{onClick:()=>t(0),children:"Reset"}),e("button",{onClick:()=>t(Math.PI/2),children:"Reset (0.25)"}),e("button",{onClick:()=>t(Math.PI),children:"Reset (0.5)"}),e("button",{onClick:()=>t(3*Math.PI/2),children:"Reset (0.75)"})]})]})},g=y.bind({});g.args={tfs:{movingFrame:{frame:"world",position:{x:n=>Math.cos(n/1e3),y:n=>Math.sin(n/1e3),z:0},rotation:{w:1,x:0,y:0,z:0},scale:{x:n=>.25*Math.cos(n/1e3)+1,y:1,z:1}}},items:{colorshiftlift:{shape:"cube",name:"ColorShift/Lift",frame:"movingFrame",position:{x:0,y:0,z:n=>Math.sin(n/1e3)+1},rotation:{w:1,x:0,y:0,z:0},color:{r:n=>(Math.sin(n/1e3)/2+.5)*255,g:10,b:10,a:1},scale:{x:.5,y:.5,z:.5},highlighted:!0},opacity:{shape:"cube",name:"Opacity",frame:"movingFrame",position:{x:1,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:10,a:n=>Math.sin(n/1e3)/2+.5},scale:{x:.5,y:.5,z:.5},highlighted:!1},scale:{shape:"cube",name:"Scale",frame:"movingFrame",position:{x:1,y:0,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:255,b:10,a:1},scale:{x:.5,y:n=>Math.sin(n/1e3)/2+1,z:.5},highlighted:!1},hidden:{shape:"cube",name:"Hidden",frame:"movingFrame",position:{x:0,y:1,z:1},rotation:{w:1,x:0,y:0,z:0},color:{r:10,g:10,b:255,a:1},scale:{x:.5,y:.5,z:.5},hidden:n=>Math.sin(n/1e3)>0}},lines:{},hulls:{},texts:{colorshiftlift:{value:"ColorShift/Lift",frame:"movingFrame",position:{x:0,y:0,z:n=>Math.sin(n/1e3)+1.5},color:{r:n=>(Math.sin(n/1e3)/2+.5)*255,g:10,b:10,a:1}},opacity:{value:"Opacity",frame:"movingFrame",position:{x:1,y:1,z:1.5},color:{r:10,g:10,b:10,a:n=>Math.sin(n/1e3)/2+.5}},scale:{value:"Scale",frame:"movingFrame",position:{x:1,y:0,z:1.5},color:{r:10,g:255,b:10,a:1}},hidden:{value:"Hidden",frame:"movingFrame",position:{x:0,y:1,z:1.5},color:{r:10,g:10,b:255,a:1},hidden:n=>Math.sin(n/1e3)>0}},displayTfs:!0,displayGrid:!0,isPolar:!1,backgroundColor:"#d0d0d0",planeColor:"#a8a8a8",highlightColor:"#ffffff",plane:-.75,fov:60,ar:!1,vr:!1,onPointerMissed:()=>console.log("Missed Click")};const F=["Animation"];export{g as Animation,F as __namedExportsOrder,k as default};
//# sourceMappingURL=Animation.stories.449aca10.js.map
