import React, { useLayoutEffect } from "react";
import Scene from "../components/Scene";
import { useDefaultSceneStore } from "../components";
import { MeshLookupTable } from "./meshes/MeshLookup";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

export default {
  title: "Item Movement",
  component: Scene,
};

const Template = (args) => {
  const { tfs, items, hulls, lines, texts, points, ...otherArgs } = args;
  useLayoutEffect(() => {
    useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts, points });
  }, [tfs, items, hulls, lines, texts, points]);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div
        style={{ height: "calc(100vh - 2rem)", width: "calc(100vw - 2rem)" }}
      >
        <Scene
          {...otherArgs}
          store={useDefaultSceneStore}
          meshLookup={MeshLookupTable}
        />
      </div>
    </ErrorBoundary>
  );
};

export const ItemMovement = Template.bind({});
ItemMovement.storyName = "Item Movement";
ItemMovement.args = {
  tfs: {
    moving: {
      frame: "world",
      // position: { x: (time => Math.cos(time / 1000)), y: (time) => Math.sin(time / 1000), z: 0 },
      position: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
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
      highlighted: true,
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
      transformMode: "translate",
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
      transformMode: "rotate",
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
      transformMode: "scale",
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
