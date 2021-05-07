import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import Content from './Content';

export default function Scene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { backgroundColor } = props;

  return (
    <Canvas
      colorManagement
      shadows
      style={{ background: backgroundColor ? backgroundColor : "#d0d0d0" }}
      resize={{ polyfill: ResizeObserver }}
    >
      <Suspense fallback={null}>
        <Content {...props}/>
      </Suspense>
      
    </Canvas>
  );
}
