import React, { createRef } from 'react';
import { Vector3, BackSide, FrontSide } from 'three';
import { ConvexGeometry } from 'three-stdlib';
import { MeshLookup, MeshLookupTable } from '../MeshLookup';
import { GhostMaterial } from './MaterialMaker';
// import { rgbToHex } from './ColorConversion';

export const MeshConverter = (node, idx, materialOverride, opacity) => {
  // console.log(node);
  if (node.type === 'group') {
    const nodes = node.children.map((child, i) => MeshConverter(child, i, materialOverride, opacity));
    const group =
      <group key={idx} up={[0,0,1]} position={node.position} rotation={node.rotation} scale={node.scale}>
        {nodes.map(node => node[0])}
      </group>
    const refs = [].concat.apply([], nodes.map(node => node[1]))
    return [group, refs];
  } else {
    const frontRef = createRef();
    const backRef = createRef();
    if (materialOverride) {
        const mesh =
          <group key={idx} up={[0,0,1]} >
            <mesh
              ref={backRef}
              key={`${idx}B`}
              geometry={node.geometry}
              scale={node.scale}
              castShadow={false}
              receiveShadow={false}
            >
              <meshLambertMaterial 
                transparent
                wireframe={materialOverride.wireframe}
                attach='material'
                opacity={opacity} 
                // color='#000000' 
                side={BackSide}
              />
              
            </mesh>
            <mesh
              ref={frontRef}
              key={`${idx}F`}
              geometry={node.geometry}
              scale={node.scale}
              castShadow={false}
              receiveShadow={false}
            >
              <meshLambertMaterial 
                transparent
                attach='material'
                wireframe={materialOverride.wireframe}
                opacity={opacity} 
                // color='#000000'
                side={FrontSide}
              />
            </mesh>
          </group>
        return [mesh, [frontRef,backRef]]
      } else {
      const mesh =
        <mesh
          ref={frontRef}
          key={idx}
          geometry={node.geometry}
          material={node.material}
          scale={node.scale}
          castShadow={true}
          receiveShadow={true}
        />
      return [mesh,[frontRef]]
    }
  }
}

export const NestedGhostConverter = (node, idx, highlightColor) => {
  // console.log(node);
  if (node.type === 'group') {
    const nodes = node.children.map((child, i) => NestedGhostConverter(child, i, highlightColor));
    const group =
      <group key={idx} up={[0,0,1]} position={node.position} rotation={node.rotation} scale={node.scale}>
        {nodes.map(node => node[0])}
      </group>
    const refs = [].concat.apply([], nodes.map(node => node[1]))
    return [group, refs];
  } else {
    const ref = createRef();
    const mesh =
        <mesh
          ref={ref}
          key={idx}
          geometry={node.geometry}
          material={GhostMaterial(highlightColor)}
          scale={node.scale}
          castShadow={true}
          receiveShadow={true}
        />
    return [mesh,[ref]]
  }
}

export const GhostConverter = (node, idx, highlightColor) => {
  if (node.type === 'group') {
    const nodes = node.children.map((child, i) => GhostConverter(child, i, highlightColor));
    const group =
      <group key={idx} position={node.position} rotation={node.rotation} scale={node.scale} up={[0,0,1]} >
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
  const { color, shape, wireframe } = item;
  const materialOverride = color ? {...color, wireframe} : undefined;
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

export const itemToGhostAndChildRefs = (item,highlightColor) => {
  const { shape } = item;
  let content = shape in MeshLookupTable ? MeshLookup(shape) : [];
  
  const nodes = content.map((node, i) => NestedGhostConverter(node, i, highlightColor));
  const group =
    <>
      {nodes.map(node => node[0])}
    </>
  const refs = [].concat.apply([], nodes.map(node => node[1]));

  return [group, refs];
}

export const hullToGroupAndRef = hull => {
  const { vertices, hullKey, wireframe } = hull;
  const frontRef = createRef();
  const backRef = createRef();

  const geometry = new ConvexGeometry(vertices.map(v => new Vector3(v.x, v.y, v.z)));
  const group = 
      <group key={hullKey} up={[0,0,1]} >
        <mesh
          ref={backRef}
          key={`${hullKey}B`}
          geometry={geometry}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial 
            transparent
            wireframe={wireframe}
            attach='material'
            side={BackSide}
          />
        </mesh>
        <mesh
          ref={frontRef}
          key={`${hullKey}F`}
          geometry={geometry}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial 
            transparent
            attach='material'
            wireframe={wireframe}
            side={FrontSide}
          />
        </mesh>
      </group>
  return [group,[frontRef,backRef]]
}
