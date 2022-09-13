import React, { useCallback, useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
// import store from "./SceneStore";
import { ARROW_GEOM } from "./Util/StandardMeshes";
import { MaterialMaker, GhostMaterial } from './Util/MaterialMaker';
// import { Quaternion } from 'three';
import { useSceneStore } from './SceneContext';
import { useCombinedRefs,getGetter } from "./Util/Helpers";
// import shallow from "zustand/shallow";
// const STANDARD_ROTATION = new Quaternion(0,0,1,0)
export default forwardRef(({ objectKey, displayTfs, position, rotation, scale, ghost, highlightColor, children }, forwardedRef) => {

  const innerRef = useRef(null);
  const ref = useCombinedRefs(forwardedRef, innerRef);

  const tf = useSceneStore(useCallback(state=>
      state.tfs[objectKey]
    ,[objectKey]))

  const clock = useSceneStore(state=>state.clock)

  const positionXGetter =  getGetter(tf.position.x);
  const positionYGetter =  getGetter(tf.position.y);
  const positionZGetter =  getGetter(tf.position.z);

  const rotationXGetter =  getGetter(tf.rotation.x);
  const rotationYGetter =  getGetter(tf.rotation.y);
  const rotationZGetter =  getGetter(tf.rotation.z);
  const rotationWGetter =  getGetter(tf.rotation.w);

  const scaleXGetter =  getGetter(tf.scale.x);
  const scaleYGetter =  getGetter(tf.scale.y);
  const scaleZGetter =  getGetter(tf.scale.z);

  

  // console.log("positionXGetter" , positionXGetter);
  // console.log("positionYGetter" , positionYGetter);
  // console.log("positionZGetter" , positionZGetter);

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const time = clock.getElapsed() * 1000;
    //console.log("positionXGetter(time)" , positionXGetter(time));
    //console.log("positionX" , position);
    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(
        position ? position.x : positionXGetter(time),
        position ? position.y : positionYGetter(time),
        position ? position.z : positionZGetter(time), 
      );
      ref.current.quaternion.set(
        rotation ? rotation.x : rotationXGetter(time),
        rotation ? rotation.y : rotationYGetter(time),
        rotation ? rotation.z : rotationZGetter(time),
        rotation ? rotation.w : rotationWGetter(time),
      );
      ref.current.scale.set(
        scale ? scale.x : !tf.scale ? 0 : scaleXGetter(time),
        scale ? scale.y : !tf.scale ? 0 : scaleYGetter(time),
        scale ? scale.z : !tf.scale ? 0 : scaleZGetter(time),
      );
    }
  },[tf, position, rotation, scale, ref]));

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
