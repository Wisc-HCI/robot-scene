"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Item;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _SceneStore = _interopRequireDefault(require("./SceneStore"));

var _antd = require("antd");

var _GhostItem = _interopRequireDefault(require("./GhostItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Item(_ref) {
  var itemKey = _ref.itemKey;

  var _useSceneStore = (0, _SceneStore.default)((0, _react.useCallback)(function (state) {
    return {
      name: state.items[itemKey].name,
      node: state.items[itemKey].group,
      showName: state.items[itemKey].showName,
      onClick: state.items[itemKey].onClick,
      onPointerOver: state.items[itemKey].onPointerOver,
      onPointerOut: state.items[itemKey].onPointerOut,
      transformMode: state.items[itemKey].transformMode
    };
  }, [itemKey])),
      name = _useSceneStore.name,
      node = _useSceneStore.node,
      showName = _useSceneStore.showName,
      onClick = _useSceneStore.onClick,
      onPointerOver = _useSceneStore.onPointerOver,
      onPointerOut = _useSceneStore.onPointerOut,
      transformMode = _useSceneStore.transformMode;

  var ref = (0, _react.useRef)();
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the positions of all tfs.
    var item = _SceneStore.default.getState().items[itemKey];

    if (ref.current) {
      ref.current.position.set(item.position.x, item.position.y, item.position.z);
      ref.current.quaternion.set(item.rotation.x, item.rotation.y, item.rotation.z, item.rotation.w);
      ref.current.scale.set(item.scale.x, item.scale.y, item.scale.z);
    }
  }, [itemKey, ref]));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("group", {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("group", {
    rotation: [Math.PI / 2, 0, 0],
    onPointerDown: onClick,
    onPointerOver: onPointerOver,
    onPointerOut: onPointerOut
  }, node), showName && /*#__PURE__*/_react.default.createElement(_drei.Html, {
    distanceFactor: 7,
    position: [0, 1, 0]
  }, /*#__PURE__*/_react.default.createElement(_antd.Tag, {
    style: {
      opacity: 0.75
    },
    className: "disable-text-selection"
  }, name))), ['translate', 'rotate', 'scale'].indexOf(transformMode) > -1 && /*#__PURE__*/_react.default.createElement(_GhostItem.default, {
    itemKey: itemKey
  }));
}