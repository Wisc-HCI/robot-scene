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

            Object.keys(MeshLookupTable).forEach((key,i)=>{
                defaultTfs[`${i}`] = {
                    name: `${i}`,
                    translation: {x: i*2, y:0, z: 0},
                    rotation: { w: 1, x: 0, y: 0, z: 0 }
                };
                // This should work, but doesn't because at least one of the meshes is broken
                meshItems[key] = {
                    shape: key,
                    name: key,
                    frame: `${i}`,
                    position: { x: 0, y: 0, z: 0 },
                    rotation: { w: 1, x: 0, y: 0, z: 0 },
                    scale: { x: 1, y: 1, z: 1 },
                    editMode: 'inactive',
                    showName: true,
                    highlighted: false,
                    color:{r:50,g:29,b:200,a:1},
                    onClick: () => { console.log('something') },
                    onTransform: (transform) => { console.log(transform) }
                }
            })
        
            useSceneStore.setState({ tfs: defaultTfs, items: meshItems, lines: {} });

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