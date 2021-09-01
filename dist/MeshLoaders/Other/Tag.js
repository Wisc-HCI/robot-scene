"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _Tag = _interopRequireDefault(require("../../Meshes/Other/Tag.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_Tag.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'group',
    rotation: [-Math.PI / 2, 0, 0],
    children: [{
      type: 'raw',
      geometry: nodes.mesh_0.geometry,
      material: nodes.mesh_0.material,
      scale: [0.1, 0.1, 0.1]
    }]
  }];
}

_drei.useGLTF.preload(_Tag.default);