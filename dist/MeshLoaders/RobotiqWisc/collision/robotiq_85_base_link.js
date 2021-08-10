"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _robotiq_85_base_link = _interopRequireDefault(require("../../../Meshes/RobotiqWisc/collision/robotiq_85_base_link.glb"));

var _drei = require("@react-three/drei");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_robotiq_85_base_link.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'raw',
    rotation: [Math.PI / 2, 0, 0],
    geometry: nodes.mesh_0.geometry,
    material: nodes.mesh_0.material
  }];
}

_drei.useGLTF.preload(_robotiq_85_base_link.default);