/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/link6.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.node0.geometry} material={materials.Shell012_002_002_001} position={[0, -0.01, 0]} />
      <mesh
        geometry={nodes.node1.geometry}
        material={materials.Part__Feature001_009_001_002_001}
        position={[0, -0.01, 0]}
      />
      <mesh
        geometry={nodes.node2.geometry}
        material={materials.Part__Feature002_006_001_002_001}
        position={[0, -0.01, 0]}
      />
      <mesh geometry={nodes.node3.geometry} material={materials.Face064_002_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node4.geometry} material={materials.Face065_002_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node5.geometry} material={materials.Face374_002_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node6.geometry} material={materials.Shell_003_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node7.geometry} material={materials.Face539_002_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node8.geometry} material={materials.Union_001_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node9.geometry} material={materials.Union001_001_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node10.geometry} material={materials.Shell002_002_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node11.geometry} material={materials.Shell003_002_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node12.geometry} material={materials.Shell004_001_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node13.geometry} material={materials.Shell005_001_001_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node15.geometry} material={materials.Shell007_002_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node16.geometry} material={materials.Shell011_002_002_001} position={[0, -0.01, 0]} />
      <mesh geometry={nodes.node0_001.geometry} material={materials.Shell006_003_002_001} />
    </group>
  )
}

useGLTF.preload('/link6.glb')