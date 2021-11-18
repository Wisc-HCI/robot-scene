"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _Conveyor = _interopRequireDefault(require("../../Meshes/Other/Conveyor.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_Conveyor.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'group',
    rotation: [-Math.PI / 2, 0, 0],
    children: [{
      type: 'raw',
      geometry: nodes.Belt.geometry,
      material: materials.BeltMaterial
    }, {
      type: 'raw',
      geometry: nodes.Conveyor.geometry,
      material: materials.ConveyorMaterial
    }, {
      type: 'raw',
      geometry: nodes.InsideBack.geometry,
      material: materials.InsideBackMaterial
    }]
  }];
}

_drei.useGLTF.preload(_Conveyor.default);