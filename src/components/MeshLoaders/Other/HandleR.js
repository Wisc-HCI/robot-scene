import { useGLTF } from '@react-three/drei'
import HandleRFile from '../../Meshes/Other/HandleR.glb';

export default function Model(props) {
  const { nodes } = useGLTF(HandleRFile)
  return [
      { type: 'group', rotation:[Math.PI,0,0], children: [
        {
            type:'raw',
            geometry:nodes.mesh_0.geometry,
            material:nodes.mesh_0.material,
            scale:[5,5,5]
          }
      ]}
    ]
}

useGLTF.preload(HandleRFile)       