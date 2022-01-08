"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGenericShape = void 0;
exports.objectMap = objectMap;
exports.updateShapeMaterial = void 0;

var _StandardMeshes = require("./StandardMeshes");

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}

var updateShapeMaterial = function updateShapeMaterial(ref, color, time) {
  if (ref.current && color) {
    var r = typeof color.r === 'function' ? color.r(time) / 255 : color.r / 255;
    var g = typeof color.g === 'function' ? color.g(time) / 255 : color.g / 255;
    var b = typeof color.b === 'function' ? color.b(time) / 255 : color.b / 255;
    var opacity = typeof color.a === 'function' ? color.a(time) : color.a;
    ref.current.material.color.setRGB(r, g, b);
    ref.current.material.opacity = opacity;
    ref.current.material.transparent = opacity === 1 ? false : true;
  }
};

exports.updateShapeMaterial = updateShapeMaterial;

var createGenericShape = function createGenericShape(item) {
  var geometry = null;

  if (!item.shape) {
    return [];
  } else if (item.shape === 'cube') {
    geometry = (0, _StandardMeshes.BOX_GEOM)(item.shapeParams);
  } else if (item.shape === 'cylinder') {
    geometry = (0, _StandardMeshes.CYLINDER_GEOM)(item.shapeParams);
  } else if (item.shape === 'sphere') {
    geometry = (0, _StandardMeshes.SPHERE_GEOM)(item.shapeParams);
  } else if (item.shape === 'capsule') {
    geometry = (0, _StandardMeshes.CAPSULE_GEOM)(item.shapeParams);
  } else if (item.shape === 'arrow') {
    geometry = (0, _StandardMeshes.ARROW_GEOM)(item.shapeParams);
  }

  return [{
    geometry: geometry,
    type: 'part'
  }];
};

exports.createGenericShape = createGenericShape;