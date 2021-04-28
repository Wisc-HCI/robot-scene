/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/robotiq_arg2f_85_outer_finger.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.node.geometry} material={nodes.node.material} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/robotiq_arg2f_85_outer_finger.glb')
