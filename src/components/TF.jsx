import React, { useCallback, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useSceneStore from "./SceneStore";
import { ARROW_GEOM } from "./Util/StandardMeshes";
import { MaterialMaker } from './Util/MaterialMaker';
import { Quaternion } from 'three';

// const STANDARD_ROTATION = new Quaternion(0,0,1,0)

export default function TF({ tfKey, displayTfs, children }) {

  const ref = useRef();

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const tf = useSceneStore.getState().tfs[tfKey];

    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(
        tf.translation.x,
        tf.translation.y,
        tf.translation.z
      );
      ref.current.quaternion.set(
        tf.rotation.x,
        tf.rotation.y,
        tf.rotation.z,
        tf.rotation.w
      );
    }
  },[tfKey, ref]));

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

export function GhostTF({ transforms, children }) {

  if (transforms.length > 0) {
    const pos = [transforms[0].position.x,transforms[0].position.y,transforms[0].position.z];
    const rot = [transforms[0].rotation.x,transforms[0].rotation.y,transforms[0].rotation.z,transforms[0].rotation.w]
    return (
      <group position={pos} quaternion={rot} up={[0,0,1]}>
        <GhostTF transforms={transforms.filter((_,i)=>i!==0)}>
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

