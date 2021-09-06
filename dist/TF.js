"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TF;
exports.WorldTF = WorldTF;
exports.GhostTF = GhostTF;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _StandardMeshes = require("./Util/StandardMeshes");

var _MaterialMaker = require("./Util/MaterialMaker");

var _three = require("three");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import store from "./SceneStore";
// const STANDARD_ROTATION = new Quaternion(0,0,1,0)
function TF(_ref) {
  var tfKey = _ref.tfKey,
      displayTfs = _ref.displayTfs,
      children = _ref.children,
      store = _ref.store;
  var ref = (0, _react.useRef)();
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the positions of all tfs.
    var tf = store.getState().tfs[tfKey];

    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(tf.translation.x, tf.translation.y, tf.translation.z);
      ref.current.quaternion.set(tf.rotation.x, tf.rotation.y, tf.rotation.z, tf.rotation.w);
    }
  }, [tfKey, ref]));
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

function GhostTF(_ref3) {
  var transforms = _ref3.transforms,
      children = _ref3.children,
      store = _ref3.store;

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