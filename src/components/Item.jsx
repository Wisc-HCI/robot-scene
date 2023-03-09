import React, { useRef, useCallback, forwardRef, memo } from 'react';
import { useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
// import { MeshLookup, MeshLookupTable } from './MeshLookup';
import { BackSide, FrontSide, Vector3, Quaternion } from 'three';
// import { GhostMaterial } from './Util/MaterialMaker';
import { updateShapeMaterial, useCombinedRefs } from './Util/Helpers';
import { useSceneStore } from './SceneContext';
import { Select } from '@react-three/postprocessing';
import { GhostMaterial } from './Util/MaterialMaker';
// import { LayerMaterial, Color, Texture } from 'lamina';
import { useMesh } from './MeshContext';
import { shallow } from 'zustand/shallow';


// const GENERIC_SHAPES = ['cube', 'cylinder', 'sphere', 'capsule', 'arrow'];

export default memo(forwardRef(({ objectKey, highlightColor, position, rotation, scale, ghost }, forwardedRef) => {
  
  const innerRef = useRef(null);
  const ref = useCombinedRefs(forwardedRef, innerRef);

  const onClick = useSceneStore(state => state.onClick, shallow);
  const onPointerOver = useSceneStore(state => state.onPointerOver, shallow);
  const onPointerOut = useSceneStore(state => state.onPointerOut, shallow);
  const clock = useSceneStore(state => state.clock);

  const item = useSceneStore(useCallback(state => (state.items[objectKey]), [objectKey]), shallow)

  const content = useMesh(item);//GENERIC_SHAPES.includes(item.shape) ? createGenericShape(item) : item.shape in MeshLookupTable ? MeshLookup(item.shape) : [];

  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of the item.
    const time = clock.getElapsed() * 1000;
    if (ref.current) {
      
      ref.current.position.set(
        position ? position.x : typeof item.position.x === 'function' ? item.position.x(time) : item.position.x,
        position ? position.y : typeof item.position.y === 'function' ? item.position.y(time) : item.position.y,
        position ? position.z : typeof item.position.z === 'function' ? item.position.z(time) : item.position.z,
      );
      ref.current.quaternion.set(
        rotation ? rotation.x : typeof item.rotation.x === 'function' ? item.rotation.x(time) : item.rotation.x,
        rotation ? rotation.y : typeof item.rotation.y === 'function' ? item.rotation.y(time) : item.rotation.y,
        rotation ? rotation.z : typeof item.rotation.z === 'function' ? item.rotation.z(time) : item.rotation.z,
        rotation ? rotation.w : typeof item.rotation.w === 'function' ? item.rotation.w(time) : item.rotation.w
      );
      ref.current.scale.set(
        scale ? scale.x : typeof item.scale.x === 'function' ? item.scale.x(time) : item.scale.x,
        scale ? scale.y : typeof item.scale.y === 'function' ? item.scale.y(time) : item.scale.y,
        scale ? scale.z : typeof item.scale.z === 'function' ? item.scale.z(time) : item.scale.z,
      );
      ref.current.visible = typeof item.hidden === 'function' ? !item.hidden(time) : !item.hidden;
    }
  }, [item, position, rotation, scale, ref, clock]));

  return (
    <Select enabled={item.highlighted}>
      <group ref={ref} up={[0, 0, 1]}>
        <group
          up={[0, 0, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerDown={(e) => { onClick(
            objectKey, 
            !ref.current.visible, 
            {
              local:{
                position:ref.current.position,
                rotation:ref.current.quaternion
              },
              world:{
                position:ref.current.getWorldPosition(new Vector3()),
                rotation:ref.current.getWorldQuaternion(new Quaternion())
              }
            }, 
            e) 
          }}
          onPointerOver={(e) => { onPointerOver(objectKey, !ref.current.visible, e) }}
          onPointerOut={(e) => { onPointerOut(objectKey, !ref.current.visible, e) }}>
          {content.map((groupOrPart, idx) => (
            <GroupOrPart
              key={idx}
              idx={idx}
              groupOrPart={groupOrPart}
              objectKey={objectKey}
              ghost={ghost}
              highlightColor={highlightColor}
            />))}
        </group>
        {item.showName && (
          <Html distanceFactor={3} position={[0, 0, 0.2]}>
            <div style={{ opacity: 0.75, borderRadius: 2, backgroundColor: 'lightgrey', padding: 5, userSelect: 'none' }}>
              {item.name}
            </div>
          </Html>
        )}
      </group>
    </Select>

  )
}))

const Part = memo(({ part, objectKey, ghost, highlightColor }) => {

  const wireframe = useSceneStore(useCallback(state => state.items[objectKey].wireframe, [objectKey]));
  const color = useSceneStore(useCallback(state => state.items[objectKey].color, [objectKey]));
  const materialOverride = (color !== undefined);



  const frontRef = useRef();
  const backRef = useRef();
  // const colorRef = useRef();

  const clock = useSceneStore(state => state.clock);

  useFrame(useCallback(() => {
    const time = clock.getElapsed() * 1000;
    if (!ghost) {
      updateShapeMaterial(backRef, color, time);
      updateShapeMaterial(frontRef, color, time);
    }

  }, [ghost, frontRef, backRef, clock, color]));

  

  if (ghost) {
    return (
      <mesh
        ref={backRef}
        key='B'
        geometry={part.geometry}
        material={GhostMaterial(highlightColor)}
        scale={part.scale}
        castShadow={false}
        receiveShadow={false}
      >

      </mesh>
    )
  } else if (materialOverride) {//third option ? orginal material , color overlay ? 
    return (
      <group up={[0, 0, 1]} >
        <mesh
          ref={backRef}
          key='B'
          geometry={part.geometry}
          scale={part.scale}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial
            transparent
            wireframe={wireframe}
            attach='material'
            opacity={1}
            // color='#000000' 
            side={BackSide}
          />

        </mesh>
        <mesh
          ref={frontRef}
          key='F'
          geometry={part.geometry}
          scale={part.scale}
          castShadow={false}
          receiveShadow={false}
        >
          <meshLambertMaterial
            transparent
            attach='material'
            wireframe={wireframe}
            opacity={1}
            // color='#000000'
            side={FrontSide}
          />
        </mesh>
      </group>
    )
  } else {
    return (
      <>
        <mesh
          key='I'
          ref={frontRef}
          geometry={part.geometry}
          material={part.material}
          scale={part.scale}
          castShadow={true}
          receiveShadow={true}
          wireframe={wireframe}
        >
        </mesh>
      </>

    )
  }


})

const GroupOrPart = memo(({ idx, groupOrPart, ghost, objectKey, highlightColor }) => {
  if (groupOrPart.type === 'group') {
    return (
      <group key={idx} up={[0, 0, 1]} position={groupOrPart.position} rotation={groupOrPart.rotation} scale={groupOrPart.scale}>
        {groupOrPart.children.map((groupOrPartChild, childIdx) => (
          <GroupOrPart
            key={childIdx}
            idx={childIdx}
            groupOrPart={groupOrPartChild}
            objectKey={objectKey}
            ghost={ghost}
            highlightColor={highlightColor}
          />))}
      </group>
    )
  } else {
    return (
      <Part key={idx} part={groupOrPart} objectKey={objectKey} highlightColor={highlightColor} ghost={ghost} />
    )
  }
})