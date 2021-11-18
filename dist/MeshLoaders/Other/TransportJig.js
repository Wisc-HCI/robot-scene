"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _TransportJig = _interopRequireDefault(require("../../Meshes/Other/TransportJig.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_TransportJig.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'group',
    rotation: [-Math.PI / 2, 0, 0],
    children: [{
      type: 'raw',
      geometry: nodes.TransportJig.geometry,
      material: materials['TransportJig.material'],
      scale: [5, 5, 5]
    }]
  }];
}

_drei.useGLTF.preload(_TransportJig.default);