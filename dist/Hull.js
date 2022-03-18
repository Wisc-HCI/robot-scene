"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hull;

var _react = _interopRequireWildcard(require("react"));

var _drei = require("@react-three/drei");

var _fiber = require("@react-three/fiber");

var _three = require("three");

var _threeStdlib = require("three-stdlib");

var _shallow = _interopRequireDefault(require("zustand/shallow"));

var _Helpers = require("./Util/Helpers");

var _MaterialMaker = require("./Util/MaterialMaker");

var _SceneContext = require("./SceneContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Hull(_ref) {
  var hullKey = _ref.hullKey,
      highlightColor = _ref.highlightColor;
  var onClick = (0, _SceneContext.useSceneStore)(function (state) {
    return state.onClick;
  });

  var _onPointerOver = (0, _SceneContext.useSceneStore)(function (state) {
    return state.onPointerOver;
  });

  var _onPointerOut = (0, _SceneContext.useSceneStore)(function (state) {
    return state.onPointerOut;
  });

  var hull = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return state.hulls[hullKey];
  }, [hullKey]), _shallow.default);
  var vertices = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return state.hulls[hullKey].vertices;
  }, [hullKey]));
  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  var frontRef = (0, _react.useRef)();
  var backRef = (0, _react.useRef)();
  var ghostFrontRef = (0, _react.useRef)();
  var ghostBackRef = (0, _react.useRef)();
  var outlineRef = (0, _react.useRef)();
  var initialVertices = typeof vertices === 'function' ? vertices(0) : vertices;
  var geometry = new _threeStdlib.ConvexGeometry(initialVertices.map(function (v) {
    return new _three.Vector3(v.x, v.y, v.z);
  }));
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the positions of all tfs.
    var time = clock.getElapsed() * 1000;
    (0, _Helpers.updateShapeMaterial)(backRef, hull.color, time);
    (0, _Helpers.updateShapeMaterial)(frontRef, hull.color, time);

    if (ghostFrontRef.current && ghostBackRef.current) {
      var coeficient = Math.sin(time / 700) / 5 + 1;
      var power = -Math.sin(time / 700) / 2 + 3;
      ghostFrontRef.current.material.uniforms.coeficient.value = coeficient;
      ghostFrontRef.current.material.uniforms.power.value = power;
      ghostBackRef.current.material.uniforms.coeficient.value = coeficient;
      ghostBackRef.current.material.uniforms.power.value = power;
    }

    var currentVertices = typeof vertices === 'function' ? vertices(time) : vertices;

    if (currentVertices !== initialVertices) {
      var newGeom = new _threeStdlib.ConvexGeometry(currentVertices.map(function (v) {
        return new _three.Vector3(v.x, v.y, v.z);
      }));
      frontRef.current.geometry = newGeom;
      backRef.current.geometry = newGeom;
      ghostFrontRef.current.geometry = newGeom;
      ghostBackRef.current.geometry = newGeom;
    }

    var visible = typeof hull.hidden === 'function' ? !hull.hidden(time) : !hull.hidden;
    frontRef.current.visible = visible;
    backRef.current.visible = visible;
    ghostFrontRef.current.visible = visible;
    ghostFrontRef.current.visible = visible;
  }, [hullKey, frontRef, backRef, initialVertices, hull]));
  return /*#__PURE__*/_react.default.createElement("group", {
    up: [0, 0, 1]
  }, /*#__PURE__*/_react.default.createElement("group", {
    up: [0, 0, 1],
    onPointerDown: function onPointerDown(e) {
      onClick(hullKey, frontRef.current.visible, e);
    },
    onPointerOver: function onPointerOver(e) {
      _onPointerOver(hullKey, frontRef.current.visible, e);
    },
    onPointerOut: function onPointerOut(e) {
      _onPointerOut(hullKey, frontRef.current.visible, e);
    }
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
    wireframe: true,
    side: _three.BackSide
  }), hull.highlighted && /*#__PURE__*/_react.default.createElement("mesh", {
    key: "HF",
    ref: ghostFrontRef,
    geometry: geometry,
    material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
    castShadow: false,
    receiveShadow: false,
    side: _three.FrontSide
  }), false && hull.highlighted && /*#__PURE__*/_react.default.createElement("mesh", {
    key: "HFO",
    ref: outlineRef,
    geometry: geometry,
    material: (0, _MaterialMaker.OutlineMaterial)(highlightColor),
    castShadow: false,
    receiveShadow: false,
    side: _three.BackSide
  })), hull.showName && /*#__PURE__*/_react.default.createElement(_drei.Html, {
    distanceFactor: 2,
    position: [0, 0, 0.5]
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: 0.75,
      borderRadius: 2,
      backgroundColor: 'lightgrey'
    },
    className: "disable-text-selection"
  }, hull.name)));
}