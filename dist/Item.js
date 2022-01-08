"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Item;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _antd = require("antd");

var _MeshLookup = require("./MeshLookup");

var _three = require("three");

var _MaterialMaker = require("./Util/MaterialMaker");

var _Helpers = require("./Util/Helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GENERIC_SHAPES = ['cube', 'cylinder', 'sphere', 'capsule', 'arrow'];

function Item(_ref) {
  var itemKey = _ref.itemKey,
      store = _ref.store,
      highlightColor = _ref.highlightColor;
  var item = store((0, _react.useCallback)(function (state) {
    return state.items[itemKey];
  }, [itemKey]));
  var content = GENERIC_SHAPES.includes(item.shape) ? (0, _Helpers.createGenericShape)(item) : item.shape in _MeshLookup.MeshLookupTable ? (0, _MeshLookup.MeshLookup)(item.shape) : [];
  var ref = (0, _react.useRef)();
  (0, _fiber.useFrame)((0, _react.useCallback)(function (_ref2) {
    var clock = _ref2.clock;
    // Outside of react rendering, adjust the positions of all tfs.
    var itemState = store.getState().items[itemKey];
    var time = clock.getElapsedTime() * 1000;

    if (ref.current) {
      ref.current.position.set(typeof itemState.position.x === 'function' ? itemState.position.x(time) : itemState.position.x, typeof itemState.position.y === 'function' ? itemState.position.y(time) : itemState.position.y, typeof itemState.position.z === 'function' ? itemState.position.z(time) : itemState.position.z);
      ref.current.quaternion.set(typeof itemState.rotation.x === 'function' ? itemState.rotation.x(time) : itemState.rotation.x, typeof itemState.rotation.y === 'function' ? itemState.rotation.y(time) : itemState.rotation.y, typeof itemState.rotation.z === 'function' ? itemState.rotation.z(time) : itemState.rotation.z, typeof itemState.rotation.w === 'function' ? itemState.rotation.w(time) : itemState.rotation.w);
      ref.current.scale.set(typeof itemState.scale.x === 'function' ? itemState.scale.x(time) : itemState.scale.x, typeof itemState.scale.y === 'function' ? itemState.scale.y(time) : itemState.scale.y, typeof itemState.scale.z === 'function' ? itemState.scale.z(time) : itemState.scale.z);
      ref.current.visible = !itemState.hidden;
    }
  }, [itemKey, ref, store]));
  return /*#__PURE__*/_react.default.createElement("group", {
    ref: ref,
    up: [0, 0, 1]
  }, /*#__PURE__*/_react.default.createElement("group", {
    up: [0, 0, 1],
    rotation: [Math.PI / 2, 0, 0],
    onPointerDown: item.onClick,
    onPointerOver: item.onPointerOver,
    onPointerOut: item.onPointerOut
  }, content.map(function (groupOrPart, idx) {
    return /*#__PURE__*/_react.default.createElement(GroupOrPart, {
      key: idx,
      idx: idx,
      groupOrPart: groupOrPart,
      itemKey: itemKey,
      store: store,
      highlightColor: highlightColor
    });
  })), item.showName && /*#__PURE__*/_react.default.createElement(_drei.Html, {
    distanceFactor: 3,
    position: [0, 0, 0.2]
  }, /*#__PURE__*/_react.default.createElement(_antd.Tag, {
    style: {
      opacity: 0.75
    },
    className: "disable-text-selection"
  }, item.name)));
}

var Part = function Part(_ref3) {
  var part = _ref3.part,
      itemKey = _ref3.itemKey,
      store = _ref3.store,
      highlightColor = _ref3.highlightColor;
  var wireframe = store((0, _react.useCallback)(function (state) {
    return state.items[itemKey].wireframe;
  }, [itemKey]));
  var materialOverride = store((0, _react.useCallback)(function (state) {
    return state.items[itemKey].color !== undefined;
  }, [itemKey]));
  var highlighted = store((0, _react.useCallback)(function (state) {
    return state.items[itemKey].highlighted;
  }, [itemKey]));
  var frontRef = (0, _react.useRef)();
  var backRef = (0, _react.useRef)();
  var ghostFrontRef = (0, _react.useRef)();
  var ghostBackRef = (0, _react.useRef)();
  (0, _fiber.useFrame)((0, _react.useCallback)(function (_ref4) {
    var clock = _ref4.clock;
    // Outside of react rendering, adjust the positions of all tfs.
    var itemState = store.getState().items[itemKey];
    var time = clock.getElapsedTime() * 1000;
    (0, _Helpers.updateShapeMaterial)(backRef, itemState.color, time);
    (0, _Helpers.updateShapeMaterial)(frontRef, itemState.color, time);

    if (ghostFrontRef.current && ghostBackRef.current) {
      var coeficient = Math.sin(time / 700) / 5 + 1;
      var power = -Math.sin(time / 700) / 2 + 3;
      ghostFrontRef.current.material.uniforms.coeficient.value = coeficient;
      ghostFrontRef.current.material.uniforms.power.value = power;
      ghostBackRef.current.material.uniforms.coeficient.value = coeficient;
      ghostBackRef.current.material.uniforms.power.value = power;
    }
  }, [itemKey, frontRef, backRef, store]));

  if (materialOverride) {
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
    })), highlighted && /*#__PURE__*/_react.default.createElement("mesh", {
      key: "HB",
      ref: ghostBackRef,
      geometry: part.geometry,
      material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
      scale: part.scale,
      castShadow: false,
      receiveShadow: false,
      side: _three.BackSide
    }), highlighted && /*#__PURE__*/_react.default.createElement("mesh", {
      key: "HF",
      ref: ghostFrontRef,
      geometry: part.geometry,
      material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
      scale: part.scale,
      castShadow: false,
      receiveShadow: false,
      side: _three.FrontSide
    }));
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
    }), highlighted && /*#__PURE__*/_react.default.createElement("mesh", {
      key: "HB",
      ref: ghostBackRef,
      geometry: part.geometry,
      material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
      scale: part.scale,
      castShadow: false,
      receiveShadow: false,
      side: _three.BackSide
    }), highlighted && /*#__PURE__*/_react.default.createElement("mesh", {
      key: "HF",
      ref: ghostFrontRef,
      geometry: part.geometry,
      material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
      scale: part.scale,
      castShadow: false,
      receiveShadow: false,
      side: _three.FrontSide
    }));
  }
};

var GroupOrPart = function GroupOrPart(_ref5) {
  var idx = _ref5.idx,
      groupOrPart = _ref5.groupOrPart,
      itemKey = _ref5.itemKey,
      store = _ref5.store,
      highlightColor = _ref5.highlightColor;

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
        itemKey: itemKey,
        store: store,
        highlightColor: highlightColor
      });
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(Part, {
      key: idx,
      part: groupOrPart,
      itemKey: itemKey,
      store: store,
      highlightColor: highlightColor
    });
  }
};