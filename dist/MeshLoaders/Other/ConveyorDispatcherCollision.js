"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _ConveyorDispatcherCollision = _interopRequireDefault(require("../../Meshes/Other/ConveyorDispatcherCollision.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_ConveyorDispatcherCollision.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'group',
    rotation: [-Math.PI / 2, 0, 0],
    children: [{
      type: 'raw',
      geometry: nodes.ConveyorDispatcherCollision.geometry,
      material: nodes.ConveyorDispatcherCollision.material
    }]
  }];
}

_drei.useGLTF.preload(_ConveyorDispatcherCollision.default);