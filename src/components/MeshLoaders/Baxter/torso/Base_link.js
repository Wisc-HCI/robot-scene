/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei';
import Base_Link from '../../../Meshes/Baxter/torso/Base_link.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(Base_Link);
  return [

{type:'raw',geometry:nodes.base_link_1.geometry, material:materials.Material_004} ,
{type:'raw',geometry:nodes.base_link_2.geometry, material:materials['Material_001.007']} ,
{type:'raw',geometry:nodes.base_link_3.geometry, material:materials.Material_003} ,
{type:'raw',geometry:nodes.base_link_4.geometry, material:materials.Material_007},
{type:'raw',geometry:nodes.base_link_5.geometry, material:materials.Material_005} ,
{type:'raw',geometry:nodes.base_link_6.geometry, material:materials.Material_006}

]
}

useGLTF.preload(Base_Link)
