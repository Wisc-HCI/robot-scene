/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import E1 from '../../../Meshes/Baxter/lower_elbow/E1.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(E1)
  return [{type:'raw', geometry:nodes.E1_1.geometry,material:materials['Material_001.003']},
          {type:'raw', geometry:nodes.E1_2.geometry, material:materials.Material_002}]





}

useGLTF.preload(E1)
