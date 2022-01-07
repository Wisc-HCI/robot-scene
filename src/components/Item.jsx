import React, { useRef, useCallback } from 'react';
import { useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import { Tag } from 'antd';
import { MeshLookup, MeshLookupTable } from './MeshLookup';
import { BackSide, FrontSide } from 'three';
import { GhostMaterial } from './Util/MaterialMaker';
import { updateShapeMaterial, createGenericShape } from './Util/Helpers';

const GENERIC_SHAPES = ['cube','cylinder','sphere','capsule','arrow'];

export default function Item({ itemKey, store, highlightColor }) {

  const item = store(useCallback(state => (state.items[itemKey]), [itemKey]))

  const content = GENERIC_SHAPES.includes(item.shape) ? createGenericShape(item) : item.shape in MeshLookupTable ? MeshLookup(item.shape) : [];

  const ref = useRef();

  useFrame(useCallback(({ clock }) => {
    // Outside of react rendering, adjust the positions of all tfs.
    const itemState = store.getState().items[itemKey];
    const time = clock.getElapsedTime() * 1000;
    if (ref.current) {
      ref.current.position.set(
        typeof itemState.position.x === 'function' ? itemState.position.x(time) : itemState.position.x,
        typeof itemState.position.y === 'function' ? itemState.position.y(time) : itemState.position.y,
        typeof itemState.position.z === 'function' ? itemState.position.z(time) : itemState.position.z,
      );
      ref.current.quaternion.set(
        typeof itemState.rotation.x === 'function' ? itemState.rotation.x(time) : itemState.rotation.x,
        typeof itemState.rotation.y === 'function' ? itemState.rotation.y(time) : itemState.rotation.y,
        typeof itemState.rotation.z === 'function' ? itemState.rotation.z(time) : itemState.rotation.z,
        typeof itemState.rotation.w === 'function' ? itemState.rotation.w(time) : itemState.rotation.w
      );
      ref.current.scale.set(
        typeof itemState.scale.x === 'function' ? itemState.scale.x(time) : itemState.scale.x,
        typeof itemState.scale.y === 'function' ? itemState.scale.y(time) : itemState.scale.y,
        typeof itemState.scale.z === 'function' ? itemState.scale.z(time) : itemState.scale.z,
      );
      ref.current.visible = !itemState.hidden;
    }
  }, [itemKey, ref, store]));


  return (
    <group ref={ref} up={[0, 0, 1]}>
      <group
        up={[0, 0, 1]}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerDown={item.onClick}
        onPointerOver={item.onPointerOver}
        onPointerOut={item.onPointerOut}>
        {content.map((groupOrPart, idx) => (<GroupOrPart key={idx} idx={idx} groupOrPart={groupOrPart} itemKey={itemKey} store={store} highlightColor={highlightColor} />))}
      </group>
      {item.showName && (
        <Html distanceFactor={3} position={[0, 0, 0.2]}>
          <Tag style={{ opacity: 0.75 }} className="disable-text-selection">
            {item.name}
          </Tag>
        </Html>
      )}
    </group>
  )
}

const Part = ({ part, itemKey, store, highlightColor }) => {

  const wireframe = store(useCallback(state => (state.items[itemKey].wireframe), [itemKey]));
  const materialOverride = store(useCallback(state => (state.items[itemKey].color !== undefined), [itemKey]))
  const highlighted = store(useCallback(state => (state.items[itemKey].highlighted), [itemKey]));

  const frontRef = useRef();
  const backRef = useRef();
  const ghostFrontRef = useRef();
  const ghostBackRef = useRef();

  useFrame(useCallback(({ clock }) => {
    // Outside of react rendering, adjust the positions of all tfs.
    const itemState = store.getState().items[itemKey];
    const time = clock.getElapsedTime() * 1000;
    updateShapeMaterial(backRef, itemState.color, time);
    updateShapeMaterial(frontRef, itemState.color, time);
    if (ghostFrontRef.current && ghostBackRef.current) {
      const coeficient = Math.sin(time/700)/5+1;
      const power = -Math.sin(time/700)/2+3;
      ghostFrontRef.current.material.uniforms.coeficient.value = coeficient;
      ghostFrontRef.current.material.uniforms.power.value = power;
      ghostBackRef.current.material.uniforms.coeficient.value = coeficient;
      ghostBackRef.current.material.uniforms.power.value = power;
    }

  }, [itemKey, frontRef, backRef, store]));

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
        {highlighted && (
          <mesh
            key='HB'
            ref={ghostBackRef}
            geometry={part.geometry}
            material={GhostMaterial(highlightColor)}
            scale={part.scale}
            castShadow={false}
            receiveShadow={false}
            side={BackSide}
          />
        )}
        {highlighted && (
          <mesh
            key='HF'
            ref={ghostFrontRef}
            geometry={part.geometry}
            material={GhostMaterial(highlightColor)}
            scale={part.scale}
            castShadow={false}
            receiveShadow={false}
            side={FrontSide}
          />
        )}
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
        {highlighted && (
          <mesh
            key='HB'
            ref={ghostBackRef}
            geometry={part.geometry}
            material={GhostMaterial(highlightColor)}
            scale={part.scale}
            castShadow={false}
            receiveShadow={false}
            side={BackSide}
          />
        )}
        {highlighted && (
          <mesh
            key='HF'
            ref={ghostFrontRef}
            geometry={part.geometry}
            material={GhostMaterial(highlightColor)}
            scale={part.scale}
            castShadow={false}
            receiveShadow={false}
            side={FrontSide}
          />
        )}
      </>

    )
  }


}

const GroupOrPart = ({ idx, groupOrPart, itemKey, store, highlightColor }) => {
  if (groupOrPart.type === 'group') {
    return (
      <group key={idx} up={[0, 0, 1]} position={groupOrPart.position} rotation={groupOrPart.rotation} scale={groupOrPart.scale}>
        {groupOrPart.children.map((groupOrPartChild, childIdx) => (<GroupOrPart key={childIdx} idx={childIdx} groupOrPart={groupOrPartChild} itemKey={itemKey} store={store} highlightColor={highlightColor} />))}
      </group>
    )
  } else {
    return (
      <Part key={idx} part={groupOrPart} itemKey={itemKey} store={store} highlightColor={highlightColor} />
    )
  }
}