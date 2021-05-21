"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _H = _interopRequireDefault(require("../../../Meshes/Baxter/head/H0.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_H.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes.H0.geometry,
    material: materials['Material_001.001']
  }];
}

_drei.useGLTF.preload(_H.default);