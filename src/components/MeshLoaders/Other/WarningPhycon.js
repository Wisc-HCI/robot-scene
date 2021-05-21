/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import WarningPhycon from '../../Meshes/Other/WarningPhycon.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(WarningPhycon);
  return [

{type:'raw', geometry:nodes.WarningPhycon.geometry, material:nodes.WarningPhycon.material}
]

}

useGLTF.preload(WarningPhycon)