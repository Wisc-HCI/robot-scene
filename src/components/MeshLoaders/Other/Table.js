/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei'
import Table from "../../Meshes/Other/Table.glb"

export default function Model(props) {
  const { nodes, materials } = useGLTF(Table)
  return [{type:'raw',geometry:nodes.Table.geometry, material:nodes.Table.material}]




}

useGLTF.preload(Table)
