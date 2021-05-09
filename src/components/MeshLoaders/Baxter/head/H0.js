/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import H0 from '../../../Meshes/Baxter/head/H0.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(H0);
  return [{type:'raw', geometry:nodes.H0.geometry,
          material:materials['Material_001.001']}]




}

useGLTF.preload(H0)
