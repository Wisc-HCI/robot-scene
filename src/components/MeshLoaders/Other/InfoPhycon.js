/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import InfoPhycon from '../../Meshes/Other/InfoPhycon.glb';

export default function Model(props) {

  const { nodes, materials } = useGLTF(InfoPhycon)
  return [
{type:'raw', geometry:nodes.InfoPhycon.geometry, material:nodes.InfoPhycon.material}
]
}

useGLTF.preload(InfoPhycon)
