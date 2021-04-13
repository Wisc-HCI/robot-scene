import React, { useRef, useState } from "react";

import { useFrame } from "@react-three/fiber";

import { StandardMeshesLookup } from "./Util/StandardMeshes";
import { rgbToHex } from "./Util/ColorConversion";
import { frameUpdate } from "./Util/Transforms";

function SceneObject(props) {
  const mesh = useRef();

  const { type, color, scale } = props;

  const geometry = StandardMeshesLookup(type);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    const { position, rotation, transform } = props;
    frameUpdate(mesh, position, rotation, transform);
  });

  // For highlighted objects, something like this might be nice:
  // https://threejs.org/examples/?q=out#webgl_postprocessing_outline

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[scale.x, scale.y, scale.z]}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      geometry={geometry}
    >
      <meshStandardMaterial
        transparent
        opacity={color.a}
        color={rgbToHex(color)}
      />
    </mesh>
  );
}

export default SceneObject;
