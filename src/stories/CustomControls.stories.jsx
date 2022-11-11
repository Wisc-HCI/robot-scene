import React, { useLayoutEffect } from 'react';
import Scene from '../components/Scene';
import { useDefaultSceneStore } from '../components';

export default {
    title: 'CustomControls',
    component: Scene,
}

const Template = (args) => {
    const { tfs, items, hulls, lines, texts, widgets, ...otherArgs } = args;

    const [play, pause, reset] = useDefaultSceneStore(state=>[state.play,state.pause,state.reset]);

    useLayoutEffect(() => {
        useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts, widgets })
    }, [tfs, items, hulls, lines, texts, widgets])

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

export const CustomControls = Template.bind({});
CustomControls.args = {
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
    widgets:{
        
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
