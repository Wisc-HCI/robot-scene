import React, { useRef, useCallback, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import { TransformControls, Box } from '@react-three/drei';
import useSceneStore from './SceneStore';

export default function Control({ controlKey, orbitControls, children }) {

  const [mode,onTransform] = useSceneStore(useCallback(state => ([
    state.controls[controlKey].mode,
    state.controls[controlKey].onTransform
  ]), [controlKey]))


  const controls = useRef();

  //   useFrame(useCallback(() => {
  //     // Outside of react rendering, adjust the positions of all tfs.
  //     const controlState = useSceneStore.getState().controls[controlKey];
  //     if (controls.current) {
  //         console.log(controls.current);
  //         // controls.current.gizmo.rotation.set({x:Math.PI/2,y:0,z:0});
  //         controls.current.positionStart.set(
  //             controlState.translation.x, 
  //             controlState.translation.y, 
  //             controlState.translation.z
  //         );
  //         controls.current.quaternionStart.set(
  //             controlState.rotation.x,
  //             controlState.rotation.y,
  //             controlState.rotation.z,
  //             controlState.rotation.w
  //         );
  //         controls.current.scaleStart.set(
  //             controlState.scale.x, 
  //             controlState.scale.y, 
  //             controlState.scale.z
  //         );
  //     }
  //   },[controlKey]));

  useEffect(() => {
    if (controls.current) {
      const callback = event => {console.log(event);useSceneStore.setState({transforming:event.value})};
      controls.current.addEventListener('dragging-changed', callback);
      return () => controls.current && controls.current.removeEventListener('dragging-changed', callback)
    }
  })

  return (
    <TransformControls ref={controls} mode={mode}>
      <Box args={[10]}>
          <meshBasicMaterial attach="material" wireframe />
      </Box>
      {children}
    </TransformControls>
  )
}