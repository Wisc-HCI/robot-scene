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

  useFrame(() => {
    const { position, rotation, transform } = props;
    frameUpdate(group, position, rotation, transform);
  });

  // TODO: add TransformControls:
  // https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_transform.html

  // TODO: add highlighing:
  // https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_outline.html

  return (
    <group ref={group} dispose={null}>
      {content.map((data,i)=>{
        const usedScale = scale ? [scale.x, scale.y, scale.z] : data.scale;
        if (props.color === undefined) {
          return (
            <mesh key={`${type ? type : path}_${i}`} geometry={data.geometry} material={data.material} scale={usedScale} />
          )
        } else {
          return (
            <mesh  key={`${type ? type : path}_${i}`} geometry={data.geometry} scale={usedScale}>
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
