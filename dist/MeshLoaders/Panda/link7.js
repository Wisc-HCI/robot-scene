"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _link = _interopRequireDefault(require("../../Meshes/Panda/link7.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_link.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes.node0.geometry,
    material: materials.Part__Mirroring_004_001,
    position: [0, 0.05, 0],
    rotation: [0, -Math.PI / 4, 0]
  }, {
    type: 'raw',
    geometry: nodes.node2.geometry,
    material: materials.Part__Mirroring002_004_001,
    position: [0, 0.05, 0],
    rotation: [0, -Math.PI / 4, 0]
  }, {
    type: 'raw',
    geometry: nodes.node3.geometry,
    material: materials.Part__Mirroring003_004_001,
    position: [0, 0.05, 0],
    rotation: [0, -Math.PI / 4, 0]
  }, {
    type: 'raw',
    geometry: nodes.node5.geometry,
    material: materials.Part__Mirroring005_004_001,
    position: [0, 0.05, 0],
    rotation: [0, -Math.PI / 4, 0]
  }, {
    type: 'raw',
    geometry: nodes.node6.geometry,
    material: materials.Part__Mirroring006_004_001,
    position: [0, 0.05, 0],
    rotation: [0, -Math.PI / 4, 0]
  }, {
    type: 'raw',
    geometry: nodes.node7.geometry,
    material: materials.Part__Mirroring007_004_001,
    position: [0, 0.05, 0],
    rotation: [0, -Math.PI / 4, 0]
  }, {
    type: 'raw',
    geometry: nodes.node1.geometry,
    material: materials.Part__Mirroring001_004_002,
    position: [0, 0.05, 0],
    rotation: [0, -Math.PI / 4, 0]
  }, {
    type: 'raw',
    geometry: nodes.node4.geometry,
    material: materials.Part__Mirroring004_004_002,
    position: [0, 0.05, 0],
    rotation: [0, -Math.PI / 4, 0]
  }];
}

_drei.useGLTF.preload(_link.default);