/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import Ur3Forearm from '../../Meshes/Ur3/forearm.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(Ur3Forearm)
  return [

{type:'raw',geometry:nodes.node0.geometry, material:nodes.node0.material},
{type:'raw',geometry:nodes.node1.geometry, material:materials.Rohr} ,
{type:'raw',geometry:nodes.node2.geometry, material:nodes.node2.material} ,
{type:'raw',geometry:nodes.node3.geometry, material:nodes.node3.material},
{type:'raw',geometry:nodes.node4.geometry, material:nodes.node4.material} ,
{type:'raw',geometry:nodes.node5.geometry, material:materials.blau}
]
}

useGLTF.preload(Ur3Forearm)
