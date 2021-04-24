/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/link2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.node0.geometry} material={materials.Part__Feature024} />
    </group>
  )
}

useGLTF.preload('/link2.glb')
