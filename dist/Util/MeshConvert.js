"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeshConverter = void 0;

var _react = require("react");

var MeshConverter = function MeshConverter(node, idx, materialOverride, opacity) {
  // console.log(node);
  if (node.type === 'group') {
    var nodes = node.children.map(function (child, i) {
      return MeshConverter(child, i, materialOverride, opacity);
    });
    var group = /*#__PURE__*/React.createElement("group", {
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
    var mesh = /*#__PURE__*/React.createElement("mesh", {
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