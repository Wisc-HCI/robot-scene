/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import Ur3Wrist1 from '../../Meshes/Ur3/wrist1.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(Ur3Wrist1);
  return [{type:'raw', geometry:nodes.node0.geometry, material:nodes.node0.material},{type:'raw', gemometry:nodes.node1.geometry, material:nodes.node1.material},{type:'raw', gemometry:nodes.node2.geometry, material:materials['blau.002']}]
}

useGLTF.preload(Ur3Wrist1)
