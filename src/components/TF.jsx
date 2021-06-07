import React, { forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import useSceneStore from "./SceneStore";
import { ARROW_GEOM } from "./Util/StandardMeshes";
import { MaterialMaker } from './Util/MaterialMaker';

export default forwardRef(function TF(props, ref) {
  const { tfKey, displayTfs, children } = props;

  useFrame(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const tf = useSceneStore.getState().tfs[tfKey];

    ref.current.position.set(
      tf.translation.x,
      tf.translation.y,
      tf.translation.z
    );
    ref.current.quaternion.set(
      tf.rotation.x,
      tf.rotation.y,
      tf.rotation.z,
      tf.rotation.w
    );
  });

  const arrow = ARROW_GEOM();

  return (
    <group ref={ref} dispose={null}>
      {displayTfs && (
        <>
          <mesh key={`${tfKey}ArrowX`} geometry={arrow} material={MaterialMaker(255,0,0,1)} scale={[0.15,0.5,0.15]} rotation={[0,0,-Math.PI/2]}/>
          <mesh key={`${tfKey}ArrowY`} geometry={arrow} material={MaterialMaker(0,255,0,1)} scale={[0.15,0.5,0.15]} rotation={[0,-Math.PI/2,0]}/>
          <mesh key={`${tfKey}ArrowZ`} geometry={arrow} material={MaterialMaker(0,0,255,1)} scale={[0.15,0.5,0.15]} rotation={[Math.PI/2,0,0]}/>
        </>
      )}
      {children}
    </group>
  );
});
