import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Circle } from "@react-three/drei";
import { useSceneStore } from "./SceneContext";
import { AmbientLight, DirectionalLight } from "./Util/Light";
import { MaterialMaker } from "./Util/MaterialMaker";
import { hexToRgb } from "./Util/ColorConversion";
import { OrbitControls } from "@react-three/drei";
import { TransformableObject } from "./Util/TransformControls";
import { sortBy, isEqual } from "lodash";
import {
  EffectComposer,
  Selection,
  Outline,
} from "@react-three/postprocessing";
import shallow from "zustand/shallow";
// import { renderTree } from './Util/Helpers';
import Tree from "./Tree";

const comparisonFn = (oldVals, newVals) => {
  if (oldVals.length !== newVals.length) {
    // console.log('length mismatch')
    return false;
  }
  return !oldVals.some((oldVal,i) => {
    return !isEqual(newVals[i], oldVal);
  });
};

function Content({
  displayTfs = false,
  displayGrid = true,
  isPolar = false,
  backgroundColor = "#d0d0d0",
  planeColor = "#a8a8a8",
  highlightColor = "#00ffff",
  plane = 0,
  translateSnap = 0,
  rotateSnap = 0,
  scaleSnap = 0,
  debug = false
}) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.
  if (debug) {
    console.log("content rerender");
  }
  
  const camera = useThree((state) => state.camera);
  // console.log(camera)

  const clock = useSceneStore(state => state.clock,shallow);

  useFrame(() => {
    clock.update();
  })

  const tfs = useSceneStore(
    (state) =>
      sortBy(
        Object.entries(state.tfs).map(([key, tf]) => {
          return {
            key,
            frame: tf.frame,
            transformMode: tf.transformMode,
            source: "tfs",
          };
        }),
        (o) => o.key
      ),
    comparisonFn
  );

  const items = useSceneStore(
    (state) =>
      sortBy(
        Object.entries(state.items).map(([key, item]) => {
          return {
            key,
            frame: item.frame,
            transformMode: item.transformMode,
            source: "items",
          };
        }),
        (o) => o.key
      ),
    comparisonFn
  );

  const lines = useSceneStore(
    (state) =>
      sortBy(
        Object.entries(state.lines).map(([key, line]) => {
          return { key, frame: line.frame, source: "lines" };
        }),
        (o) => o.key
      ),
    comparisonFn
  );

  const hulls = useSceneStore(
    (state) =>
      sortBy(
        Object.entries(state.hulls).map(([key, hull]) => {
          return {
            key,
            frame: hull.frame,
            source: "hulls",
          };
        }),
        (o) => o.key
      ),
    comparisonFn
  );

  const texts = useSceneStore(
    (state) =>
      sortBy(
        Object.entries(state.texts).map(([key, text]) => {
          return {
            key,
            frame: text.frame,
            source: "texts",
          };
        }),
        (o) => o.key
      ),
    comparisonFn
  );

  const movableStuff = [...items, ...tfs].filter(
    (item) => ["translate", "rotate", "scale"].indexOf(item.transformMode) > -1
  );

  const ambientLightRef = useRef();
  const pointLightRef = useRef();
  const directionalLightRef = useRef();
  const orbitControls = useRef();

  const planeRGB = hexToRgb(planeColor);
  const planeRGBA = [planeRGB.r, planeRGB.g, planeRGB.b, 0.5];

  return (
    <React.Fragment>
      <OrbitControls ref={orbitControls} makeDefault camera={camera} />
      <pointLight
        ref={pointLightRef}
        intensity={0.5}
        position={[-1, -3, 3]}
        color="#FFFAEE"
      />
      <AmbientLight ref={ambientLightRef} intensity={0.7} color="white" />
      <DirectionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 15, 15]}
        intensity={0.6}
        color="#FFFAEE"
      />
      <spotLight
        penumbra={1}
        position={[-1, -1, 4]}
        intensity={0.3}
        castShadow
        color="#FFFAEE"
      />
      <color attach="background" args={[backgroundColor]} />
      <fogExp2 attach="fog" args={[backgroundColor, 0.01]} />

      <Circle
        receiveShadow
        scale={1000}
        position={[0, 0, plane - 0.01]}
        material={MaterialMaker(...planeRGBA)}
      />

      <Selection>
        <EffectComposer autoClear={false}>
          <Outline
            visibleEdgeColor={highlightColor}
            hiddenEdgeColor={highlightColor}
            blur
            kernelSize={1}
            edgeStrength={50}
            pulseSpeed={0.25}
            xRay
          />
        </EffectComposer>
        <Tree
          activeTf="world"
          displayTfs={displayTfs}
          allTfs={tfs}
          allItems={items}
          allLines={lines}
          allHulls={hulls}
          allTexts={texts}
          highlightColor={highlightColor}
        />
      </Selection>

      <group
        position={[0, 0, plane]}
        rotation={[Math.PI / 2, 0, 0]}
        up={[0, 0, 1]}
      >
        {displayGrid &&
          (isPolar ? (
            <polarGridHelper args={[10, 16, 8, 64, "white", "gray"]} />
          ) : (
            <gridHelper args={[20, 20, `white`, `gray`]} />
          ))}
      </group>

      {movableStuff.map((movableObject, idx) => (
        <TransformableObject
          key={`movableObjectTransform-${idx}`}
          objectInfo={movableObject}
          mode={movableObject.transformMode}
          displayTfs={displayTfs}
          allTfs={tfs}
          allItems={items}
          allLines={lines}
          allHulls={hulls}
          allTexts={texts}
          translateSnap={translateSnap}
          rotateSnap={rotateSnap}
          scaleSnap={scaleSnap}
          highlightColor={highlightColor}
          onDragEnd={() => {
            if (orbitControls.current) {
              orbitControls.current.enabled = true;
            }
          }}
          onDragStart={() => {
            if (orbitControls.current) {
              orbitControls.current.enabled = false;
            }
          }}
        />
      ))}

      {/* <GizmoHelper
        alignment="bottom-right"
        margin={[80, 80]}
      >

        <group scale={[80, 80, 80]}>
          <AmbientLight intensity={0.4} color='white' />
          <pointLight intensity={0.5} position={[-1, -3, 3]} color='#FFFAEE' />
          <DirectionalLight
            castShadow position={[5, 15, 15]}
            intensity={0.6}
            color="#FFFAEE"
          />
          <mesh hidden>
            <boxGeometry args={[0.01,0.01,0.01]}/>
            <meshStandardMaterial color='lime'/>
          </mesh>
          {renderTree('gizmo', displayTfs, tfs, items, lines, hulls, texts, highlightColor)}
        </group>
      </GizmoHelper> */}
    </React.Fragment>
  );
}

export default Content;
