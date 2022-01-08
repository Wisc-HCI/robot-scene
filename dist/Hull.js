"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hull;

var _react = _interopRequireWildcard(require("react"));

var _drei = require("@react-three/drei");

var _fiber = require("@react-three/fiber");

var _three = require("three");

var _threeStdlib = require("three-stdlib");

var _antd = require("antd");

var _shallow = _interopRequireDefault(require("zustand/shallow"));

var _Helpers = require("./Util/Helpers");

var _MaterialMaker = require("./Util/MaterialMaker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Hull(_ref) {
  var hullKey = _ref.hullKey,
      store = _ref.store,
      highlightColor = _ref.highlightColor;
  var hull = store((0, _react.useCallback)(function (state) {
    return state.hulls[hullKey];
  }, [hullKey]), _shallow.default);
  var frontRef = (0, _react.useRef)();
  var backRef = (0, _react.useRef)();
  var ghostFrontRef = (0, _react.useRef)();
  var ghostBackRef = (0, _react.useRef)();
  var initialVertices = typeof hull.vertices === 'function' ? hull.vertices(0) : hull.vertices;
  var geometry = new _threeStdlib.ConvexGeometry(initialVertices.map(function (v) {
    return new _three.Vector3(v.x, v.y, v.z);
  }));
  (0, _fiber.useFrame)((0, _react.useCallback)(function (_ref2) {
    var clock = _ref2.clock;
    // Outside of react rendering, adjust the positions of all tfs.
    var hullState = store.getState().hulls[hullKey];
    var time = clock.getElapsedTime() * 1000;
    (0, _Helpers.updateShapeMaterial)(backRef, hullState.color, time);
    (0, _Helpers.updateShapeMaterial)(frontRef, hullState.color, time);

    if (ghostFrontRef.current && ghostBackRef.current) {
      var coeficient = Math.sin(time / 700) / 5 + 1;
      var power = -Math.sin(time / 700) / 2 + 3;
      ghostFrontRef.current.material.uniforms.coeficient.value = coeficient;
      ghostFrontRef.current.material.uniforms.power.value = power;
      ghostBackRef.current.material.uniforms.coeficient.value = coeficient;
      ghostBackRef.current.material.uniforms.power.value = power;
    }

    var vertices = typeof hull.vertices === 'function' ? hull.vertices(time) : hull.vertices;

    if (vertices !== initialVertices) {
      var newGeom = new _threeStdlib.ConvexGeometry(vertices.map(function (v) {
        return new _three.Vector3(v.x, v.y, v.z);
      }));
      frontRef.current.geometry = newGeom;
      backRef.current.geometry = newGeom;
      ghostFrontRef.current.geometry = newGeom;
      ghostBackRef.current.geometry = newGeom;
    }
  }, [hullKey, frontRef, backRef, store, initialVertices, hull]));
  return /*#__PURE__*/_react.default.createElement("group", {
    up: [0, 0, 1],
    visible: !hull.hidden
  }, /*#__PURE__*/_react.default.createElement("group", {
    up: [0, 0, 1],
    onPointerDown: hull.onClick,
    onPointerOver: hull.onPointerOver,
    onPointerOut: hull.onPointerOut
  }, /*#__PURE__*/_react.default.createElement("mesh", {
    ref: backRef,
    key: "".concat(hullKey, "B"),
    geometry: geometry,
    castShadow: false,
    receiveShadow: false
  }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
    transparent: true,
    wireframe: hull.wireframe,
    attach: "material",
    side: _three.BackSide
  })), /*#__PURE__*/_react.default.createElement("mesh", {
    ref: frontRef,
    key: "".concat(hullKey, "F"),
    geometry: geometry,
    castShadow: false,
    receiveShadow: false
  }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
    transparent: true,
    attach: "material",
    wireframe: hull.wireframe,
    side: _three.FrontSide
  })), hull.highlighted && /*#__PURE__*/_react.default.createElement("mesh", {
    key: "HB",
    ref: ghostBackRef,
    geometry: geometry,
    material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
    castShadow: false,
    receiveShadow: false,
    side: _three.BackSide
  }), hull.highlighted && /*#__PURE__*/_react.default.createElement("mesh", {
    key: "HF",
    ref: ghostFrontRef,
    geometry: geometry,
    material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
    castShadow: false,
    receiveShadow: false,
    side: _three.FrontSide
  })), hull.showName && /*#__PURE__*/_react.default.createElement(_drei.Html, {
    distanceFactor: 2,
    position: [0, 0, 0.5]
  }, /*#__PURE__*/_react.default.createElement(_antd.Tag, {
    style: {
      opacity: 0.75
    },
    className: "disable-text-selection"
  }, hull.name)));
}