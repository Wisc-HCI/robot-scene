import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import CameraControls from "./CameraControls";
import SceneObject from "./SceneObject";

import { STANDARD_MESHES } from "./Util/StandardMeshes";
import FrameObject from "./FrameObject";
import MeshObject from "./MeshObject";
import NaoHead from "./MeshObject/NaoHead";
// import NaoHeadMesh from "./MeshObject/meshes/NewNaoHead.glb";

function RobotScene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { displayTfs, displayGrid, isPolar } = props;
  let { backgroundColor, content, tfTree } = props;

  backgroundColor = backgroundColor === undefined ? "#303030" : backgroundColor;
  content = content === undefined ? [] : content;
  tfTree = tfTree === undefined ? {world: {translation: { x: 0, y: 0, z: 0 }, rotation: { w: 1, x: 0, y: 0, z: 0 }}} : tfTree;

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
        <NaoHead/>
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

const tree = {
    world: {
      translation: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 }
    },
    other1: {
      translation: { x: 1, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 }
    },
    other2: {
      translation: { x: -2, y: 0, z: 2 },
      rotation: { w: 0.525322, x: 0.8509035, y: 0, z: 0 }
    },
    other3: {
      translation: { x: 2, y: 0, z: 0 },
      rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 }
    }
};

const objects = [
    {
      type: "cube",
      name: "My Cube",
      frame: "world",
      position: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 255, g: 50, b: 10, a: 0.75 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      highlighted: false
    },
    {
      type: "sphere",
      name: "My Sphere",
      frame: "world",
      position: { x: 0, y: 2, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 255, g: 255, b: 70, a: 0.25 },
      scale: { x: 1, y: 2, z: 1 },
      highlighted: false
    },
    // See here about rotating the cylinder to match  the representation from ROS:
    // https://github.com/RobotWebTools/ros3djs/blob/develop/src/markers/Marker.js
    {
      type: "cylinder",
      name: "My Cylinder",
      frame: "other2",
      position: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 10, g: 200, b: 235, a: 0.5 },
      scale: { x: 1, y: 1, z: 1 },
      highlighted: false
    },
    {
      type: "arrow",
      name: "My Arrow",
      frame: "other1",
      position: { x: 1, y: 0, z: 0 },
      rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
      color: { r: 255, g: 70, b: 250, a: 0.5 },
      scale: { x: 3, y: 1, z: 3 },
      highlighted: false
    },
    {
      type: "arrow",
      name: "My Arrow",
      frame: "other3",
      position: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 255, g: 70, b: 250, a: 0.5 },
      scale: { x: 3, y: 1, z: 3 },
      highlighted: false
    },
    // {
    //   type: "mesh",
    //   path: "/HeadPitch.dae",
    //   name: "Nao Head",
    //   frame: "world",
    //   position: { x: 0, y: -1, z: 0 },
    //   rotation: { w: 1, x: 0, y: 0, z: 0 },
    //   scale: { x: 0.01, y: 0.01, z: 0.01 },
    //   highlighted: true
    // },
    // {
    //   type: "mesh",
    //   path: "/test.stl",
    //   name: "test",
    //   frame: "world",
    //   position: { x: 0, y: 0, z: -3 },
    //   rotation: { w: 1, x: 0, y: 0, z: 0 },
    //   scale: { x: 1, y: 1, z: 1 },
    //   color: { r: 255, g: 0, b: 255, a: 255 }
    // },
    // {
    //   type: "mesh",
    //   path: "/LHipPitch_0.10.stl",
    //   name: "Nao Hip",
    //   frame: "world",
    //   position: { x: 0, y: 2, z: 1 },
    //   rotation: { w: 1, x: 0, y: 0, z: 0 },
    //   color: { r: 255, g: 25, b: 25, a: 255 }, // I think you can override STL Colors?
    //   scale: { x: 1, y: 1, z: 1 },
    //   highlighted: false
    // },
    // {
    //   type: "mesh",
    //   path: "/LHipYawPitch_0.10.stl",
    //   name: "Nao Hip",
    //   frame: "world",
    //   position: { x: 0, y: 5, z: 1 },
    //   rotation: { w: 1, x: 0, y: 0, z: 0 },
    //   scale: { x: 1, y: 1, z: 1 },
    //   highlighted: false
    // },
    // {
    //   type: "mesh",
    //   path: "/wheel.obj", // Not sure about the mtl files. If you could also load the textures, that would be great
    //   name: "Eve Wheel",
    //   frame: "world",
    //   position: { x: 2, y: 2, z: 0 },
    //   rotation: { w: 1, x: 0, y: 0, z: 0 },
    //   color: { r: 1, g: 0.5, b: 0.25, a: 0.5 },
    //   scale: { x: 1, y: 1, z: 1 },
    //   highlighted: false
    // }
];

RobotScene.propTypes = {
  content: PropTypes.array,
  tfTree: PropTypes.object,
  displayTfs: PropTypes.bool,
  displayGrid: PropTypes.bool,
  isPolar: PropTypes.bool
};

RobotScene.defaultProps = {
  content: objects,
  tfTree: tree,
  displayTfs: true,
  displayGrid: true,
  isPolar: false
};

export { RobotScene };
