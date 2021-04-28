/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/robotiq_arg2f_85_base_link.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Robotiq_Arg2F_85_Base_Link.geometry} material={nodes.Robotiq_Arg2F_85_Base_Link.material} />
    </group>
  )
}

useGLTF.preload('/robotiq_arg2f_85_base_link.glb')
