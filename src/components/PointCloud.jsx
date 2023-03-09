import React, {
  useCallback,
  useRef,
  forwardRef,
  useState,
} from "react";
import {
  Points,
  PointMaterial,
  shaderMaterial,
} from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useSceneStore } from "./SceneContext";
import { useCombinedRefs } from "./Util/Helpers";
import { shallow } from "zustand/shallow";

export default forwardRef(({ objectKey }, forwardedRef) => {
  const innerRef = useRef(null);
  const pointsRef = useCombinedRefs(forwardedRef, innerRef);
  const clock = useSceneStore((state) => state.clock);

  const { points, scale, hidden } = useSceneStore(
    useCallback(
      (state) => ({
        points: state.points[objectKey].points,
        scale: state.points[objectKey].scale,
        hidden: state.points[objectKey].hidden,
      }),
      [objectKey]
    ),
    shallow
  );

  const [{ positions, colors }] = useState(() => ({
    positions: new Float32Array(points.length * 3),
    colors: new Float32Array(points.length * 3)
  }));

  useFrame(() => {
    // Outside of react rendering, adjust the positions of the item.
    const time = clock.getElapsed() * 1000;

    if (pointsRef.current) {
      for (let i = 0; i < points.length; i++) {
        let j = i * 3;

        positions[j] =
          typeof points[i].position.x === "function"
            ? points[i].position.x(time)
            : points[i].position.x;
        positions[j + 1] =
          typeof points[i].position.y === "function"
            ? points[i].position.y(time)
            : points[i].position.y;
        positions[j + 2] =
          typeof points[i].position.z === "function"
            ? points[i].position.z(time)
            : points[i].position.z;

        colors[j] =
          typeof points[i].color.r === "function"
            ? points[i].color.r(time) / 255
            : points[i].color.r / 255;
        colors[j + 1] =
          typeof points[i].color.g === "function"
            ? points[i].color.g(time) / 255
            : points[i].color.g / 255;
        colors[j + 2] =
          typeof points[i].color.b === "function"
            ? points[i].color.b(time) / 255
            : points[i].color.b / 255;
        
      }
    }
  });

  if (points.length <= 1) {
    return null;
  }

  return (
    <Points
      ref={pointsRef}
      hidden={hidden}
    //   stride={3}
      positions={positions}
      colors={colors}
    >
      {/* @ts-ignore */}
      <PointMaterial transparent vertexColors sizeAttenuation depthWrite size={scale*0.1}/>
    </Points>
  );
});
