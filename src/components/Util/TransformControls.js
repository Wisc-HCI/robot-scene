import React, { useRef, useEffect, useLayoutEffect, useState, useCallback } from 'react';
import { useThree, } from '@react-three/fiber';
import { GhostTF } from '../TF.jsx';
import GhostItem from '../GhostItem.jsx';
import { TransformControls as TransformControlsImpl } from 'three/examples/jsm/controls/TransformControls';
// import useSceneStore from '../SceneStore';
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

  const { camera, itemKey, highlightColor, store, ...rest } = props;

  const transforms = store(useCallback(state=>{
    let transforms = [];
    let tfKey = state.items[itemKey].frame;
    while (tfKey && tfKey !== 'world') {
      const tf = state.tfs[tfKey];
      transforms.push({
        position:tf.translation,
        rotation:tf.rotation
      });
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

  useEffect(() => {
    const callback = (event) => {
      if (event.value && !transforming) {
        setTransforming(true)
        props.onDragStart && props.onDragStart()
      } else if (!event.value && transforming) {
        setTransforming(false)
        props.onDragEnd && props.onDragEnd()
      }
      if (props.onMove) {
        props.onMove({
          world: {
            position: controls.worldPosition,
            quaternion: controls.worldQuaternion,
            scale: controls._worldScale
          },
          local: {
            position: target?.current?.position,
            quaternion: target?.current?.quaternion,
            scale: target?.current?.scale
          }
        })
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
      <GhostTF transforms={transforms} store={store}>
        <GhostItem ref={target} highlightColor={highlightColor} itemKey={itemKey} store={store}/>
      </GhostTF>
    </>
  ) : null
}
