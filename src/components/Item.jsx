import React, { useRef, useCallback } from 'react';
import { useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import { MeshLookup, MeshLookupTable } from './MeshLookup';
import { BackSide, FrontSide } from 'three';
import { GhostMaterial } from './Util/MaterialMaker';
import { updateShapeMaterial, createGenericShape } from './Util/Helpers';
import { useSceneStore } from './SceneContext';
import { Select } from '@react-three/postprocessing';

const GENERIC_SHAPES = ['cube', 'cylinder', 'sphere', 'capsule', 'arrow'];

export default function Item({ itemKey, highlightColor }) {

  const onClick = useSceneStore(state => state.onClick);
  const onPointerOver = useSceneStore(state => state.onPointerOver);
  const onPointerOut = useSceneStore(state => state.onPointerOut);
  const clock = useSceneStore(state => state.clock);

  const item = useSceneStore(useCallback(state => (state.items[itemKey]), [itemKey]))

  const content = GENERIC_SHAPES.includes(item.shape) ? createGenericShape(item) : item.shape in MeshLookupTable ? MeshLookup(item.shape) : [];

  const ref = useRef();

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of the item.
    const time = clock.getElapsed() * 1000;
    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(
        typeof item.position.x === 'function' ? item.position.x(time) : item.position.x,
        typeof item.position.y === 'function' ? item.position.y(time) : item.position.y,
        typeof item.position.z === 'function' ? item.position.z(time) : item.position.z,
      );
      ref.current.quaternion.set(
        typeof item.rotation.x === 'function' ? item.rotation.x(time) : item.rotation.x,
        typeof item.rotation.y === 'function' ? item.rotation.y(time) : item.rotation.y,
        typeof item.rotation.z === 'function' ? item.rotation.z(time) : item.rotation.z,
        typeof item.rotation.w === 'function' ? item.rotation.w(time) : item.rotation.w
      );
      ref.current.scale.set(
        typeof item.scale.x === 'function' ? item.scale.x(time) : item.scale.x,
        typeof item.scale.y === 'function' ? item.scale.y(time) : item.scale.y,
        typeof item.scale.z === 'function' ? item.scale.z(time) : item.scale.z,
      );
      ref.current.visible = typeof item.hidden === 'function' ? !item.hidden(time) : !item.hidden;
    }
  }, [item, ref]));

  return (
    <Select enabled={item.highlighted}>
      <group ref={ref} up={[0, 0, 1]}>
        <group
          up={[0, 0, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerDown={(e) => { onClick(itemKey, !ref.current.visible, e) }}
          onPointerOver={(e) => { onPointerOver(itemKey, !ref.current.visible, e) }}
          onPointerOut={(e) => { onPointerOut(itemKey, !ref.current.visible, e) }}>
          {content.map((groupOrPart, idx) => (<GroupOrPart key={idx} idx={idx} groupOrPart={groupOrPart} itemKey={itemKey} />))}
        </group>
        {item.showName && (
          <Html distanceFactor={3} position={[0, 0, 0.2]}>
            <div style={{ opacity: 0.75, borderRadius: 2, backgroundColor: 'lightgrey', padding: 5, userSelect: 'none' }}>
              {item.name}
            </div>
          </Html>
        )}
      </group>
    </Select>

  )
}

const Part = ({ part, itemKey }) => {

  const wireframe = useSceneStore(useCallback(state => state.items[itemKey].wireframe, [itemKey]));
  const color = useSceneStore(useCallback(state => state.items[itemKey].color, [itemKey]))
  const materialOverride = color !== undefined;

  const frontRef = useRef();
  const backRef = useRef();

  const clock = useSceneStore(state => state.clock);

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the color/material.
    const time = clock.getElapsed() * 1000;
    updateShapeMaterial(backRef, color, time);
    updateShapeMaterial(frontRef, color, time);

  }, [itemKey, frontRef, backRef]));

  if (materialOverride) {
    return (
      <group up={[0, 0, 1]} >
        <mesh
          ref={backRef}
          key='B'
          geometry={part.geometry}
          scale={part.scale}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial
            transparent
            wireframe={wireframe}
            attach='material'
            opacity={1}
            // color='#000000' 
            side={BackSide}
          />

        </mesh>
        <mesh
          ref={frontRef}
          key='F'
          geometry={part.geometry}
          scale={part.scale}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial
            transparent
            attach='material'
            wireframe={wireframe}
            opacity={1}
            // color='#000000'
            side={FrontSide}
          />
        </mesh>
      </group>
    )
  } else {
    return (
      <>
        <mesh
          key='I'
          ref={frontRef}
          geometry={part.geometry}
          material={part.material}
          scale={part.scale}
          castShadow={true}
          receiveShadow={true}
          wireframe={wireframe}
        />
      </>

    )
  }


}

const GroupOrPart = ({ idx, groupOrPart, itemKey, highlightColor }) => {
  if (groupOrPart.type === 'group') {
    return (
      <group key={idx} up={[0, 0, 1]} position={groupOrPart.position} rotation={groupOrPart.rotation} scale={groupOrPart.scale}>
        {groupOrPart.children.map((groupOrPartChild, childIdx) => (<GroupOrPart key={childIdx} idx={childIdx} groupOrPart={groupOrPartChild} itemKey={itemKey} highlightColor={highlightColor} />))}
      </group>
    )
  } else {
    return (
      <Part key={idx} part={groupOrPart} itemKey={itemKey} highlightColor={highlightColor} />
    )
  }
}