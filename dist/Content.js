"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Content;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _TF = _interopRequireWildcard(require("./TF"));

var _Item = _interopRequireDefault(require("./Item"));

var _Hull = _interopRequireDefault(require("./Hull"));

var _Line = _interopRequireDefault(require("./Line"));

var _Text = _interopRequireDefault(require("./Text"));

var _SceneContext = require("./SceneContext");

var _Light = require("./Util/Light");

var _MaterialMaker = require("./Util/MaterialMaker");

var _ColorConversion = require("./Util/ColorConversion");

var _TransformControls = require("./Util/TransformControls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var renderTree = function renderTree(activeTf, displayTfs, allTfs, allItems, allLines, allHulls, allTexts, highlightColor) {
  var TFComponent = activeTf === 'world' ? _TF.WorldTF : activeTf === 'gizmo' ? _TF.GizmoTF : _TF.default;
  return /*#__PURE__*/_react.default.createElement(TFComponent, {
    key: activeTf,
    tfKey: activeTf,
    displayTfs: displayTfs
  }, allTfs.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (tf) {
    return renderTree(tf.tfKey, displayTfs, allTfs, allItems, allLines, allHulls, allTexts, highlightColor);
  }), allItems.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_Item.default, {
      key: item.itemKey,
      itemKey: item.itemKey,
      node: item.node,
      highlightColor: highlightColor
    });
  }), allLines.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (line) {
    return /*#__PURE__*/_react.default.createElement(_Line.default, {
      key: line.lineKey,
      lineKey: line.lineKey
    });
  }), allHulls.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (hull) {
    return /*#__PURE__*/_react.default.createElement(_Hull.default, {
      key: hull.hullKey,
      hullKey: hull.hullKey,
      node: hull.node,
      highlightColor: highlightColor
    });
  }), allTexts.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (text) {
    return /*#__PURE__*/_react.default.createElement(_Text.default, {
      key: text.textKey,
      textKey: text.textKey,
      highlightColor: highlightColor
    });
  }));
};

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
  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  (0, _fiber.useFrame)(function () {
    clock.update();
  }); // const clock = useThree((state) => state.clock);
  // if (clock.running && paused) {
  //   clock.stop();
  //   clock.start();
  //   clock.stop();
  // } else if (!clock.running && !paused) {
  //   clock.start();
  // }
  // camera.up.set(0,0,1);
  // camera.fov = fov ? fov : 60;
  // camera.updateProjectionMatrix();

  var tfs = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.tfs).map(function (pair) {
      var _pair = _slicedToArray(pair, 2),
          tfKey = _pair[0],
          tf = _pair[1];

      return {
        tfKey: tfKey,
        frame: tf.frame
      };
    });
  });
  var items = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.items).map(function (pair) {
      var _pair2 = _slicedToArray(pair, 2),
          itemKey = _pair2[0],
          item = _pair2[1];

      return {
        itemKey: itemKey,
        frame: item.frame,
        transformMode: item.transformMode
      };
    });
  });
  var lines = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.lines).map(function (pair) {
      var _pair3 = _slicedToArray(pair, 2),
          lineKey = _pair3[0],
          line = _pair3[1];

      return {
        lineKey: lineKey,
        frame: line.frame
      };
    });
  });
  var hulls = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.hulls).map(function (pair) {
      var _pair4 = _slicedToArray(pair, 2),
          hullKey = _pair4[0],
          hull = _pair4[1];

      return {
        hullKey: hullKey,
        frame: hull.frame
      };
    });
  });
  var texts = (0, _SceneContext.useSceneStore)(function (state) {
    return Object.entries(state.texts).map(function (pair) {
      var _pair5 = _slicedToArray(pair, 2),
          textKey = _pair5[0],
          text = _pair5[1];

      return {
        textKey: textKey,
        frame: text.frame
      };
    });
  });
  var movableItems = items.filter(function (item) {
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
  }), renderTree('world', displayTfs, tfs, items, lines, hulls, texts, highlightColor), /*#__PURE__*/_react.default.createElement("group", {
    position: [0, 0, plane ? plane : 0],
    rotation: [Math.PI / 2, 0, 0],
    up: [0, 0, 1]
  }, displayGrid && (isPolar ? /*#__PURE__*/_react.default.createElement("polarGridHelper", {
    args: [10, 16, 8, 64, "white", "gray"]
  }) : /*#__PURE__*/_react.default.createElement("gridHelper", {
    args: [20, 20, "white", "gray"]
  }))), movableItems.map(function (movableItem, idx) {
    return /*#__PURE__*/_react.default.createElement(_TransformControls.TransformControls, {
      key: "movableItemTransform-".concat(idx),
      itemKey: movableItem.itemKey,
      mode: movableItem.transformMode,
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
  }), /*#__PURE__*/_react.default.createElement(_drei.GizmoHelper, {
    alignment: "bottom-right" // widget alignment within scene
    ,
    margin: [80, 80] // widget margins (X, Y)

  }, /*#__PURE__*/_react.default.createElement("group", {
    scale: [80, 80, 80]
  }, /*#__PURE__*/_react.default.createElement(_Light.AmbientLight, {
    intensity: 0.4,
    color: "white"
  }), /*#__PURE__*/_react.default.createElement("pointLight", {
    intensity: 0.5,
    position: [-1, -3, 3],
    color: "#FFFAEE"
  }), /*#__PURE__*/_react.default.createElement(_Light.DirectionalLight, {
    castShadow: true,
    position: [5, 15, 15],
    intensity: 0.6,
    color: "#FFFAEE"
  }), renderTree('gizmo', displayTfs, tfs, items, lines, hulls, texts, highlightColor))));
}