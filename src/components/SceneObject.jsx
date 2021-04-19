import React, { useRef } from 'react'
import { useFrame, group } from "@react-three/fiber";
import { frameUpdate } from "./Util/Transforms";
import { rgbToHex } from './Util/ColorConversion';
import { StandardMeshesLookup, STANDARD_MESHES } from "./Util/StandardMeshes";
import MeshLookup from './MeshLookup';

export default function SceneObject(props) {
  const group = useRef();
  const { type, path, color, scale, selected } = props;

  let content = [];

  if (STANDARD_MESHES.indexOf(type) > -1) {
    content = [{geometry:StandardMeshesLookup(type),material:null,scale:[1,1,1]}]
  } else {
    content = MeshLookup(path);
  }

  console.log(content)

  useFrame(() => {
    const { position, rotation, transform } = props;
    frameUpdate(group, position, rotation, transform);
  });

  return (
    <group ref={group} dispose={null}>
      {content.map((data)=>{
        const usedScale = scale ? [scale.x, scale.y, scale.z] : data.scale;
        if (props.color === undefined) {
          return (
            <mesh geometry={data.geometry} material={data.material} scale={usedScale} />
          )
        } else {
          return (
            <mesh geometry={data.geometry} scale={usedScale}>
              <meshStandardMaterial
                transparent
                opacity={color.a}
                color={rgbToHex(color)}
              />
            </mesh>
          )
        }
      })}
    </group>
  )
}
