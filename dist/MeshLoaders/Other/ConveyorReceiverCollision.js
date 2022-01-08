"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _ConveyorReceiverCollision = _interopRequireDefault(require("../../Meshes/Other/ConveyorReceiverCollision.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_ConveyorReceiverCollision.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'group',
    rotation: [-Math.PI / 2, 0, 0],
    children: [{
      type: 'raw',
      geometry: nodes.ConveyorReceiverCollision.geometry,
      material: nodes.ConveyorReceiverCollision.material
    }]
  }];
}

_drei.useGLTF.preload(_ConveyorReceiverCollision.default);