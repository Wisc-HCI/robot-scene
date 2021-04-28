/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/base_link_collision.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['TORSO-L'].geometry} material={nodes['TORSO-L'].material} />
    </group>
  )
}

useGLTF.preload('/base_link_collision.glb')
