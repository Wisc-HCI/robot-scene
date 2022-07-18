import React, { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
// // import { useProgress, Html } from "@react-three/drei";
import { ResizeObserver } from "@juggle/resize-observer";
import Content from "./Content";
import * as THREE from "three";
import { SceneProvider } from "./SceneContext";
import { MeshProvider } from './MeshContext';

THREE.Object3D.DefaultUp.set(0, 0, 1);

// function Loading() {
//   const { progress } = useProgress();
//   return <Html><div style={{width:'100%',height:'100%',fontFamily:'Helvetica'}}>{strip(progress.toPrecision(1))}%</div></Html>
// }

function Scene({
  backgroundColor,
  store,
  fov,
  onPointerMissed,
  meshLookup = {},
  ...otherProps
}) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  // console.log({ar,vr})

  // const CanvasComponent = ar ? ARCanvas : vr ? VRCanvas : Canvas;

  return (
    <Canvas
      camera={{ up: [0, 0, 1], fov, position: [0, -3, 3] }}
      shadows
      style={{ background: backgroundColor ? backgroundColor : "#d0d0d0" }}
      resize={{ polyfill: ResizeObserver }}
      onPointerMissed={onPointerMissed ? onPointerMissed : () => {}}
    >
      <SceneProvider store={store}>
        <MeshProvider meshes={meshLookup}>
          <Suspense>
            <Content
              {...otherProps}
              backgroundColor={backgroundColor}
            />
          </Suspense>
        </MeshProvider>
      </SceneProvider>
    </Canvas>
  );
}

export default memo(Scene)