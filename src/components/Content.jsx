import React, { createRef, useRef } from 'react';
import { OrbitControls, Circle } from "@react-three/drei";
import { EffectComposer, Outline, SMAA } from "@react-three/postprocessing";
import Line from "./Line";
import Item from "./Item";
import TF from "./TF";
import useSceneStore from './SceneStore';
import { AmbientLight, DirectionalLight } from './Util/Light';
import { objectMap } from './Util/Helpers';
import { MaterialMaker } from './Util/MaterialMaker';
import { hexToRgb } from './Util/ColorConversion';
import { MeshConverter } from './Util/MeshConvert';
import { MeshLookup, MeshLookupTable } from './MeshLookup';

export default function Content(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { displayTfs, displayGrid, isPolar, 
          backgroundColor, planeColor, 
          highlightColor, plane } = props;

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
  
  const tfRefs = objectMap(tfs,(_)=>createRef());

  const meshesAndRefs = objectMap(items,(item)=>{
    const {color, shape} = item;
    const materialOverride = color ? MaterialMaker(color.r, color.g, color.b, color.a) : undefined;
    const opacity = color ? color.a : 1.0;
    let content = [];

    if (shape in MeshLookupTable) {
      content = MeshLookup(shape);
    }

    const nodes = content.map((node,i)=>MeshConverter(node,i,materialOverride,opacity));
    const group = 
      <>
          {nodes.map(node=>node[0])}
      </>
    const refs = [].concat.apply([], nodes.map(node=>node[1]));
    return [group, refs];
  })

  // Gather up all the internal refs to meshes that should be highlighted.
  let highlightedRefs = [];
  Object.keys(items).forEach((key)=>{
    if (items[key].highlighted) {
      meshesAndRefs[key][1].forEach(ref=>{
        highlightedRefs.push(ref)
      })
    }
  });

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

      <Circle receiveShadow scale={1000} position={[0, plane ? plane-0.01 : -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} material={MaterialMaker(...planeRGBA)}/>
         
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
              <Item 
                key={`${itemKey}Item`} 
                itemKey={itemKey} 
                node={meshesAndRefs[itemKey][0]} 
                orbitControls={orbitControls}/>
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
        <group position={[0, plane ? plane : 0, 0]}>
          {displayGrid && (
            isPolar ? (
              <polarGridHelper args={[10, 16, 8, 64, "white", "gray"]} />
            ) : (
              <gridHelper args={[20, 20, `white`, `gray`]} />
            )
          )}
        </group>

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