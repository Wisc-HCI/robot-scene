"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeshConverter = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MeshConverter = function MeshConverter(node, idx, materialOverride, opacity) {
  // console.log(node);
  if (node.type === 'group') {
    var nodes = node.children.map(function (child, i) {
      return MeshConverter(child, i, materialOverride, opacity);
    });

    var group = /*#__PURE__*/_react.default.createElement("group", {
      key: idx,
      position: node.position,
      rotation: node.rotation,
      scale: node.scale
    }, nodes.map(function (node) {
      return node[0];
    }));

    var refs = [].concat.apply([], nodes.map(function (node) {
      return node[1];
    }));
    return [group, refs];
  } else {
    var ref = /*#__PURE__*/(0, _react.createRef)();

    var mesh = /*#__PURE__*/_react.default.createElement("mesh", {
      ref: ref,
      key: idx,
      geometry: node.geometry,
      material: materialOverride ? materialOverride : node.material,
      scale: node.scale,
      castShadow: opacity === 1.0,
      receiveShadow: opacity === 1.0
    });

    return [mesh, [ref]];
  }
};

exports.MeshConverter = MeshConverter;