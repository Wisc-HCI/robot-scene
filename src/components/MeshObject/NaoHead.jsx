import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// import NaoHead from "./meshes/NewNaoHead.gltf";
import NaoHeadMesh from "./meshes/NaoHead.glb";
import LOOKUP from "./MeshLookup";


export default function Model(props) {
  const group = useRef();
  console.log(LOOKUP);
  console.log(NaoHeadMesh);
  const { nodes, materials } = useGLTF(NaoHeadMesh);;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.HeadPitchUV}
        geometry={nodes.HeadPitch001.geometry}
        position={[-0.14, 0.19, -0.11]}
        scale={[0.01, 0.01, 0.01]}
      >
      <meshStandardMaterial
        opacity={1}
        color="#ffffff"
      />
      </mesh>
    </group>
  );
}

useGLTF.preload(NaoHeadMesh);
