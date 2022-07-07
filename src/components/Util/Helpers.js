
import { useRef, useEffect } from 'react';
import { 
    BOX_GEOM, 
    CYLINDER_GEOM, 
    SPHERE_GEOM, 
    ARROW_GEOM, 
    CAPSULE_GEOM 
} from "./StandardMeshes";

export function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function (result, key) {
        result[key] = mapFn(object[key])
        return result
    }, {})
}



export function updateColorOverlay(ref, color, time) {
    if (ref.current && color) {
        const r = typeof color.r === 'function' ? color.r(time) / 255 : color.r / 255;
        const g = typeof color.g === 'function' ? color.g(time) / 255 : color.g / 255;
        const b = typeof color.b === 'function' ? color.b(time) / 255 : color.b / 255;
        const alpha = typeof color.a === 'function' ? color.a(time) : color.a;
        ref.current.color.r = r;
        ref.current.color.g = g;
        ref.current.color.b = b;
        ref.current.alpha = alpha;
    }
}

export const updateShapeMaterial = (ref, color, time) => {
    if (ref.current && color) {
        const r = typeof color.r === 'function' ? color.r(time) / 255 : color.r / 255;
        const g = typeof color.g === 'function' ? color.g(time) / 255 : color.g / 255;
        const b = typeof color.b === 'function' ? color.b(time) / 255 : color.b / 255;
        const opacity = typeof color.a === 'function' ? color.a(time) : color.a;
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
