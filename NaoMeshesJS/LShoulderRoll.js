/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/LShoulderRoll.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.LShoulderRoll.geometry} material={materials.LShoulderRollUV} scale={[0.01, 0.01, 0.01]} />
    </group>
  )
}

useGLTF.preload('/LShoulderRoll.glb')
