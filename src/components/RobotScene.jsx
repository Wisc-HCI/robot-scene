import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ResizeObserver } from "@juggle/resize-observer";
import { SceneObject } from "./SceneObject";
import FrameObject from "./FrameObject";
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

         <mesh receiveShadow scale={1000} position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
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
  content: [],
  tfTree: {},
  displayTfs: true,
  displayGrid: true,
  isPolar: false,
  backgroundColor: '#d0d0d0',
  planeColor: '#c0c0c0'
};

export { RobotScene };
