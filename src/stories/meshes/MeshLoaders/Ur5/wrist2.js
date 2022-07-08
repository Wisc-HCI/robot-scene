/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import Ur5Wrist2 from '../../Meshes/Ur5/wrist2.glb';
import { useGLTF } from '@react-three/drei'

export default function Model(props) {

  const { nodes, materials } = useGLTF(Ur5Wrist2)
  return [

{type:'raw',geometry:nodes['ActorShape0_0-Mesh026'].geometry,material:materials.Scheibe_002},
{type:'raw',geometry:nodes['ActorShape0_0-Mesh026_1'].geometry, material:materials.verbindung_002},
{type:'raw',geometry:nodes.Actor1.geometry, material:materials.blau_002} 

]
}

useGLTF.preload(Ur5Wrist2)