/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import Ur10Base from '../../Meshes/Ur10/base.glb';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {

  const { nodes } = useGLTF(Ur10Base)
  return [
    { type: 'raw', geometry: nodes.Base.geometry, material: nodes.Base.material }]
}

useGLTF.preload(Ur10Base)
