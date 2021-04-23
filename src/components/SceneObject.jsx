import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { Line } from '@react-three/drei';
import { frameUpdate } from "./Util/Transforms";
import { rgbToHex } from './Util/ColorConversion';
import { MaterialMaker } from './Util/MaterialMaker';
import { StandardMeshesLookup, STANDARD_MESHES } from "./Util/StandardMeshes";
import { MeshLookup, MeshLookupTable } from './MeshLookup';


export const SceneObject = React.forwardRef((props, ref) => {
  const { type, path, color, scale, vertices, highlighted } = props;

  let content = [];

  if (STANDARD_MESHES.indexOf(type) > -1) {
    content = [{type:'raw',geometry:StandardMeshesLookup(type),material:MaterialMaker(color.r, color.g, color.b, color.a),scale:[1,1,1]}]
  } else if (path in MeshLookupTable >= 0) {
    content = MeshLookupTable[path]();
    if (color && content.type === 'raw') {
      content = content.map((mesh)=>({...mesh, material: MaterialMaker(color.r, color.g, color.b, color.a)}))
    }
  } else {
    content = []
  }

  useFrame(() => {
    const { type, position, rotation, transform } = props;
    if (type === 'line') {
      frameUpdate(ref, {x:0,y:0,z:0}, {w:1,x:0,y:0,z:0}, transform);
    } else {
      frameUpdate(ref, position, rotation, transform);
    }
  });

  // TODO: add TransformControls:
  // https://drei.pmnd.rs/?path=/story/controls-transformcontrols--transform-controls-lock-st

  return (
    <group ref={ref} dispose={null}>
      {content.map((data,i)=>{
        if (data.type === 'raw') {
            return (
              <mesh
                key={`${type ? type : path}_${i}`}
                geometry={data.geometry}
                material={data.material}
                scale={scale ? [scale.x, scale.y, scale.z] : data.scale}
                castShadow={color ? color.a === 1.0 : true}
                receiveShadow={color ? color.a === 1.0 : true}
              />
            )
        } else {
          return (
            <React.Fragment key={`${type ? type : path}_${i}`}>
              {data.group}
            </React.Fragment>
          )
        }})}
      {(type === 'xline') && (
        <Line
          points={vertices.map(vertex=>([vertex.position.x,vertex.position.y,vertex.position.z]))}
          color='white'
          vertexColors={vertices.map(vertex=>([vertex.color.r/255,vertex.color.g/255,vertex.color.b/255]))}
          lineWidth={3}
        />
      )
      }
    </group>
  )
})
