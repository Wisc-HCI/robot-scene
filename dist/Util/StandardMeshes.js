"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandardMeshesLookup = exports.STANDARD_MESHES = exports.ARROW_GEOM = exports.coneGeomShaftLength = exports.coneGeomHeadDiameter = exports.coneGeomShaftDiameter = exports.coneGeomHeadLength = exports.CYLINDER_GEOM = exports.cylinderGeomDefaultHeight = exports.cylinderGeomDefaultRadius = exports.SPHERE_GEOM = exports.sphereGeomDefaultRadius = exports.BOX_GEOM = exports.boxGeomDefaultDim = void 0;

var _three = require("three");

var _BufferGeometryUtils = require("three/examples/jsm/utils/BufferGeometryUtils.js");

/*
 * Box Mesh
 */
var boxGeomDefaultDim = 1;
exports.boxGeomDefaultDim = boxGeomDefaultDim;

var BOX_GEOM = function BOX_GEOM(params) {
  var _ref = params === undefined ? {} : params,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z;

  x = x === undefined ? boxGeomDefaultDim : x;
  y = y === undefined ? boxGeomDefaultDim : y;
  z = z === undefined ? boxGeomDefaultDim : z;
  return new _three.BoxBufferGeometry(x, y, z);
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
  return new _three.SphereBufferGeometry(radius);
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
  return new _three.CylinderBufferGeometry(radius, radius, height, 16, 1, false);
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
  // I am really not a fan of girth here but it is technically the
  // best descriptor. Please help workshop it.
  var _ref4 = params === undefined ? {} : params,
      length = _ref4.length,
      girth = _ref4.girth;

  length = length === undefined ? 1 : length;
  girth = girth === undefined ? 1 : girth;
  var capLength = coneGeomHeadLength * length;
  var capRadius = coneGeomHeadDiameter * 0.5 * girth;
  var ARROW_CAP_GEOM = new _three.CylinderBufferGeometry(0, capRadius, capLength, 12, 1);
  var shaftLength = coneGeomShaftLength * length;
  var shaftRadius = coneGeomShaftDiameter * 0.5 * girth;
  var ARROW_BASE_GEOM = new _three.CylinderBufferGeometry(shaftRadius, shaftRadius, shaftLength, 12, 1);
  var m = new _three.Matrix4();
  m.setPosition(new _three.Vector3(0, shaftLength * 0.5, 0));
  ARROW_BASE_GEOM.applyMatrix4(m);
  m.setPosition(new _three.Vector3(0, shaftLength + capLength * 0.5, 0));
  ARROW_CAP_GEOM.applyMatrix4(m);
  return _BufferGeometryUtils.BufferGeometryUtils.mergeBufferGeometries([ARROW_CAP_GEOM, ARROW_BASE_GEOM]);
};
/*
 * Mesh Lookup Table
 */


exports.ARROW_GEOM = ARROW_GEOM;
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