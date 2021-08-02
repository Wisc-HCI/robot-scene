import React, {Suspense} from 'react';

import Scene from '../components/Scene';
import useSceneStore from '../components/SceneStore';

export default {
  title: 'EvD Demo',
  component: EvDViewer,
  decorators:[
    (storyFn) => {
        
      const defaultTfs = {}
        
        const defaultItems = {
          table: {
              shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Table/Table.stl",
              name: "Table",
              frame: "world",
              position: { x: 0, y: 0.36, z: -0.37 },
              rotation: { w: 1, x: 0, y: 0, z: 0 },
              scale: {x:1,y:1,z:1},
              color: {r: 10, g: 10, b: 10, a: 1},
              showCollision: false,
              highlighted: false,
              showName: false
          },
          pedestal: {
              shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/ur3e-Pedestal/Pedestal.stl",
              name: "Pedestal",
              frame: "world",
              position: { x: 0, y: 0, z: -0.38 },
              rotation: { w: 1, x: 0, y: 0, z: 0 },
              scale: {x:1,y:1,z:1},
              color: {r: 7, g: 7, b: 7, a: 1},
              showCollison: false,
              highlighted: false,
              showName: false
          },
          box: {
              shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/Box/Box.stl",
              name: "Box",
              frame: "world",
              position: { x: 0.35, y: 0.35, z: 0.07 },
              rotation: { w: 1, x: 0, y: 0, z: 0 },
              scale: {x:1,y:1,z:1},
              showCollison: false,
              highlighted: false,
              showName: false
          },
          printer: {
              shape: "package://evd_ros_tasks/tasks/3d_printer_machine_tending/models/MK2-Printer/MK2-Printer.stl",
              name: "3D Printer",
              frame: "world",
              position: { x: -0.28, y: 0.32, z: 0.3 },
              rotation: { w: 1, x: 0, y: 0, z: 0 },
              scale: {x:1,y:1,z:1},
              showCollison: false,
              highlighted: true,
              showName: false
          }
        }
        
        const defaultLines = {
          line1: {
            name: "Line1",
            frame: "world",
            width: 1,
            vertices: [{position:{x:0,y:0,z:0},color:{r:0,g:0,b:0}},
                       {position:{x:1,y:0,z:0},color:{r:255,g:0,b:0}},
                       {position:{x:1,y:1,z:0},color:{r:255,g:255,b:0}},
                       {position:{x:0,y:1,z:0},color:{r:0,g:255,b:0}},
                       {position:{x:0,y:1,z:1},color:{r:0,g:255,b:255}},
                       {position:{x:0,y:0,z:1},color:{r:0,g:0,b:255}},
                       {position:{x:1,y:0,z:1},color:{r:255,g:0,b:255}},
                       {position:{x:1,y:1,z:1},color:{r:255,g:255,b:255}}],
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
        

        return storyFn({plane:-0.36})
        

    }
]
};

function EvDViewer(props) {

  return (
    <Suspense fallback={<div>Loading... </div>}>
    <div style={{ height: "100vh", width: "100vw", padding: 0 }}>
      <Scene {...props}/>
    </div>
    </Suspense>
  )
}

const Story = (props) => (<EvDViewer {...props}/>)



export const StoryScene = Story.bind({});

StoryScene.args = {
  displayTfs:true,
  displayGrid:true,
  isPolar:false,
  backgroundColor:'#d0d0d0',
  planeColor:'#a8a8a8',
  highlightColor:'#ffffff',
  plane:-0.75
}

