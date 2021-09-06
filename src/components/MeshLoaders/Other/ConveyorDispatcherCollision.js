import { useGLTF } from '@react-three/drei'
import ConveyorDispatcherCollisionFile from '../../Meshes/Other/ConveyorDispatcherCollision.glb';

export default function Model(props) {
  const { nodes } = useGLTF(ConveyorDispatcherCollisionFile);
  return [
      { type: 'group', rotation: [-Math.PI / 2, 0, 0], children: [
        {
            type:'raw',
            geometry:nodes.mesh_0.geometry,
            material:nodes.mesh_0.material
          }
      ]}
    ]
}

useGLTF.preload(ConveyorDispatcherCollisionFile)