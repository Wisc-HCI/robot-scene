import { useGLTF } from '@react-three/drei'
import FlagFile from '../../Meshes/Other/Flag.glb';

export default function Model(props) {
  const { nodes } = useGLTF(FlagFile)
  return [
      { type: 'group', rotation:[-Math.PI/2,0,0], children: [
        {
            type:'raw',
            geometry:nodes.mesh_0.geometry,
            material:nodes.mesh_0.material,
            scale:[0.1,0.1,0.1]
          }
      ]}
    ]
}

useGLTF.preload(FlagFile)
