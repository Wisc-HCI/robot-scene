"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frameUpdate = exports.applyTransform = void 0;

var _three = require("three");

var applyTransform = function applyTransform(position, rotation, transform) {
  var localPos = new _three.Vector3(position.x, position.y, position.z);
  var translation = new _three.Vector3(transform.translation.x, transform.translation.y, transform.translation.z);
  var tfRotation = new _three.Quaternion(transform.rotation.x, transform.rotation.y, transform.rotation.z, transform.rotation.w);
  var localRotation = new _three.Quaternion(rotation.x, rotation.y, rotation.z, rotation.w);
  var transPos = localPos.applyQuaternion(tfRotation).add(translation);
  var transRot = localRotation.multiply(tfRotation);
  return {
    transPos: transPos,
    transRot: transRot
  };
};

exports.applyTransform = applyTransform;

var frameUpdate = function frameUpdate(mesh, position, rotation, transform) {
  var _applyTransform = applyTransform(position, rotation, transform),
      transPos = _applyTransform.transPos,
      transRot = _applyTransform.transRot;

  mesh.current.position.copy(transPos);
  mesh.current.quaternion.copy(transRot);
};

exports.frameUpdate = frameUpdate;