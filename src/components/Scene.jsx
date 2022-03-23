import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { useProgress, Html } from "@react-three/drei";
import { ResizeObserver } from "@juggle/resize-observer";
import Content from './Content';
import * as THREE from 'three';
import { ARCanvas, VRCanvas } from '@react-three/xr'
// import useSceneStore from './SceneStore'
import { SceneProvider } from "./SceneContext";

THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

function Loading() {
  const { progress } = useProgress();
  return <Html><div>{progress.toPrecision(2)}</div></Html>
}

export default function Scene({ backgroundColor, store, fov, ar, vr, onPointerMissed, ...otherProps }) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  // console.log({ar,vr})

  const CanvasComponent = ar ? ARCanvas : vr ? VRCanvas : Canvas;


  return (
    <CanvasComponent
      camera={{ up: [0, 0, 1], fov, position: [0, -3, 3] }}
      shadows
      style={{ background: backgroundColor ? backgroundColor : "#d0d0d0" }}
      resize={{ polyfill: ResizeObserver }}
      onPointerMissed={onPointerMissed ? onPointerMissed : () => { }}
    >
      <SceneProvider store={store}>
        <Suspense fallback={<Loading />}>
          <Content {...otherProps} backgroundColor={backgroundColor} />
        </Suspense>
      </SceneProvider>



    </CanvasComponent>
  )

}