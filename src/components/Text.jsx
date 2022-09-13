import React, { useCallback, useRef, forwardRef } from 'react';
import { Billboard, Text } from '@react-three/drei';
import { useSceneStore } from './SceneContext';
// import Font from './Font.woff';
import { useFrame } from "@react-three/fiber";
import { updateShapeMaterial, useCombinedRefs,getGetter } from './Util/Helpers';

export default forwardRef(({ objectKey }, forwardedRef)=> {

  const innerRef = useRef(null);
  const groupRef = useCombinedRefs(forwardedRef, innerRef);
  const textRef = useRef();

  const clock = useSceneStore(state => state.clock);

  const textInfo = useSceneStore(useCallback(state => state.texts[objectKey], [objectKey]));

  const positionXGetter =  getGetter(textInfo.position.x);
  const positionYGetter =  getGetter(textInfo.position.y);
  const positionZGetter =  getGetter(textInfo.position.z);

  const hiddenGetter = getGetter(textInfo.hidden);

  const colorGetter = {r:getGetter(textInfo.color.r), g:getGetter(textInfo.color.g), b: getGetter(textInfo.color.b), a:getGetter(textInfo.color.a)}

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of the item.
    const time = clock.getElapsed() * 1000;
    if (groupRef.current) {
      // console.log(groupRef.current)
      groupRef.current.position.set(
        positionXGetter(time),
        positionYGetter(time),
        positionZGetter(time),
      );
      // groupRef.current.quaternion.set();
      groupRef.current.visible = hiddenGetter !== null && hiddenGetter !== undefined ? !hiddenGetter(time) : null;
    }
    if (textRef.current) {
      updateShapeMaterial(textRef, colorGetter, time);
    }
  }, [textInfo, groupRef]));

  return (
    <group ref={groupRef}>
      <Billboard follow>
        <Text
          ref={textRef}
          depthOffset={2}
        >
          {textInfo.value}
        </Text>
      </Billboard>
    </group>
  )
})