"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Scene;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _antd = require("antd");

var _resizeObserver = require("@juggle/resize-observer");

var _Content = _interopRequireDefault(require("./Content"));

var THREE = _interopRequireWildcard(require("three"));

var _SceneStore = _interopRequireDefault(require("./SceneStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

function Loading() {
  var _useProgress = (0, _drei.useProgress)(),
      progress = _useProgress.progress;

  return /*#__PURE__*/_react.default.createElement(_drei.Html, null, /*#__PURE__*/_react.default.createElement(_antd.Progress, {
    type: "circle",
    percent: progress.toPrecision(2)
  }));
}

function Scene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.
  var backgroundColor = props.backgroundColor,
      store = props.store;
  return /*#__PURE__*/_react.default.createElement(_fiber.Canvas, {
    shadows: true,
    style: {
      background: backgroundColor ? backgroundColor : "#d0d0d0"
    },
    resize: {
      polyfill: _resizeObserver.ResizeObserver
    },
    onPointerMissed: props.onPointerMissed ? props.onPointerMissed : function () {}
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement(Loading, null)
  }, /*#__PURE__*/_react.default.createElement(_Content.default, _extends({}, props, {
    store: store ? store : _SceneStore.default
  }))));
}