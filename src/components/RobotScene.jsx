import React, { Suspense, useRef } from 'react';
// import PropTypes from 'prop-types';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Outline,
  SelectiveBloom
} from "@react-three/postprocessing";
import { ResizeObserver } from "@juggle/resize-observer";
import SceneLine from "./SceneLine";
import SceneItem from "./SceneItem";
import useRobotSceneStore from './RobotSceneStore';
import { AmbientLight, DirectionalLight } from './Util/Light';

export default function RobotScene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { displayTfs, displayGrid, isPolar, backgroundColor, planeColor } = props;

  const {items, lines, tfs} = useRobotSceneStore(state => ({items:state.items, lines:state.lines, tfs:state.tfs}),
    // Custom diff-calculation to avoid unnecessary re-renders
    // (oldState, newState)=>(
    //   (Object.keys(oldState.items) === Object.keys(newState.items)) &&
    //   (Object.keys(oldState.lines) === Object.keys(newState.lines)) && 
    //   (Object.keys(oldState.tfs) === Object.keys(newState.tfs)) &&
    //   (Object.keys(oldState.items).map((key)=>(oldState.items[key].highlighted)) === 
    //    Object.keys(newState.items).map((key)=>(newState.items[key].highlighted)))
    // )
  );

  console.log(items)

  const highlightedRefs = Object.items(items).filter((data)=>(data.highlighted)).map((data)=>(data.ref));

  const ambientLightRef = React.createRef();
  const directionalLightRef = React.createRef();
  const orbitControls = React.createRef();

  useFrame(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    Object.items(tfs).forEach(tf=>{
      tf.ref.current.position.set(tf.translation.x,tf.translation.y,tf.translation.z);
      tf.ref.current.quaternion.set(tf.rotation.x,tf.rotation.y,tf.rotation.z,tf.rotation.w);
    })
  });

  console.log('re-rendering');

  return (
    <Canvas
      colorManagement
      shadows
      style={{ background: backgroundColor ? backgroundColor : "#d0d0d0" }}
      resize={{ polyfill: ResizeObserver }}
    >
      <OrbitControls ref={orbitControls}/>
      <AmbientLight ref={ambientLightRef} />
      <DirectionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 10, 10]}
        intensity={0.5}
        color="white"
      />
      <color attach="background" args={[backgroundColor ? backgroundColor : "#d0d0d0"]} />
      <fog attach="fog" args={[backgroundColor ? backgroundColor : "#d0d0d0", 60, 400]} />


      <Suspense fallback={null}>

         <mesh receiveShadow scale={1000} position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
           <planeGeometry />
           <meshPhongMaterial color={planeColor ? planeColor : "#c0c0c0"}/>
         </mesh>
         {Object.keys(tfs).map((key) => (
           <group key={key} ref={tfs[key].ref} dispose={null}>
             {displayTfs && (
               <React.Fragment>
                 <arrowHelper args={[{ x: 1, y: 0, z: 0 }, origin, 0.5, "#ff0000"]} />
                 <arrowHelper args={[{ x: 0, y: 1, z: 0 }, origin, 0.5, "#00ff00"]} />
                 <arrowHelper args={[{ x: 0, y: 0, z: 1 }, origin, 0.5, "#0000ff"]} />
               </React.Fragment>
             )}
             {false && Object.keys(items).filter((key) => (items[key].frame === tf.name)).map((key) => (
               <SceneItem
                 key={key}
                 itemKey={key}
                 orbitControls={orbitControls}
               />
             ))}
             {false && Object.keys(lines).filter((key) => (lines[key].frame === tf.name)).map((key) => (
               <SceneLine
                 key={key}
                 itemKey={key}
               />
             ))}
           </group>
         ))}

        <EffectComposer>
          <Outline selection={highlightedRefs} visibleEdgeColor="#ff70ff" edgeStrength={10} pulseSpeed={0.1} blur={true} />
          <SelectiveBloom selection={highlightedRefs} lights={[ambientLightRef, directionalLightRef]}/>
        </EffectComposer>

      </Suspense>



      {displayGrid && (
        isPolar ? (
          <polarGridHelper args={[10, 16, 8, 64, "white", "gray"]} />
        ) : (
          <gridHelper args={[20, 20, `white`, `gray`]} />
        )
      )}

    </Canvas>
  );
}

// RobotScene.propTypes = {
//   displayTfs: PropTypes.bool,
//   displayGrid: PropTypes.bool,
//   isPolar: PropTypes.bool,
//   backgroundColor: PropTypes.string,
//   planeColor: PropTypes.string
// };

// RobotScene.defaultProps = {
//   displayTfs: true,
//   displayGrid: true,
//   isPolar: false,
//   backgroundColor: '#d0d0d0',
//   planeColor: '#c0c0c0'
// };
