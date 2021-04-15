import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { frameUpdate } from "../Util/Transforms";
import { rgbToHex } from "../Util/ColorConversion";

function STLObject(props) {
  const mesh = useRef();

  const { scale, data } = props;

  let { color } = props;
  color = color === undefined ? { r: 100, g: 100, b: 100, a: 1 } : color;

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    const { position, rotation, transform } = props;

    frameUpdate(mesh, position, rotation, transform);
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={scale ? [scale.x, scale.y, scale.z] : [1, 1, 1]}
      geometry={data}
    >
      <meshStandardMaterial
        transparent
        opacity={color.a}
        color={rgbToHex(color)}
      />
    </mesh>
  );
}

export default STLObject;
