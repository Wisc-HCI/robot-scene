import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { Line } from '@react-three/drei';
import { frameUpdate } from "./Util/Transforms";
import { rgbToHex } from './Util/ColorConversion';
import { MaterialMaker } from './Util/MaterialMaker';
import { StandardMeshesLookup, STANDARD_MESHES } from "./Util/StandardMeshes";
import { MeshLookup, MeshLookupTable } from './MeshLookup';

const MeshConverter = (node,idx,materialOverride,opacity) => {
  console.log(node);
  if (node.type === 'group') {
    return (
      <group key={idx} position={node.position} rotation={node.rotation} scale={node.scale}>
        {node.children.map((child,i)=>MeshConverter(child,i,materialOverride,opacity))}
      </group>
    )
  } else {
    return (
      <mesh
        key={idx}
        geometry={node.geometry}
        material={materialOverride ? materialOverride : node.material}
        scale={node.scale}
        castShadow={opacity === 1.0}
        receiveShadow={opacity === 1.0 }
      />
    )
  }
}

export const SceneObject = React.forwardRef((props, ref) => {
  const { type, path, color, scale, vertices, highlighted } = props;
  console.log(`${type} ${path ? path : ''}`)
  let content = [];
  const materialOverride = color ? MaterialMaker(color.r, color.g, color.b, color.a) : undefined;
  const opacity = color ? color.a : 1.0

  if (STANDARD_MESHES.indexOf(type) > -1) {
    content = [{type:'raw',geometry:StandardMeshesLookup(type),material:materialOverride,scale:[1,1,1]}]
  } else if (type === 'line') {
    content = []
  } else if (path in MeshLookupTable >= 0) {
    content = MeshLookup(path);
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
    <group ref={ref} dispose={null} scale={scale ? [scale.x,scale.y,scale.z] : undefined}>
      {content.map((node,i)=>MeshConverter(node,i,materialOverride,opacity))}
      {(type === 'line') && (
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
