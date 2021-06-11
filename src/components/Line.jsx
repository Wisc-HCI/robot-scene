import React, {useCallback} from 'react';
import { Line } from '@react-three/drei';
import useSceneStore from './SceneStore';

export default function SceneLine(props) {
  const { lineKey } = props;
  const {name, vertices, width} = useSceneStore(useCallback(state => ({
    name: state.lines[lineKey].name, 
    vertices: state.lines[lineKey].vertices,
    width: state.lines[lineKey].width
  }),[lineKey]));

  return (
    <group rotation={[Math.PI/2,0,0]}>
      <Line
        points={vertices.map(vertex=>([vertex.position.x,vertex.position.z,-vertex.position.y]))}
        color='white'
        vertexColors={vertices.map(vertex=>([vertex.color.r/255,vertex.color.g/255,vertex.color.b/255]))}
        lineWidth={width}
      />
    </group>
    
  )
}
