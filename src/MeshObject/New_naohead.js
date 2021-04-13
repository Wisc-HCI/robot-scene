import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./meshes/New_naohead.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.HeadPitchUV}
        geometry={nodes.HeadPitch001.geometry}
        position={[-0.14, 0.19, -0.11]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
}

// useGLTF.preload("./meshes/New_naohead.glb");
