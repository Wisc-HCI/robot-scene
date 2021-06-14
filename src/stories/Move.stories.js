import React from 'react';

import Scene from '../components/Scene';
import useSceneStore from '../components/SceneStore';

export default {
  title: 'Move Demo',
  component: MoveViewer,
  decorators:[
    (storyFn) => {
        
      const defaultTfs = {
          world: {
            name: 'world',
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
          },
          static: {
            name:'static',
            translation: { x: -1, y: 1, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
          },
          translate: {
            name:'translate',
            translation: { x: -1, y: -1, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
          },
          rotate: {
            name:'rotate',
            translation: { x: 1, y: 1, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
          },
          scale: {
            name:'scale',
            translation: { x: 1, y: -1, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
          },
        }
        
        const defaultItems = {
          staticCube: {
            shape: "cube",
            name: "Static Cube",
            frame: "static",
            position: { x: 0, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            editMode: 'inactive',
            highlighted: true,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            onTransform: (transform) => {console.log(transform)}
          },
          translateCube: {
            shape: "cube",
            name: "Translate Cube",
            frame: "translate",
            position: { x: 0, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            editMode: 'translate',
            highlighted: true,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            onTransform: (transform) => {console.log(transform)}
          },
          rotateCube: {
            shape: "cube",
            name: "Rotate Cube",
            frame: "rotate",
            position: { x: 0, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 255, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            editMode: 'rotate',
            highlighted: true,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            onTransform: (transform) => {console.log(transform)}
          },
          scaleCube: {
            shape: "cube",
            name: "Scale Cube",
            frame: "scale",
            position: { x: 0, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 255, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            editMode: 'scale',
            highlighted: true,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            onTransform: (transform) => {console.log(transform)}
          },
        }
        
        const defaultLines = {}
        
        useSceneStore.setState({ tfs: defaultTfs, items: defaultItems, lines: defaultLines });

        return storyFn()
        

    }
]
};

function MoveViewer(props) {

  return (
    <div style={{ height: "100vh", width: "100vw", padding: 0 }}>
      <Scene {...props}/>
    </div>
  )
}

const Story = (props) => (<MoveViewer {...props}/>)



export const MoveDemo = Story.bind({});

MoveDemo.args = {
  displayTfs:true,
  displayGrid:true,
  isPolar:false,
  backgroundColor:'#d0d0d0',
  planeColor:'#a8a8a8',
  highlightColor:'#ffffff',
  plane:0
}

