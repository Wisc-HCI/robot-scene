/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import LHipPitchMesh from '../../Meshes/Nao/LHipPitch.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(LHipPitchMesh);
  return [{type:'raw',geometry:nodes.LHipPitch.geometry, material:materials.LHipPitchUV, scale:[0.01, 0.01, 0.01]}]



}

useGLTF.preload(LHipPitchMesh)
