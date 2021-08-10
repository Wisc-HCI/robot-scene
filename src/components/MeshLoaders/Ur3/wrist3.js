/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import Ur3Wrist3 from '../../Meshes/Ur3/wrist3.glb';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {

  const { nodes } = useGLTF(Ur3Wrist3)
  return [
    { type: 'raw', geometry: nodes.eSeries_UR3e_002.geometry, material: nodes.eSeries_UR3e_002.material, scale:[0.001, 0.001, 0.001], rotation:[Math.PI/2, 0, 0] }
  ]
}

useGLTF.preload(Ur3Wrist3)
