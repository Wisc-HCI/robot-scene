import React, { useRef, useCallback } from 'react';
import { useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import { Tag } from 'antd';

export default function Item({itemKey, node, store}) {
  
  const [ name, showName, onClick, onPointerOver, onPointerOut ] =
    store(useCallback(state=>([
      state.items[itemKey]?.name,
      state.items[itemKey]?.showName,
      state.items[itemKey]?.onClick,
      state.items[itemKey]?.onPointerOver,
      state.items[itemKey]?.onPointerOut
    ]), [itemKey]))

    const ref = useRef();

    useFrame(useCallback(({clock}) => {
      // Outside of react rendering, adjust the positions of all tfs.
      const item = store.getState().items[itemKey];
      const time = clock.getElapsedTime() * 1000;
      if (ref.current) {
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
      }
  },[itemKey,ref]));
  return (
    <group ref={ref} up={[0,0,1]}>
      <group
        up={[0,0,1]} 
        scale={[1,1,1]}
        rotation={[Math.PI/2,0,0]}
        onPointerDown={onClick} 
        onPointerOver={onPointerOver} 
        onPointerOut={onPointerOut}>
        {node}
      </group>
      {showName && (
        <Html distanceFactor={7} position={[0, 1, 0]}>
          <Tag style={{ opacity: 0.75 }} className="disable-text-selection">
            {name}
          </Tag>
        </Html>
      )}
    </group>
  )
}