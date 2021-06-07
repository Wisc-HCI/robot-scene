import React, { Suspense } from 'react';
import "antd/dist/antd.css";
import { Canvas } from "@react-three/fiber";
import { useProgress, Html } from "@react-three/drei";
import { Progress } from 'antd';
import { ResizeObserver } from "@juggle/resize-observer";
import Content from './Content';

function Loading() {
  const { progress } = useProgress();
  return <Html><Progress type="circle" percent={progress.toPrecision(2)} /></Html>
}

export default function Scene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { backgroundColor } = props;

  return (
    <Canvas
      shadows
      style={{ background: backgroundColor ? backgroundColor : "#d0d0d0" }}
      resize={{ polyfill: ResizeObserver }}
    >
      <Suspense fallback={<Loading/>}>
        <Content {...props}/>
      </Suspense>
      
    </Canvas>
  );
}
