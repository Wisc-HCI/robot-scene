"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sphereGeomDefaultRadius = exports.cylinderGeomDefaultRadius = exports.cylinderGeomDefaultHeight = exports.coneGeomShaftLength = exports.coneGeomShaftDiameter = exports.coneGeomHeadLength = exports.coneGeomHeadDiameter = exports.boxGeomDefaultDim = exports.StandardMeshesLookup = exports.Sphere = exports.STANDARD_MESHES = exports.SPHERE_GEOM = exports.Cylinder = exports.Cube = exports.CYLINDER_GEOM = exports.CAPSULE_GEOM = exports.BOX_GEOM = exports.Arrow = exports.ARROW_GEOM = void 0;

var _three = require("three");

var _threeStdlib = require("three-stdlib");

var _BufferGeometryUtils = require("three-stdlib/utils/BufferGeometryUtils");

/*
 * Box Mesh
 */
var boxGeomDefaultDim = 1; // export const BOX_GEOM = (params) => {
//   let { x, y, z } = params === undefined ? {} : params;
//   x = x === undefined ? boxGeomDefaultDim : x;
//   y = y === undefined ? boxGeomDefaultDim : y;
//   z = z === undefined ? boxGeomDefaultDim : z;
//   return new BoxBufferGeometry(x, y, z);
// };

exports.boxGeomDefaultDim = boxGeomDefaultDim;

var BOX_GEOM = function BOX_GEOM(params) {
  var _ref = params === undefined ? {} : params,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z;

  x = x === undefined ? boxGeomDefaultDim : x;
  y = y === undefined ? boxGeomDefaultDim : y;
  z = z === undefined ? boxGeomDefaultDim : z;
  return new _threeStdlib.RoundedBoxGeometry(x, y, z, 2, 0.05);
};
/*
 * Sphere Mesh
 */


exports.BOX_GEOM = BOX_GEOM;
var sphereGeomDefaultRadius = 0.5;
exports.sphereGeomDefaultRadius = sphereGeomDefaultRadius;

var SPHERE_GEOM = function SPHERE_GEOM(params) {
  var _ref2 = params === undefined ? {} : params,
      radius = _ref2.radius;

  radius = radius === undefined ? sphereGeomDefaultRadius : radius;
  return new _three.SphereBufferGeometry(radius, 32, 32);
};
/*
 * Cylinder Mesh
 */


exports.SPHERE_GEOM = SPHERE_GEOM;
var cylinderGeomDefaultRadius = 0.5;
exports.cylinderGeomDefaultRadius = cylinderGeomDefaultRadius;
var cylinderGeomDefaultHeight = 1;
exports.cylinderGeomDefaultHeight = cylinderGeomDefaultHeight;

var CYLINDER_GEOM = function CYLINDER_GEOM(params) {
  var _ref3 = params === undefined ? {} : params,
      radius = _ref3.radius,
      height = _ref3.height;

  radius = radius === undefined ? cylinderGeomDefaultRadius : radius;
  height = height === undefined ? cylinderGeomDefaultHeight : height;
  return new _three.CylinderBufferGeometry(radius, radius, height, 32, 1, false);
};
/*
 * Arrow Mesh
 */
// CYLINDER_GEOM.quaternion.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI * 0.5)


exports.CYLINDER_GEOM = CYLINDER_GEOM;
var coneGeomHeadLength = 0.4;
exports.coneGeomHeadLength = coneGeomHeadLength;
var coneGeomShaftDiameter = 0.05;
exports.coneGeomShaftDiameter = coneGeomShaftDiameter;
var coneGeomHeadDiameter = 0.2;
exports.coneGeomHeadDiameter = coneGeomHeadDiameter;
var coneGeomShaftLength = 0.6;
exports.coneGeomShaftLength = coneGeomShaftLength;

var ARROW_GEOM = function ARROW_GEOM(params) {
  var _ref4 = params === undefined ? {} : params,
      length = _ref4.length,
      radius = _ref4.radius;

  length = length === undefined ? 1 : length;
  radius = radius === undefined ? 1 : radius;
  var capLength = coneGeomHeadLength * length;
  var capRadius = coneGeomHeadDiameter * 0.5 * radius;
  var ARROW_CAP_GEOM = new _three.CylinderBufferGeometry(0, capRadius, capLength, 32, 1);
  var shaftLength = coneGeomShaftLength * length;
  var shaftRadius = coneGeomShaftDiameter * 0.5 * radius;
  var ARROW_BASE_GEOM = new _three.CylinderBufferGeometry(shaftRadius, shaftRadius, shaftLength, 32, 1);
  var m = new _three.Matrix4();
  m.setPosition(new _three.Vector3(0, shaftLength * 0.5, 0));
  ARROW_BASE_GEOM.applyMatrix4(m);
  m.setPosition(new _three.Vector3(0, shaftLength + capLength * 0.5, 0));
  ARROW_CAP_GEOM.applyMatrix4(m);
  return (0, _BufferGeometryUtils.mergeBufferGeometries)([ARROW_CAP_GEOM, ARROW_BASE_GEOM]);
};

exports.ARROW_GEOM = ARROW_GEOM;

var CAPSULE_GEOM = function CAPSULE_GEOM(params) {
  var _ref5 = params === undefined ? {} : params,
      radius = _ref5.radius,
      height = _ref5.height;

  radius = radius === undefined ? cylinderGeomDefaultRadius : radius;
  height = height === undefined ? cylinderGeomDefaultHeight : height;
  var INNER_GEOM = new _three.CylinderBufferGeometry(radius, radius, height, 32, 1, true);
  var UPPER_SPHERE_GEOM = new _three.SphereBufferGeometry(radius, 32, 32, Math.PI, Math.PI);
  var LOWER_SPHERE_GEOM = new _three.SphereBufferGeometry(radius, 32, 32, Math.PI, Math.PI);
  var upperM = new _three.Matrix4();
  upperM.makeRotationX(Math.PI / 2);
  upperM.setPosition(0, height / 2, 0);
  var lowerM = new _three.Matrix4();
  lowerM.makeRotationX(-Math.PI / 2);
  lowerM.setPosition(0, -height / 2, 0);
  UPPER_SPHERE_GEOM.applyMatrix4(upperM);
  LOWER_SPHERE_GEOM.applyMatrix4(lowerM);
  return (0, _BufferGeometryUtils.mergeBufferGeometries)([INNER_GEOM, UPPER_SPHERE_GEOM, LOWER_SPHERE_GEOM]);
};
/*
 * Mesh Lookup Table
 */


exports.CAPSULE_GEOM = CAPSULE_GEOM;
var STANDARD_MESHES = ["cube", "sphere", "cylinder", "arrow"];
exports.STANDARD_MESHES = STANDARD_MESHES;

var StandardMeshesLookup = function StandardMeshesLookup(meshName, params) {
  var geometry = undefined;

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

exports.StandardMeshesLookup = StandardMeshesLookup;

var Cube = function Cube() {
  return [{
    type: 'raw',
    geometry: BOX_GEOM({}),
    scale: [1, 1, 1]
  }];
};

exports.Cube = Cube;

var Sphere = function Sphere() {
  return [{
    type: 'raw',
    geometry: SPHERE_GEOM({}),
    scale: [1, 1, 1]
  }];
};

exports.Sphere = Sphere;

var Cylinder = function Cylinder() {
  return [{
    type: 'raw',
    geometry: CYLINDER_GEOM({}),
    scale: [1, 1, 1]
  }];
};

exports.Cylinder = Cylinder;

var Arrow = function Arrow() {
  return [{
    type: 'raw',
    geometry: ARROW_GEOM({}),
    scale: [1, 1, 1]
  }];
};

exports.Arrow = Arrow;