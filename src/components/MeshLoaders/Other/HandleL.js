import { useGLTF } from '@react-three/drei'
import HandleLFile from '../../Meshes/Other/HandleL.glb';

export default function Model(props) {
  const { nodes } = useGLTF(HandleLFile)
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

useGLTF.preload(HandleLFile)       