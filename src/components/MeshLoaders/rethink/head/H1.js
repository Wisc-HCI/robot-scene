/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/H1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.H1_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.H1_2.geometry} material={materials['Material_001.002']} />
    </group>
  )
}

useGLTF.preload('/H1.glb')
