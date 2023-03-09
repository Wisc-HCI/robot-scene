import React, { useRef, useCallback, forwardRef } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { Vector3, BackSide, FrontSide } from 'three';
import { ConvexGeometry } from 'three-stdlib';
import { updateShapeMaterial, useCombinedRefs } from './Util/Helpers';
import { useSceneStore } from './SceneContext';
import { Select } from '@react-three/postprocessing';
import { shallow } from 'zustand/shallow';

export default forwardRef(({ objectKey },forwardedRef)=>{

  const innerRef = useRef(null);
  const ref = useCombinedRefs(forwardedRef, innerRef);

  const onClick = useSceneStore(state => state.onClick, shallow);
  const onPointerOver = useSceneStore(state => state.onPointerOver, shallow);
  const onPointerOut = useSceneStore(state => state.onPointerOut, shallow);

  const hull = useSceneStore(useCallback(state => state.hulls[objectKey], [objectKey]), shallow);
  const vertices = useSceneStore(useCallback(state => state.hulls[objectKey].vertices, [objectKey]), shallow);

  const clock = useSceneStore(state => state.clock);

  const frontRef = useRef();
  const backRef = useRef();

  const initialVertices = typeof vertices === 'function' ? vertices(0) : vertices;

  const geometry = new ConvexGeometry(initialVertices.map(v => new Vector3(v.x, v.y, v.z)));

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const time = clock.getElapsed() * 1000;
    updateShapeMaterial(backRef, hull.color, time);
    updateShapeMaterial(frontRef, hull.color, time);
    const currentVertices = typeof vertices === 'function' ? vertices(time) : vertices;
    if (currentVertices !== initialVertices) {
      const newGeom = new ConvexGeometry(currentVertices.map(v => new Vector3(v.x, v.y, v.z)));
      frontRef.current.geometry = newGeom;
      backRef.current.geometry = newGeom;
    }
    const visible = typeof hull.hidden === 'function' ? !hull.hidden(time) : !hull.hidden;
    frontRef.current.visible = visible;
    backRef.current.visible = visible;

  }, [frontRef, backRef, initialVertices, hull, clock, vertices]));

  return (
    <Select enabled={hull.highlighted}>
      <group ref={ref} up={[0, 0, 1]}>
        <group
          up={[0, 0, 1]}
          onPointerDown={(e) => { onClick(objectKey, frontRef.current.visible, e) }}
          onPointerOver={(e) => { onPointerOver(objectKey, frontRef.current.visible, e) }}
          onPointerOut={(e) => { onPointerOut(objectKey, frontRef.current.visible, e) }}>
          <mesh
            ref={backRef}
            key={`${objectKey}B`}
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
            key={`${objectKey}F`}
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
        </group>
        {hull.showName && (
          <Html distanceFactor={2} position={[0, 0, 0.5]}>
            <div style={{ opacity: 0.75, borderRadius: 2, backgroundColor: 'lightgrey' }} className="disable-text-selection">
              {hull.name}
            </div>
          </Html>
        )}
      </group>
    </Select>

  )
})