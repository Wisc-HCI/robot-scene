"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GhostTF = GhostTF;
exports.GizmoTF = GizmoTF;
exports.WorldTF = WorldTF;
exports.default = TF;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _StandardMeshes = require("./Util/StandardMeshes");

var _MaterialMaker = require("./Util/MaterialMaker");

var _SceneContext = require("./SceneContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import shallow from "zustand/shallow";
// const STANDARD_ROTATION = new Quaternion(0,0,1,0)
function TF(_ref) {
  var tfKey = _ref.tfKey,
      displayTfs = _ref.displayTfs,
      children = _ref.children;
  var ref = (0, _react.useRef)();

  var _useSceneStore = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return [state.tfs[tfKey].translation.x, state.tfs[tfKey].translation.y, state.tfs[tfKey].translation.z, state.tfs[tfKey].rotation.x, state.tfs[tfKey].rotation.y, state.tfs[tfKey].rotation.z, state.tfs[tfKey].rotation.w];
  }, [tfKey])),
      _useSceneStore2 = _slicedToArray(_useSceneStore, 7),
      translationX = _useSceneStore2[0],
      translationY = _useSceneStore2[1],
      translationZ = _useSceneStore2[2],
      rotationX = _useSceneStore2[3],
      rotationY = _useSceneStore2[4],
      rotationZ = _useSceneStore2[5],
      rotationW = _useSceneStore2[6];

  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the positions of all tfs.
    var time = clock.getElapsed() * 1000;

    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(typeof translationX === 'function' ? translationX(time) : translationX, typeof translationY === 'function' ? translationY(time) : translationY, typeof translationZ === 'function' ? translationZ(time) : translationZ);
      ref.current.quaternion.set(typeof rotationX === 'function' ? rotationX(time) : rotationX, typeof rotationY === 'function' ? rotationY(time) : rotationY, typeof rotationZ === 'function' ? rotationZ(time) : rotationZ, typeof rotationW === 'function' ? rotationW(time) : rotationW);
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

function GhostTF(_ref4) {
  var transforms = _ref4.transforms,
      children = _ref4.children;
  var ref = (0, _react.useRef)();

  var _useSceneStore3 = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    if (transforms.length > 0) {
      var tfKey = transforms[0];
      return [state.tfs[tfKey].translation.x, state.tfs[tfKey].translation.y, state.tfs[tfKey].translation.z, state.tfs[tfKey].rotation.x, state.tfs[tfKey].rotation.y, state.tfs[tfKey].rotation.z, state.tfs[tfKey].rotation.w];
    } else {
      return [0, 0, 0, 0, 0, 0, 1];
    }
  }, [transforms])),
      _useSceneStore4 = _slicedToArray(_useSceneStore3, 7),
      translationX = _useSceneStore4[0],
      translationY = _useSceneStore4[1],
      translationZ = _useSceneStore4[2],
      rotationX = _useSceneStore4[3],
      rotationY = _useSceneStore4[4],
      rotationZ = _useSceneStore4[5],
      rotationW = _useSceneStore4[6];

  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the positions of all tfs.
    var time = clock.getElapsed() * 1000;

    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(typeof translationX === 'function' ? translationX(time) : translationX, typeof translationY === 'function' ? translationY(time) : translationY, typeof translationZ === 'function' ? translationZ(time) : translationZ);
      ref.current.quaternion.set(typeof rotationX === 'function' ? rotationX(time) : rotationX, typeof rotationY === 'function' ? rotationY(time) : rotationY, typeof rotationZ === 'function' ? rotationZ(time) : rotationZ, typeof rotationW === 'function' ? rotationW(time) : rotationW);
    }
  }, [translationX, translationY, translationZ, rotationX, rotationY, rotationZ, rotationW, ref]));
  var arrow = (0, _StandardMeshes.ARROW_GEOM)();

  if (transforms.length > 0) {
    return /*#__PURE__*/_react.default.createElement("group", {
      ref: ref,
      up: [0, 0, 1]
    }, /*#__PURE__*/_react.default.createElement(GhostTF, {
      transforms: transforms.splice(1)
    }, children));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
  }
}

;