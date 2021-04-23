import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import {
//   EffectComposer,
//   Outline,
//   SelectiveBloom
// } from "@react-three/postprocessing";
// import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { ResizeObserver } from "@juggle/resize-observer";
import { SceneObject } from "./SceneObject";
import FrameObject from "./FrameObject";
import { Lightmap } from "./Util/Lightmap";
import { AmbientLight, DirectionalLight } from './Util/Light';

function RobotScene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const lightInfo = {
    intensity: { value: 1, min: 0, max: 1, step: 0.1 },
    ambient: { value: 0.5, min: 0, max: 1, step: 0.1 },
    radius: { value: 25, min: 0, max: 100, step: 1 },
    blend: { value: 50, min: 1, max: 200, step: 1 }
  };

  const { displayTfs, displayGrid, isPolar, children } = props;
  let { backgroundColor, planeColor, content, tfTree } = props;

  backgroundColor = backgroundColor === undefined ? "#d0d0d0" : backgroundColor;
  planeColor = planeColor === undefined ? "#c0c0c0" : planeColor;
  content = content === undefined ? [] : content.map(data=>({...data, ref:React.createRef()}));

  const highlightedRefs = content.filter((data)=>(data.highlighted)).map((data)=>(data.ref));

  tfTree = tfTree === undefined ? {world: {translation: { x: 0, y: 0, z: 0 }, rotation: { w: 1, x: 0, y: 0, z: 0 }}} : tfTree;

  const ambientLightRef = React.createRef();
  const directionalLightRef = React.createRef();

  return (
    <Canvas
      colorManagement
      shadows
      style={{ background: backgroundColor }}
      resize={{ polyfill: ResizeObserver }}
    >
      <OrbitControls />
      <AmbientLight ref={ambientLightRef} />
      <DirectionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 10, 10]}
        intensity={0.5}
        color="white"
      />
      <color attach="background" args={[backgroundColor]} />
      <fog attach="fog" args={[backgroundColor, 60, 400]} />


      <Suspense fallback={null}>
        <Lightmap position={[50, 150, 50]} {...lightInfo}>
          <mesh scale={1000} position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
           <planeGeometry />
           <meshPhongMaterial color={planeColor}/>
         </mesh>
          {content.map((objData, i) => (
            <SceneObject
              key={i}
              transform={tfTree[objData.frame]}
              {...objData}
            />
          ))}
        </Lightmap>



        {displayTfs &&
          Object.keys(tfTree).map((frame, i) => (
              <FrameObject key={i} tmp={frame} transform={tfTree[frame]} />
          ))
        }


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

const defaultTree = {
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
}

const defaultContent = [
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
      name: "My Arrow 1",
      frame: "other1",
      position: { x: 1, y: 0, z: 0 },
      rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
      color: { r: 255, g: 70, b: 250, a: 0.5 },
      scale: { x: 3, y: 1, z: 3 },
      highlighted: false
    },
    {
      type: "arrow",
      name: "My Arrow 2",
      frame: "other3",
      position: { x: 1, y: 1, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 255, g: 70, b: 250, a: 0.5 },
      scale: { x: 3, y: 1, z: 3 },
      highlighted: false
    },
    {
      type: "mesh",
      path: "package://nao_meshes/meshes/V40/HeadPitch.dae",
      name: "Nao Head",
      frame: "world",
      position: { x: 0, y: 2, z: -1 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      scale: { x: 0.01, y: 0.01, z: 0.01 },
      highlighted: true
    },
]

RobotScene.propTypes = {
  content: PropTypes.array,
  tfTree: PropTypes.object,
  displayTfs: PropTypes.bool,
  displayGrid: PropTypes.bool,
  isPolar: PropTypes.bool,
  backgroundColor: PropTypes.string,
  planeColor: PropTypes.string
};

RobotScene.defaultProps = {
  content: defaultContent,
  tfTree: defaultTree,
  displayTfs: true,
  displayGrid: true,
  isPolar: false,
  backgroundColor: '#d0d0d0',
  planeColor: '#c0c0c0'
};

export { RobotScene };
