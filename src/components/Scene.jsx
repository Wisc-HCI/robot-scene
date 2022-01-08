import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { useProgress, Html } from "@react-three/drei";
import { Progress } from 'antd';
import { ResizeObserver } from "@juggle/resize-observer";
import Content from './Content';
import * as THREE from 'three';
import useSceneStore from './SceneStore'

THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

function Loading() {
  const { progress } = useProgress();
  return <Html><Progress type="circle" percent={progress.toPrecision(2)} /></Html>
}

export default function Scene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { backgroundColor, store, fov } = props;

  return (
      <Canvas
        camera={{up:[0,0,1],fov,position:[0,-3,3]}}
        shadows
        style={{ background: backgroundColor ? backgroundColor : "#d0d0d0" }}
        resize={{ polyfill: ResizeObserver }}
        onPointerMissed={props.onPointerMissed ? props.onPointerMissed : ()=>{}}
      >
        <Suspense fallback={<Loading />}>
          <Content {...props} store={store ? store : useSceneStore}/>
        </Suspense>

      </Canvas>
  );
}
