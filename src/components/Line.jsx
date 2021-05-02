import React from 'react';
import { Line } from '@react-three/drei';
import useSceneStore from './SceneStore';

export default function SceneLine(props) {
  const { lineKey } = props;
  const {name, vertices} = useSceneStore(state => ({name: state.lines[lineKey].name, vertices: state.lines[lineKey].vertices}));

  return (
    <Line
      points={vertices.map(vertex=>([vertex.position.x,vertex.position.y,vertex.position.z]))}
      color='white'
      vertexColors={vertices.map(vertex=>([vertex.color.r/255,vertex.color.g/255,vertex.color.b/255]))}
      lineWidth={3}
    />
  )
}
