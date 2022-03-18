import React, { useRef, useCallback } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { Vector3, BackSide, FrontSide } from 'three';
import { ConvexGeometry } from 'three-stdlib';
import shallow from 'zustand/shallow';
import { updateShapeMaterial } from './Util/Helpers';
import { GhostMaterial, OutlineMaterial } from './Util/MaterialMaker';
import { useSceneStore } from './SceneContext';

export default function Hull({ hullKey, highlightColor }) {

  const onClick = useSceneStore(state=>state.onClick);
  const onPointerOver = useSceneStore(state=>state.onPointerOver);
  const onPointerOut = useSceneStore(state=>state.onPointerOut);

  const hull = useSceneStore(useCallback(state => state.hulls[hullKey], [hullKey]),shallow);
  const vertices = useSceneStore(useCallback(state => state.hulls[hullKey].vertices, [hullKey]));

  const clock = useSceneStore(state=>state.clock);

  const frontRef = useRef();
  const backRef = useRef();
  const ghostFrontRef = useRef();
  const ghostBackRef = useRef();
  const outlineRef = useRef();

  const initialVertices = typeof vertices === 'function' ? vertices(0) : vertices;

  const geometry = new ConvexGeometry(initialVertices.map(v => new Vector3(v.x, v.y, v.z)));

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const time = clock.getElapsed() * 1000;
    updateShapeMaterial(backRef, hull.color, time);
    updateShapeMaterial(frontRef, hull.color, time);
    if (ghostFrontRef.current && ghostBackRef.current) {
      const coeficient = Math.sin(time/700)/5+1;
      const power = -Math.sin(time/700)/2+3;
      ghostFrontRef.current.material.uniforms.coeficient.value = coeficient;
      ghostFrontRef.current.material.uniforms.power.value = power;
      ghostBackRef.current.material.uniforms.coeficient.value = coeficient;
      ghostBackRef.current.material.uniforms.power.value = power;
    }
    const currentVertices = typeof vertices === 'function' ? vertices(time) : vertices;
    if (currentVertices !== initialVertices) {
      const newGeom = new ConvexGeometry(currentVertices.map(v => new Vector3(v.x, v.y, v.z)));
      frontRef.current.geometry = newGeom;
      backRef.current.geometry = newGeom;
      ghostFrontRef.current.geometry = newGeom;
      ghostBackRef.current.geometry = newGeom

    }
    const visible = typeof hull.hidden === 'function' ? !hull.hidden(time) : !hull.hidden;
    frontRef.current.visible = visible;
    backRef.current.visible = visible;
    ghostFrontRef.current.visible = visible;
    ghostFrontRef.current.visible = visible;

  }, [hullKey, frontRef, backRef, initialVertices, hull]));

  return (
    <group up={[0, 0, 1]}>
      <group
        up={[0, 0, 1]}
        onPointerDown={(e)=>{onClick(hullKey,frontRef.current.visible,e)}}
        onPointerOver={(e)=>{onPointerOver(hullKey,frontRef.current.visible,e)}}
        onPointerOut={(e)=>{onPointerOut(hullKey,frontRef.current.visible,e)}}>
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
            wireframe
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
        {false && hull.highlighted && (
          <mesh
            key='HFO'
            ref={outlineRef}
            geometry={geometry}
            material={OutlineMaterial(highlightColor)}
            castShadow={false}
            receiveShadow={false}
            side={BackSide}
          />
        )}
      </group>
      {hull.showName && (
        <Html distanceFactor={2} position={[0, 0, 0.5]}>
          <div style={{ opacity: 0.75, borderRadius:2, backgroundColor: 'lightgrey' }} className="disable-text-selection">
            {hull.name}
          </div>
        </Html>
      )}
    </group>
  )
}