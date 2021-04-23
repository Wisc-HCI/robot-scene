import React from 'react';

import { RobotScene } from '../components/RobotScene';
import { withKnobs, number, color, boolean, object, array } from '@storybook/addon-knobs'

export default {
  title: 'Mesh Demo',
  decorators: [withKnobs],
};

export const MeshDemo = () => {
  const tree = {
    world: {
        translation: { x: 0, y: 0, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 }
    },
    other1: {
      translation: { x: 1, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 }
    },
    other2: {
      translation: { x: -2, y: 0, z: 2 },
      rotation: { w: 0.525322, x: 0.8509035, y: 0, z: 0 }
    },
    other3: {
      translation: { x: 2, y: 0, z: 0 },
      rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 }
    }
  }
  const content = [
    {
        type: "cube",
        name: "My Cube",
        frame: "world",
        position: { x: 0, y: 0, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        color: { r: 255, g: 50, b: 10, a: 0.75 },
        scale: { x: 0.5, y: 0.5, z: 0.5 },
        highlighted: false
      },
      {
        type: "sphere",
        name: "My Sphere",
        frame: "world",
        position: { x: 0, y: 2, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        color: { r: 255, g: 255, b: 70, a: 0.25 },
        scale: { x: 1, y: 2, z: 1 },
        highlighted: false
      },
      // See here about rotating the cylinder to match  the representation from ROS:
      {
        type: "cylinder",
        name: "My Cylinder",
        frame: "other2",
        position: { x: 0, y: 0, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        color: { r: 10, g: 200, b: 235, a: 0.5 },
        scale: { x: 1, y: 1, z: 1 },
        highlighted: false
      },
      {
        type: "arrow",
        name: "My Arrow 1",
        frame: "other1",
        position: { x: 1, y: 0, z: 0 },
        rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
        color: { r: 255, g: 70, b: 250, a: 0.5 },
        scale: { x: 3, y: 1, z: 3 },
        highlighted: false
      },
      {
        type: "arrow",
        name: "My Arrow 2",
        frame: "other3",
        position: { x: 1, y: 1, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        color: { r: 255, g: 70, b: 250, a: 0.5 },
        scale: { x: 3, y: 1, z: 3 },
        highlighted: false
      },
      {
        type: "mesh",
        path: "package://nao_meshes/meshes/V40/HeadPitch.dae",
        name: "Nao Head",
        frame: "world",
        position: { x: 0, y: 2, z: -1 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
        highlighted: true
      },
      {
        type: "mesh",
        path: "package://nao_meshes/meshes/V40/LAnkleRoll.dae",
        name: "Nao Ankle",
        frame: "world",
        position: { x: 1, y: 0.5, z: 1 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
        highlighted: true
      },
      // {
      //   type: "mesh",
      //   path: "package://app/meshes/MK2Printer.obj",
      //   name: "3d Printer",
      //   frame: "world",
      //   position: { x: 1, y: 0.5, z: 1 },
      //   rotation: { w: 1, x: 0, y: 0, z: 0 },
      //   scale: { x: 0.1, y: 0.1, z: 0.1 },
      //   highlighted: true
      // },
      {
        type: "line",
        name: "Line",
        frame: "world",
        vertices: [{position:{x:1,y:2,z:0},color:{r:255,g:0,b:0}},
                   {position:{x:2,y:1,z:1},color:{r:0,g:255,b:0}},
                   {position:{x:2,y:2,z:1},color:{r:0,g:0,b:255}}],
        highlighted: false
      }
  ]

  return (
  <div style={{ height: "100vh", width: "100vw", padding: 0 }}>
    <RobotScene
      content={object('content',content)}
      tfTree={object('tfTree',tree)}
      displayTfs={boolean('displayTfs',true)}
      displayGrid={boolean('displayGrid',true)}
      isPolar={boolean('isPolar',false)}
    />
  </div>
)};

// // Knobs as dynamic variables.
// export const asDynamicVariables = () => {
//   const name = text('Name', 'James');
//   const age = number('Age', 35);
//   const content = `I am ${name} and I'm ${age} years old.`;
//
//   return <div>{content}</div>;
// };

// const Template = (args) => {
//   return <div style={{ height: "100vh", width: "100vw", padding: 0 }}><RobotScene {...args} /></div>
// };
//
// export const RobotSceneStory = Template.bind({});
