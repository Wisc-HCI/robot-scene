/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import RobotiqVisual85BaseLink from '../../../Meshes/Robotiq2f85/visual/robotiq_arg2f_85_base_link.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(RobotiqVisual85BaseLink)
  return [{type:'group', scale:[0.001,0.001,0.001],children:[
      {type:'raw',geometry:nodes.node0.geometry, material:nodes.node0.material},
      {type:'raw',geometry:nodes.node1.geometry, material:nodes.node1.material},
      {type:'raw',geometry:nodes.node2.geometry, material:nodes.node2.material},
      {type:'raw',geometry:nodes.node3.geometry, material:nodes.node3.material},
      {type:'raw',geometry:nodes.node4.geometry, material:nodes.node4.material},
      {type:'raw',geometry:nodes.node100.geometry, material:materials['mymaterial.004']}
  ]}]
}

useGLTF.preload(RobotiqVisual85BaseLink)
