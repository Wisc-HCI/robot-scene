import React, { useRef, useEffect, useState, useCallback, memo } from 'react';
import { useThree, } from '@react-three/fiber';
import { TransformControls as TransformControlsImpl } from 'three/examples/jsm/controls/TransformControls';
import { useSceneStore } from '../SceneContext';
import pick from 'lodash.pick';
// import { renderTree } from './Helpers';
import Tree from '../Tree';
import {shallow} from 'zustand/shallow';

const transformOnlyPropNames = [
  'enabled',
  'axis',
  'translationSnap',
  'rotationSnap',
  'scaleSnap',
  'space',
  'size'
]

const renderTreePropNames = [
  'displayTfs',
  'allTfs',
  'allItems',
  'allLines',
  'allHulls',
  'allTexts',
  'allPoints',
  'highlightColor'
]

export const TransformableObject = memo(({ camera, objectInfo, highlightColor, translateSnap, rotateSnap, scaleSnap, onDragStart, onDragEnd, mode, ...otherProps }) => {
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
  }, [objectInfo]),shallow)

  const ref = useRef();
  const target = useRef();

  const startTransform = useSceneStore((state)=>pick(state[objectInfo.source][objectInfo.key],['position','rotation','scale']),shallow)
  // console.log(startTransform)

  const gl = useThree(({ gl }) => gl)
  const defaultCamera = useThree(({ camera }) => camera)
  const invalidate = useThree(({ invalidate }) => invalidate)

  const explCamera = camera || defaultCamera;

  const [controls] = useState(() => new TransformControlsImpl(explCamera, gl.domElement))
  controls.translationSnap = translateSnap;
  controls.rotationSnap = rotateSnap;
  controls.scaleSnap = scaleSnap;
  if (mode?.includes('translate')) {
    controls.mode = 'translate'
  } else if (mode?.includes('rotate')) {
    controls.mode = 'rotate'
  } else if (mode?.includes('scale')) {
    controls.mode = 'scale'
  }
  if (mode?.includes('-x')) {
    controls.showY = false;
    controls.showZ = false;
  } else if (mode?.includes('-y')) {
    controls.showX = false;
    controls.showZ = false;
  } else if (mode?.includes('-z')) {
    controls.showX = false;
    controls.showY = false;
  }
  const [transforming, setTransforming] = useState(false)

  const [transform,setTransform] = useState(startTransform);
  const [update,setUpdate] = useState(false);

  // const [position, setPosition] = useState(startTransform.position);
  // const [rotation, setRotation] = useState(startTransform.rotation);
  // const [scale, setScale] = useState(startTransform.scale);

  useEffect(()=>{console.log('refreshing transform');setTransform(startTransform)},[startTransform,update]);

  const onMove = useSceneStore(state => state.onMove,shallow);

  useEffect(() => {
    const callback = (event) => {
      const pos = target?.current?.position;
      const rot = target?.current?.quaternion;
      const scl = target?.current?.scale;
      if (event.value && !transforming) {
        console.log('starting transform')
        setTransforming(true);
        setTransform({position:pos,rotation:rot,scale:scl});
        onDragStart && onDragStart()
      } else if (!event.value && transforming) {
        console.log('stopping transform')
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
        setUpdate(!update)
      }
      // else if (transforming) {
      //   console.log('transforming')
      //   // setTransform({position:pos,rotation:rot,scale:scl});
      // }


    }
    if (controls) {
      controls.addEventListener('dragging-changed', callback)
    }
    return () => {
      controls.removeEventListener('dragging-changed', callback)
    }
  },[startTransform,transforming,objectInfo])

  useEffect(() => void controls?.attach(target.current), [target, controls])

  useEffect(() => {
    if (controls) {
      controls.addEventListener('change', invalidate)
    }
    return () => controls?.removeEventListener?.('change', invalidate)
  }, [controls, invalidate])

  return controls ? (
    <>
      <primitive ref={ref} object={controls} {...transformProps} />
      <Tree
        {...renderTreeProps}
        activeTf='world'
        tfFilter={transforms}
        ghosts
        targetRef={target}
        targetSource={objectInfo.source}
        targetId={objectInfo.key}
        filterActive
        customProps={{ ...transform }}
      />
    </>
  ) : null
})
