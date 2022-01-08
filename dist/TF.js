"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GhostTF = GhostTF;
exports.WorldTF = WorldTF;
exports.default = TF;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _StandardMeshes = require("./Util/StandardMeshes");

var _MaterialMaker = require("./Util/MaterialMaker");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import store from "./SceneStore";
// import { Quaternion } from 'three';
// const STANDARD_ROTATION = new Quaternion(0,0,1,0)
function TF(_ref) {
  var tfKey = _ref.tfKey,
      displayTfs = _ref.displayTfs,
      children = _ref.children,
      store = _ref.store;
  var ref = (0, _react.useRef)();
  (0, _fiber.useFrame)((0, _react.useCallback)(function (_ref2) {
    var clock = _ref2.clock;
    // Outside of react rendering, adjust the positions of all tfs.
    var tf = store.getState().tfs[tfKey];
    var time = clock.getElapsedTime() * 1000;

    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(typeof tf.translation.x === 'function' ? tf.translation.x(time) : tf.translation.x, typeof tf.translation.y === 'function' ? tf.translation.y(time) : tf.translation.y, typeof tf.translation.z === 'function' ? tf.translation.z(time) : tf.translation.z);
      ref.current.quaternion.set(typeof tf.rotation.x === 'function' ? tf.rotation.x(time) : tf.rotation.x, typeof tf.rotation.y === 'function' ? tf.rotation.y(time) : tf.rotation.y, typeof tf.rotation.z === 'function' ? tf.rotation.z(time) : tf.rotation.z, typeof tf.rotation.w === 'function' ? tf.rotation.w(time) : tf.rotation.w);
    }
  }, [tfKey, ref, store]));
  var arrow = (0, _StandardMeshes.ARROW_GEOM)();
  return /*#__PURE__*/_react.default.createElement("group", {
    ref: ref,
    dispose: null,
    up: [0, 0, 1]
  }, displayTfs && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("axesHelper", {
    size: 1
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(tfKey, "ArrowX"),
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(255, 0, 0, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [0, 0, -Math.PI / 2]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(tfKey, "ArrowY"),
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(0, 255, 0, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [0, Math.PI / 2, 0]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(tfKey, "ArrowZ"),
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(0, 0, 255, 1),
    scale: [0.2, 0.5, 0.2],
    rotation: [Math.PI / 2, 0, 0]
  })), children);
}

;

function WorldTF(_ref3) {
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

function GhostTF(_ref4) {
  var transforms = _ref4.transforms,
      children = _ref4.children,
      store = _ref4.store;

  if (transforms.length > 0) {
    var pos = [transforms[0].position.x, transforms[0].position.y, transforms[0].position.z];
    var rot = [transforms[0].rotation.x, transforms[0].rotation.y, transforms[0].rotation.z, transforms[0].rotation.w];
    return /*#__PURE__*/_react.default.createElement("group", {
      position: pos,
      quaternion: rot,
      up: [0, 0, 1]
    }, /*#__PURE__*/_react.default.createElement(GhostTF, {
      transforms: transforms.filter(function (_, i) {
        return i !== 0;
      }),
      store: store
    }, children));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
  }
}

;