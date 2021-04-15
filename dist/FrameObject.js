"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _Transforms = require("./Util/Transforms");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FrameObject(props) {
  var mesh = (0, _react.useRef)();
  (0, _fiber.useFrame)(function () {
    var transform = props.transform;
    (0, _Transforms.frameUpdate)(mesh, {
      x: 0,
      y: 0,
      z: 0
    }, {
      x: 0,
      y: 0,
      z: 0,
      w: 1
    }, transform);
  });
  var origin = {
    x: 0,
    y: 0,
    z: 0
  };
  return /*#__PURE__*/_react.default.createElement("mesh", _extends({}, props, {
    ref: mesh
  }), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [{
      x: 1,
      y: 0,
      z: 0
    }, origin, 0.5, "#ff0000"]
  }), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [{
      x: 0,
      y: 1,
      z: 0
    }, origin, 0.5, "#00ff00"]
  }), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [{
      x: 0,
      y: 0,
      z: 1
    }, origin, 0.5, "#0000ff"]
  }));
}

var _default = FrameObject;
exports.default = _default;