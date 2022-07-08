/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';
import LFinger12Mesh from '../../Meshes/Nao/LFinger12.glb';


export default function Model(props) {
  const { nodes, materials } = useGLTF(LFinger12Mesh);
  return [{ type:'raw', geometry:nodes.LFinger12.geometry, material:materials.LFinger12UV, scale:[0.01, 0.01, 0.01]}]
}

useGLTF.preload(LFinger12Mesh);