import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { Circle } from "@react-three/drei";
import { EffectComposer, Outline, SMAA } from "@react-three/postprocessing";
import TF, {WorldTF} from "./TF";
import Item from "./Item";
import Line from "./Line";
import useSceneStore from './SceneStore';
import { AmbientLight, DirectionalLight } from './Util/Light';
import { MaterialMaker } from './Util/MaterialMaker';
import { hexToRgb } from './Util/ColorConversion';
import { OrbitControls } from '@react-three/drei';
import { TransformControls } from './Util/TransformControls';
import { itemToGroupAndChildRefs } from './Util/MeshConvert';

const renderTree = (activeTf,displayTfs,allTfs,allItems,allLines) => {
  
  const TFComponent = activeTf==='world' ? WorldTF : TF;

  return (
    <TFComponent tfKey={activeTf} displayTfs={displayTfs}>
      {allTfs.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(tf=>(
        renderTree(tf.tfKey,displayTfs,allTfs,allItems,allLines)
      ))}
      {allItems.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(item=>(
        <Item key={item.itemKey} itemKey={item.itemKey} node={item.node}/>
      ))}
      {allLines.filter(v=>v.frame===activeTf||(activeTf==='world'&&!v.frame)).map(line=>(
        <Line key={line.lineKey} lineKey={line.lineKey} />
      ))}
    </TFComponent>
  )
  
}

export default function Content(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.

  const { displayTfs, displayGrid, isPolar, 
          backgroundColor, planeColor, 
          highlightColor, plane } = props;

  const camera = useThree((state) => state.camera);

  camera.up.set(0,0,1);

  const [tfs, items, lines] = useSceneStore(state => {

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
    

    return [
      reducedTfs,
      reducedItems,
      reducedLines
    ]
  });

  const highlightedRefs = [].concat.apply([],items.filter(item=>item.highlighted).map(item=>item.childrenRefs));
  const movableItems = items.filter(item=>['translate','rotate','scale'].indexOf(item.transformMode)>-1);

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
      
      {renderTree('world',displayTfs,tfs,items,lines)}
      
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