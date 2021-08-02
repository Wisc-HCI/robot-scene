import React from 'react';

import Scene from '../components/Scene';
import useSceneStore from '../components/SceneStore';

export default {
  title: 'Move Demo',
  component: MoveViewer,
  decorators:[
    (storyFn) => {
        
      const defaultTfs = {
          static: {
            frame:'world',
            translation: { x: -1, y: 1, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
          }
        }
        
        const defaultItems = {
          immovable: {
            shape: "cube",
            name: "Immovable Cube",
            frame: "static",
            position: { x: 0, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: true,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')}
          }, 
          translateCube: {
            shape: "cube",
            name: "Translate Cube (Async)",
            frame: "world",
            position: { x: 0, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            transformMode: 'translate',
            onMove: (transform)=>console.log(transform)
          },
          rotateCube: {
            shape: "cube",
            name: "Rotate Cube",
            frame: "static",
            position: { x: 1, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 255, b: 10, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            transformMode: 'rotate',
            onMove: (transform) => {
              useSceneStore.getState().setItemRotation('rotateCube',{
                x:transform.local.quaternion.x,
                y:transform.local.quaternion.y,
                z:transform.local.quaternion.z,
                w:transform.local.quaternion.w
              });
            }
          },
          scaleCube: {
            shape: "cube",
            name: "Scale Cube",
            frame: "static",
            position: { x: 0, y: 1, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 10, b: 255, a: 1 },
            scale: { x: 0.5, y: 0.5, z: 0.5 },
            highlighted: false,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')},
            transformMode: 'scale',
            onMove: (transform) => {
              useSceneStore.getState().setItemScale('scaleCube',{
                x:transform.local.scale.x,
                y:transform.local.scale.y,
                z:transform.local.scale.z,
              });
            }
          }
        }

        useSceneStore.getState().setItems(defaultItems);
        useSceneStore.getState().setTfs(defaultTfs);
        useSceneStore.getState().clearLines();

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

