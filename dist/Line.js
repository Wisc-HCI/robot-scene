"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SceneLine;

var _react = _interopRequireDefault(require("react"));

var _drei = require("@react-three/drei");

var _SceneStore = _interopRequireDefault(require("./SceneStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SceneLine(props) {
  var lineKey = props.lineKey;

  var _useSceneStore = (0, _SceneStore.default)(function (state) {
    return {
      name: state.lines[lineKey].name,
      vertices: state.lines[lineKey].vertices
    };
  }),
      name = _useSceneStore.name,
      vertices = _useSceneStore.vertices;

  return /*#__PURE__*/_react.default.createElement(_drei.Line, {
    points: vertices.map(function (vertex) {
      return [vertex.position.x, vertex.position.y, vertex.position.z];
    }),
    color: "white",
    vertexColors: vertices.map(function (vertex) {
      return [vertex.color.r / 255, vertex.color.g / 255, vertex.color.b / 255];
    }),
    lineWidth: 3
  });
}