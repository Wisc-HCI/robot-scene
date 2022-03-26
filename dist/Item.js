"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _MeshLookup = require("./MeshLookup");

var _three = require("three");

var _Helpers = require("./Util/Helpers");

var _SceneContext = require("./SceneContext");

var _postprocessing = require("@react-three/postprocessing");

var _MaterialMaker = require("./Util/MaterialMaker");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { GhostMaterial } from './Util/MaterialMaker';
var GENERIC_SHAPES = ['cube', 'cylinder', 'sphere', 'capsule', 'arrow'];

var _default = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, forwardedRef) {
  var objectKey = _ref.objectKey,
      highlightColor = _ref.highlightColor,
      position = _ref.position,
      rotation = _ref.rotation,
      scale = _ref.scale,
      ghost = _ref.ghost;
  var innerRef = (0, _react.useRef)(null);
  var ref = (0, _Helpers.useCombinedRefs)(forwardedRef, innerRef);
  var onClick = (0, _SceneContext.useSceneStore)(function (state) {
    return state.onClick;
  });

  var _onPointerOver = (0, _SceneContext.useSceneStore)(function (state) {
    return state.onPointerOver;
  });

  var _onPointerOut = (0, _SceneContext.useSceneStore)(function (state) {
    return state.onPointerOut;
  });

  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  var item = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return state.items[objectKey];
  }, [objectKey]));
  var content = GENERIC_SHAPES.includes(item.shape) ? (0, _Helpers.createGenericShape)(item) : item.shape in _MeshLookup.MeshLookupTable ? (0, _MeshLookup.MeshLookup)(item.shape) : [];
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the positions of the item.
    var time = clock.getElapsed() * 1000;

    if (ref.current) {
      // console.log(ref.current)
      ref.current.position.set(position ? position.x : typeof item.position.x === 'function' ? item.position.x(time) : item.position.x, position ? position.y : typeof item.position.y === 'function' ? item.position.y(time) : item.position.y, position ? position.z : typeof item.position.z === 'function' ? item.position.z(time) : item.position.z);
      ref.current.quaternion.set(rotation ? rotation.x : typeof item.rotation.x === 'function' ? item.rotation.x(time) : item.rotation.x, rotation ? rotation.y : typeof item.rotation.y === 'function' ? item.rotation.y(time) : item.rotation.y, rotation ? rotation.z : typeof item.rotation.z === 'function' ? item.rotation.z(time) : item.rotation.z, rotation ? rotation.w : typeof item.rotation.w === 'function' ? item.rotation.w(time) : item.rotation.w);
      ref.current.scale.set(scale ? scale.x : typeof item.scale.x === 'function' ? item.scale.x(time) : item.scale.x, scale ? scale.y : typeof item.scale.y === 'function' ? item.scale.y(time) : item.scale.y, scale ? scale.z : typeof item.scale.z === 'function' ? item.scale.z(time) : item.scale.z);
      ref.current.visible = typeof item.hidden === 'function' ? !item.hidden(time) : !item.hidden;
    }
  }, [item, position, rotation, scale, ref]));
  return /*#__PURE__*/_react.default.createElement(_postprocessing.Select, {
    enabled: item.highlighted
  }, /*#__PURE__*/_react.default.createElement("group", {
    ref: ref,
    up: [0, 0, 1]
  }, /*#__PURE__*/_react.default.createElement("group", {
    up: [0, 0, 1],
    rotation: [Math.PI / 2, 0, 0],
    onPointerDown: function onPointerDown(e) {
      onClick(objectKey, !ref.current.visible, e);
    },
    onPointerOver: function onPointerOver(e) {
      _onPointerOver(objectKey, !ref.current.visible, e);
    },
    onPointerOut: function onPointerOut(e) {
      _onPointerOut(objectKey, !ref.current.visible, e);
    }
  }, content.map(function (groupOrPart, idx) {
    return /*#__PURE__*/_react.default.createElement(GroupOrPart, {
      key: idx,
      idx: idx,
      groupOrPart: groupOrPart,
      objectKey: objectKey,
      ghost: ghost,
      highlightColor: highlightColor
    });
  })), item.showName && /*#__PURE__*/_react.default.createElement(_drei.Html, {
    distanceFactor: 3,
    position: [0, 0, 0.2]
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: 0.75,
      borderRadius: 2,
      backgroundColor: 'lightgrey',
      padding: 5,
      userSelect: 'none'
    }
  }, item.name))));
});

exports.default = _default;

var Part = function Part(_ref2) {
  var part = _ref2.part,
      objectKey = _ref2.objectKey,
      ghost = _ref2.ghost,
      highlightColor = _ref2.highlightColor;
  var wireframe = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return state.items[objectKey].wireframe;
  }, [objectKey]));
  var color = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return state.items[objectKey].color;
  }, [objectKey]));
  var materialOverride = color !== undefined;
  var frontRef = (0, _react.useRef)();
  var backRef = (0, _react.useRef)();
  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the color/material.
    var time = clock.getElapsed() * 1000;

    if (!ghost) {
      (0, _Helpers.updateShapeMaterial)(backRef, color, time);
      (0, _Helpers.updateShapeMaterial)(frontRef, color, time);
    }
  }, [objectKey, ghost, frontRef, backRef]));

  if (ghost) {
    return /*#__PURE__*/_react.default.createElement("mesh", {
      ref: backRef,
      key: "B",
      geometry: part.geometry,
      material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
      scale: part.scale,
      castShadow: false,
      receiveShadow: false
    });
  } else if (materialOverride) {
    return /*#__PURE__*/_react.default.createElement("group", {
      up: [0, 0, 1]
    }, /*#__PURE__*/_react.default.createElement("mesh", {
      ref: backRef,
      key: "B",
      geometry: part.geometry,
      scale: part.scale,
      castShadow: false,
      receiveShadow: false
    }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
      transparent: true,
      wireframe: wireframe,
      attach: "material",
      opacity: 1 // color='#000000' 
      ,
      side: _three.BackSide
    })), /*#__PURE__*/_react.default.createElement("mesh", {
      ref: frontRef,
      key: "F",
      geometry: part.geometry,
      scale: part.scale,
      castShadow: false,
      receiveShadow: false
    }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
      transparent: true,
      attach: "material",
      wireframe: wireframe,
      opacity: 1 // color='#000000'
      ,
      side: _three.FrontSide
    })));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("mesh", {
      key: "I",
      ref: frontRef,
      geometry: part.geometry,
      material: part.material,
      scale: part.scale,
      castShadow: true,
      receiveShadow: true,
      wireframe: wireframe
    }));
  }
};

var GroupOrPart = function GroupOrPart(_ref3) {
  var idx = _ref3.idx,
      groupOrPart = _ref3.groupOrPart,
      ghost = _ref3.ghost,
      objectKey = _ref3.objectKey,
      highlightColor = _ref3.highlightColor;

  if (groupOrPart.type === 'group') {
    return /*#__PURE__*/_react.default.createElement("group", {
      key: idx,
      up: [0, 0, 1],
      position: groupOrPart.position,
      rotation: groupOrPart.rotation,
      scale: groupOrPart.scale
    }, groupOrPart.children.map(function (groupOrPartChild, childIdx) {
      return /*#__PURE__*/_react.default.createElement(GroupOrPart, {
        key: childIdx,
        idx: childIdx,
        groupOrPart: groupOrPartChild,
        objectKey: objectKey,
        ghost: ghost,
        highlightColor: highlightColor
      });
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(Part, {
      key: idx,
      part: groupOrPart,
      objectKey: objectKey,
      highlightColor: highlightColor,
      ghost: ghost
    });
  }
};