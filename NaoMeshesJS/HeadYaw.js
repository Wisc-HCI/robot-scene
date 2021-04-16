/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/HeadYaw.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.HeadYaw.geometry} material={materials.HeadYawuv} scale={[0.01, 0.01, 0.01]} />
    </group>
  )
}

useGLTF.preload('/HeadYaw.glb')
