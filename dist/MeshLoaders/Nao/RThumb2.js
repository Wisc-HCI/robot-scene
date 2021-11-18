"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _RThumb = _interopRequireDefault(require("../../Meshes/Nao/RThumb2.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_RThumb.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes.RThumb2.geometry,
    material: materials.RThumb2UV,
    scale: [0.01, 0.01, 0.01]
  }];
}

_drei.useGLTF.preload(_RThumb.default);