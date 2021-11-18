"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _wrist = _interopRequireDefault(require("../../../Meshes/Ur3/visual/wrist3.glb"));

var _drei = require("@react-three/drei");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_wrist.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'raw',
    geometry: nodes.eSeries_UR3e_002.geometry,
    material: nodes.eSeries_UR3e_002.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }];
}

_drei.useGLTF.preload(_wrist.default);