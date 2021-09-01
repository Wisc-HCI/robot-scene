import { useGLTF } from '@react-three/drei'
import BladeFile from '../../Meshes/Other/Blade.glb';

export default function Model(props) {
  const { nodes } = useGLTF(BladeFile)
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

useGLTF.preload(BladeFile)