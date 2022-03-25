import React, { useCallback, useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import store from "./SceneStore";
import { ARROW_GEOM } from "./Util/StandardMeshes";
import { MaterialMaker } from './Util/MaterialMaker';
// import { Quaternion } from 'three';
import { useSceneStore } from './SceneContext';
// import shallow from "zustand/shallow";
// const STANDARD_ROTATION = new Quaternion(0,0,1,0)

export default function TF({ tfKey, displayTfs, children }) {

  const ref = useRef();

  const [translationX, translationY, translationZ, 
    rotationX, rotationY, rotationZ, rotationW] = useSceneStore(useCallback(state=>[
      state.tfs[tfKey].translation.x,
      state.tfs[tfKey].translation.y,
      state.tfs[tfKey].translation.z,
      state.tfs[tfKey].rotation.x,
      state.tfs[tfKey].rotation.y,
      state.tfs[tfKey].rotation.z,
      state.tfs[tfKey].rotation.w
    ],[tfKey]))

  const clock = useSceneStore(state=>state.clock)

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const time = clock.getElapsed() * 1000;
    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(
        typeof translationX === 'function' ? translationX(time) : translationX,
        typeof translationY === 'function' ? translationY(time) : translationY,
        typeof translationZ === 'function' ? translationZ(time) : translationZ,
      );
      ref.current.quaternion.set(
        typeof rotationX === 'function' ? rotationX(time) : rotationX,
        typeof rotationY === 'function' ? rotationY(time) : rotationY,
        typeof rotationZ === 'function' ? rotationZ(time) : rotationZ,
        typeof rotationW === 'function' ? rotationW(time) : rotationW
      );
    }
  },[tfKey, ref, translationX, translationY, translationZ, rotationX, rotationY, rotationZ, rotationW]));

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

export function GhostTF({ transforms, children }) {

  const ref = useRef();

  const [translationX, translationY, translationZ, 
    rotationX, rotationY, rotationZ, rotationW] = useSceneStore(useCallback(state=>{
      if (transforms.length > 0) {
        const tfKey = transforms[0];
        return [
          state.tfs[tfKey].translation.x,
          state.tfs[tfKey].translation.y,
          state.tfs[tfKey].translation.z,
          state.tfs[tfKey].rotation.x,
          state.tfs[tfKey].rotation.y,
          state.tfs[tfKey].rotation.z,
          state.tfs[tfKey].rotation.w
        ]
      } else {
        return [0,0,0,0,0,0,1]
      }
    },[transforms]))

  const clock = useSceneStore(state=>state.clock)

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const time = clock.getElapsed() * 1000;
    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(
        typeof translationX === 'function' ? translationX(time) : translationX,
        typeof translationY === 'function' ? translationY(time) : translationY,
        typeof translationZ === 'function' ? translationZ(time) : translationZ,
      );
      ref.current.quaternion.set(
        typeof rotationX === 'function' ? rotationX(time) : rotationX,
        typeof rotationY === 'function' ? rotationY(time) : rotationY,
        typeof rotationZ === 'function' ? rotationZ(time) : rotationZ,
        typeof rotationW === 'function' ? rotationW(time) : rotationW
      );
    }
  },[translationX, translationY, translationZ, 
    rotationX, rotationY, rotationZ, rotationW, ref]));

  const arrow = ARROW_GEOM();

  if (transforms.length > 0) {
    return (
      <group ref={ref} up={[0,0,1]}>
        <GhostTF transforms={transforms.splice(1)}>
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

