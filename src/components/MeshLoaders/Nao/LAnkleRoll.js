/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import LAnkleRollMesh from '../../Meshes/Nao/LAnkleRoll.glb';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(LAnkleRollMesh)
  return [{ type:'raw',geometry:nodes.LAnkleRoll.geometry,material:materials.LAnkleRollUV,scale:[0.01, 0.01, 0.01]}]
}

useGLTF.preload(LAnkleRollMesh)
