"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _base = _interopRequireDefault(require("../../Meshes/Ur5/base.glb"));

var _drei = require("@react-three/drei");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_base.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes['ActorShape0_0-Mesh002'].geometry,
    material: materials['Rohr.005']
  }, {
    type: 'raw',
    geometry: nodes['ActorShape0_0-Mesh002_1'].geometry,
    material: materials['Scheibe.002']
  }];
}

_drei.useGLTF.preload(_base.default);