import React, { createRef } from 'react';
import { Vector3, BackSide, FrontSide } from 'three';
import { ConvexGeometry } from 'three-stdlib';
import { MeshLookup, MeshLookupTable } from '../MeshLookup';
import { MaterialMaker, GhostMaterial } from './MaterialMaker';
import { rgbToHex } from './ColorConversion';

export const MeshConverter = (node, idx, materialOverride, opacity) => {
  // console.log(node);
  if (node.type === 'group') {
    const nodes = node.children.map((child, i) => MeshConverter(child, i, materialOverride, opacity));
    const group =
      <group key={idx} position={node.position} rotation={node.rotation} scale={node.scale}>
        {nodes.map(node => node[0])}
      </group>
    const refs = [].concat.apply([], nodes.map(node => node[1]));
    return [group, refs];
  } else {
    const ref = createRef();

    if (materialOverride) {
      if (opacity < 1.0) {
        const mesh =
          <group key={idx} ref={ref}>
            <mesh
              key={`${idx}B`}
              geometry={node.geometry}
              scale={node.scale}
              castShadow={false}
              receiveShadow={false}
            >
              <meshLambertMaterial 
                transparent
                attach='material'
                opacity={opacity} 
                color={rgbToHex(materialOverride)} 
                side={BackSide}
              />
            </mesh>
            <mesh
              key={`${idx}F`}
              geometry={node.geometry}
              scale={node.scale}
              castShadow={false}
              receiveShadow={false}
            >
              <meshLambertMaterial 
                transparent
                attach='material'
                opacity={opacity} 
                color={rgbToHex(materialOverride)} 
                side={FrontSide}
              />
            </mesh>
          </group>
        return [mesh, [ref]]
      } else {
        const mesh =
          <mesh
            ref={ref}
            key={idx}
            geometry={node.geometry}
            scale={node.scale}
            castShadow={true}
            receiveShadow={true}
          >
            <meshLambertMaterial 
              attach='material'
              opacity={opacity} 
              color={rgbToHex(materialOverride)}
            />
          </mesh>
        return [mesh,[ref]]
      }
    } else {
      const mesh =
        <mesh
          ref={ref}
          key={idx}
          geometry={node.geometry}
          material={node.material}
          scale={node.scale}
          castShadow={true}
          receiveShadow={true}
        />
      return [mesh,[ref]]
    }
  }
}

export const GhostConverter = (node, idx, highlightColor) => {
  if (node.type === 'group') {
    const nodes = node.children.map((child, i) => GhostConverter(child, i, highlightColor));
    const group =
      <group key={idx} position={node.position} rotation={node.rotation} scale={node.scale}>
        {nodes}
      </group>
    return group;
  } else {
    const material = GhostMaterial(highlightColor)
    // const material = WireframeMaterial(255,255,255);
    return (
      <mesh
        key={idx}
        geometry={node.geometry}
        material={material}
        scale={node.scale}
        castShadow={false}
        receiveShadow={false}
      />
    )
  }
}

export const itemToGroupAndChildRefs = item => {
  const { color, shape } = item;
  const materialOverride = color ? color : undefined;
  const opacity = color ? color.a : 1.0;
  let content = [];

  if (shape in MeshLookupTable) {
    content = MeshLookup(shape);
  }

  const nodes = content.map((node, i) => MeshConverter(node, i, materialOverride, opacity));
  const group =
    <>
      {nodes.map(node => node[0])}
    </>
  const refs = [].concat.apply([], nodes.map(node => node[1]));

  return [group, refs];
}

export const itemToGhost = (item, highlightColor) => {
  const { shape } = item;
  let content = [];

  if (shape in MeshLookupTable) {
    content = MeshLookup(shape);
  }

  const nodes = content.map((node, i) => GhostConverter(node, i, highlightColor));

  return (
    <>
      {nodes}
    </>
  );
}

export const hullToGroupAndRef = hull => {
  const { color, vertices, hullKey } = hull;
  const ref = createRef();

  const geometry = new ConvexGeometry(vertices.map(v => new Vector3(v.x, v.y, v.z)));
  let group = null;

  if (color.a < 1.0) {
    group = 
      <group key={hullKey} ref={ref}>
        <mesh
          key={`${hullKey}B`}
          geometry={geometry}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial 
            transparent
            attach='material'
            opacity={color.a} 
            color={rgbToHex(color)} 
            side={BackSide}
          />
        </mesh>
        <mesh
          key={`${hullKey}F`}
          geometry={geometry}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial 
            transparent
            attach='material'
            opacity={color.a} 
            color={rgbToHex(color)} 
            side={FrontSide}
          />
        </mesh>
      </group>
  } else {
    group = 
      <mesh
        ref={ref}
        key={`${hullKey}`}
        geometry={geometry}
        castShadow={true}
        receiveShadow={true}
      >
        <meshLambertMaterial 
          transparent
          attach='material'
          opacity={color.a} 
          color={rgbToHex(color)}
        />
      </mesh>
  }
  return [group,ref]
}
