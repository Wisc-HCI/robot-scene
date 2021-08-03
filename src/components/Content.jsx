import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { Circle } from "@react-three/drei";
import { EffectComposer, Outline, SMAA } from "@react-three/postprocessing";
import {WorldTF} from "./TF";
import useSceneStore from './SceneStore';
import { AmbientLight, DirectionalLight } from './Util/Light';
import { MaterialMaker } from './Util/MaterialMaker';
import { hexToRgb } from './Util/ColorConversion';
import { OrbitControls } from '@react-three/drei';
import { TransformControls } from './Util/TransformControls';

export default function Content(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { displayTfs, displayGrid, isPolar, 
          backgroundColor, planeColor, 
          highlightColor, plane } = props;

  const camera = useThree((state) => state.camera);

  camera.up.set(0,0,1);

  const [highlightedRefs, movableItems] = useSceneStore(state => ([
    [].concat.apply([],Object.values(state.items).filter(item=>item.highlighted).map(item=>item.childrenRefs)),
    Object.entries(state.items)
      .filter(pair=>['translate','rotate','scale'].indexOf(pair[1].transformMode)>-1)
      .map(pair=>({itemKey:pair[0],transformMode:pair[1].transformMode,onMove:pair[1].onMove}))
  ]));

  const ambientLightRef = useRef();
  const directionalLightRef = useRef();
  const orbitControls = useRef();

  const planeRGB = hexToRgb(planeColor ? planeColor : "a8a8a8");
  const planeRGBA = [planeRGB.r,planeRGB.g,planeRGB.b,0.5];

  return (
    <React.Fragment>
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

      <Circle receiveShadow scale={1000} position={[0, 0, plane ? plane-0.01 : -0.01]} material={MaterialMaker(...planeRGBA)}/>
      
      <WorldTF
        displayTfs={displayTfs}
        highlightColor={highlightColor}
      />
      
      <group position={[0, 0, plane ? plane : 0]} rotation={[Math.PI/2,0,0]}>
        {displayGrid && (
          isPolar ? (
            <polarGridHelper args={[10, 16, 8, 64, "white", "gray"]} />
          ) : (
            <gridHelper args={[20, 20, `white`, `gray`]} />
          )
        )}
      </group>

      {
        movableItems.map((movableItem,idx)=>(
          <TransformControls
            key={`movableItemTransform-${idx}`}
            itemKey={movableItem.itemKey}
            mode={movableItem.transformMode}
            onDragEnd={() => {if (orbitControls.current) {orbitControls.current.enabled = true}}}
            onDragStart={() => {if (orbitControls.current) {orbitControls.current.enabled = false}}}
            onMove={movableItem.onMove}
          />
        ))
      }

      <EffectComposer autoClear={false} multisampling={0}>
        <Outline 
          selection={highlightedRefs} 
          xRay
          blur={true}
          edgeStrength={15}
          pulseSpeed={0.3}
          visibleEdgeColor={highlightColor ? highlightColor : '#ffffff'}
          hiddenEdgeColor={highlightColor ? highlightColor : '#ffffff'}/>
          <SMAA/>
      </EffectComposer>

    </React.Fragment>
  );
}