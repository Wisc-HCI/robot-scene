"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GizmoTF = GizmoTF;
exports.WorldTF = WorldTF;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _StandardMeshes = require("./Util/StandardMeshes");

var _MaterialMaker = require("./Util/MaterialMaker");

var _SceneContext = require("./SceneContext");

var _Helpers = require("./Util/Helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import store from "./SceneStore";
// import { Quaternion } from 'three';
// import shallow from "zustand/shallow";
// const STANDARD_ROTATION = new Quaternion(0,0,1,0)
var _default = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, forwardedRef) {
  var objectKey = _ref.objectKey,
      displayTfs = _ref.displayTfs,
      position = _ref.position,
      rotation = _ref.rotation,
      scale = _ref.scale,
      ghost = _ref.ghost,
      highlightColor = _ref.highlightColor,
      children = _ref.children;
  var innerRef = (0, _react.useRef)(null);
  var ref = (0, _Helpers.useCombinedRefs)(forwardedRef, innerRef);
  var tf = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return state.tfs[objectKey];
  }, [objectKey]));
  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the positions of all tfs.
    var time = clock.getElapsed() * 1000;

    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(position ? position.x : typeof tf.position.x === 'function' ? tf.position.x(time) : tf.position.x, position ? position.y : typeof tf.position.y === 'function' ? tf.position.y(time) : tf.position.y, position ? position.z : typeof tf.position.z === 'function' ? tf.position.z(time) : tf.position.z);
      ref.current.quaternion.set(rotation ? rotation.x : typeof tf.rotation.x === 'function' ? tf.rotation.x(time) : tf.rotation.x, rotation ? rotation.y : typeof tf.rotation.y === 'function' ? tf.rotation.y(time) : tf.rotation.y, rotation ? rotation.z : typeof tf.rotation.z === 'function' ? tf.rotation.z(time) : tf.rotation.z, rotation ? rotation.w : typeof tf.rotation.w === 'function' ? tf.rotation.w(time) : tf.rotation.w);
      ref.current.scale.set(scale ? scale.x : !tf.scale ? 0 : typeof tf.scale.x === 'function' ? tf.scale.x(time) : tf.scale.x, scale ? scale.y : !tf.scale ? 0 : typeof tf.scale.y === 'function' ? tf.scale.y(time) : tf.scale.y, scale ? scale.z : !tf.scale ? 0 : typeof tf.scale.z === 'function' ? tf.scale.z(time) : tf.scale.z);
    }
  }, [tf, position, rotation, scale, ref]));
  var arrow = (0, _StandardMeshes.ARROW_GEOM)();
  return /*#__PURE__*/_react.default.createElement("group", {
    ref: ref,
    dispose: null,
    up: [0, 0, 1]
  }, displayTfs && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("axesHelper", {
    size: 1
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(objectKey, "ArrowX"),
    geometry: arrow,
    material: ghost ? (0, _MaterialMaker.GhostMaterial)(highlightColor) : (0, _MaterialMaker.MaterialMaker)(255, 0, 0, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [0, 0, -Math.PI / 2]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(objectKey, "ArrowY"),
    geometry: arrow,
    material: ghost ? (0, _MaterialMaker.GhostMaterial)(highlightColor) : (0, _MaterialMaker.MaterialMaker)(0, 255, 0, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [0, Math.PI / 2, 0]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(objectKey, "ArrowZ"),
    geometry: arrow,
    material: ghost ? (0, _MaterialMaker.GhostMaterial)(highlightColor) : (0, _MaterialMaker.MaterialMaker)(0, 0, 255, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [Math.PI / 2, 0, 0]
  })), children);
});

exports.default = _default;

function WorldTF(_ref2) {
  var displayTfs = _ref2.displayTfs,
      children = _ref2.children;
  var arrow = (0, _StandardMeshes.ARROW_GEOM)();
  return /*#__PURE__*/_react.default.createElement("group", {
    dispose: null,
    up: [0, 0, 1]
  }, displayTfs && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("axesHelper", {
    size: 1
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "$WorldArrowX",
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(255, 0, 0, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [0, 0, -Math.PI / 2]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "$WorldArrowY",
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(0, 255, 0, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [0, Math.PI / 2, 0]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "$WorldArrowZ",
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(0, 0, 255, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [Math.PI / 2, 0, 0]
  })), children);
}

;

function GizmoTF(_ref3) {
  var displayTfs = _ref3.displayTfs,
      children = _ref3.children;
  var arrow = (0, _StandardMeshes.ARROW_GEOM)();
  return /*#__PURE__*/_react.default.createElement("group", {
    dispose: null,
    up: [0, 0, 1]
  }, displayTfs && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("axesHelper", {
    size: 1
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "$WorldArrowX",
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(255, 0, 0, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [0, 0, -Math.PI / 2]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "$WorldArrowY",
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(0, 255, 0, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [0, Math.PI / 2, 0]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "$WorldArrowZ",
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(0, 0, 255, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [Math.PI / 2, 0, 0]
  })), children);
}

;