import React, { useState, createRef, useEffect } from 'react';
import { Vector3, Quaternion } from 'three';
import { useFrame } from "@react-three/fiber";
import { Line, TransformControls } from '@react-three/drei';
import { MaterialMaker, GlowMaterial } from './Util/MaterialMaker';
import { MeshLookup, MeshLookupTable } from './MeshLookup';
import useRobotSceneStore from './RobotSceneStore';

export default function SceneLine(props) {
  const { orbitControls, itemKey } = props;

  const {name, vertices} = useRobotSceneStore(state => ({name: state.lines[key].name, vertices: state.lines[key].vertices}));

  return (
    <Line
      points={vertices.map(vertex=>([vertex.position.x,vertex.position.y,vertex.position.z]))}
      color='white'
      vertexColors={vertices.map(vertex=>([vertex.color.r/255,vertex.color.g/255,vertex.color.b/255]))}
      lineWidth={3}
    />
  )
}
