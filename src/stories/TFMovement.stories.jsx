import React, { useEffect, useState } from "react";
import Scene from "../components/Scene";
import { useDefaultSceneStore } from "../components";
import { MeshLookupTable } from "./meshes/MeshLookup";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

export default {
  title: "Moving Transforms",
  component: Scene,
};

const Template = (args) => {
  const { tfs, items, hulls, lines, texts, points, ...otherArgs } = args;

  const setProperty = useDefaultSceneStore((state) => state.setProperty);
  const [translateSnap, setTranslateSnap] = useState(0);
  const [rotateSnap, setRotateSnap] = useState(0);
  const [scaleSnap, setScaleSnap] = useState(0);

  useEffect(() => {
    useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts, points });
  }, [tfs, items, hulls, lines, texts, points]);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div
        style={{ height: "calc(100vh - 3rem)", width: "calc(100vw - 2rem)" }}
      >
        <Scene
          {...otherArgs}
          store={useDefaultSceneStore}
          meshLookup={MeshLookupTable}
          displayTfs
          translateSnap={translateSnap}
          rotateSnap={rotateSnap}
          scaleSnap={scaleSnap}
        />
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setTranslateSnap(0);
              setProperty(["tfs", "moving", "transformMode"], "translate");
            }}
          >
            Translate Free
          </button>
          <button
            onClick={() => {
              setTranslateSnap(0.25);
              setProperty(["tfs", "moving", "transformMode"], "translate");
            }}
          >
            Translate Snapping
          </button>
          <button
            onClick={() => {
              setRotateSnap(0);
              setProperty(["tfs", "moving", "transformMode"], "rotate");
            }}
          >
            Rotate Free
          </button>
          <button
            onClick={() => {
              setRotateSnap(Math.PI / 6);
              setProperty(["tfs", "moving", "transformMode"], "rotate");
            }}
          >
            Rotate Snapping
          </button>
          <button
            onClick={() => {
              setScaleSnap(0);
              setProperty(["tfs", "moving", "transformMode"], "scale");
            }}
          >
            Scale Free
          </button>
          <button
            onClick={() => {
              setScaleSnap(0.1);
              setProperty(["tfs", "moving", "transformMode"], "scale");
            }}
          >
            Scale Snapping
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export const MovingTransforms = Template.bind({});
MovingTransforms.storyName = "Moving Transforms";
MovingTransforms.args = {
  tfs: {
    moving: {
      frame: "world",
      // position: { x: (time => Math.cos(time / 1000)), y: (time) => Math.sin(time / 1000), z: 0 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      transformMode: "rotate",
    },
  },
  items: {
    immovable: {
      shape: "cube",
      name: "Immovable Cube",
      frame: "moving",
      position: { x: 0, y: 0, z: 1 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 255, g: 10, b: 10, a: 1 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
    },
    translateCube: {
      shape: "cube",
      name: "Translate Cube (Async)",
      frame: "moving",
      position: { x: 1, y: 1, z: 1 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 10, g: 10, b: 10, a: 1 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      highlighted: false,
    },
    rotateCube: {
      shape: "cube",
      name: "Rotate Cube",
      frame: "moving",
      position: { x: 1, y: 0, z: 1 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 10, g: 255, b: 10, a: 1 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      highlighted: false,
    },
    scaleCube: {
      shape: "cube",
      name: "Scale Cube",
      frame: "moving",
      position: { x: 0, y: 1, z: 1 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 10, g: 10, b: 255, a: 1 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      highlighted: false,
    },
  },
  lines: {},
  hulls: {},
  texts: {},
  points: {},
  displayTfs: false,
  displayGrid: true,
  isPolar: false,
  backgroundColor: "#d0d0d0",
  planeColor: "#a8a8a8",
  highlightColor: "#ffffff",
  plane: -0.75,
  fov: 60,
  paused: false,
  ar: false,
  vr: false,
  onPointerMissed: () => console.log("Missed Click"),
};
