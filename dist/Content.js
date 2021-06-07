"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Content;

var _react = _interopRequireWildcard(require("react"));

var _drei = require("@react-three/drei");

var _postprocessing = require("@react-three/postprocessing");

var _Line = _interopRequireDefault(require("./Line"));

var _Item = _interopRequireDefault(require("./Item"));

var _TF = _interopRequireDefault(require("./TF"));

var _SceneStore = _interopRequireDefault(require("./SceneStore"));

var _Light = require("./Util/Light");

var _Helpers = require("./Util/Helpers");

var _MaterialMaker = require("./Util/MaterialMaker");

var _ColorConversion = require("./Util/ColorConversion");

var _MeshConvert = require("./Util/MeshConvert");

var _MeshLookup = require("./MeshLookup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Content(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.
  var displayTfs = props.displayTfs,
      displayGrid = props.displayGrid,
      isPolar = props.isPolar,
      backgroundColor = props.backgroundColor,
      planeColor = props.planeColor,
      highlightColor = props.highlightColor,
      plane = props.plane;

  var _useSceneStore = (0, _SceneStore.default)(function (state) {
    return {
      items: state.items,
      lines: state.lines,
      tfs: state.tfs
    };
  }, // Custom diff-calculation to avoid unnecessary re-renders
  function (oldState, newState) {
    return Object.keys(oldState.items) === Object.keys(newState.items) && Object.keys(oldState.lines) === Object.keys(newState.lines) && Object.keys(oldState.tfs) === Object.keys(newState.tfs) && Object.keys(oldState.items).map(function (key) {
      return oldState.items[key].highlighted;
    }) === Object.keys(newState.items).map(function (key) {
      return newState.items[key].highlighted;
    });
  }),
      items = _useSceneStore.items,
      lines = _useSceneStore.lines,
      tfs = _useSceneStore.tfs;

  var tfRefs = (0, _Helpers.objectMap)(tfs, function (_) {
    return /*#__PURE__*/(0, _react.createRef)();
  });
  var meshesAndRefs = (0, _Helpers.objectMap)(items, function (item) {
    var color = item.color,
        shape = item.shape;
    var materialOverride = color ? (0, _MaterialMaker.MaterialMaker)(color.r, color.g, color.b, color.a) : undefined;
    var opacity = color ? color.a : 1.0;
    var content = [];

    if (shape in _MeshLookup.MeshLookupTable) {
      content = (0, _MeshLookup.MeshLookup)(shape);
    }

    var nodes = content.map(function (node, i) {
      return (0, _MeshConvert.MeshConverter)(node, i, materialOverride, opacity);
    });

    var group = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, nodes.map(function (node) {
      return node[0];
    }));

    var refs = [].concat.apply([], nodes.map(function (node) {
      return node[1];
    }));
    return [group, refs];
  }); // Gather up all the internal refs to meshes that should be highlighted.

  var highlightedRefs = [];
  Object.keys(items).forEach(function (key) {
    if (items[key].highlighted) {
      meshesAndRefs[key][1].forEach(function (ref) {
        highlightedRefs.push(ref);
      });
    }
  });
  var ambientLightRef = (0, _react.useRef)();
  var directionalLightRef = (0, _react.useRef)();
  var orbitControls = (0, _react.useRef)();
  var planeRGB = (0, _ColorConversion.hexToRgb)(planeColor ? planeColor : "a8a8a8");
  var planeRGBA = [planeRGB.r, planeRGB.g, planeRGB.b, 0.5];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_drei.OrbitControls, {
    ref: orbitControls
  }), /*#__PURE__*/_react.default.createElement(_Light.AmbientLight, {
    ref: ambientLightRef
  }), /*#__PURE__*/_react.default.createElement(_Light.DirectionalLight, {
    ref: directionalLightRef,
    castShadow: true,
    position: [5, 10, 10],
    intensity: 0.8,
    color: "white"
  }), /*#__PURE__*/_react.default.createElement("color", {
    attach: "background",
    args: [backgroundColor ? backgroundColor : "#d0d0d0"]
  }), /*#__PURE__*/_react.default.createElement("fogExp2", {
    attach: "fog",
    args: [backgroundColor ? backgroundColor : "#d0d0d0", 0.01]
  }), /*#__PURE__*/_react.default.createElement(_drei.Circle, {
    receiveShadow: true,
    scale: 1000,
    position: [0, plane ? plane - 0.01 : -0.01, 0],
    rotation: [-Math.PI / 2, 0, 0],
    material: _MaterialMaker.MaterialMaker.apply(void 0, planeRGBA)
  }), Object.keys(tfs).map(function (tfKey) {
    return /*#__PURE__*/_react.default.createElement(_TF.default, {
      key: tfKey,
      tfKey: tfKey,
      ref: tfRefs[tfKey],
      displayTfs: displayTfs
    }, Object.keys(items).filter(function (itemKey) {
      return items[itemKey].frame === tfs[tfKey].name;
    }).map(function (itemKey) {
      return /*#__PURE__*/_react.default.createElement(_Item.default, {
        key: "".concat(itemKey, "Item"),
        itemKey: itemKey,
        node: meshesAndRefs[itemKey][0],
        orbitControls: orbitControls
      });
    }), Object.keys(lines).filter(function (lineKey) {
      return lines[lineKey].frame === tfs[tfKey].name;
    }).map(function (lineKey) {
      return /*#__PURE__*/_react.default.createElement(_Line.default, {
        key: "".concat(lineKey, "Line"),
        lineKey: lineKey
      });
    }));
  }), /*#__PURE__*/_react.default.createElement("group", {
    position: [0, plane ? plane : 0, 0]
  }, displayGrid && (isPolar ? /*#__PURE__*/_react.default.createElement("polarGridHelper", {
    args: [10, 16, 8, 64, "white", "gray"]
  }) : /*#__PURE__*/_react.default.createElement("gridHelper", {
    args: [20, 20, "white", "gray"]
  }))), /*#__PURE__*/_react.default.createElement(_postprocessing.EffectComposer, {
    autoClear: false,
    multisampling: 0
  }, /*#__PURE__*/_react.default.createElement(_postprocessing.Outline, {
    selection: highlightedRefs,
    xRay: true,
    blur: true,
    edgeStrength: 15,
    pulseSpeed: 0.3,
    visibleEdgeColor: highlightColor ? highlightColor : '#ffffff',
    hiddenEdgeColor: highlightColor ? highlightColor : '#ffffff'
  }), /*#__PURE__*/_react.default.createElement(_postprocessing.SMAA, null)));
}