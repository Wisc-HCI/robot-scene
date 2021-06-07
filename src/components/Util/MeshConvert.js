import React, {createRef} from 'react';

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
      const mesh = 
        <mesh
            ref={ref}
            key={idx}
            geometry={node.geometry}
            material={materialOverride ? materialOverride : node.material}
            scale={node.scale}
            castShadow={opacity === 1.0}
            receiveShadow={opacity === 1.0 }
        />
      return [mesh, [ref]];
    }
  }
  