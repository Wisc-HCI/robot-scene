/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import RobotiqVisual85OuterKnuckle from '../../../Meshes/Robotiq2f85/visual/robotiq_arg2f_85_outer_knuckle.glb';

export default function Model(props) {
  const { nodes } = useGLTF(RobotiqVisual85OuterKnuckle)
  return [{type:'raw', geometry:nodes.node.geometry,material:nodes.node.material,rotation:[Math.PI / 2, 0, 0]}]
}

useGLTF.preload(RobotiqVisual85OuterKnuckle)
