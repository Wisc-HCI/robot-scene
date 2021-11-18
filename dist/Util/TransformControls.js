"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransformControls = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _TF = require("../TF");

var _GhostItem = _interopRequireDefault(require("../GhostItem"));

var _TransformControls = require("three/examples/jsm/controls/TransformControls");

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _excluded = ["children"],
    _excluded2 = ["camera", "itemKey", "highlightColor", "store"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TransformControls = function TransformControls(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var transformOnlyPropNames = ['enabled', 'axis', 'mode', 'translationSnap', 'rotationSnap', 'scaleSnap', 'space', 'size', 'showX', 'showY', 'showZ'];

  var camera = props.camera,
      itemKey = props.itemKey,
      highlightColor = props.highlightColor,
      store = props.store,
      rest = _objectWithoutProperties(props, _excluded2);

  var transforms = store((0, _react.useCallback)(function (state) {
    var transforms = [];
    var tfKey = state.items[itemKey].frame;

    while (tfKey && tfKey !== 'world') {
      var tf = state.tfs[tfKey];
      transforms.push({
        position: tf.translation,
        rotation: tf.rotation
      });
      tfKey = state.tfs[tfKey.frame];
    }

    return transforms;
  }, [itemKey]));
  var ref = (0, _react.useRef)();
  var target = (0, _react.useRef)();
  var transformProps = (0, _lodash.default)(rest, transformOnlyPropNames);
  var gl = (0, _fiber.useThree)(function (_ref2) {
    var gl = _ref2.gl;
    return gl;
  });
  var defaultCamera = (0, _fiber.useThree)(function (_ref3) {
    var camera = _ref3.camera;
    return camera;
  });
  var invalidate = (0, _fiber.useThree)(function (_ref4) {
    var invalidate = _ref4.invalidate;
    return invalidate;
  });
  var explCamera = camera || defaultCamera;

  var _useState = (0, _react.useState)(function () {
    return new _TransformControls.TransformControls(explCamera, gl.domElement);
  }),
      _useState2 = _slicedToArray(_useState, 1),
      controls = _useState2[0];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      transforming = _useState4[0],
      setTransforming = _useState4[1];

  (0, _react.useEffect)(function () {
    var callback = function callback(event) {
      if (event.value && !transforming) {
        setTransforming(true);
        props.onDragStart && props.onDragStart();
      } else if (!event.value && transforming) {
        setTransforming(false);
        props.onDragEnd && props.onDragEnd();
      }

      if (props.onMove) {
        var _target$current, _target$current2, _target$current3;

        props.onMove({
          world: {
            position: controls.worldPosition,
            quaternion: controls.worldQuaternion,
            scale: controls._worldScale
          },
          local: {
            position: target === null || target === void 0 ? void 0 : (_target$current = target.current) === null || _target$current === void 0 ? void 0 : _target$current.position,
            quaternion: target === null || target === void 0 ? void 0 : (_target$current2 = target.current) === null || _target$current2 === void 0 ? void 0 : _target$current2.quaternion,
            scale: target === null || target === void 0 ? void 0 : (_target$current3 = target.current) === null || _target$current3 === void 0 ? void 0 : _target$current3.scale
          }
        });
      }
    };

    if (controls) {
      controls.addEventListener('dragging-changed', callback);
    }

    return function () {
      controls.removeEventListener('dragging-changed', callback);
    };
  });
  (0, _react.useLayoutEffect)(function () {
    return void (controls === null || controls === void 0 ? void 0 : controls.attach(target.current));
  }, [target, controls]);
  (0, _react.useEffect)(function () {
    if (controls) {
      controls.addEventListener('change', invalidate);
    }

    return function () {
      var _controls$removeEvent;

      return controls === null || controls === void 0 ? void 0 : (_controls$removeEvent = controls.removeEventListener) === null || _controls$removeEvent === void 0 ? void 0 : _controls$removeEvent.call(controls, 'change', invalidate);
    };
  }, [controls, invalidate]);
  return controls ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("primitive", _extends({
    ref: ref,
    dispose: undefined,
    object: controls
  }, transformProps)), /*#__PURE__*/_react.default.createElement(_TF.GhostTF, {
    transforms: transforms,
    store: store
  }, /*#__PURE__*/_react.default.createElement(_GhostItem.default, {
    ref: target,
    highlightColor: highlightColor,
    itemKey: itemKey,
    store: store
  }))) : null;
};

exports.TransformControls = TransformControls;