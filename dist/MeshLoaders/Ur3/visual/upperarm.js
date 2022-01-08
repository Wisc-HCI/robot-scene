"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _upperarm = _interopRequireDefault(require("../../../Meshes/Ur3/visual/upperarm.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_upperarm.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'raw',
    geometry: nodes.eSeries_UR3e_032.geometry,
    material: nodes.eSeries_UR3e_032.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_031.geometry,
    material: nodes.eSeries_UR3e_031.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_015.geometry,
    material: nodes.eSeries_UR3e_015.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_016.geometry,
    material: nodes.eSeries_UR3e_016.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_017.geometry,
    material: nodes.eSeries_UR3e_017.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_018.geometry,
    material: nodes.eSeries_UR3e_018.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_019.geometry,
    material: nodes.eSeries_UR3e_019.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_020.geometry,
    material: nodes.eSeries_UR3e_020.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }, {
    type: 'raw',
    geometry: nodes.eSeries_UR3e_021.geometry,
    material: nodes.eSeries_UR3e_021.material,
    scale: [0.001, 0.001, 0.001],
    rotation: [Math.PI / 2, 0, 0]
  }];
}

_drei.useGLTF.preload(_upperarm.default);