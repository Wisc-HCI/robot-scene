"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _base = _interopRequireDefault(require("../../../Meshes/Ur3/collision/base.glb"));

var _drei = require("@react-three/drei");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_base.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'raw',
    geometry: nodes.base.geometry,
    material: nodes.base.material
  }];
}

_drei.useGLTF.preload(_base.default);