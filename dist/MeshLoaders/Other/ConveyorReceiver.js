"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _ConveyorReceiver = _interopRequireDefault(require("../../Meshes/Other/ConveyorReceiver.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_ConveyorReceiver.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'group',
    children: [{
      type: 'raw',
      geometry: nodes.ConveyorReceiver.geometry,
      material: materials.ConveyorAddonMaterial
    }]
  }];
}

_drei.useGLTF.preload(_ConveyorReceiver.default);