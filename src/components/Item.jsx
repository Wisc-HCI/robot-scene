import React, { useRef, useCallback } from 'react';
import { useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import useSceneStore from './SceneStore';
import { Tag } from 'antd';

export default function Item({itemKey, node}) {
  
  const [ name, showName, onClick, onPointerOver, onPointerOut ] =
    useSceneStore(useCallback(state=>([
      state.items[itemKey]?.name,
      state.items[itemKey]?.showName,
      state.items[itemKey]?.onClick,
      state.items[itemKey]?.onPointerOver,
      state.items[itemKey]?.onPointerOut
    ]), [itemKey]))

    const ref = useRef()

    useFrame(useCallback(() => {
      // Outside of react rendering, adjust the positions of all tfs.
      const item = useSceneStore.getState().items[itemKey];
      
      if (ref.current) {
        ref.current.position.set(
          item.position.x, 
          item.position.y, 
          item.position.z
        );
        ref.current.quaternion.set(
          item.rotation.x,
          item.rotation.y,
          item.rotation.z,
          item.rotation.w
        );
        ref.current.scale.set(
          item.scale.x, 
          item.scale.y, 
          item.scale.z
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