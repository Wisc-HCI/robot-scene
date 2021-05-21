"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _link = _interopRequireDefault(require("../../Meshes/Panda/link1.glb"));

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
    gemometry: nodes.node0.geometry,
    material: materials.Part__Feature_001,
    position: [0, -0.19, 0]
  }];
}

_drei.useGLTF.preload(_link.default);