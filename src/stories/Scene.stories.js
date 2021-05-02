import React from 'react';

import Scene from '../components/Scene';
import useSceneStore from '../components/SceneStore';

export default {
  title: 'Mesh Demo',
  component: Viewer
};

const defaultTfs = {
  world: {
    name: 'world',
    translation: { x: 0, y: 0, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 }
  },
  other1: {
    name:'other1',
    translation: { x: 1, y: 0, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 }
  },
  other2: {
    name:'other2',
    translation: { x: -2, y: 0, z: 2 },
    rotation: { w: 0.525322, x: 0.8509035, y: 0, z: 0 }
  },
  other3: {
    name:'other3',
    translation: { x: 2, y: 0, z: 0 },
    rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 }
  }
}

const defaultItems = {
  1: {
    shape: "cube",
    name: "My Cube",
    frame: "world",
    position: { x: 0, y: 0, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 255, g: 50, b: 10, a: 0.75 },
    scale: { x: 0.5, y: 0.5, z: 0.5 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: false
  },
  2: {
    shape: "sphere",
    name: "My Sphere",
    frame: "world",
    position: { x: 0, y: 2, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 255, g: 255, b: 70, a: 0.25 },
    scale: { x: 1, y: 2, z: 1 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: false
  },
  3: {
    shape: "cylinder",
    name: "My Cylinder",
    frame: "other2",
    position: { x: 0, y: 0, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 10, g: 200, b: 235, a: 0.5 },
    scale: { x: 1, y: 1, z: 1 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: false
  },
  4: {
    shape: "flatarrow",
    name: "My Arrow 1",
    frame: "world",
    position: { x: -1, y: 0, z: -1 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 70, g: 70, b: 250, a: 0.5 },
    scale: { x: 1, y: 1, z: 1 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: false
  },
  5: {
    shape: "arrow",
    name: "My Arrow 2",
    frame: "other1",
    position: { x: 1, y: 0, z: 0 },
    rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
    color: { r: 255, g: 70, b: 250, a: 0.5 },
    scale: { x: 1, y: 1, z: 1 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: false
  },
  6: {
    shape: "arrow",
    name: "My Arrow 3",
    frame: "other3",
    position: { x: 1, y: 0, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 255, g: 70, b: 250, a: 0.5 },
    scale: { x: 1, y: 2, z: 1 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: false
  },
  7: {
    shape: "package://nao_meshes/meshes/V40/HeadPitch.dae",
    name: "Nao Head",
    frame: "world",
    position: { x: 0, y: 2, z: -1 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: false
  },
  8: {
    shape: "package://nao_meshes/meshes/V40/LAnkleRoll.dae",
    name: "Nao Ankle",
    frame: "world",
    position: { x: 1, y: 0.5, z: 1 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: true
  },
  9: {
    shape: "package://app/meshes/MK2Printer.obj",
    name: "3d Printer",
    frame: "world",
    position: { x: -3, y: 0.32, z: -3 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    canTranslate: false,
    canRotate: false,
    canScale: false,
    highlighted: true
  }
}

const defaultLines = {
  line1: {
    name: "Line1",
    frame: "world",
    vertices: [{position:{x:1,y:2,z:0},color:{r:255,g:0,b:0}},
               {position:{x:2,y:1,z:1},color:{r:0,g:255,b:0}},
               {position:{x:2,y:2,z:1},color:{r:0,g:0,b:255}}],
    highlighted: false
  }
}

useSceneStore.setState({ tfs: defaultTfs, items: defaultItems, lines: defaultLines });

function Viewer(props) {

  return (
    <div style={{ height: "100vh", width: "100vw", padding: 0 }}>
      <Scene {...props}/>
    </div>
  )
}

const Story = (props) => (<Viewer {...props}/>)



export const MeshDemo = Story.bind({});

MeshDemo.args = {
  displayTfs:true,
  displayGrid:true,
  isPolar:false,
  backgroundColor:'#d0d0d0',
  planeColor:'#a8a8a8'
}

