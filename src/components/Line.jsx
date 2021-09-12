import React, {useCallback} from 'react';
import { Line } from '@react-three/drei';

export default function SceneLine(props) {
  const { lineKey, store } = props;
  const {vertices, width, hidden} = store(useCallback(state => ({
    vertices: state.lines[lineKey].vertices,
    width: state.lines[lineKey].width,
    hidden: state.lines[lineKey].hidden
  }),[lineKey]));

  return (
    <Line
        visible={!hidden}
        points={vertices.map(vertex=>([vertex.position.x,vertex.position.y,vertex.position.z]))}
        color='white'
        vertexColors={vertices.map(vertex=>([vertex.color.r/255,vertex.color.g/255,vertex.color.b/255]))}
        lineWidth={width}
    />
    
  )
}
