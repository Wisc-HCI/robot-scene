import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { TransformControls } from '@react-three/drei';
import { MaterialMaker, GlowMaterial } from './Util/MaterialMaker';
import { MeshLookup, MeshLookupTable } from './MeshLookup';
import useSceneStore from './SceneStore';

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

export default forwardRef(function SceneItem(props,ref) {
  const { orbitControls, itemKey } = props;

  const { canTranslate, canRotate, canScale, color, shape } = 
    useSceneStore(state=>({canTranslate:state.items[itemKey].canTranslate,
                           canRotate:state.items[itemKey].canRotate,
                           canScale:state.items[itemKey].canScale,
                           shape:state.items[itemKey].shape,
                           color:state.items[itemKey].color}))

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
  // const [storedTransform, setStoredTransform] = useState({position:position,rotation:rotation,scale:scale});
  const transformControls = useRef();
  const highlightRef = useRef()

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
    // Outside of react rendering, adjust the positions of all tfs.
    const item = useSceneStore.getState().items[itemKey];

    ref.current.position.set(item.position.x, item.position.y, item.position.z);
    ref.current.quaternion.set(
      item.rotation.x,
      item.rotation.y,
      item.rotation.z,
      item.rotation.w
    );
    ref.current.scale.set(item.scale.x, item.scale.y, item.scale.z);
    if (highlightRef.current) {
      highlightRef.current.position.set(item.position.x, item.position.y, item.position.z);
    }
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
})
