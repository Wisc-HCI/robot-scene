import React, { useRef, useCallback } from 'react';
import { Html } from '@react-three/drei';
import useSceneStore from './SceneStore';
import { Tag } from 'antd';

export default function Hull({hullKey, node}) {
  
  const [ name, showName, onClick, onPointerOver, onPointerOut ] =
    useSceneStore(useCallback(state=>([
      state.items[hullKey]?.name,
      state.items[hullKey]?.showName,
      state.items[hullKey]?.onClick,
      state.items[hullKey]?.onPointerOver,
      state.items[hullKey]?.onPointerOut
    ]), [hullKey]))

  const ref = useRef()

  return (
    <group ref={ref} up={[0,0,1]}>
      <group 
        up={[0,0,1]}
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