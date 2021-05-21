/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import Table from '../../Meshes/Other/Table.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(Table)
  return [{type:'group',children:[{type:'raw',geometry:nodes.Body1.geometry,
   material:materials['Steel - Satin.001'], scale:[0.01, 0.01, 0.01]} ],
   rotation:[Math.PI / 2, 0, 0]}]





}

useGLTF.preload(Table)