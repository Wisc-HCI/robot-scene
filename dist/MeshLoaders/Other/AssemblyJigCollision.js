"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _AssemblyJigCollision = _interopRequireDefault(require("../../Meshes/Other/AssemblyJigCollision.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_AssemblyJigCollision.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'group',
    rotation: [Math.PI / 2, 0, 0],
    children: [{
      type: 'raw',
      geometry: nodes.Mesh_0.geometry,
      material: nodes.Mesh_0.material,
      scale: [5, 5, 5]
    }]
  }];
}

_drei.useGLTF.preload(_AssemblyJigCollision.default);