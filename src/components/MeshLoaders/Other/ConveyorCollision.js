import { useGLTF } from '@react-three/drei'
import ConveyorCollisionFile from '../../Meshes/Other/ConveyorCollision.glb';

export default function Model(props) {
  const { nodes } = useGLTF(ConveyorCollisionFile);
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

useGLTF.preload(ConveyorCollisionFile)