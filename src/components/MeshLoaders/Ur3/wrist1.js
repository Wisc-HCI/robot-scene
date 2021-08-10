/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import Ur3Wrist1 from '../../Meshes/Ur3/wrist1.glb';

export default function Model(props) {

  const { nodes } = useGLTF(Ur3Wrist1);
  return [
    {type:'raw', geometry:nodes.eSeries_UR3e_034.geometry, material:nodes.eSeries_UR3e_034.material, scale:[0.001, 0.001, 0.001], rotation:[Math.PI/2, 0, 0] },
    {type:'raw', geometry:nodes.eSeries_UR3e_027.geometry, material:nodes.eSeries_UR3e_027.material, scale:[0.001, 0.001, 0.001], rotation:[Math.PI/2, 0, 0] },
    {type:'raw', geometry:nodes.eSeries_UR3e_035.geometry, material:nodes.eSeries_UR3e_035.material, scale:[0.001, 0.001, 0.001], rotation:[Math.PI/2, 0, 0] }
  ]
}

useGLTF.preload(Ur3Wrist1)
