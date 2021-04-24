/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/wrist2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['node-shape0-name'].geometry} material={materials['SWMaterial-0_002']} />
      <mesh geometry={nodes['node-shape1-name'].geometry} material={materials['SWMaterial-1_002']} />
      <mesh geometry={nodes['node-shape2-name'].geometry} material={materials['SWMaterial-2_002']} />
    </group>
  )
}

useGLTF.preload('/wrist2.glb')
