/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import E0 from '../../../Meshes/Baxter/upper_elbow/E0.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(E0);
  return [{type:'raw',geometry:nodes.E0_1.geometry, material:materials['Material_001.008']}
         ,{type:'raw',geometry:nodes.E0_2.geometry, material:materials['Material_002.002']}]
}

useGLTF.preload(E0)