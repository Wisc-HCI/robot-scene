/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/robotiq_arg2f_85_inner_knuckle.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.node0.geometry} material={materials['mymaterial.002']} />
    </group>
  )
}

useGLTF.preload('/robotiq_arg2f_85_inner_knuckle.glb')
