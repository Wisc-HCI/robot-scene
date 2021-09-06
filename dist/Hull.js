"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hull;

var _react = _interopRequireWildcard(require("react"));

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

function Hull(_ref) {
  var hullKey = _ref.hullKey,
      node = _ref.node,
      store = _ref.store;

  var _store = store((0, _react.useCallback)(function (state) {
    var _state$items$hullKey, _state$items$hullKey2, _state$items$hullKey3, _state$items$hullKey4, _state$items$hullKey5;

    return [(_state$items$hullKey = state.items[hullKey]) === null || _state$items$hullKey === void 0 ? void 0 : _state$items$hullKey.name, (_state$items$hullKey2 = state.items[hullKey]) === null || _state$items$hullKey2 === void 0 ? void 0 : _state$items$hullKey2.showName, (_state$items$hullKey3 = state.items[hullKey]) === null || _state$items$hullKey3 === void 0 ? void 0 : _state$items$hullKey3.onClick, (_state$items$hullKey4 = state.items[hullKey]) === null || _state$items$hullKey4 === void 0 ? void 0 : _state$items$hullKey4.onPointerOver, (_state$items$hullKey5 = state.items[hullKey]) === null || _state$items$hullKey5 === void 0 ? void 0 : _state$items$hullKey5.onPointerOut];
  }, [hullKey])),
      _store2 = _slicedToArray(_store, 5),
      name = _store2[0],
      showName = _store2[1],
      onClick = _store2[2],
      onPointerOver = _store2[3],
      onPointerOut = _store2[4];

  var ref = (0, _react.useRef)();
  return /*#__PURE__*/_react.default.createElement("group", {
    ref: ref,
    up: [0, 0, 1]
  }, /*#__PURE__*/_react.default.createElement("group", {
    up: [0, 0, 1],
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
  }, name)));
}