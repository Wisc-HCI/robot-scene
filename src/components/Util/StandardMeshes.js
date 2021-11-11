import {
  CylinderBufferGeometry,
  SphereBufferGeometry,
  Matrix4,
  Vector3
} from "three";

import { RoundedBoxGeometry } from 'three-stdlib';

import { mergeBufferGeometries } from "three-stdlib/utils/BufferGeometryUtils";

/*
 * Box Mesh
 */

export const boxGeomDefaultDim = 1;

// export const BOX_GEOM = (params) => {
//   let { x, y, z } = params === undefined ? {} : params;

//   x = x === undefined ? boxGeomDefaultDim : x;
//   y = y === undefined ? boxGeomDefaultDim : y;
//   z = z === undefined ? boxGeomDefaultDim : z;

//   return new BoxBufferGeometry(x, y, z);
// };

export const BOX_GEOM = (params) => {
  let { x, y, z } = params === undefined ? {} : params;

  x = x === undefined ? boxGeomDefaultDim : x;
  y = y === undefined ? boxGeomDefaultDim : y;
  z = z === undefined ? boxGeomDefaultDim : z;

  return new RoundedBoxGeometry(x, y, z, 2, 0.05)

}
/*
 * Sphere Mesh
 */

export const sphereGeomDefaultRadius = 0.5;

export const SPHERE_GEOM = (params) => {
  let { radius } = params === undefined ? {} : params;

  radius = radius === undefined ? sphereGeomDefaultRadius : radius;

  return new SphereBufferGeometry(radius);
};

/*
 * Cylinder Mesh
 */

export const cylinderGeomDefaultRadius = 0.5;
export const cylinderGeomDefaultHeight = 1;

export const CYLINDER_GEOM = (params) => {
  let { radius, height } = params === undefined ? {} : params;

  radius = radius === undefined ? cylinderGeomDefaultRadius : radius;
  height = height === undefined ? cylinderGeomDefaultHeight : height;

  return new CylinderBufferGeometry(radius, radius, height, 16, 1, false);
};

/*
 * Arrow Mesh
 */

// CYLINDER_GEOM.quaternion.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI * 0.5)

export const coneGeomHeadLength = 0.4;
export const coneGeomShaftDiameter = 0.05;
export const coneGeomHeadDiameter = 0.2;
export const coneGeomShaftLength = 0.6;

export const ARROW_GEOM = (params) => {
  // I am really not a fan of girth here but it is technically the
  // best descriptor. Please help workshop it.
  let { length, girth } = params === undefined ? {} : params;

  length = length === undefined ? 1 : length;
  girth = girth === undefined ? 1 : girth;

  const capLength = coneGeomHeadLength * length;
  const capRadius = coneGeomHeadDiameter * 0.5 * girth;

  const ARROW_CAP_GEOM = new CylinderBufferGeometry(
    0,
    capRadius,
    capLength,
    12,
    1
  );

  const shaftLength = coneGeomShaftLength * length;
  const shaftRadius = coneGeomShaftDiameter * 0.5 * girth;

  const ARROW_BASE_GEOM = new CylinderBufferGeometry(
    shaftRadius,
    shaftRadius,
    shaftLength,
    12,
    1
  );

  var m = new Matrix4();
  m.setPosition(new Vector3(0, shaftLength * 0.5, 0));
  ARROW_BASE_GEOM.applyMatrix4(m);
  m.setPosition(new Vector3(0, shaftLength + capLength * 0.5, 0));
  ARROW_CAP_GEOM.applyMatrix4(m);

  return mergeBufferGeometries([
    ARROW_CAP_GEOM,
    ARROW_BASE_GEOM
  ]);
};

/*
 * Mesh Lookup Table
 */

export const STANDARD_MESHES = ["cube", "sphere", "cylinder", "arrow"];

export const StandardMeshesLookup = (meshName, params) => {
  let geometry = undefined;

  if (meshName === "cube") {
    geometry = BOX_GEOM(params);
  } else if (meshName === "sphere") {
    geometry = SPHERE_GEOM(params);
  } else if (meshName === "cylinder") {
    geometry = CYLINDER_GEOM(params);
  } else if (meshName === "arrow") {
    geometry = ARROW_GEOM(params);
  }

  return geometry;
};

export const Cube = () => ([{type:'raw',geometry:BOX_GEOM({}),scale:[1,1,1]}])
export const Sphere = () => ([{type:'raw',geometry:SPHERE_GEOM({}),scale:[1,1,1]}])
export const Cylinder = () => ([{type:'raw',geometry:CYLINDER_GEOM({}),scale:[1,1,1]}])
export const Arrow = () => ([{type:'raw',geometry:ARROW_GEOM({}),scale:[1,1,1]}])
