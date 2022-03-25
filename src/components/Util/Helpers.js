import { BOX_GEOM, CYLINDER_GEOM, SPHERE_GEOM, ARROW_GEOM, CAPSULE_GEOM } from "./StandardMeshes";
import TF, { WorldTF, GizmoTF } from "../TF";
import Item from "../Item";
import Line from "../Line";
import Hull from "../Hull";
import Text from "../Text";

export function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function(result, key) {
        result[key] = mapFn(object[key])
        return result
    }, {})
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
    return [{geometry,type:'part'}]
}

export const renderTree = (activeTf, displayTfs, allTfs, allItems, allLines, allHulls, allTexts, highlightColor, ghosts) => {

    const TFComponent = activeTf === 'world'
      ? WorldTF
      : activeTf === 'gizmo'
        ? GizmoTF
        : TF;
  
    return (
      <TFComponent key={activeTf} tfKey={activeTf} displayTfs={displayTfs}>
        {allTfs.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(tf => (
          renderTree(tf.tfKey, displayTfs, allTfs, allItems, allLines, allHulls, allTexts, highlightColor, ghosts)
        ))}
        {allItems.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(item => (
          <Item key={item.itemKey} itemKey={item.itemKey} node={item.node} highlightColor={highlightColor}/>
        ))}
        {allLines.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(line => (
          <Line key={line.lineKey} lineKey={line.lineKey} />
        ))}
        {allHulls.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(hull => (
          <Hull key={hull.hullKey} hullKey={hull.hullKey} node={hull.node} highlightColor={highlightColor} />
        ))}
        {allTexts.filter(v => v.frame === activeTf || (activeTf === 'world' && !v.frame)).map(text => (
          <Text key={text.textKey} textKey={text.textKey} highlightColor={highlightColor} />
        ))}
      </TFComponent>
    )
  }