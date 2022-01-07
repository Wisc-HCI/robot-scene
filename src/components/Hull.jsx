import React, { useRef, useCallback } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { Vector3, BackSide, FrontSide } from 'three';
import { ConvexGeometry } from 'three-stdlib';
import { Tag } from 'antd';
import shallow from 'zustand/shallow';
import { updateShapeMaterial } from './Util/Helpers';
import { GhostMaterial } from './Util/MaterialMaker';

export default function Hull({ hullKey, store, highlightColor }) {

  const hull = store(useCallback(state => state.hulls[hullKey], [hullKey]),shallow)

  const frontRef = useRef();
  const backRef = useRef();
  const ghostFrontRef = useRef();
  const ghostBackRef = useRef();

  const initialVertices = typeof hull.vertices === 'function' ? hull.vertices(0) : hull.vertices;

  const geometry = new ConvexGeometry(initialVertices.map(v => new Vector3(v.x, v.y, v.z)));

  useFrame(useCallback(({ clock }) => {
    // Outside of react rendering, adjust the positions of all tfs.
    const hullState = store.getState().hulls[hullKey];
    const time = clock.getElapsedTime() * 1000;
    updateShapeMaterial(backRef, hullState.color, time);
    updateShapeMaterial(frontRef, hullState.color, time);
    if (ghostFrontRef.current && ghostBackRef.current) {
      const coeficient = Math.sin(time/700)/5+1;
      const power = -Math.sin(time/700)/2+3;
      ghostFrontRef.current.material.uniforms.coeficient.value = coeficient;
      ghostFrontRef.current.material.uniforms.power.value = power;
      ghostBackRef.current.material.uniforms.coeficient.value = coeficient;
      ghostBackRef.current.material.uniforms.power.value = power;
    }
    const vertices = typeof hull.vertices === 'function' ? hull.vertices(time) : hull.vertices;
    if (vertices !== initialVertices) {
      const newGeom = new ConvexGeometry(vertices.map(v => new Vector3(v.x, v.y, v.z)));
      frontRef.current.geometry = newGeom;
      backRef.current.geometry = newGeom;
      ghostFrontRef.current.geometry = newGeom;
      ghostBackRef.current.geometry = newGeom

    }
  }, [hullKey, frontRef, backRef, store, initialVertices, hull]));

  return (
    <group up={[0, 0, 1]} visible={!hull.hidden}>
      <group
        up={[0, 0, 1]}
        onPointerDown={hull.onClick}
        onPointerOver={hull.onPointerOver}
        onPointerOut={hull.onPointerOut}>
        <mesh
          ref={backRef}
          key={`${hullKey}B`}
          geometry={geometry}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial
            transparent
            wireframe={hull.wireframe}
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
            wireframe={hull.wireframe}
            side={FrontSide}
          />
        </mesh>
        {hull.highlighted && (
          <mesh
            key='HB'
            ref={ghostBackRef}
            geometry={geometry}
            material={GhostMaterial(highlightColor)}
            castShadow={false}
            receiveShadow={false}
            side={BackSide}
          />
        )}
        {hull.highlighted && (
          <mesh
            key='HF'
            ref={ghostFrontRef}
            geometry={geometry}
            material={GhostMaterial(highlightColor)}
            castShadow={false}
            receiveShadow={false}
            side={FrontSide}
          />
        )}
      </group>
      {hull.showName && (
        <Html distanceFactor={2} position={[0, 0, 0.5]}>
          <Tag style={{ opacity: 0.75 }} className="disable-text-selection">
            {hull.name}
          </Tag>
        </Html>
      )}
    </group>
  )
}