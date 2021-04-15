import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { frameUpdate } from "../Util/Transforms";

function Wrapper(props) {
  const mesh = useRef();

  const { data, scale } = props;

  useFrame(() => {
    const { position, rotation, transform } = props;

    frameUpdate(mesh, position, rotation, transform);
  });

  // WIll have to figure out the color issue at some point

  return (
    <mesh
      {...props}
      ref={mesh}
      geometry={data.geometry}
      material={data.material}
      scale={[scale.x, scale.y, scale.z]}
    />
  );
}

export default Wrapper;
