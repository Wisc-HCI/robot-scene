/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import S1 from '../../Meshes/Baxter/lower_shoulder/S1.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(S1)
  return [{type:'raw',geometry:nodes.S1.geometry, material:materials['Material_001.006']}]
}

useGLTF.preload(S1)
