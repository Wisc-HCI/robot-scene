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
    editMode: 'inactive',
    highlighted: true,
    onClick: () => {console.log('cube')},
    onPointerOver: () => {console.log('hover')},
    onPointerOut: () => {console.log('hover out')},
    ontransform: (transform) => {console.log(transform)}
  },
  2: {
    shape: "sphere",
    name: "My Sphere",
    frame: "world",
    position: { x: 0, y: 2, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 255, g: 255, b: 30, a: 0.35 },
    scale: { x: 1, y: 2, z: 1 },
    editMode: 'inactive',
    highlighted: true,
    showName: true,
    onClick: () => {console.log('sphere')},
    onTransform: (transform) => {console.log(transform)}
  },
  3: {
    shape: "cylinder",
    name: "My Cylinder",
    frame: "other2",
    position: { x: 0, y: 0, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 10, g: 200, b: 235, a: 0.5 },
    scale: { x: 1, y: 1, z: 1 },
    editMode: 'inactive',
    highlighted: false,
    onClick: () => {console.log('cylinder')},
    onTransform: (transform) => {console.log(transform)}
  },
  4: {
    shape: "flatarrow",
    name: "My Arrow 1",
    frame: "world",
    position: { x: 1, y: 0, z: -1 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 70, g: 70, b: 250, a: 0.5 },
    scale: { x: 1, y: 1, z: 1 },
    editMode: 'inactive',
    highlighted: true,
    onClick: () => {console.log('flatarrow')},
    onTransform: (transform) => {console.log(transform)}
  },
  5: {
    shape: "arrow",
    name: "My Arrow 2",
    frame: "other1",
    position: { x: 1, y: 0, z: 0 },
    rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
    color: { r: 255, g: 70, b: 250, a: 0.5 },
    scale: { x: 1, y: 1, z: 1 },
    editMode: 'translate',
    highlighted: true,
    onClick: () => {console.log('arrow2')},
    onTransform: (transform) => {console.log(transform)}
  },
  6: {
    shape: "arrow",
    name: "My Arrow 3",
    frame: "other3",
    position: { x: 1, y: 0, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    color: { r: 255, g: 70, b: 250, a: 0.5 },
    scale: { x: 1, y: 2, z: 1 },
    editMode: 'inactive',
    highlighted: false,
    onClick: () => {console.log('arrow3')},
    onTransform: (transform) => {console.log(transform)}
  },
  7: {
    shape: "package://nao_meshes/meshes/V40/HeadPitch.dae",
    name: "Nao Head",
    frame: "world",
    position: { x: 0, y: 2, z: -1 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    editMode: 'inactive',
    showName: true,
    highlighted: true,
    onClick: () => {console.log('head')},
    onTransform: (transform) => {console.log(transform)}
  },
  8: {
    shape: "package://nao_meshes/meshes/V40/LAnkleRoll.dae",
    name: "Nao Ankle",
    frame: "world",
    position: { x: 1, y: 0.5, z: 1 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    editMode: 'inactive',
    highlighted: false,
    onClick: () => {console.log('ankle')},
    onTransform: (transform) => {console.log(transform)}
  },
  9: {
    shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
    name: "3d Printer",
    frame: "world",
    position: { x: -3, y: 0.32, z: -3 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    editMode: 'inactive',
    highlighted: false,
    onClick: () => {console.log('printer')},
    onTransform: (transform) => {console.log(transform)}
  },
  10: {
    shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl",
    name: "robot_pedestal",
    frame: "world",
    position: { x: 0, y: 1, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    scale: { x: 10, y: 10, z: 10},
    editMode: 'inactive',
    highlighted: false,
    onClick: () => {console.log('printer')},
    onTransform: (transform) => {console.log(transform)}
  },
  11: {
    shape: "package://universal_robot/ur_description/meshes/ur3/visual/base.dae",
    name: "robot_base",
    frame: "world",
    position: { x: 0, y: .5, z: 0 },
    rotation: { w: 1, x: 0, y: 0, z: 0 },
    scale: { x: 10, y: 10, z: 10},
    editMode: 'inactive',
    highlighted: false,
    onClick: () => {console.log('printer')},
    onTransform: (transform) => {console.log(transform)}
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
  planeColor:'#a8a8a8',
  highlightColor:'#ffffff',
  plane:0
}

