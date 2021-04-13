import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import CameraControls from "./CameraControls";
import SceneObject from "./SceneObject";

import { STANDARD_MESHES } from "./Util/StandardMeshes";
import FrameObject from "./FrameObject";
import MeshObject from "./MeshObject";
// import NaoHead from "./MeshObject/New_naohead"; // importing the new naoHead Hunter's

function RobotScene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { content, tfTree, displayTfs, displayGrid, isPolar } = props;

  let { backgroundColor } = props;
  backgroundColor = backgroundColor === undefined ? "#303030" : backgroundColor;

  // TODO: apply the transforms to the objects
  // based on props.tftree
  // (feel free to structure tftree in any easy/obvious way)
  return (
    <Canvas
      style={{ background: backgroundColor }}
      resize={{ polyfill: ResizeObserver }}
    >
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {content.map((objData, i) => {
          if (STANDARD_MESHES.indexOf(objData.type) > -1) {
            return (
              <SceneObject
                key={i}
                type={objData.type}
                scale={objData.scale}
                position={objData.position}
                rotation={objData.rotation}
                color={objData.color}
                transform={tfTree[objData.frame]}
              />
            );
          } else {
            return (
              <MeshObject
                key={i}
                path={objData.path}
                scale={objData.scale}
                position={objData.position}
                rotation={objData.rotation}
                color={objData.color}
                transform={tfTree[objData.frame]}
              />
            );
          }
        })}

        {displayTfs
          ? Object.keys(tfTree).map((frame, i) => (
              <FrameObject key={i} tmp={frame} transform={tfTree[frame]} />
            ))
          : null}
      </Suspense>

      {displayGrid ? (
        isPolar ? (
          <polarGridHelper args={[10, 16, 8, 64, "white", "gray"]} />
        ) : (
          <gridHelper args={[20, 20, `white`, `gray`]} />
        )
      ) : null}
    </Canvas>
  );
}

export default RobotScene;
