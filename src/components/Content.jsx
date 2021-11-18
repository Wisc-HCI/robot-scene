import React, { useRef, useCallback, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Circle } from "@react-three/drei";
import { EffectComposer, Outline, SMAA } from "@react-three/postprocessing";
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
import { itemToGroupAndChildRefs, hullToGroupAndRef } from './Util/MeshConvert';

const renderTree = (activeTf,displayTfs,allTfs,allItems,allLines,allHulls,store) => {
  
  const TFComponent = activeTf==='world' ? WorldTF : TF;

  return (
    <TFComponent key={activeTf} tfKey={activeTf} displayTfs={displayTfs} store={store}>
      {allTfs.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(tf=>(
        renderTree(tf.tfKey,displayTfs,allTfs,allItems,allLines,allHulls,store)
      ))}
      {allItems.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(item=>(
        <Item key={item.itemKey} itemKey={item.itemKey} node={item.node} store={store}/>
      ))}
      {allLines.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(line=>(
        <Line key={line.lineKey} lineKey={line.lineKey} store={store}/>
      ))}
      {allHulls.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(hull=>(
        <Hull key={hull.hullKey} hullKey={hull.hullKey} node={hull.node} store={store}/>
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
      const [node,childrenRefs] = itemToGroupAndChildRefs(item);
      return {
        itemKey,node,childrenRefs,
        frame:item.frame,
        highlighted:item.highlighted,
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
      const [node,childrenRefs] = hullToGroupAndRef(hull);
      return {
        hullKey,node,childrenRefs,
        frame:hull.frame,
        highlighted:hull.highlighted
      }
    })

    return [
      reducedTfs,
      reducedItems,
      reducedLines,
      reducedHulls
    ]
  });

  const highlightedItemRefs = [].concat.apply([],items.filter(item=>item.highlighted).map(item=>item.childrenRefs));
  const highlightedHullRefs = [].concat.apply([],hulls.filter(hull=>hull.highlighted).map(hull=>hull.childrenRefs));
  const highlightedRefs = [...highlightedItemRefs, ...highlightedHullRefs];
  const movableItems = items.filter(item=>['translate','rotate','scale'].indexOf(item.transformMode)>-1);

  const ambientLightRef = useRef();
  const directionalLightRef = useRef();
  const orbitControls = useRef();

  const planeRGB = hexToRgb(planeColor ? planeColor : "a8a8a8");
  const planeRGBA = [planeRGB.r,planeRGB.g,planeRGB.b,0.5];

  useFrame(useCallback(({clock})=>{
    const time = clock.getElapsedTime() * 1000;
    items.forEach(item=>{
      const colorInstruction = store.getState().items[item.itemKey].color;
      if (colorInstruction) {
        const r = typeof colorInstruction.r === 'function' ? colorInstruction.r(time)/255 : colorInstruction.r/255;
        const g = typeof colorInstruction.g === 'function' ? colorInstruction.g(time)/255 : colorInstruction.g/255;
        const b = typeof colorInstruction.b === 'function' ? colorInstruction.b(time)/255 : colorInstruction.b/255;
        const opacity = typeof colorInstruction.a === 'function' ? colorInstruction.a(time) : colorInstruction.a;
        item.childrenRefs.forEach(ref=>{
          if (ref.current && ref.current.material) {
            ref.current.material.color.setRGB(r,g,b);
            ref.current.material.opacity = opacity;
            ref.current.material.transparent = opacity === 1 ? false : true
          }
        })
      }
      // Ignore if no colorInstruction
    })
    hulls.forEach(hull=>{
      const colorInstruction = store.getState().hulls[hull.hullKey].color;
      if (colorInstruction) {
        const r = typeof colorInstruction.r === 'function' ? colorInstruction.r(time)/255 : colorInstruction.r/255;
        const g = typeof colorInstruction.g === 'function' ? colorInstruction.g(time)/255 : colorInstruction.g/255;
        const b = typeof colorInstruction.b === 'function' ? colorInstruction.b(time)/255 : colorInstruction.b/255;
        const opacity = typeof colorInstruction.a === 'function' ? colorInstruction.a(time) : colorInstruction.a;
        hull.childrenRefs.forEach(ref=>{
          if (ref.current && ref.current.material) {
            ref.current.material.color.setRGB(r,g,b);
            ref.current.material.opacity = opacity;
            ref.current.material.transparent = opacity === 1 ? false : true
          }
        })
      }
    })
  },[items,hulls]))

  return (
    <React.Fragment>
      <OrbitControls ref={orbitControls}/>
      <pointLight intensity={0.5} position={[-1,-3,3]} color='#FFFAEE'/>
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
      
      {renderTree('world',displayTfs,tfs,items,lines,hulls,store)}
      
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