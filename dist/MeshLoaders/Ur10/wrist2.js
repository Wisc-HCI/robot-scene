"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _wrist = _interopRequireDefault(require("../../Meshes/Ur10/wrist2.glb"));

var _drei = require("@react-three/drei");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_wrist.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes['node-shape0-name'].geometry,
    material: materials['SWMaterial-0_002']
  }, {
    type: 'raw',
    geometry: nodes['node-shape1-name'].geometry,
    material: materials['SWMaterial-1_002']
  }, {
    type: 'raw',
    geometry: nodes['node-shape2-name'].geometry,
    material: materials['SWMaterial-2_002']
  }];
}

_drei.useGLTF.preload(_wrist.default);