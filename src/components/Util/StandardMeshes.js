import {
  CylinderBufferGeometry,
  SphereBufferGeometry,
  BoxBufferGeometry,
  Matrix4,
  Vector3
} from "three";

// import { RoundedBoxGeometry } from 'three-stdlib';

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
  // RoundedBoxGeometry()
  // return new RoundedBoxGeometry(x, y, z, 2, 0.05)
  return new BoxBufferGeometry(x,y,z)
}
/*
 * Sphere Mesh
 */

export const sphereGeomDefaultRadius = 0.5;

export const SPHERE_GEOM = (params) => {
  let { radius } = params === undefined ? {} : params;

  radius = radius === undefined ? sphereGeomDefaultRadius : radius;

  return new SphereBufferGeometry(radius, 32, 32);
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

  return new CylinderBufferGeometry(radius, radius, height, 32, 1, false);
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
  let { length, radius } = params === undefined ? {} : params;

  length = length === undefined ? 1 : length;
  radius = radius === undefined ? 1 : radius;

  const capLength = coneGeomHeadLength * length;
  const capRadius = coneGeomHeadDiameter * 0.5 * radius;

  const ARROW_CAP_GEOM = new CylinderBufferGeometry(
    0,
    capRadius,
    capLength,
    32,
    1
  );

  const shaftLength = coneGeomShaftLength * length;
  const shaftRadius = coneGeomShaftDiameter * 0.5 * radius;

  const ARROW_BASE_GEOM = new CylinderBufferGeometry(
    shaftRadius,
    shaftRadius,
    shaftLength,
    32,
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

export const CAPSULE_GEOM = (params) => {
  let { radius, height } = params === undefined ? {} : params;

  radius = radius === undefined ? cylinderGeomDefaultRadius : radius;
  height = height === undefined ? cylinderGeomDefaultHeight : height;

  const INNER_GEOM = new CylinderBufferGeometry(radius, radius, height, 32, 1, true);
  const UPPER_SPHERE_GEOM = new SphereBufferGeometry(radius, 32, 32, Math.PI,Math.PI);
  const LOWER_SPHERE_GEOM = new SphereBufferGeometry(radius, 32, 32, Math.PI, Math.PI);

  var upperM = new Matrix4();
  upperM.makeRotationX(Math.PI/2)
  upperM.setPosition(0, height/2, 0);

  var lowerM = new Matrix4();
  lowerM.makeRotationX(-Math.PI/2)
  lowerM.setPosition(0, -height/2, 0);
 

  UPPER_SPHERE_GEOM.applyMatrix4(upperM);
  LOWER_SPHERE_GEOM.applyMatrix4(lowerM);

  return mergeBufferGeometries([
    INNER_GEOM,
    UPPER_SPHERE_GEOM,
    LOWER_SPHERE_GEOM
  ]);
};


/*
 * Mesh Lookup Table
 */

// export const STANDARD_MESHES = ["cube", "sphere", "cylinder", "arrow"];

// export const StandardMeshesLookup = (meshName, params) => {
//   let geometry = undefined;

//   if (meshName === "cube") {
//     geometry = BOX_GEOM(params);
//   } else if (meshName === "sphere") {
//     geometry = SPHERE_GEOM(params);
//   } else if (meshName === "cylinder") {
//     geometry = CYLINDER_GEOM(params);
//   } else if (meshName === "arrow") {
//     geometry = ARROW_GEOM(params);
//   }

//   return geometry;
// };


// export const Cube = () => ([{type:'raw',geometry:BOX_GEOM({}),scale:[1,1,1]}])
// export const Sphere = () => ([{type:'raw',geometry:SPHERE_GEOM({}),scale:[1,1,1]}])
// export const Cylinder = () => ([{type:'raw',geometry:CYLINDER_GEOM({}),scale:[1,1,1]}])
// export const Arrow = () => ([{type:'raw',geometry:ARROW_GEOM({}),scale:[1,1,1]}])
