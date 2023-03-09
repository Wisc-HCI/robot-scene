import React, { useLayoutEffect, useEffect } from "react";
import Scene from "../components/Scene";
import { useDefaultSceneStore } from "../components";
import { range } from "lodash";
import { SimplexNoise } from "three-stdlib";

export default {
  title: "PointClouds",
  component: Scene,
};

let simplexNoise = new SimplexNoise();

const Template = (args) => {
  const { tfs, items, hulls, lines, texts, points, ...otherArgs } = args;

  useLayoutEffect(() => {
    useDefaultSceneStore.setState({ tfs, items, hulls, lines, texts, points });
  }, [tfs, items, hulls, lines, texts, points]);


  return (
    <div style={{ height: "calc(100vh - 2rem)", width: "calc(100vw - 2rem)" }}>
      <Scene {...otherArgs} store={useDefaultSceneStore} />
    </div>
  );
};

export const PointClouds = Template.bind({});

PointClouds.args = {
  tfs: {
    movingFrame: {
      frame: "world",
      position: {
        x: (time) => Math.cos(time / 1000),
        y: (time) => Math.sin(time / 1000),
        z: 0,
      },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
  },
  items: {},
  lines: {},
  hulls: {},
  texts: {},
  points: {
    pointCloud: {
      frame: "movingFrame",
      scale: 1,
      points: range(0, 5000).map(() => {
        const seed1 = Math.random() * 5;
        const seed2 = Math.random() * 5;
        const seed3 = Math.random() * 5;

        return {
          position: {
            x: (t) =>
              seed1-2.5 + simplexNoise.noise(seed1*10, t / 1000),
            y: (t) =>
                seed2-2.5 + simplexNoise.noise(seed2*10, t / 1000),
            z: (t) =>
                seed3-2.5 + simplexNoise.noise(seed3*10, t / 1000),
          },
          color: {
            r: Math.round(Math.random() * 255),
            g: Math.round(Math.random() * 255),
            b: Math.round(Math.random() * 255),
          },
        };
      }),
    },
  },
  displayTfs: true,
  displayGrid: true,
  isPolar: false,
  backgroundColor: "#d0d0d0",
  planeColor: "#a8a8a8",
  highlightColor: "#ffffff",
  plane: -0.75,
  fov: 60,
  ar: false,
  vr: false,
  onPointerMissed: () => console.log("Missed Click"),
};
