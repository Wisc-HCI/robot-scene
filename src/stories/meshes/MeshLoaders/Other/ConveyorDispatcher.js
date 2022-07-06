import { useGLTF } from '@react-three/drei'
import ConveyorDispatcherFile from '../../Meshes/Other/ConveyorDispatcher.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(ConveyorDispatcherFile);
  return [
      { type: 'group', children: [
        {
            type:'raw',
            geometry:nodes.ConveyorDispatcher.geometry,
            material:materials.ConveyorAddonMaterial
          }
      ]}
    ]
}

useGLTF.preload(ConveyorDispatcherFile)