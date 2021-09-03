import React, { useCallback, useLayoutEffect, forwardRef } from 'react';
import useSceneStore from './SceneStore';
import {itemToGhost} from './Util/MeshConvert';

const GhostItem = forwardRef(({itemKey,highlightColor},ref) => {
  
    const [ position, rotation, scale, shape ] =
        useSceneStore(useCallback(state=>([
        state.items[itemKey]?.position,
        state.items[itemKey]?.rotation,
        state.items[itemKey]?.scale,
        state.items[itemKey]?.shape,
        ]), [itemKey]))

    useLayoutEffect(
    ()=>{
        ref?.current?.position.set(position.x,position.y,position.z);
        ref?.current?.quaternion.set(rotation.x,rotation.y,rotation.z,rotation.w);
        ref?.current?.scale.set(scale.x,scale.y,scale.z);
    },[ref,position,rotation,scale])

    const ghostGroup = itemToGhost({shape},highlightColor);

    
    return (
      <group ref={ref} up={[0,0,1]}>
        <group rotation={[Math.PI/2,0,0]}>
          {ghostGroup}
        </group>
      </group>
    )
})

export default GhostItem