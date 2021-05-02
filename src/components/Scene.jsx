import React, { createRef, Suspense, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Circle } from "@react-three/drei";
import {
  EffectComposer,
  Outline
} from "@react-three/postprocessing";
import { ResizeObserver } from "@juggle/resize-observer";
import Line from "./Line";
import Item from "./Item";
import TF from "./TF";
import useSceneStore from './SceneStore';
import { AmbientLight, DirectionalLight } from './Util/Light';
import { objectMap } from './Util/Helpers';
import { MaterialMaker } from './Util/MaterialMaker';
import { hexToRgb } from './Util/ColorConversion';

export default function Scene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { displayTfs, displayGrid, isPolar, backgroundColor, planeColor } = props;

  const {items, lines, tfs} = useSceneStore(state => ({items:state.items, lines:state.lines, tfs:state.tfs}),
    // Custom diff-calculation to avoid unnecessary re-renders
    (oldState, newState) => (
      (Object.keys(oldState.items) === Object.keys(newState.items)) &&
      (Object.keys(oldState.lines) === Object.keys(newState.lines)) && 
      (Object.keys(oldState.tfs) === Object.keys(newState.tfs)) &&
      (Object.keys(oldState.items).map((key)=>(oldState.items[key].highlighted)) === 
       Object.keys(newState.items).map((key)=>(newState.items[key].highlighted)))
    )
  );
  
  const itemRefs = objectMap(items,(item)=>createRef())
  const tfRefs = objectMap(tfs,(tf)=>createRef());
  
  const highlightedRefs = Object.keys(items).filter((key)=>(items[key].highlighted)).map((key)=>(itemRefs[key]));

  const ambientLightRef = useRef();
  const directionalLightRef = useRef();
  const orbitControls = useRef();

  const planeRGB = hexToRgb(planeColor ? planeColor : "a8a8a8");
  const planeRGBA = [planeRGB.r,planeRGB.g,planeRGB.b,0.5];

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
        intensity={0.8}
        color="white"
      />
      <color attach="background" args={[backgroundColor ? backgroundColor : "#d0d0d0"]} />
      <fogExp2 attach="fog" args={[backgroundColor ? backgroundColor : "#d0d0d0", 0.01]} />

      <Suspense fallback={null}>
         
        <Circle receiveShadow scale={1000} position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} material={MaterialMaker(...planeRGBA)}/>
         
        {Object.keys(tfs).map((tfKey) => (
          <TF
            key={tfKey}
            tfKey={tfKey}
            ref={tfRefs[tfKey]}
            displayTfs={displayTfs}
          >
            {Object.keys(items)
              .filter((itemKey) => items[itemKey].frame === tfs[tfKey].name)
              .map((itemKey) => (
                <Item key={`${itemKey}Item`} ref={itemRefs[itemKey]} itemKey={itemKey} />
              ))
            }
            {Object.keys(lines)
              .filter((lineKey) => (lines[lineKey].frame === tfs[tfKey].name))
              .map((lineKey) => (
               <Line
                 key={`${lineKey}Line`}
                 lineKey={lineKey}
               />
             ))
            }
          </TF>
        ))}

        <EffectComposer multiprocessing={20}>
          <Outline selection={highlightedRefs} visibleEdgeColor="#ff70ff" edgeStrength={10} pulseSpeed={0.1} blur={true} />
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

// Scene.propTypes = {
//   displayTfs: PropTypes.bool,
//   displayGrid: PropTypes.bool,
//   isPolar: PropTypes.bool,
//   backgroundColor: PropTypes.string,
//   planeColor: PropTypes.string
// };

// Scene.defaultProps = {
//   displayTfs: true,
//   displayGrid: true,
//   isPolar: false,
//   backgroundColor: '#d0d0d0',
//   planeColor: '#c0c0c0'
// };
