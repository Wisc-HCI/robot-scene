"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _AssemblyJig = _interopRequireDefault(require("../../Meshes/Other/AssemblyJig.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_AssemblyJig.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'group',
    rotation: [-Math.PI / 2, 0, 0],
    children: [{
      type: 'raw',
      geometry: nodes.AssemblyJig.geometry,
      material: materials.AssemblyJigMaterial,
      scale: [5, 5, 5]
    }]
  }];
}

_drei.useGLTF.preload(_AssemblyJig.default);