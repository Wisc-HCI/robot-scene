import React, {useCallback, useRef, forwardRef} from 'react';
import { Line } from '@react-three/drei';
import { useSceneStore } from './SceneContext';
import { useCombinedRefs } from './Util/Helpers';
import { shallow } from 'zustand/shallow';

export default forwardRef(({objectKey},forwardedRef)=>{
  const innerRef = useRef(null);
  const lineRef = useCombinedRefs(forwardedRef, innerRef);

  const {vertices, width, hidden} = useSceneStore(useCallback(state => ({
    vertices: state.lines[objectKey].vertices,
    width: state.lines[objectKey].width,
    hidden: state.lines[objectKey].hidden
  }),[objectKey]), shallow);

  if (vertices.length <= 1) {
    return null
  }
  return (
    <Line
        ref={lineRef}
        visible={!hidden}
        points={vertices.map(vertex=>([vertex.position.x,vertex.position.y,vertex.position.z]))}
        color='white'
        vertexColors={vertices.map(vertex=>([vertex.color.r/255,vertex.color.g/255,vertex.color.b/255]))}
        lineWidth={width}
    />
    
  )
})
