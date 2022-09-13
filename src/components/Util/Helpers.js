
import React, { useRef, useEffect } from 'react';
import { BOX_GEOM, CYLINDER_GEOM, SPHERE_GEOM, ARROW_GEOM, CAPSULE_GEOM } from "./StandardMeshes";

export function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function (result, key) {
        result[key] = mapFn(object[key])
        return result
    }, {})
}



export function getGetter(value) {
  //console.log("value" , value)
  if (value === null || value === undefined) {
    return ()=>null;
  } else if (typeof value === "function") {
    return value;
  } else if (typeof value === "object") {
    if (value.time.length <= 0) {
      return ()=>0;
    } else {
      const memoizedGetter = memoize((time) => {
        let lastIdx = 0;
        for (let i = 0; i < value.time.length; i++) {
          if (value.time[i] <= time) {
            lastIdx = i;
          } else {
            break;
          }
        }
        return value.value[lastIdx];
      });

      const getter = (time) => {
        const val =
          time > value.time[value.time.length - 1]
            ? time % value.time[value.time.length - 1]
            : time;

        return memoizedGetter(val);
      };
      return getter;
    }
  } else if (typeof value === 'number'){
    return ()=>value;
  }
}





export function updateColorOverlay(ref, color, time) {
    
    if (ref.current && color) {
        const r = color.r(time)/255;
        const g = color.g(time)/255;
        const b = color.b(time)/255;
        const alpha = color.a(time);
        ref.current.color.r = r;
        ref.current.color.g = g;
        ref.current.color.b = b;
        ref.current.alpha = alpha;
    }
}

export const updateShapeMaterial = (ref, color, time) => {
  
    if (ref.current && color) {
        const r = color.r(time) / 255;
        const g = color.g(time) / 255;
        const b = color.b(time) / 255;
        const opacity = color.a(time);
        ref.current.material.color.setRGB(r, g, b);
        ref.current.material.opacity = opacity;
        ref.current.material.transparent = opacity === 1 ? false : true
    }
}

export const createGenericShape = (item) => {
    let geometry = null;
    if (!item.shape) {
        return []
    } else if (item.shape === 'cube') {
        geometry = BOX_GEOM(item.shapeParams)
    } else if (item.shape === 'cylinder') {
        geometry = CYLINDER_GEOM(item.shapeParams)
    } else if (item.shape === 'sphere') {
        geometry = SPHERE_GEOM(item.shapeParams)
    } else if (item.shape === 'capsule') {
        geometry = CAPSULE_GEOM(item.shapeParams)
    } else if (item.shape === 'arrow') {
        geometry = ARROW_GEOM(item.shapeParams)
    }
    return [{ geometry, type: 'part' }]
}


export function useCombinedRefs(...refs) {
    const targetRef = useRef()

    useEffect(() => {
        refs.forEach(ref => {
            if (!ref) return

            if (typeof ref === 'function') {
                ref(targetRef.current)
            } else {
                ref.current = targetRef.current
            }
        })
    }, [refs])

    return targetRef
}