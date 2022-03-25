"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGenericShape = void 0;
exports.objectMap = objectMap;
exports.updateShapeMaterial = exports.renderTree = void 0;

var _react = _interopRequireDefault(require("react"));

var _StandardMeshes = require("./StandardMeshes");

var _TF = _interopRequireWildcard(require("../TF"));

var _Item = _interopRequireDefault(require("../Item"));

var _Line = _interopRequireDefault(require("../Line"));

var _Hull = _interopRequireDefault(require("../Hull"));

var _Text = _interopRequireDefault(require("../Text"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var renderTree = function renderTree(activeTf, displayTfs, allTfs, allItems, allLines, allHulls, allTexts, highlightColor, ghosts) {
  var TFComponent = activeTf === 'world' ? _TF.WorldTF : activeTf === 'gizmo' ? _TF.GizmoTF : _TF.default;
  return /*#__PURE__*/_react.default.createElement(TFComponent, {
    key: activeTf,
    tfKey: activeTf,
    displayTfs: displayTfs
  }, allTfs.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (tf) {
    return renderTree(tf.tfKey, displayTfs, allTfs, allItems, allLines, allHulls, allTexts, highlightColor, ghosts);
  }), allItems.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_Item.default, {
      key: item.itemKey,
      itemKey: item.itemKey,
      node: item.node,
      highlightColor: highlightColor
    });
  }), allLines.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (line) {
    return /*#__PURE__*/_react.default.createElement(_Line.default, {
      key: line.lineKey,
      lineKey: line.lineKey
    });
  }), allHulls.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (hull) {
    return /*#__PURE__*/_react.default.createElement(_Hull.default, {
      key: hull.hullKey,
      hullKey: hull.hullKey,
      node: hull.node,
      highlightColor: highlightColor
    });
  }), allTexts.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (text) {
    return /*#__PURE__*/_react.default.createElement(_Text.default, {
      key: text.textKey,
      textKey: text.textKey,
      highlightColor: highlightColor
    });
  }));
};

exports.renderTree = renderTree;