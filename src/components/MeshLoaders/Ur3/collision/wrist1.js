/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import Ur3Wrist1 from '../../../Meshes/Ur3/collision/wrist1.glb';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes} = useGLTF(Ur3Wrist1);
  return [{type:'raw',geometry:nodes.wrist1.geometry,material : nodes.wrist1.material}] 
}

useGLTF.preload(Ur3Wrist1);