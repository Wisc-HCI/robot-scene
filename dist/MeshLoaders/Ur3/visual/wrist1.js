"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _wrist = _interopRequireDefault(require("../../../Meshes/Ur3/visual/wrist1.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_wrist.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'raw',
    geometry: nodes.eSeries_UR3e_034.geometry,
    material: nodes.eSeries_UR3e_034.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_027.geometry,
    material: nodes.eSeries_UR3e_027.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_035.geometry,
    material: nodes.eSeries_UR3e_035.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }];
}

_drei.useGLTF.preload(_wrist.default);