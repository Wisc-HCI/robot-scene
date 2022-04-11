"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Content;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _SceneContext = require("./SceneContext");

var _Light = require("./Util/Light");

var _MaterialMaker = require("./Util/MaterialMaker");

var _ColorConversion = require("./Util/ColorConversion");

var _TransformControls = require("./Util/TransformControls");

var _postprocessing = require("@react-three/postprocessing");

var _Tree = _interopRequireDefault(require("./Tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Content(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.
  var displayTfs = props.displayTfs,
      displayGrid = props.displayGrid,
      isPolar = props.isPolar,
      backgroundColor = props.backgroundColor,
      planeColor = props.planeColor,
      highlightColor = props.highlightColor,
      plane = props.plane,
      translateSnap = props.translateSnap,
      rotateSnap = props.rotateSnap,
      scaleSnap = props.scaleSnap;
  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  (0, _fiber.useFrame)(function () {
    clock.update();
  });
  var tfs = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.tfs).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          tf = _ref2[1];

      return {
        key: key,
        frame: tf.frame,
        transformMode: tf.transformMode,
        source: 'tfs'
      };
    });
  });
  var items = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.items).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          item = _ref4[1];

      return {
        key: key,
        frame: item.frame,
        transformMode: item.transformMode,
        source: 'items'
      };
    });
  });
  var lines = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.lines).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          line = _ref6[1];

      return {
        key: key,
        frame: line.frame,
        source: 'lines'
      };
    });
  });
  var hulls = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.hulls).map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          key = _ref8[0],
          hull = _ref8[1];

      return {
        key: key,
        frame: hull.frame,
        source: 'hulls'
      };
    });
  });
  var texts = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.texts).map(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          key = _ref10[0],
          text = _ref10[1];

      return {
        key: key,
        frame: text.frame,
        source: 'texts'
      };
    });
  });
  var movableStuff = [].concat(_toConsumableArray(items), _toConsumableArray(tfs)).filter(function (item) {
    return ['translate', 'rotate', 'scale'].indexOf(item.transformMode) > -1;
  });
  var ambientLightRef = (0, _react.useRef)();
  var pointLightRef = (0, _react.useRef)();
  var directionalLightRef = (0, _react.useRef)();
  var orbitControls = (0, _react.useRef)();
  var planeRGB = (0, _ColorConversion.hexToRgb)(planeColor ? planeColor : "a8a8a8");
  var planeRGBA = [planeRGB.r, planeRGB.g, planeRGB.b, 0.5];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_drei.OrbitControls, {
    ref: orbitControls,
    makeDefault: true
  }), /*#__PURE__*/_react.default.createElement("pointLight", {
    ref: pointLightRef,
    intensity: 0.5,
    position: [-1, -3, 3],
    color: "#FFFAEE"
  }), /*#__PURE__*/_react.default.createElement(_Light.AmbientLight, {
    ref: ambientLightRef,
    intensity: 0.7,
    color: "white"
  }), /*#__PURE__*/_react.default.createElement(_Light.DirectionalLight, {
    ref: directionalLightRef,
    castShadow: true,
    position: [5, 15, 15],
    intensity: 0.6,
    color: "#FFFAEE"
  }), /*#__PURE__*/_react.default.createElement("spotLight", {
    penumbra: 1,
    position: [-1, -1, 4],
    intensity: 0.3,
    castShadow: true,
    color: "#FFFAEE"
  }), /*#__PURE__*/_react.default.createElement("color", {
    attach: "background",
    args: [backgroundColor ? backgroundColor : "#d0d0d0"]
  }), /*#__PURE__*/_react.default.createElement("fogExp2", {
    attach: "fog",
    args: [backgroundColor ? backgroundColor : "#d0d0d0", 0.01]
  }), /*#__PURE__*/_react.default.createElement(_drei.Circle, {
    receiveShadow: true,
    scale: 1000,
    position: [0, 0, plane ? plane - 0.01 : -0.01],
    material: _MaterialMaker.MaterialMaker.apply(void 0, planeRGBA)
  }), /*#__PURE__*/_react.default.createElement(_postprocessing.Selection, null, /*#__PURE__*/_react.default.createElement(_postprocessing.EffectComposer, {
    autoClear: false
  }, /*#__PURE__*/_react.default.createElement(_postprocessing.Outline, {
    visibleEdgeColor: highlightColor,
    hiddenEdgeColor: highlightColor,
    blur: true,
    kernelSize: 1,
    edgeStrength: 50,
    pulseSpeed: 0.25,
    xRay: true
  })), /*#__PURE__*/_react.default.createElement(_Tree.default, {
    activeTf: "world",
    displayTfs: displayTfs,
    allTfs: tfs,
    allItems: items,
    allLines: lines,
    allHulls: hulls,
    allTexts: texts,
    highlightColor: highlightColor
  })), /*#__PURE__*/_react.default.createElement("group", {
    position: [0, 0, plane ? plane : 0],
    rotation: [Math.PI / 2, 0, 0],
    up: [0, 0, 1]
  }, displayGrid && (isPolar ? /*#__PURE__*/_react.default.createElement("polarGridHelper", {
    args: [10, 16, 8, 64, "white", "gray"]
  }) : /*#__PURE__*/_react.default.createElement("gridHelper", {
    args: [20, 20, "white", "gray"]
  }))), movableStuff.map(function (movableObject, idx) {
    return /*#__PURE__*/_react.default.createElement(_TransformControls.TransformableObject, {
      key: "movableObjectTransform-".concat(idx),
      objectInfo: movableObject,
      mode: movableObject.transformMode,
      displayTfs: displayTfs,
      allTfs: tfs,
      allItems: items,
      allLines: lines,
      allHulls: hulls,
      allTexts: texts,
      translateSnap: translateSnap,
      rotateSnap: rotateSnap,
      scaleSnap: scaleSnap,
      highlightColor: highlightColor,
      onDragEnd: function onDragEnd() {
        if (orbitControls.current) {
          orbitControls.current.enabled = true;
        }
      },
      onDragStart: function onDragStart() {
        if (orbitControls.current) {
          orbitControls.current.enabled = false;
        }
      }
    });
  }));
}