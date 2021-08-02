import React, { useRef, useEffect, useLayoutEffect, useState } from 'react'
import { useThree, } from '@react-three/fiber'
import { TransformControls as TransformControlsImpl } from 'three/examples/jsm/controls/TransformControls'
import pick from 'lodash.pick'

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

  const ref = useRef();

  const { camera, target, ...rest } = props;
  const transformProps = pick(rest, transformOnlyPropNames)

  const gl = useThree(({ gl }) => gl)
  const defaultCamera = useThree(({ camera }) => camera)
  const invalidate = useThree(({ invalidate }) => invalidate)

  const explCamera = camera || defaultCamera

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
    </>
  ) : null
}
