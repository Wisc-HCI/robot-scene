import React, { useCallback, useLayoutEffect } from 'react';
import useSceneStore from './SceneStore';
import {itemToGhost} from './Util/MeshConvert';

export default function GhostItem({itemKey,highlightColor}) {
  
    const [ ghostRef, position, rotation, scale, shape ] =
        useSceneStore(useCallback(state=>([
        state.items[itemKey]?.ghostRef,
        state.items[itemKey]?.position,
        state.items[itemKey]?.rotation,
        state.items[itemKey]?.scale,
        state.items[itemKey]?.shape,
        ]), [itemKey]))

    useLayoutEffect(
    ()=>{
        ghostRef?.current?.position.set(position.x,position.y,position.z);
        ghostRef?.current?.quaternion.set(rotation.x,rotation.y,rotation.z,rotation.w);
        ghostRef?.current?.scale.set(scale.x,scale.y,scale.z);
    },[ghostRef,position,rotation,scale])

    const ghostGroup = itemToGhost({shape},highlightColor);

    
    return (
      <group ref={ghostRef}>
        {ghostGroup}
      </group>
    )
}