import React, {useCallback, useRef} from 'react';
import { Billboard, Text } from '@react-three/drei';
import { useSceneStore } from './SceneContext';
import Font from './Font.woff';
import { useFrame } from "@react-three/fiber";
import { updateShapeMaterial } from './Util/Helpers';

export default function SceneText({textKey}) {
  
  const groupRef = useRef();
  const textRef = useRef();

  const clock = useSceneStore(state=>state.clock);

  const textInfo = useSceneStore(useCallback(state => state.texts[textKey],[textKey]));

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of the item.
    const time = clock.getElapsed() * 1000;
    if (groupRef.current) {
      // console.log(groupRef.current)
      groupRef.current.position.set(
        typeof textInfo.position.x === 'function' ? textInfo.position.x(time) : textInfo.position.x,
        typeof textInfo.position.y === 'function' ? textInfo.position.y(time) : textInfo.position.y,
        typeof textInfo.position.z === 'function' ? textInfo.position.z(time) : textInfo.position.z,
      );
      // groupRef.current.quaternion.set();
      groupRef.current.visible = typeof textInfo.hidden === 'function' ? !textInfo.hidden(time) : !textInfo.hidden;
    }
    if (textRef.current) {
      updateShapeMaterial(textRef, textInfo.color, time);
    }
  }, [textInfo, groupRef]));

  return (
    <group ref={groupRef}>
      <Billboard follow>
      <Text
          ref={textRef}
          font={Font}
          depthOffset={2}
        >
          {textInfo.value}
        </Text>
      </Billboard>
        
    </group>
    
    
  )
}
