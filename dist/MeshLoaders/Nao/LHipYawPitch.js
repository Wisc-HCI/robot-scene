"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _LHipYawPitch = _interopRequireDefault(require("../../Meshes/Nao/LHipYawPitch.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_LHipYawPitch.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes.LHipYawPitch.geometry,
    material: materials.LHipYawPitchUV,
    scale: [0.01, 0.01, 0.01]
  }];
}

_drei.useGLTF.preload(_LHipYawPitch.default);