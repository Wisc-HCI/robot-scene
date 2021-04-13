// The intent of this is to provide a visualization of the frame axes (xyz) => (rgb "lines")

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { frameUpdate } from "./Util/Transforms";

function FrameObject(props) {
  const mesh = useRef();

  useFrame(() => {
    const { transform } = props;

    frameUpdate(
      mesh,
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0, w: 1 },
      transform
    );
  });

  const origin = { x: 0, y: 0, z: 0 };

  return (
    <mesh {...props} ref={mesh}>
      <arrowHelper args={[{ x: 1, y: 0, z: 0 }, origin, 0.5, "#ff0000"]} />
      <arrowHelper args={[{ x: 0, y: 1, z: 0 }, origin, 0.5, "#00ff00"]} />
      <arrowHelper args={[{ x: 0, y: 0, z: 1 }, origin, 0.5, "#0000ff"]} />
    </mesh>
  );
}

export default FrameObject;
