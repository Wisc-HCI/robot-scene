import React, { useRef, useEffect, useLayoutEffect, useState, useCallback } from 'react';
import { useThree, } from '@react-three/fiber';
import { GhostTF } from '../TF';
import GhostItem from '../GhostItem';
import { TransformControls as TransformControlsImpl } from 'three/examples/jsm/controls/TransformControls';
import { useSceneStore } from '../SceneContext';
import pick from 'lodash.pick';

export const TransformControls = ({ children, ...props }) => {
  const transformOnlyPropNames = [
    'enabled',
    'axis',
    'mode',
    'translationSnap',
    'rotationSnap',
    'scaleSnap',
    'space',
    'size',
    'showX',
    'showY',
    'showZ'
  ]

  const { camera, itemKey, highlightColor, ...rest } = props;

  const transforms = useSceneStore(useCallback(state=>{
    let transforms = [];
    let tfKey = state.items[itemKey].frame;
    while (tfKey && tfKey !== 'world' && tfKey !== 'gizmo') {
      transforms.push(tfKey);
      tfKey = state.tfs[tfKey.frame]
    }
    return transforms;
  },[itemKey]))

  const ref = useRef();
  const target = useRef();

  const transformProps = pick(rest, transformOnlyPropNames)

  const gl = useThree(({ gl }) => gl)
  const defaultCamera = useThree(({ camera }) => camera)
  const invalidate = useThree(({ invalidate }) => invalidate)

  const explCamera = camera || defaultCamera;

  const [controls] = useState(() => new TransformControlsImpl(explCamera, gl.domElement))
  const [transforming, setTransforming] = useState(false)

  const [position, setPosition] = useState(null);
  const [rotation, setRotation] = useState(null);
  const [scale, setScale] = useState(null);

  const onMove = useSceneStore(state=>state.onMove);

  useEffect(() => {
    const callback = (event) => {
      const pos = target?.current?.position;
      const rot = target?.current?.quaternion;
      const scl = target?.current?.scale;
      if (event.value && !transforming) {
        setTransforming(true)
        props.onDragStart && props.onDragStart()
      } else if (!event.value && transforming) {
        setTransforming(false)
        props.onDragEnd && props.onDragEnd();
        onMove(
          itemKey,
          {
            position: controls.worldPosition,
            quaternion: controls.worldQuaternion,
            scale: controls._worldScale
          },
          {
            position: pos ? {x:pos.x,y:pos.y,z:pos.z} : null,
            quaternion: rot ? {x:rot.x,y:rot.y,z:rot.z,w:rot.w} : null,
            scale: scl ? {x:scl.x,y:scl.y,z:scl.z} : null
          }
        )
      }
      if (pos) {
        setPosition(pos);
      }
      if (rot) {
        setRotation(rot);
      }
      if (scl) {
        setScale(scl);
      }
      
      
    }
    if (controls) {
      controls.addEventListener('dragging-changed', callback)
    }
    return () => {
      controls.removeEventListener('dragging-changed', callback)
    }
  })

  useLayoutEffect(() => void controls?.attach(target.current), [target, controls])

  useEffect(() => {
    if (controls) {
      controls.addEventListener('change', invalidate)
    }
    return () => controls?.removeEventListener?.('change', invalidate)
  }, [controls, invalidate])

  return controls ? (
    <>
      <primitive ref={ref} dispose={undefined} object={controls} {...transformProps} />
      <GhostTF transforms={transforms}>
        <GhostItem ref={target} highlightColor={highlightColor} itemKey={itemKey} position={position} rotation={rotation} scale={scale}/>
      </GhostTF>
    </>
  ) : null
}
