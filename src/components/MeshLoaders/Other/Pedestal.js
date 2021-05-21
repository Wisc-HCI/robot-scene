/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import Pedestal from '../../Meshes/Other/Pedestal.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(Pedestal);
  return [{type:'group', children:[{type:'raw',geometry:nodes.Body1.geometry,
  material:materials['Steel - Satin.003'], scale:[0.01, 0.01, 0.01]}],
  rotation: [Math.PI / 2, 0, 0]}]




}

useGLTF.preload(Pedestal)