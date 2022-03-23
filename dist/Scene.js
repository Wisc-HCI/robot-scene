"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Scene;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _resizeObserver = require("@juggle/resize-observer");

var _Content = _interopRequireDefault(require("./Content"));

var THREE = _interopRequireWildcard(require("three"));

var _xr = require("@react-three/xr");

var _SceneContext = require("./SceneContext");

var _excluded = ["backgroundColor", "store", "fov", "ar", "vr", "onPointerMissed"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

function Loading() {
  var _useProgress = (0, _drei.useProgress)(),
      progress = _useProgress.progress;

  return /*#__PURE__*/_react.default.createElement(_drei.Html, null, /*#__PURE__*/_react.default.createElement("div", null, progress.toPrecision(2)));
}

function Scene(_ref) {
  var backgroundColor = _ref.backgroundColor,
      store = _ref.store,
      fov = _ref.fov,
      ar = _ref.ar,
      vr = _ref.vr,
      onPointerMissed = _ref.onPointerMissed,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.
  // console.log({ar,vr})
  var CanvasComponent = ar ? _xr.ARCanvas : vr ? _xr.VRCanvas : _fiber.Canvas;
  return /*#__PURE__*/_react.default.createElement(CanvasComponent, {
    camera: {
      up: [0, 0, 1],
      fov: fov,
      position: [0, -3, 3]
    },
    shadows: true,
    style: {
      background: backgroundColor ? backgroundColor : "#d0d0d0"
    },
    resize: {
      polyfill: _resizeObserver.ResizeObserver
    },
    onPointerMissed: onPointerMissed ? onPointerMissed : function () {}
  }, /*#__PURE__*/_react.default.createElement(_SceneContext.SceneProvider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement(Loading, null)
  }, /*#__PURE__*/_react.default.createElement(_Content.default, _extends({}, otherProps, {
    backgroundColor: backgroundColor
  })))));
}