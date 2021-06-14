import React, {createRef} from 'react';
import { GhostMaterial } from './MaterialMaker';

export const MeshConverter = (node,idx,materialOverride,opacity) => {
    // console.log(node);
    if (node.type === 'group') {
      const nodes = node.children.map((child,i)=>MeshConverter(child,i,materialOverride,opacity));
      const group = 
        <group key={idx} position={node.position} rotation={node.rotation} scale={node.scale}>
            {nodes.map(node=>node[0])}
        </group>
      const ghost = 
        <group key={idx} position={node.position} rotation={node.rotation} scale={node.scale}>
            {nodes.map(node=>node[1])}
        </group>
      const refs = [].concat.apply([], nodes.map(node=>node[2]));
      return [group, ghost, refs];
    } else {
      const ref = createRef();
      const material = materialOverride ? materialOverride : node.material;

      const color = material.color;
      const ghostMaterial = GhostMaterial(material.color);
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
      const ghost = 
        <mesh
            key={`${idx}Ghost`}
            geometry={node.geometry}
            material={ghostMaterial}
            castShadow={false}
            receiveShadow={false }
        />
      return [mesh, ghost, [ref]];
    }
  }
  