import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useThree, } from '@react-three/fiber';
import { TransformControls as TransformControlsImpl } from 'three/examples/jsm/controls/TransformControls';
import { useSceneStore } from '../SceneContext';
import pick from 'lodash.pick';
// import { renderTree } from './Helpers';
import Tree from '../Tree';

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

const renderTreePropNames = [
  'displayTfs',
  'allTfs',
  'allItems',
  'allLines',
  'allHulls',
  'allTexts',
  'highlightColor'
]

export const TransformableObject = ({ camera, objectInfo, highlightColor, translateSnap, rotateSnap, scaleSnap, onDragStart, onDragEnd, ...otherProps }) => {
  const transformProps = pick(otherProps, transformOnlyPropNames);
  const renderTreeProps = pick(otherProps, renderTreePropNames);
  // const tfs = renderTreeProps.tfs;

  const transforms = useSceneStore(useCallback(state => {
    let transforms = [];
    if (objectInfo.source === 'tfs') {
      transforms.push(objectInfo.key)
    }
    let tfKey = state[objectInfo.source][objectInfo.key].frame;
    while (tfKey && tfKey !== 'world' && tfKey !== 'gizmo') {
      let tfData = state.tfs[tfKey];
      transforms.push(tfKey);
      tfKey = tfData.frame;
    }
    return transforms;
  }, [objectInfo]))

  const ref = useRef();
  const target = useRef();



  const gl = useThree(({ gl }) => gl)
  const defaultCamera = useThree(({ camera }) => camera)
  const invalidate = useThree(({ invalidate }) => invalidate)

  const explCamera = camera || defaultCamera;

  const [controls] = useState(() => new TransformControlsImpl(explCamera, gl.domElement))
  controls.translationSnap = translateSnap;
  controls.rotationSnap = rotateSnap;
  controls.scaleSnap = scaleSnap;
  const [transforming, setTransforming] = useState(false)

  const [position, setPosition] = useState(null);
  const [rotation, setRotation] = useState(null);
  const [scale, setScale] = useState(null);

  const onMove = useSceneStore(state => state.onMove);

  useEffect(() => {
    const callback = (event) => {
      const pos = target?.current?.position;
      const rot = target?.current?.quaternion;
      const scl = target?.current?.scale;
      if (event.value && !transforming) {
        setTransforming(true)
        onDragStart && onDragStart()
      } else if (!event.value && transforming) {
        setTransforming(false)
        onDragEnd && onDragEnd();
        onMove(
          objectInfo.key,
          objectInfo.source,
          {
            position: controls.worldPosition,
            quaternion: controls.worldQuaternion,
            scale: controls._worldScale
          },
          {
            position: pos ? { x: pos.x, y: pos.y, z: pos.z } : null,
            quaternion: rot ? { x: rot.x, y: rot.y, z: rot.z, w: rot.w } : null,
            scale: scl ? { x: scl.x, y: scl.y, z: scl.z } : null
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

  useEffect(() => void controls?.attach(target.current), [target, controls])

  useEffect(() => {
    if (controls) {
      controls.addEventListener('change', invalidate)
    }
    return () => controls?.removeEventListener?.('change', invalidate)
  }, [controls, invalidate])

  return controls ? (
    <>
      <primitive ref={ref} dispose={undefined} object={controls} {...transformProps} />
      <Tree
        {...renderTreeProps}
        activeTf='world'
        tfFilter={transforms}
        ghosts
        targetRef={target}
        targetSource={objectInfo.source}
        targetId={objectInfo.key}
        filterActive
        customProps={{ position, rotation, scale }}
      />
    </>
  ) : null
}
