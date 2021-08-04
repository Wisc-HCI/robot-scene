import React, {Suspense} from 'react';

import Scene from '../components/Scene';
import useSceneStore from '../components/SceneStore';

export default {
  title: 'Basic Demo',
  component: BasicViewer,
  decorators:[
    (storyFn) => {
        
      const defaultTfs = {
          other1: {
            frame:'world',
            translation: { x: 1, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 }
          },
          other2: {
            name:'world',
            translation: { x: -2, y: 0, z: 2 },
            rotation: { w: 0.525322, x: 0.8509035, y: 0, z: 0 }
          },
          other3: {
            name:'world',
            translation: { x: 2, y: 0, z: 1 },
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
            highlighted: true,
            onClick: () => {console.log('cube')},
            onPointerOver: () => {console.log('hover')},
            onPointerOut: () => {console.log('hover out')}
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
            showName: true,
            onClick: () => {console.log('sphere')}
          },
          3: {
            shape: "cylinder",
            name: "My Cylinder",
            frame: "other2",
            position: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 10, g: 200, b: 235, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            onClick: () => {console.log('cylinder')}
          },
          4: {
            shape: "flatarrow",
            name: "My Arrow 1",
            frame: "world",
            position: { x: 1, y: 0, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 70, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: true,
            onClick: () => {console.log('flatarrow')}
          },
          5: {
            shape: "arrow",
            name: "My Arrow 2",
            frame: "other1",
            position: { x: 1, y: 0, z: 0 },
            rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
            color: { r: 255, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: true,
            onClick: () => {console.log('arrow2')}
          },
          6: {
            shape: "arrow",
            name: "My Arrow 3",
            frame: "other3",
            position: { x: 1, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            color: { r: 255, g: 70, b: 250, a: 0.5 },
            scale: { x: 1, y: 2, z: 1 },
            highlighted: false,
            onClick: () => {console.log('arrow3')}
          },
          7: {
            shape: "package://nao_meshes/meshes/V40/HeadPitch.dae",
            name: "Nao Head",
            frame: "world",
            position: { x: 0, y: 2, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            showName: true,
            highlighted: true,
            onClick: () => {console.log('head')}
          },
          8: {
            shape: "package://nao_meshes/meshes/V40/LAnkleRoll.dae",
            name: "Nao Ankle",
            frame: "world",
            position: { x: 1, y: 0.5, z: 1 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            onClick: () => {console.log('ankle')}
          },
          9: {
            shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
            name: "3d Printer",
            frame: "world",
            position: { x: -1, y: 1, z: .3 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
            highlighted: false,
            onClick: () => {console.log('printer')}
          }
        }
        
        const defaultLines = {
          line1: {
            name: "Line1",
            frame: "world",
            width: 1,
            vertices: [{position:{x:1,y:2,z:0},color:{r:255,g:0,b:0}},
                       {position:{x:2,y:1,z:1},color:{r:0,g:255,b:0}},
                       {position:{x:2,y:2,z:1},color:{r:0,g:0,b:255}}],
            highlighted: false
          },
          line2: {
            name: "Line1",
            frame: "other1",
            width: 3,
            vertices: [{position:{x:1,y:0,z:0},color:{r:0,g:0,b:255}},
                       {position:{x:1,y:0,z:1},color:{r:100,g:100,b:255}},
                       {position:{x:2,y:1,z:1},color:{r:50,g:50,b:255}},
                       {position:{x:2,y:2,z:1},color:{r:255,g:255,b:255}}],
            highlighted: false
          }
        }
        
        useSceneStore.getState().setItems(defaultItems);
        useSceneStore.getState().setTfs(defaultTfs);
        useSceneStore.getState().setLines(defaultLines);
        useSceneStore.getState().clearHulls();

        return storyFn()
        

    }
]
};

function BasicViewer(props) {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ height: "100vh", width: "100vw", padding: 0 }}>
        <Scene {...props}/>
      </div>
    </Suspense>
    
  )
}

const Story = (props) => (<BasicViewer {...props}/>)



export const BasicDemo = Story.bind({});

BasicDemo.args = {
  displayTfs:true,
  displayGrid:true,
  isPolar:false,
  backgroundColor:'#d0d0d0',
  planeColor:'#a8a8a8',
  highlightColor:'#ffffff',
  plane:0
}

