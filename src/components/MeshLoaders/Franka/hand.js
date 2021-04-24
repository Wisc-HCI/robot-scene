/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/hand.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.node2.geometry} material={materials.Part__Feature002_005_005} />
      <mesh geometry={nodes.node5.geometry} material={materials.Part__Feature005_001_005} />
      <mesh geometry={nodes.node0.geometry} material={materials.Part__Feature_009_005} />
      <mesh geometry={nodes.node1.geometry} material={materials.Part__Feature001_008_005} />
      <mesh geometry={nodes.node5_001.geometry} material={materials.Part__Feature005_001_005_001} />
    </group>
  )
}

useGLTF.preload('/hand.glb')
