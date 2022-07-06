import React, {useCallback, useRef, forwardRef} from 'react';
import { Line } from '@react-three/drei';
import { useSceneStore } from './SceneContext';
// import { extend } from '@react-three/fiber';
// import { MeshLine, MeshLineMaterial } from 'meshline'
// import { CatmullRomCurve3, vector3 } from 'three';
// import { Color } from 'three';
import { useCombinedRefs } from './Util/Helpers';
// import { Select } from '@react-three/postprocessing';
// extend({ MeshLine, MeshLineMaterial })

// const minVector = new Vector3(0,0,0);
// const maxVector = new Vector3(255,255,255);

// const Segment = ({v1, v2, color}) => {
//   console.log({v1,v2,color})
//   const colorVal = new Color(color.x/255,color.y/255,color.z/255)
//   return (
//     <mesh>
//       <meshLine attach='geometry' points={[v1,v2]}/>
//       <meshLineMaterial attach="material" transparent color={colorVal.getHex()} lineWidth={0.03} opacity={0.5}/>
//     </mesh>
//   )

// }

export default forwardRef(({objectKey},forwardedRef)=>{
  const innerRef = useRef(null);
  const lineRef = useCombinedRefs(forwardedRef, innerRef);

  const {vertices, width, hidden} = useSceneStore(useCallback(state => ({
    vertices: state.lines[objectKey].vertices,
    width: state.lines[objectKey].width,
    hidden: state.lines[objectKey].hidden
  }),[objectKey]));

  if (vertices.length <= 1) {
    return null
  }

  // const positionCurve = new CatmullRomCurve3(vertices.map(v=>new Vector3(v.position.x,v.position.y,v.position.z)))
  // const colorCurve = new CatmullRomCurve3(vertices.map(v=>new Vector3(v.color.r,v.color.g,v.color.b)))
  // const points = positionCurve.getPoints(vertices.length*10);
  // const colors = colorCurve.getPoints(vertices.length*10);
  // console.log(points)

  return (
    // <Select enabled={true}>
    //   {/* <mesh>
    //     <meshLine attach='geometry' points={points}/>
    //     <meshLineMaterial attach="material" transparent color={colors[100]} lineWidth={0.03} opacity={0.5}/>
    //   </mesh> */}
    //   {points.slice(0,points.length-1).map((_,i)=>(
    //     <Segment key={i} v1={points[i]} v2={points[i+1]} color={colors[i].clamp(minVector,maxVector)} lineWidth={1} transparent/>
    //   ))}
    // </Select>
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
