"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _DBenchy = _interopRequireDefault(require("../../Meshes/Other/3DBenchy.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_DBenchy.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes['3DBenchy'].geometry,
    material: nodes['3DBenchy'].material
  }];
}

_drei.useGLTF.preload(_DBenchy.default);