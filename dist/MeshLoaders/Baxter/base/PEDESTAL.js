"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _PEDESTAL = _interopRequireDefault(require("../../../Meshes/Baxter/base/PEDESTAL.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_PEDESTAL.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes.PEDESTAL.geometry,
    material: materials.Material_001
  }];
}

_drei.useGLTF.preload(_PEDESTAL.default);