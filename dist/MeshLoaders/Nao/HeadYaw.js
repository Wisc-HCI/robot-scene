"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeadYaw;

var _drei = require("@react-three/drei");

var _HeadYaw = _interopRequireDefault(require("../../Meshes/Nao/HeadYaw.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function HeadYaw(props) {
  var _useGLTF = (0, _drei.useGLTF)(_HeadYaw.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes.HeadYaw.geometry,
    material: materials.HeadYawuv,
    scale: [0.01, 0.01, 0.01]
  }];
}

_drei.useGLTF.preload(_HeadYaw.default);