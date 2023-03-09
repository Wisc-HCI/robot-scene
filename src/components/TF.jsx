import React, { useCallback, useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
// import store from "./SceneStore";
import { ARROW_GEOM } from "./Util/StandardMeshes";
import { MaterialMaker, GhostMaterial } from './Util/MaterialMaker';
// import { Quaternion } from 'three';
import { useSceneStore } from './SceneContext';
import { useCombinedRefs } from "./Util/Helpers";
import { shallow } from "zustand/shallow";
// const STANDARD_ROTATION = new Quaternion(0,0,1,0)
export default forwardRef(({ objectKey, displayTfs, position, rotation, scale, ghost, highlightColor, children }, forwardedRef) => {

  const innerRef = useRef(null);
  const ref = useCombinedRefs(forwardedRef, innerRef);

  const tf = useSceneStore(useCallback(state=>
      state.tfs[objectKey]
    ,[objectKey]), shallow)

  const clock = useSceneStore(state=>state.clock)

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const time = clock.getElapsed() * 1000;
    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(
        position ? position.x : typeof tf.position.x === 'function' ? tf.position.x(time) : tf.position.x,
        position ? position.y : typeof tf.position.y === 'function' ? tf.position.y(time) : tf.position.y,
        position ? position.z : typeof tf.position.z === 'function' ? tf.position.z(time) : tf.position.z,
      );
      ref.current.quaternion.set(
        rotation ? rotation.x : typeof tf.rotation.x === 'function' ? tf.rotation.x(time) : tf.rotation.x,
        rotation ? rotation.y : typeof tf.rotation.y === 'function' ? tf.rotation.y(time) : tf.rotation.y,
        rotation ? rotation.z : typeof tf.rotation.z === 'function' ? tf.rotation.z(time) : tf.rotation.z,
        rotation ? rotation.w : typeof tf.rotation.w === 'function' ? tf.rotation.w(time) : tf.rotation.w
      );
      ref.current.scale.set(
        scale ? scale.x : !tf.scale ? 0 : typeof tf.scale.x === 'function' ? tf.scale.x(time) : tf.scale.x,
        scale ? scale.y : !tf.scale ? 0 : typeof tf.scale.y === 'function' ? tf.scale.y(time) : tf.scale.y,
        scale ? scale.z : !tf.scale ? 0 : typeof tf.scale.z === 'function' ? tf.scale.z(time) : tf.scale.z,
      );
    }
  },[tf, position, rotation, scale, ref, clock]));

  const arrow = ARROW_GEOM();

  return (
      <group ref={ref} dispose={null} up={[0,0,1]}>
      {displayTfs && (
        <>
          <axesHelper size={1}/>
          <mesh key={`${objectKey}ArrowX`} geometry={arrow} material={ghost ? GhostMaterial(highlightColor) : MaterialMaker(255,0,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,0,-Math.PI/2]}/>
          <mesh key={`${objectKey}ArrowY`} geometry={arrow} material={ghost ? GhostMaterial(highlightColor) : MaterialMaker(0,255,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,Math.PI/2,0]}/>
          <mesh key={`${objectKey}ArrowZ`} geometry={arrow} material={ghost ? GhostMaterial(highlightColor) : MaterialMaker(0,0,255,1)} scale={[0.2,0.5,0.2]} rotation={[Math.PI/2,0,0]}/>
        </>
      )}
      {children}
    </group>
    
  );
});

export function WorldTF({ displayTfs, children }) {

  const arrow = ARROW_GEOM();

  return (
    <group dispose={null} up={[0,0,1]}>
      {displayTfs && (
        <>
          <axesHelper size={1}/>
          <mesh key={`$WorldArrowX`} geometry={arrow} material={MaterialMaker(255,0,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,0,-Math.PI/2]}/>
          <mesh key={`$WorldArrowY`} geometry={arrow} material={MaterialMaker(0,255,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,Math.PI/2,0]}/>
          <mesh key={`$WorldArrowZ`} geometry={arrow} material={MaterialMaker(0,0,255,1)} scale={[0.2,0.5,0.2]} rotation={[Math.PI/2,0,0]}/>
        </>
      )}
      {children}
    </group>
  );
};

export function GizmoTF({ displayTfs, children }) {

  const arrow = ARROW_GEOM();

  return (
    <group dispose={null} up={[0,0,1]}>
      {displayTfs && (
        <>
          <axesHelper size={1}/>
          <mesh key={`$WorldArrowX`} geometry={arrow} material={MaterialMaker(255,0,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,0,-Math.PI/2]}/>
          <mesh key={`$WorldArrowY`} geometry={arrow} material={MaterialMaker(0,255,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,Math.PI/2,0]}/>
          <mesh key={`$WorldArrowZ`} geometry={arrow} material={MaterialMaker(0,0,255,1)} scale={[0.2,0.5,0.2]} rotation={[Math.PI/2,0,0]}/>
        </>
      )}
      {children}
    </group>
  );
};

