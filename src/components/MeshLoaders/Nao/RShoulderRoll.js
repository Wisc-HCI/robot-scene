/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';
import RShoulderRollMesh from '../../Meshes/Nao/RShoulderRoll.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(RShoulderRollMesh);
  return [{type:'raw', geometry:nodes.RShoulderRoll.geometry, material:materials.RshoulderRollUV, scale:[0.01, 0.01, 0.01]}]



}

useGLTF.preload(RShoulderRollMesh)
