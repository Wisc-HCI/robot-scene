"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Control;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _SceneStore = _interopRequireDefault(require("./SceneStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Control(_ref) {
  var controlKey = _ref.controlKey,
      orbitControls = _ref.orbitControls,
      children = _ref.children;

  var _useSceneStore = (0, _SceneStore.default)((0, _react.useCallback)(function (state) {
    return [state.controls[controlKey].mode, state.controls[controlKey].onTransform];
  }, [controlKey])),
      _useSceneStore2 = _slicedToArray(_useSceneStore, 2),
      mode = _useSceneStore2[0],
      onTransform = _useSceneStore2[1];

  var controls = (0, _react.useRef)(); //   useFrame(useCallback(() => {
  //     // Outside of react rendering, adjust the positions of all tfs.
  //     const controlState = useSceneStore.getState().controls[controlKey];
  //     if (controls.current) {
  //         console.log(controls.current);
  //         // controls.current.gizmo.rotation.set({x:Math.PI/2,y:0,z:0});
  //         controls.current.positionStart.set(
  //             controlState.translation.x, 
  //             controlState.translation.y, 
  //             controlState.translation.z
  //         );
  //         controls.current.quaternionStart.set(
  //             controlState.rotation.x,
  //             controlState.rotation.y,
  //             controlState.rotation.z,
  //             controlState.rotation.w
  //         );
  //         controls.current.scaleStart.set(
  //             controlState.scale.x, 
  //             controlState.scale.y, 
  //             controlState.scale.z
  //         );
  //     }
  //   },[controlKey]));

  (0, _react.useEffect)(function () {
    if (controls.current) {
      var callback = function callback(event) {
        console.log(event);

        _SceneStore.default.setState({
          transforming: event.value
        });
      };

      controls.current.addEventListener('dragging-changed', callback);
      return function () {
        return controls.current && controls.current.removeEventListener('dragging-changed', callback);
      };
    }
  });
  return /*#__PURE__*/_react.default.createElement(_drei.TransformControls, {
    ref: controls,
    mode: mode
  }, /*#__PURE__*/_react.default.createElement(_drei.Box, {
    args: [10]
  }, /*#__PURE__*/_react.default.createElement("meshBasicMaterial", {
    attach: "material",
    wireframe: true
  })), children);
}