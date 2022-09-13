import React, { useRef, useCallback, forwardRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import { MeshLookup, MeshLookupTable } from './MeshLookup';
import { BackSide, FrontSide } from 'three';
// import { GhostMaterial } from './Util/MaterialMaker';
import { updateShapeMaterial, createGenericShape, useCombinedRefs, updateColorOverlay ,getGetter} from './Util/Helpers';
import { useSceneStore } from './SceneContext';
import { Select } from '@react-three/postprocessing';
import { GhostMaterial } from './Util/MaterialMaker';
import { LayerMaterial, Color, Texture } from 'lamina';


const GENERIC_SHAPES = ['cube', 'cylinder', 'sphere', 'capsule', 'arrow'];

export default forwardRef(({ objectKey, highlightColor, position, rotation, scale, ghost }, forwardedRef) => {

  const innerRef = useRef(null);
  const ref = useCombinedRefs(forwardedRef, innerRef);

  const onClick = useSceneStore(state => state.onClick);
  const onPointerOver = useSceneStore(state => state.onPointerOver);
  const onPointerOut = useSceneStore(state => state.onPointerOut);
  const clock = useSceneStore(state => state.clock);

  const item = useSceneStore(useCallback(state => (state.items[objectKey]), [objectKey]))

  const content = GENERIC_SHAPES.includes(item.shape) ? createGenericShape(item) : item.shape in MeshLookupTable ? MeshLookup(item.shape) : [];

  const positionXGetter =  getGetter(item.position.x);
  const positionYGetter =  getGetter(item.position.y);
  const positionZGetter =  getGetter(item.position.z);

  const rotationXGetter =  getGetter(item.rotation.x);
  const rotationYGetter =  getGetter(item.rotation.y);
  const rotationZGetter =  getGetter(item.rotation.z);
  const rotationWGetter =  getGetter(item.rotation.w);

  const scaleXGetter =  getGetter(item.scale.x);
  const scaleYGetter =  getGetter(item.scale.y);
  const scaleZGetter =  getGetter(item.scale.z);

  const hiddenGetter = getGetter(item.hidden);

 
  




 //console.log("positionXGetter" , positionXGetter);


  useFrame(useCallback(() => {
    // Outside of react rendering, adjust the positions of the item.
    const time = clock.getElapsed() * 1000;
    //console.log(time);
    if (ref.current) {
      
      ref.current.position.set(
    
        position ? position.x : positionXGetter(time),
        position ? position.y : positionYGetter(time),
        position ? position.z : positionZGetter(time),
      );
      ref.current.quaternion.set(
       
      
        rotation ? rotation.x : rotationXGetter(time),
        rotation ? rotation.x : rotationYGetter(time),
        rotation ? rotation.z : rotationZGetter(time),
        rotation ? rotation.w : rotationWGetter(time),
      );
      ref.current.scale.set(
        scale ? scale.x : scaleXGetter(time),
        scale ? scale.y :scaleYGetter(time),
        scale ? scale.z :scaleZGetter(time),
      );
       
        ref.current.visible = hiddenGetter !== null && hiddenGetter !== undefined ? !hiddenGetter(time) : null    
    }
  }, [item, position, rotation, scale, ref]));

  return (
    <Select enabled={item.highlighted}>
      <group ref={ref} up={[0, 0, 1]}>
        <group
          up={[0, 0, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerDown={(e) => { onClick(objectKey, !ref.current.visible, e) }}
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
})

const Part = ({ part, objectKey, ghost, highlightColor }) => {

  const wireframe = useSceneStore(useCallback(state => state.items[objectKey].wireframe, [objectKey]));
  const colorOverlay = useSceneStore(useCallback(state => state.items[objectKey].colorOverlay, [objectKey]));
  const color = useSceneStore(useCallback(state => state.items[objectKey].color, [objectKey]));
  const materialOverride = (color !== undefined);



  const frontRef = useRef();
  const backRef = useRef();
  const colorRef = useRef();

  const clock = useSceneStore(state => state.clock);

  
  let update = true;
  let colorGetter = null;
  if (color === undefined || color === null){
    update = false;
  }else{
    colorGetter = {r:getGetter(color.r), g:getGetter(color.g), b: getGetter(color.b), a:getGetter(color.a)}
  }
 

  useFrame(useCallback(() => {
    const time = clock.getElapsed() * 1000;
    if (update === true){
      if (colorOverlay) {
        updateColorOverlay(colorRef, colorGetter, time);
  
      } else if (!ghost && !colorOverlay) {
        updateShapeMaterial(backRef, colorGetter, time);
        updateShapeMaterial(frontRef, colorGetter, time);
      }
    }
    

  }, [objectKey, ghost, frontRef, backRef]));

  

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
  } else if (colorOverlay) {

    return (
      <>
        <mesh
          key='I'
          ref={frontRef}
          geometry={part.geometry}
          scale={part.scale}
          castShadow={true}
          receiveShadow={true}
          wireframe={wireframe}
        >
          <LayerMaterial lighting="physical" {...part.material}>
            {part.material.map !== null && <Texture map={part.material.map} alpha={1} />}
            <Color ref={colorRef} color={color} alpha={color.a} />
          </LayerMaterial>

        </mesh>
      </>
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


}

const GroupOrPart = ({ idx, groupOrPart, ghost, objectKey, highlightColor }) => {
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
}