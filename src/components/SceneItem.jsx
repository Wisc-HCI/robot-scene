import React, { useState, createRef, useEffect } from 'react';
import { Vector3, Quaternion } from 'three';
import { useFrame } from "@react-three/fiber";
import { Line, TransformControls } from '@react-three/drei';
import { MaterialMaker, GlowMaterial } from './Util/MaterialMaker';
import { MeshLookup, MeshLookupTable } from './MeshLookup';
import useRobotSceneStore from './RobotSceneStore';

const MeshConverter = (node,idx,materialOverride,opacity) => {
  // console.log(node);
  if (node.type === 'group') {
    return (
      <group key={idx} position={node.position} rotation={node.rotation} scale={node.scale}>
        {node.children.map((child,i)=>MeshConverter(child,i,materialOverride,opacity))}
      </group>
    )
  } else {
    return (
      <mesh
        key={idx}
        geometry={node.geometry}
        material={materialOverride ? materialOverride : node.material}
        scale={node.scale}
        castShadow={opacity === 1.0}
        receiveShadow={opacity === 1.0 }
      />
    )
  }
}

export default function SceneObject(props) {
  const { orbitControls, itemKey } = props;

  const { canTranslate, canRotate, canScale } = useRobotSceneStore(state=>({canTranslate:state.items[itemKey].canTranslate,
                                                                            canRotate:state.items[itemKey].canRotate,
                                                                            canScale:state.items[itemKey].canScale}))

  let editModes = ['inactive'];
  if (canTranslate) {
    editModes.push('translate')
  }
  if (canRotate) {
    editModes.push('rotate')
  }
  if (canScale) {
    editModes.push('scale')
  }

  const [editMode, setEditMode] = useState('inactive');
  const [storedTransform, setStoredTransform] = useState({position:position,rotation:rotation,scale:scale});
  const transformControls = createRef();

  const cycleEditMode = () => {
    const current = editModes.indexOf(editMode);
    if (current + 1 === editModes.length) {
      console.log('Setting to Inactive')
      setEditMode('inactive')
    } else {
      console.log(`Setting to ${editModes[current+1]}`)
      setEditMode(editModes[current+1])
    }
  }

  let content = [];
  const materialOverride = color ? MaterialMaker(color.r, color.g, color.b, color.a) : undefined;
  const opacity = color ? color.a : 1.0

  if (shape in MeshLookupTable) {
    content = MeshLookup(shape);
  }

  useEffect(() => {
    if (transformControls.current) {
      const { current: controls } = transformControls
      const callback = (event) => {
        orbitControls.current.enabled = !event.value
      }
      controls.addEventListener('dragging-changed', callback)
      return () => controls.removeEventListener('dragging-changed', callback)
    }
  })

  useFrame(() => {
    const { position, rotation, scale } = props;
    ref.current.scale.set(scale.x,scale.y,scale.z);
    ref.current.position.set(position.x,position.y,position.z);
    ref.current.quaternion.set(rotation.x,rotation.y,rotation.z,rotation.w);
  });

  const getContent = (ghost) => {
    return (
    <group dispose={null} onClick={cycleEditMode}>
      {content.map((node,i)=>(ghost ? MeshConverter(node,i,GlowMaterial(255,255,255),1) : MeshConverter(node,i,materialOverride,opacity)))}
    </group>
  )}

  return (
    <React.Fragment>
      <group ref={ref} dispose={null}>
        {getContent(false)}
      </group>
      {(editMode !== 'inactive' && (canScale || canTranslate || canRotate)) && (
        <TransformControls mode={editMode} ref={transformControls}>
          {getContent(true)}
        </TransformControls>
      )}
    </React.Fragment>
  )
}
