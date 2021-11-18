"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointLight = exports.DirectionalLight = exports.AmbientLight = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AmbientLight = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement("ambientLight", _extends({
    ref: ref
  }, props));
});

exports.AmbientLight = AmbientLight;

var PointLight = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement("pointLight", _extends({
    ref: ref
  }, props));
});

exports.PointLight = PointLight;

var DirectionalLight = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement("directionalLight", _extends({
    ref: ref
  }, props));
});

exports.DirectionalLight = DirectionalLight;