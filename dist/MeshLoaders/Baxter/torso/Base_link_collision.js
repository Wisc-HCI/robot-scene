"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _drei = require("@react-three/drei");

var _base_link_collision = _interopRequireDefault(require("../../../Meshes/Baxter/torso/base_link_collision.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_base_link_collision.default),
      nodes = _useGLTF.nodes;

  return [{
    type: 'raw',
    geometry: nodes['TORSO-L'].geometry,
    material: nodes['TORSO-L'].material
  }];
}

_drei.useGLTF.preload(_base_link_collision.default);