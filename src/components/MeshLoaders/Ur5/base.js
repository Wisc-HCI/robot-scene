/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/base.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['ActorShape0_0-Mesh002'].geometry} material={materials['Rohr.005']} />
      <mesh geometry={nodes['ActorShape0_0-Mesh002_1'].geometry} material={materials['Scheibe.002']} />
    </group>
  )
}

useGLTF.preload('/base.glb')