/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/forearm.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.node0.geometry} material={nodes.node0.material} />
      <mesh geometry={nodes.node1.geometry} material={materials.Rohr} />
      <mesh geometry={nodes.node2.geometry} material={nodes.node2.material} />
      <mesh geometry={nodes.node3.geometry} material={nodes.node3.material} />
      <mesh geometry={nodes.node4.geometry} material={nodes.node4.material} />
      <mesh geometry={nodes.node5.geometry} material={materials.blau} />
    </group>
  )
}

useGLTF.preload('/forearm.glb')
