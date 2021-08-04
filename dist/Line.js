"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SceneLine;

var _react = _interopRequireWildcard(require("react"));

var _drei = require("@react-three/drei");

var _SceneStore = _interopRequireDefault(require("./SceneStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SceneLine(props) {
  var lineKey = props.lineKey;

  var _useSceneStore = (0, _SceneStore.default)((0, _react.useCallback)(function (state) {
    return {
      vertices: state.lines[lineKey].vertices,
      width: state.lines[lineKey].width
    };
  }, [lineKey])),
      vertices = _useSceneStore.vertices,
      width = _useSceneStore.width;

  return /*#__PURE__*/_react.default.createElement(_drei.Line, {
    points: vertices.map(function (vertex) {
      return [vertex.position.x, vertex.position.y, vertex.position.z];
    }),
    color: "white",
    vertexColors: vertices.map(function (vertex) {
      return [vertex.color.r / 255, vertex.color.g / 255, vertex.color.b / 255];
    }),
    lineWidth: width
  });
}