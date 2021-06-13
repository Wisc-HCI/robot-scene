/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import RobotiqCollision85OuterFinger from '../../../Meshes/Robotiq2f85/collision/robotiq_arg2f_85_outer_finger.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(RobotiqCollision85OuterFinger)
  return [{type:'group', scale:[0.001,0.001,0.001],children:[{type:'raw', geometry:nodes.node.geometry,
         material:nodes.node.material,rotation:[Math.PI / 2, 0, 0]}]}]




}

useGLTF.preload(RobotiqCollision85OuterFinger)
