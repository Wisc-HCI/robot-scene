import React, { useCallback, useLayoutEffect, forwardRef } from 'react';
// import useSceneStore from './SceneStore';
import {itemToGhost} from './Util/MeshConvert';
import { useSceneStore } from './SceneContext';
import { useFrame } from '@react-three/fiber';

const GhostItem = forwardRef(({itemKey,highlightColor,position,rotation,scale},ref) => {
  
    const [ initposition, initrotation, initscale, shape ] =
        useSceneStore(useCallback(state=>([
        state.items[itemKey]?.position,
        state.items[itemKey]?.rotation,
        state.items[itemKey]?.scale,
        state.items[itemKey]?.shape,
        ]), [itemKey]))

        console.log({position,rotation,scale})

    useLayoutEffect(
    ()=>{
        ref?.current?.position.set(initposition.x,initposition.y,initposition.z);
        ref?.current?.quaternion.set(initrotation.x,initrotation.y,initrotation.z,initrotation.w);
        ref?.current?.scale.set(initscale.x,initscale.y,initscale.z);
    },[ref,initposition,initrotation,initscale])

    useFrame(useCallback(()=>{
      if (position) {
        ref?.current?.position.set(position.x,position.y,position.z);
      } else {
        ref?.current?.position.set(initposition.x,initposition.y,initposition.z);
      }
      if (rotation) {
        ref?.current?.quaternion.set(rotation.x,rotation.y,rotation.z,rotation.w);
      } else {
        ref?.current?.quaternion.set(initrotation.x,initrotation.y,initrotation.z,initrotation.w);
      }
      if (scale) {
        ref?.current?.scale.set(scale.x,scale.y,scale.z);
      } else {
        ref?.current?.scale.set(initscale.x,initscale.y,initscale.z);
      }
      
    },[position,rotation,scale,initposition,initrotation,initscale]))

    const ghostGroup = itemToGhost({shape},highlightColor);
    
    return (
      <group 
        ref={ref} 
        up={[0,0,1]}
        >
        <group rotation={[Math.PI/2,0,0]}>
          {ghostGroup}
        </group>
      </group>
    )
})

export default GhostItem