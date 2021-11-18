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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Item(_ref) {
  var itemKey = _ref.itemKey,
      node = _ref.node,
      store = _ref.store;

  var _store = store((0, _react.useCallback)(function (state) {
    var _state$items$itemKey, _state$items$itemKey2, _state$items$itemKey3, _state$items$itemKey4, _state$items$itemKey5;

    return [(_state$items$itemKey = state.items[itemKey]) === null || _state$items$itemKey === void 0 ? void 0 : _state$items$itemKey.name, (_state$items$itemKey2 = state.items[itemKey]) === null || _state$items$itemKey2 === void 0 ? void 0 : _state$items$itemKey2.showName, (_state$items$itemKey3 = state.items[itemKey]) === null || _state$items$itemKey3 === void 0 ? void 0 : _state$items$itemKey3.onClick, (_state$items$itemKey4 = state.items[itemKey]) === null || _state$items$itemKey4 === void 0 ? void 0 : _state$items$itemKey4.onPointerOver, (_state$items$itemKey5 = state.items[itemKey]) === null || _state$items$itemKey5 === void 0 ? void 0 : _state$items$itemKey5.onPointerOut];
  }, [itemKey])),
      _store2 = _slicedToArray(_store, 5),
      name = _store2[0],
      showName = _store2[1],
      onClick = _store2[2],
      onPointerOver = _store2[3],
      onPointerOut = _store2[4];

  var ref = (0, _react.useRef)();
  (0, _fiber.useFrame)((0, _react.useCallback)(function (_ref2) {
    var clock = _ref2.clock;
    // Outside of react rendering, adjust the positions of all tfs.
    var item = store.getState().items[itemKey];
    var time = clock.getElapsedTime() * 1000;

    if (ref.current) {
      ref.current.position.set(typeof item.position.x === 'function' ? item.position.x(time) : item.position.x, typeof item.position.y === 'function' ? item.position.y(time) : item.position.y, typeof item.position.z === 'function' ? item.position.z(time) : item.position.z);
      ref.current.quaternion.set(typeof item.rotation.x === 'function' ? item.rotation.x(time) : item.rotation.x, typeof item.rotation.y === 'function' ? item.rotation.y(time) : item.rotation.y, typeof item.rotation.z === 'function' ? item.rotation.z(time) : item.rotation.z, typeof item.rotation.w === 'function' ? item.rotation.w(time) : item.rotation.w);
      ref.current.scale.set(typeof item.scale.x === 'function' ? item.scale.x(time) : item.scale.x, typeof item.scale.y === 'function' ? item.scale.y(time) : item.scale.y, typeof item.scale.z === 'function' ? item.scale.z(time) : item.scale.z);
      ref.current.visible = !item.hidden;
    }
  }, [itemKey, ref]));
  return /*#__PURE__*/_react.default.createElement("group", {
    ref: ref,
    up: [0, 0, 1]
  }, /*#__PURE__*/_react.default.createElement("group", {
    up: [0, 0, 1],
    rotation: [Math.PI / 2, 0, 0],
    onPointerDown: onClick,
    onPointerOver: onPointerOver,
    onPointerOut: onPointerOut
  }, node), showName && /*#__PURE__*/_react.default.createElement(_drei.Html, {
    distanceFactor: 3,
    position: [0, 0, 0.2]
  }, /*#__PURE__*/_react.default.createElement(_antd.Tag, {
    style: {
      opacity: 0.75
    },
    className: "disable-text-selection"
  }, name)));
}