"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _RFinger = _interopRequireDefault(require("../../Meshes/Nao/RFinger21.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_RFinger.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes.RFinger21.geometry,
    material: materials.RFinger21UV,
    scale: [0.01, 0.01, 0.01]
  }];
}

_drei.useGLTF.preload(_RFinger.default);