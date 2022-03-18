"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SceneText;

var _react = _interopRequireWildcard(require("react"));

var _drei = require("@react-three/drei");

var _SceneContext = require("./SceneContext");

var _Font = _interopRequireDefault(require("./Font.woff"));

var _fiber = require("@react-three/fiber");

var _Helpers = require("./Util/Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SceneText(_ref) {
  var textKey = _ref.textKey;
  var groupRef = (0, _react.useRef)();
  var textRef = (0, _react.useRef)();
  var clock = (0, _SceneContext.useSceneStore)(function (state) {
    return state.clock;
  });
  var textInfo = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return state.texts[textKey];
  }, [textKey]));
  (0, _fiber.useFrame)((0, _react.useCallback)(function () {
    // Outside of react rendering, adjust the positions of the item.
    var time = clock.getElapsed() * 1000;

    if (groupRef.current) {
      // console.log(groupRef.current)
      groupRef.current.position.set(typeof textInfo.position.x === 'function' ? textInfo.position.x(time) : textInfo.position.x, typeof textInfo.position.y === 'function' ? textInfo.position.y(time) : textInfo.position.y, typeof textInfo.position.z === 'function' ? textInfo.position.z(time) : textInfo.position.z); // groupRef.current.quaternion.set();

      groupRef.current.visible = typeof textInfo.hidden === 'function' ? !textInfo.hidden(time) : !textInfo.hidden;
    }

    if (textRef.current) {
      (0, _Helpers.updateShapeMaterial)(textRef, textInfo.color, time);
    }
  }, [textInfo, groupRef]));
  return /*#__PURE__*/_react.default.createElement("group", {
    ref: groupRef
  }, /*#__PURE__*/_react.default.createElement(_drei.Billboard, {
    follow: true
  }, /*#__PURE__*/_react.default.createElement(_drei.Text, {
    ref: textRef,
    font: _Font.default,
    depthOffset: 2
  }, textInfo.value)));
}