/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/link1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.node0.geometry} material={materials.Part__Feature_001} position={[0, -0.19, 0]} />
    </group>
  )
}

useGLTF.preload('/link1.glb')