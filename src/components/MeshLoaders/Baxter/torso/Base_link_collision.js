/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useGLTF } from '@react-three/drei';
import Base_Link_Collision from '../../Meshes/Baxter/torso/Base_link_collision.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(Base_Link_Collision)
  return [{type:'raw', geometry:nodes['TORSO-L'].geometry, material:nodes['TORSO-L'].material}]
}

useGLTF.preload(Base_Link_Collision)
