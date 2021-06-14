import React, { useRef, useEffect, useCallback } from 'react';
import { useFrame } from "@react-three/fiber";
import { TransformControls, Html } from '@react-three/drei';
import useSceneStore from './SceneStore';
import { Quaternion, Euler, Vector3 } from 'three';
import { Tag } from 'antd';

export default function Item(props) {
  const { orbitControls, itemKey, node, ghost } = props;

  const { editMode, name, showName, onClick, onPointerOver, onPointerOut, onTransform } = 
    useSceneStore(useCallback(state=>({editMode:state.items[itemKey].editMode,
                                       name:state.items[itemKey].name,
                                       showName:state.items[itemKey].showName,
                                       onClick:state.items[itemKey].onClick,
                                       onPointerOver:state.items[itemKey].onPointerOver,
                                       onPointerOut:state.items[itemKey].onPointerOut,
                                       onTransform:state.items[itemKey].onTransform
                                      }), [itemKey]))

  const transformControls = useRef();

  const transformRef = useRef();

  const localQuaternion = new Quaternion();
  const localEuler = new Euler();
  const localScale = new Vector3();

  useEffect(() => {
    if (transformControls.current) {
      const { current: transformer} = transformControls;
      // controls.children[0].rotation.set(-Math.PI/2,0,0)
      const dragChangeCallback = (event) => {orbitControls.current.enabled = !event.value}
      const dragCallback = (event) => {
        if (editMode === 'translate') {
          onTransform({translation:{x:transformer.offset.x,
                                    y:transformer.offset.z,
                                    z:transformer.offset.y}})
        } else if (editMode === 'rotate') {
          localEuler.setFromVector3(transformer.offset);
          localQuaternion.setFromEuler(localEuler);
          onTransform({rotation:{w:localQuaternion.w,
                                 x:localQuaternion.x,
                                 y:localQuaternion.y,
                                 z:localQuaternion.z}})
        } else if (editMode === 'scale') {
          onTransform({scale:{x:transformer.offset.x,
                              y:transformer.offset.z,
                              z:transformer.offset.y}})
        }
      }
      transformer.addEventListener('dragging-changed', dragChangeCallback);
      transformer.addEventListener('objectChange',dragCallback);
      return () => {
        transformer.removeEventListener('dragging-changed', dragChangeCallback);
        transformer.removeEventListener('objectChange', dragCallback);
      }
    }
  })

  useFrame(() => {
    // Outside of react rendering, adjust the positions of all tfs.
    const item = useSceneStore.getState().items[itemKey];

    transformRef.current.position.set(item.position.x, item.position.y, item.position.z);
    transformRef.current.quaternion.set(
      item.rotation.x,
      item.rotation.y,
      item.rotation.z,
      item.rotation.w
    );
    transformRef.current.scale.set(item.scale.x, item.scale.y, item.scale.z);
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
      
        <group ref={transformRef}>
          <group rotation={[Math.PI/2,0,0]} onPointerDown={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
            {node}
          </group>
          {showName && (
            <Html distanceFactor={7} position={[0, 1, 0]}>
              <Tag style={{ opacity: 0.75 }}
                  className="disable-text-selection"
                  
              >
                {name}
              </Tag>
            </Html>
          )}
          {editMode !== 'inactive' && (
          <TransformControls ref={transformControls} mode={editMode}>
            <group rotation={[Math.PI/2,0,0]} opacity={0.4}>
              {ghost}
            </group>
          </TransformControls>
          )}
        </group>
        
    </>
  )
}
