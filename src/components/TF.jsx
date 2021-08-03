import React, { useCallback, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useSceneStore from "./SceneStore";
import { ARROW_GEOM } from "./Util/StandardMeshes";
import { MaterialMaker } from './Util/MaterialMaker';
import Item from "./Item";
import Line from "./Line";

export default function TF({ tfKey, displayTfs }) {

  const [childrenItemIds, childrenLineIds, childrenTFIds] = useSceneStore(useCallback(state=>([
    Object.entries(state.items).filter(pair=>pair[1].frame===tfKey).map(pair=>pair[0]),
    Object.entries(state.lines).filter(pair=>pair[1].frame===tfKey).map(pair=>pair[0]),
    Object.keys(state.tfs).filter(childKey=>state.tfs[childKey].frame===tfKey)
  ]),[tfKey]))

  const ref = useRef();

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const tf = useSceneStore.getState().tfs[tfKey];

    if (ref.current) {
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
    }
  },[tfKey, ref]));

  const arrow = ARROW_GEOM();

  return (
    <group ref={ref} dispose={null}>
      {displayTfs && (
        <>
          <mesh key={`${tfKey}ArrowX`} geometry={arrow} material={MaterialMaker(255,0,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,0,-Math.PI/2]}/>
          <mesh key={`${tfKey}ArrowY`} geometry={arrow} material={MaterialMaker(0,255,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,Math.PI/2,0]}/>
          <mesh key={`${tfKey}ArrowZ`} geometry={arrow} material={MaterialMaker(0,0,255,1)} scale={[0.2,0.5,0.2]} rotation={[Math.PI/2,0,0]}/>
        </>
      )}
      {childrenItemIds.map(id=>(
        <Item key={id} itemKey={id}/>

      ))}
      {childrenLineIds.map(id=>(
        <Line key={id} lineKey={id}/>
      ))}
      {childrenTFIds.map((childTfKey) => (
        <TF
          key={childTfKey}
          tfKey={childTfKey}
          displayTfs={displayTfs}
          highlightColor={highlightColor}
        />
      ))}
    </group>
  );
};

export function WorldTF({ displayTfs }) {

  const [childrenItemIds, childrenLineIds, childrenControlIds, childrenTFIds] = useSceneStore(useCallback(state=>([
    Object.entries(state.items).filter(pair=>!pair[1].frame||pair[1].frame==='world').map(pair=>pair[0]),
    Object.entries(state.lines).filter(pair=>!pair[1].frame||pair[1].frame==='world').map(pair=>pair[0]),
    Object.entries(state.controls).filter(pair=>!pair[1].frame||pair[1].frame==='world').map(pair=>pair[0]),
    Object.keys(state.tfs).filter(childKey=>!state.tfs[childKey].frame||state.tfs[childKey].frame==='world')
  ]),[]))

  const arrow = ARROW_GEOM();

  return (
    <group dispose={null}>
      {displayTfs && (
        <>
          <mesh key={`WorlArrowX`} geometry={arrow} material={MaterialMaker(255,0,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,0,-Math.PI/2]}/>
          <mesh key={`WorlArrowY`} geometry={arrow} material={MaterialMaker(0,255,0,1)} scale={[0.2,0.5,0.2]} rotation={[0,Math.PI/2,0]}/>
          <mesh key={`WorlArrowZ`} geometry={arrow} material={MaterialMaker(0,0,255,1)} scale={[0.2,0.5,0.2]} rotation={[Math.PI/2,0,0]}/>
        </>
      )}
      {childrenItemIds.map(id=>(
        <Item key={id} itemKey={id}/>
      ))}
      {childrenLineIds.map(id=>(
        <Line key={id} lineKey={id}/>
      ))}
      {childrenControlIds.map(id=>(
        <Control key={id} controlKey={id}/>
      ))}
      {childrenTFIds.map((childTfKey) => (
        <TF
          key={childTfKey}
          tfKey={childTfKey}
          displayTfs={displayTfs}
        />
      ))}
    </group>
  );
};

export function GhostTF({ transforms, children }) {

  if (transforms.length > 0) {
    const pos = [transforms[0].position.x,transforms[0].position.y,transforms[0].position.z];
    const rot = [transforms[0].rotation.x,transforms[0].rotation.y,transforms[0].rotation.z,transforms[0].rotation.w]
    return (
      <group position={pos} quaternion={rot}>
        <GhostTF transforms={transforms.filter((_,i)=>i!==0)}>
          {children}
        </GhostTF>
      </group>
    )
  } else {
    return (
      <>
        {children}
      </>
    )
  }
};

