import React, { useRef, useEffect, useCallback } from 'react';
import { useFrame } from "@react-three/fiber";
import { TransformControls } from '@react-three/drei';
import useSceneStore from './SceneStore';
import { Quaternion, Euler } from 'three';

export default function Item(props) {
  const { orbitControls, itemKey, node } = props;
  const ref = useRef();

  const { editMode, onClick, onPointerOver, onPointerOut, onTransform } = 
    useSceneStore(useCallback(state=>({editMode:state.items[itemKey].editMode,
                                       onClick:state.items[itemKey].onClick,
                                       onPointerOver:state.items[itemKey].onPointerOver,
                                       onPointerOut:state.items[itemKey].onPointerOut,
                                       onTransform:state.items[itemKey].onTransform,
                                      }), [itemKey]))

  const transformControls = useRef();
  const localQuaternion = new Quaternion();
  const localEuler = new Euler();

  useEffect(() => {
    if (transformControls.current) {
      const { current: controls } = transformControls;
      console.log(controls);
      // controls.children[0].rotation.set(-Math.PI/2,0,0)
      const dragChangeCallback = (event) => {orbitControls.current.enabled = !event.value}
      const dragCallback = (event) => {
        if (editMode === 'translate') {
          onTransform({translation:{x:controls.offset.x,
                                    y:controls.offset.y,
                                    z:controls.offset.z}})
        } else if (editMode === 'rotate') {
          localEuler.setFromVector3(controls.offset);
          localQuaternion.setFromEuler(localEuler);
          onTransform({rotation:{w:localQuaternion.w,
                                 x:localQuaternion.x,
                                 y:localQuaternion.y,
                                 z:localQuaternion.z}})
        } else if (editMode === 'scale') {
          onTransform({scale:{x:controls.offset.x,
                              y:controls.offset.y,
                              z:controls.offset.z}})
        }
      }
      controls.addEventListener('dragging-changed', dragChangeCallback);
      controls.addEventListener('objectChange',dragCallback);
      return () => {
        controls.removeEventListener('dragging-changed', dragChangeCallback);
        controls.removeEventListener('objectChange', dragCallback);
      }
    }
  })

  useFrame(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const item = useSceneStore.getState().items[itemKey];

    ref.current.position.set(item.position.x, item.position.y, item.position.z);
    ref.current.quaternion.set(
      item.rotation.x,
      item.rotation.y,
      item.rotation.z,
      item.rotation.w
    );
    ref.current.scale.set(item.scale.x, item.scale.y, item.scale.z);
    // if (transformControls.current) {
    //   const { current: controls } = transformControls;
    //   controls.gizmo.position.set(item.position.x, item.position.y, item.position.z);
    //   controls.gizmo.quaternion.set(
    //     item.rotation.x,
    //     item.rotation.y,
    //     item.rotation.z,
    //     item.rotation.w
    //   );
    //   controls.gizmo.scale.set(item.scale.x, item.scale.y, item.scale.z);
    // }
    
  });

  return (
    <>
      <group ref={ref} onPointerDown={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
        {node}
      </group>
      {false && editMode !== 'inactive' && <TransformControls scene='local' ref={transformControls} mode={editMode}/>}
    </>
  )
}
