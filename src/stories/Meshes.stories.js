import React from 'react';
import Scene from '../components/Scene';
import useSceneStore from '../components/SceneStore';
import { MeshLookupTable } from '../components/MeshLookup';

export default {
    title: 'Mesh Demo',
    component: MeshViewer,
    decorators:[
        (storyFn) => {
            let defaultTfs = {};
            let meshItems = {};

            var y = -10;
            var x = -12;

            Object.keys(MeshLookupTable).forEach((key,i)=>{
              if (x===0){
                x += 2;
              }else if (x>0){
                if(x % 10 ===0){
                  y += 2;
                  x = -10;
                }else{
                  x += 2;
                }
              }else{
                x += 2;
              }
                defaultTfs[`${i}`] = {
                    name: `${i}`,
                    translation: {x: x, y:y, z: 0},
                    rotation: { w: 1, x: 0, y: 0, z: 0 }
                };
                meshItems[key] = {
                    shape: key,
                    name: key,
                    frame: `${i}`,
                    position: { x: 0, y: 0, z: 0 },
                    rotation: { w: 1, x: 0, y: 0, z: 0 },
                    scale: key.includes('robotiq_2f_85_gripper_visualization') ? { x: 0.001, y: 0.001, z: 0.001 } : { x: 1, y: 1, z: 1 },
                    editMode: 'inactive',
                    showName: true,
                    highlighted: false,
                    onClick: () => { console.log(key) }
                }

            })

            useSceneStore.getState().setItems(meshItems);
            useSceneStore.getState().setTfs(defaultTfs);
            useSceneStore.getState().clearLines();
            useSceneStore.getState().clearHulls();

            return storyFn()


        }
    ]
};

function MeshViewer(props) {
    return (
        <div style={{ height: "100vh", width: "100vw", padding: 0 }}>
            <Scene {...props} />
        </div>
    )
}

const Story = (props) => (<MeshViewer {...props} />)
export const MeshDemo = Story.bind({});
MeshDemo.args = {
    displayTfs: true,
    displayGrid: true,
    isPolar: false,
    backgroundColor: '#d0d0d0',
    planeColor: '#a8a8a8',
    highlightColor: '#ffffff',
    plane: 0
}
