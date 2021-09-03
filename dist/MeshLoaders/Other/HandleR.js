"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _HandleR = _interopRequireDefault(require("../../Meshes/Other/HandleR.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_HandleR.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'group',
    rotation: [Math.PI, 0, 0],
    children: [{
      type: 'raw',
      geometry: nodes.RHandle.geometry,
      material: materials.rmaterial,
      scale: [5, 5, 5]
    }]
  }];
}

_drei.useGLTF.preload(_HandleR.default);