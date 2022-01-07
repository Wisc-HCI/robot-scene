import React, { useCallback, useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import store from "./SceneStore";
import { ARROW_GEOM } from "./Util/StandardMeshes";
import { MaterialMaker } from './Util/MaterialMaker';
// import { Quaternion } from 'three';

// const STANDARD_ROTATION = new Quaternion(0,0,1,0)

export default function TF({ tfKey, displayTfs, children, store }) {

  const ref = useRef();

  useFrame(useCallback(({clock}) => {
    // Outside of react rendering, adjust the positions of all tfs.
    const tf = store.getState().tfs[tfKey];
    const time = clock.getElapsedTime() * 1000;
    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(
        typeof tf.translation.x === 'function' ? tf.translation.x(time) : tf.translation.x,
        typeof tf.translation.y === 'function' ? tf.translation.y(time) : tf.translation.y,
        typeof tf.translation.z === 'function' ? tf.translation.z(time) : tf.translation.z,
      );
      ref.current.quaternion.set(
        typeof tf.rotation.x === 'function' ? tf.rotation.x(time) : tf.rotation.x,
        typeof tf.rotation.y === 'function' ? tf.rotation.y(time) : tf.rotation.y,
        typeof tf.rotation.z === 'function' ? tf.rotation.z(time) : tf.rotation.z,
        typeof tf.rotation.w === 'function' ? tf.rotation.w(time) : tf.rotation.w
      );
    }
  },[tfKey, ref, store]));

  const arrow = ARROW_GEOM();

  return (
      <group ref={ref} dispose={null} up={[0,0,1]}>
      {displayTfs && (
        <>
          <axesHelper size={1}/>
          <mesh key={`${tfKey}ArrowX`} geometry={arrow} material={MaterialMaker(255,0,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,0,-Math.PI/2]}/>
          <mesh key={`${tfKey}ArrowY`} geometry={arrow} material={MaterialMaker(0,255,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,Math.PI/2,0]}/>
          <mesh key={`${tfKey}ArrowZ`} geometry={arrow} material={MaterialMaker(0,0,255,1)} scale={[0.2,0.5,0.2]} rotation={[Math.PI/2,0,0]}/>
        </>
      )}
      {children}
    </group>
    
  );
};

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

export function GhostTF({ transforms, children, store }) {

  if (transforms.length > 0) {
    const pos = [transforms[0].position.x,transforms[0].position.y,transforms[0].position.z];
    const rot = [transforms[0].rotation.x,transforms[0].rotation.y,transforms[0].rotation.z,transforms[0].rotation.w]
    return (
      <group position={pos} quaternion={rot} up={[0,0,1]}>
        <GhostTF transforms={transforms.filter((_,i)=>i!==0)} store={store}>
          {children}
        </GhostTF>
      </group>
    )
  } else {
    return (
      <>
        {children}
      </>
    )
  }
};

