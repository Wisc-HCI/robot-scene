import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { Circle } from "@react-three/drei";
import TF, {WorldTF} from "./TF";
import Item from "./Item";
import Hull from "./Hull";
import Line from "./Line";
// import useSceneStore from './SceneStore';
import { AmbientLight, DirectionalLight } from './Util/Light';
import { MaterialMaker } from './Util/MaterialMaker';
import { hexToRgb } from './Util/ColorConversion';
import { OrbitControls } from '@react-three/drei';
import { TransformControls } from './Util/TransformControls';
import shallow from 'zustand/shallow';

const renderTree = (activeTf,displayTfs,allTfs,allItems,allLines,allHulls,store, highlightColor) => {
  
  const TFComponent = activeTf==='world' ? WorldTF : TF;

  return (
    <TFComponent key={activeTf} tfKey={activeTf} displayTfs={displayTfs} store={store}>
      {allTfs.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(tf=>(
        renderTree(tf.tfKey,displayTfs,allTfs,allItems,allLines,allHulls,store,highlightColor)
      ))}
      {allItems.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(item=>(
        <Item key={item.itemKey} itemKey={item.itemKey} node={item.node} store={store} highlightColor={highlightColor}/>
      ))}
      {allLines.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(line=>(
        <Line key={line.lineKey} lineKey={line.lineKey} store={store}/>
      ))}
      {allHulls.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(hull=>(
        <Hull key={hull.hullKey} hullKey={hull.hullKey} node={hull.node} store={store} highlightColor={highlightColor}/>
      ))}
    </TFComponent>
  )
  
}

export default function Content(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { displayTfs, displayGrid, isPolar, 
          backgroundColor, planeColor, 
          highlightColor, plane, fov, store,
          paused
        } = props;

  const [camera, clock] = useThree((state) => [state.camera,state.clock]);

  if (clock.running && paused) {
    clock.stop();
    clock.start();
    clock.stop();
  } else if (!clock.running && !paused) {
    clock.start();
  }

  camera.up.set(0,0,1);
  camera.fov = fov ? fov : 60;
  camera.updateProjectionMatrix();

  const [tfs, items, lines, hulls] = store(state => {

    const reducedTfs = Object.entries(state.tfs).map(pair=>{
      const [tfKey, tf] = pair;
      return {tfKey,frame:tf.frame}
    })

    const reducedItems = Object.entries(state.items).map(pair=>{
      const [itemKey, item] = pair;
      return {
        itemKey,
        frame:item.frame,
        transformMode:item.transformMode,
        onMove:item.onMove
      }
    })

    const reducedLines = Object.entries(state.lines).map(pair=>{
      const [lineKey, line] = pair;
      return {lineKey, frame:line.frame}
    })
    
    const reducedHulls = Object.entries(state.hulls).map(pair=>{
      const [hullKey, hull] = pair;
      return {
        hullKey,frame:hull.frame
      }
    })

    return [
      reducedTfs,
      reducedItems,
      reducedLines,
      reducedHulls
    ]
  }, shallow);

  // const highlightedItemRefs = [].concat.apply([],items.filter(item=>item.highlighted).map(item=>item.childrenRefs));
  // const highlightedHullRefs = [].concat.apply([],hulls.filter(hull=>hull.highlighted).map(hull=>hull.childrenRefs));
  // const highlightedRefs = [...highlightedItemRefs, ...highlightedHullRefs];
  const movableItems = items.filter(item=>['translate','rotate','scale'].indexOf(item.transformMode)>-1);

  const ambientLightRef = useRef();
  const pointLightRef = useRef();
  const directionalLightRef = useRef();
  const orbitControls = useRef();

  const planeRGB = hexToRgb(planeColor ? planeColor : "a8a8a8");
  const planeRGBA = [planeRGB.r,planeRGB.g,planeRGB.b,0.5];

  return (
    <React.Fragment>
      <OrbitControls ref={orbitControls}/>
      <pointLight ref={pointLightRef} intensity={0.5} position={[-1,-3,3]} color='#FFFAEE'/>
      <AmbientLight ref={ambientLightRef} intensity={0.7} color='white'/>
      <DirectionalLight
        ref={directionalLightRef}
        castShadow position={[5, 15, 15]} 
        intensity={0.6} 
        color="#FFFAEE"
      />
      <spotLight
        penumbra={1}
        position={[-1, -1, 4]}
        intensity={0.3}
        castShadow
        color='#FFFAEE'
      />
      <color attach="background" args={[backgroundColor ? backgroundColor : "#d0d0d0"]} />
      <fogExp2 attach="fog" args={[backgroundColor ? backgroundColor : "#d0d0d0", 0.01]} />

      <Circle receiveShadow scale={1000} position={[0, 0, plane ? plane-0.01 : -0.01]} material={MaterialMaker(...planeRGBA)}/>
      
      {renderTree('world',displayTfs,tfs,items,lines,hulls,store,highlightColor)}
      
      <group position={[0, 0, plane ? plane : 0]} rotation={[Math.PI/2,0,0]} up={[0,0,1]}>
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
            store={store}
          />
        ))
      }

    </React.Fragment>
  );
}