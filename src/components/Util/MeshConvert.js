import React, {createRef} from 'react';
import { MeshLookup, MeshLookupTable } from '../MeshLookup';
import { MaterialMaker, GhostMaterial, WireframeMaterial } from './MaterialMaker';

export const MeshConverter = (node,idx,materialOverride,opacity) => {
    // console.log(node);
    if (node.type === 'group') {
      const nodes = node.children.map((child,i)=>MeshConverter(child,i,materialOverride,opacity));
      const group = 
        <group key={idx} position={node.position} rotation={node.rotation} scale={node.scale}>
            {nodes.map(node=>node[0])}
        </group>
      const refs = [].concat.apply([], nodes.map(node=>node[1]));
      return [group, refs];
    } else {
      const ref = createRef();
      const material = materialOverride ? materialOverride : node.material;

      const mesh = 
        <mesh
            ref={ref}
            key={idx}
            geometry={node.geometry}
            material={material}
            scale={node.scale}
            castShadow={opacity === 1.0}
            receiveShadow={opacity === 1.0 }
        />
      return [mesh, [ref]];
    }
  }

export const GhostConverter = (node,idx,highlightColor) => {
  if (node.type === 'group') {
    const nodes = node.children.map((child,i)=>GhostConverter(child,i,highlightColor));
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
    const {color, shape} = item;
    const materialOverride = color ? MaterialMaker(color.r, color.g, color.b, color.a) : undefined;
    const opacity = color ? color.a : 1.0;
    let content = [];
    
    if (shape in MeshLookupTable) {
      content = MeshLookup(shape);
    }
    
    const nodes = content.map((node,i)=>MeshConverter(node,i,materialOverride,opacity));
    const group = 
      <>
          {nodes.map(node=>node[0])}
      </>
    const refs = [].concat.apply([], nodes.map(node=>node[1]));
    
    return [group, refs];
  }

export const itemToGhost = (item,highlightColor) => {
    const {shape} = item;
    let content = [];
    
    if (shape in MeshLookupTable) {
      content = MeshLookup(shape);
    }
    
    const nodes = content.map((node,i)=>GhostConverter(node,i,highlightColor));

    return (
      <>
          {nodes}
      </>
    );
  }
  