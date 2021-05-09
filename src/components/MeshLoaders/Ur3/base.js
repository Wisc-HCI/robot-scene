/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import Ur3Base from '../../Meshes/Ur3/base.glb';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(Ur3Base);
  return [
{type:'raw',geometry:nodes.Base005.geometry,material:materials['Material_001.003']},
{type:'raw',geometry:nodes.Base005_1.geometry, material:materials['Material_002.003']} 

]
}

useGLTF.preload(Ur3Base)
