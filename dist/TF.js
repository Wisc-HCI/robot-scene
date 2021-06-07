"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _SceneStore = _interopRequireDefault(require("./SceneStore"));

var _StandardMeshes = require("./Util/StandardMeshes");

var _MaterialMaker = require("./Util/MaterialMaker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = /*#__PURE__*/(0, _react.forwardRef)(function TF(props, ref) {
  var tfKey = props.tfKey,
      displayTfs = props.displayTfs,
      children = props.children;
  (0, _fiber.useFrame)(function () {
    // Outside of react rendering, adjust the positions of all tfs.
    var tf = _SceneStore.default.getState().tfs[tfKey];

    ref.current.position.set(tf.translation.x, tf.translation.y, tf.translation.z);
    ref.current.quaternion.set(tf.rotation.x, tf.rotation.y, tf.rotation.z, tf.rotation.w);
  });
  var arrow = (0, _StandardMeshes.ARROW_GEOM)();
  return /*#__PURE__*/_react.default.createElement("group", {
    ref: ref,
    dispose: null
  }, displayTfs && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(tfKey, "ArrowX"),
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(255, 0, 0, 1),
    scale: [0.15, 0.5, 0.15],
    rotation: [0, 0, -Math.PI / 2]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(tfKey, "ArrowY"),
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(0, 255, 0, 1),
    scale: [0.15, 0.5, 0.15],
    rotation: [0, -Math.PI / 2, 0]
  }), /*#__PURE__*/_react.default.createElement("mesh", {
    key: "".concat(tfKey, "ArrowZ"),
    geometry: arrow,
    material: (0, _MaterialMaker.MaterialMaker)(0, 0, 255, 1),
    scale: [0.15, 0.5, 0.15],
    rotation: [Math.PI / 2, 0, 0]
  })), children);
});

exports.default = _default;