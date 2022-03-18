"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MeshConvert = require("./Util/MeshConvert");

var _SceneContext = require("./SceneContext");

var _fiber = require("@react-three/fiber");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GhostItem = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var itemKey = _ref.itemKey,
      highlightColor = _ref.highlightColor,
      position = _ref.position,
      rotation = _ref.rotation,
      scale = _ref.scale;

  var _useSceneStore = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    var _state$items$itemKey, _state$items$itemKey2, _state$items$itemKey3, _state$items$itemKey4;

    return [(_state$items$itemKey = state.items[itemKey]) === null || _state$items$itemKey === void 0 ? void 0 : _state$items$itemKey.position, (_state$items$itemKey2 = state.items[itemKey]) === null || _state$items$itemKey2 === void 0 ? void 0 : _state$items$itemKey2.rotation, (_state$items$itemKey3 = state.items[itemKey]) === null || _state$items$itemKey3 === void 0 ? void 0 : _state$items$itemKey3.scale, (_state$items$itemKey4 = state.items[itemKey]) === null || _state$items$itemKey4 === void 0 ? void 0 : _state$items$itemKey4.shape];
  }, [itemKey])),
      _useSceneStore2 = _slicedToArray(_useSceneStore, 4),
      initposition = _useSceneStore2[0],
      initrotation = _useSceneStore2[1],
      initscale = _useSceneStore2[2],
      shape = _useSceneStore2[3];

  console.log({
    position: position,
    rotation: rotation,
    scale: scale
  }); // if ([
  //   position?.x, position?.y, position?.z, 
  //   rotation?.x, rotation?.y, rotation?.z, rotation?.w, 
  //   scale?.x, scale?.y, scale?.z
  // ].map(value=>typeof value === 'function')
  //  .filter(value=>value===true)
  //  .length > 0) {
  //    return null
  //  }

  (0, _react.useLayoutEffect)(function () {
    var _ref$current, _ref$current2, _ref$current3;

    ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.position.set(initposition.x, initposition.y, initposition.z);
    ref === null || ref === void 0 ? void 0 : (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.quaternion.set(initrotation.x, initrotation.y, initrotation.z, initrotation.w);
    ref === null || ref === void 0 ? void 0 : (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : _ref$current3.scale.set(initscale.x, initscale.y, initscale.z);
  }, [ref, initposition, initrotation, initscale]);
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    if (position) {
      var _ref$current4;

      ref === null || ref === void 0 ? void 0 : (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.position.set(position.x, position.y, position.z);
    }

    if (rotation) {
      var _ref$current5;

      ref === null || ref === void 0 ? void 0 : (_ref$current5 = ref.current) === null || _ref$current5 === void 0 ? void 0 : _ref$current5.quaternion.set(rotation.x, rotation.y, rotation.z, rotation.w);
    }

    if (scale) {
      var _ref$current6;

      ref === null || ref === void 0 ? void 0 : (_ref$current6 = ref.current) === null || _ref$current6 === void 0 ? void 0 : _ref$current6.scale.set(scale.x, scale.y, scale.z);
    }
  }, [position, rotation, scale]));
  var ghostGroup = (0, _MeshConvert.itemToGhost)({
    shape: shape
  }, highlightColor);
  return /*#__PURE__*/_react.default.createElement("group", {
    ref: ref,
    up: [0, 0, 1]
  }, /*#__PURE__*/_react.default.createElement("group", {
    rotation: [Math.PI / 2, 0, 0]
  }, ghostGroup));
});
var _default = GhostItem;
exports.default = _default;