"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Model;

var _upperarm = _interopRequireDefault(require("../../Meshes/Ur10/upperarm.glb"));

var _drei = require("@react-three/drei");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Model(props) {
  var _useGLTF = (0, _drei.useGLTF)(_upperarm.default),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  return [{
    type: 'raw',
    geometry: nodes['node-shape0-name'].geometry,
    material: materials['SWMaterial-0.003']
  }, {
    type: 'raw',
    geometry: nodes['node-shape1-name'].geometry,
    material: materials['SWMaterial-1.003']
  }, {
    type: 'raw',
    geometry: nodes['node-shape2-name'].geometry,
    material: materials['SWMaterial-2.003']
  }, {
    type: 'raw',
    geometry: nodes['node-shape3-name'].geometry,
    material: materials['SWMaterial-3.002']
  }];
}

_drei.useGLTF.preload(_upperarm.default);