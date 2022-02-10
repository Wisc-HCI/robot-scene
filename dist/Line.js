"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SceneLine;

var _react = _interopRequireWildcard(require("react"));

var _drei = require("@react-three/drei");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SceneLine(props) {
  var lineKey = props.lineKey,
      store = props.store;

  var _store = store((0, _react.useCallback)(function (state) {
    return {
      vertices: state.lines[lineKey].vertices,
      width: state.lines[lineKey].width,
      hidden: state.lines[lineKey].hidden
    };
  }, [lineKey])),
      vertices = _store.vertices,
      width = _store.width,
      hidden = _store.hidden;

  if (vertices.length === 0) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_drei.Line, {
    visible: !hidden,
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