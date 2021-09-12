import React, { useRef, useCallback } from 'react';
import { Html } from '@react-three/drei';
// import useSceneStore from './SceneStore';
import { Tag } from 'antd';

export default function Hull({ hullKey, node, store }) {

  const [name, showName, onClick, onPointerOver, onPointerOut, hidden] =
    store(useCallback(state => ([
      state.hulls[hullKey].name,
      state.hulls[hullKey].showName,
      state.hulls[hullKey].onClick,
      state.hulls[hullKey].onPointerOver,
      state.hulls[hullKey].onPointerOut,
      state.hulls[hullKey].hidden
    ]), [hullKey]))

  const ref = useRef()

  return (
    <group ref={ref} up={[0, 0, 1]} visible={!hidden}>
      <group
        up={[0, 0, 1]}
        onPointerDown={onClick}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}>
        {node}
      </group>
      {showName && (
        <Html distanceFactor={2} position={[0, 0, 0.5]}>
          <Tag style={{ opacity: 0.75 }} className="disable-text-selection">
            {name}
          </Tag>
        </Html>
      )}
    </group>
  )
}