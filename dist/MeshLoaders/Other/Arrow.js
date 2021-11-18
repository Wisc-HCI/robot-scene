"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _Arrow = _interopRequireDefault(require("../../Meshes/Other/Arrow.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_Arrow.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes.Arrow.geometry,
    material: materials['Default OBJ'],
    scale: [1, 1, 1]
  }];
}

_drei.useGLTF.preload(_Arrow.default);