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

var _three = require("three");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Item(props) {
  var orbitControls = props.orbitControls,
      itemKey = props.itemKey,
      node = props.node;
  var transformRef = (0, _react.useRef)();
  var scaleRef = (0, _react.useRef)();
  var rotateRef = (0, _react.useRef)();

  var _useSceneStore = (0, _SceneStore.default)((0, _react.useCallback)(function (state) {
    return {
      editMode: state.items[itemKey].editMode,
      name: state.items[itemKey].name,
      showName: state.items[itemKey].showName,
      onClick: state.items[itemKey].onClick,
      onPointerOver: state.items[itemKey].onPointerOver,
      onPointerOut: state.items[itemKey].onPointerOut,
      onTransform: state.items[itemKey].onTransform
    };
  }, [itemKey])),
      editMode = _useSceneStore.editMode,
      name = _useSceneStore.name,
      showName = _useSceneStore.showName,
      onClick = _useSceneStore.onClick,
      onPointerOver = _useSceneStore.onPointerOver,
      onPointerOut = _useSceneStore.onPointerOut,
      onTransform = _useSceneStore.onTransform;

  var transformControls = (0, _react.useRef)();
  var localQuaternion = new _three.Quaternion();
  var localEuler = new _three.Euler();
  (0, _react.useEffect)(function () {
    if (transformControls.current) {
      var controls = transformControls.current; // controls.children[0].rotation.set(-Math.PI/2,0,0)

      var dragChangeCallback = function dragChangeCallback(event) {
        orbitControls.current.enabled = !event.value;
      };

      var dragCallback = function dragCallback(event) {
        if (editMode === 'translate') {
          onTransform({
            translation: {
              x: controls.offset.x,
              y: controls.offset.y,
              z: controls.offset.z
            }
          });
        } else if (editMode === 'rotate') {
          localEuler.setFromVector3(controls.offset);
          localQuaternion.setFromEuler(localEuler);
          onTransform({
            rotation: {
              w: localQuaternion.w,
              x: localQuaternion.x,
              y: localQuaternion.y,
              z: localQuaternion.z
            }
          });
        } else if (editMode === 'scale') {
          onTransform({
            scale: {
              x: controls.offset.x,
              y: controls.offset.y,
              z: controls.offset.z
            }
          });
        }
      };

      controls.addEventListener('dragging-changed', dragChangeCallback);
      controls.addEventListener('objectChange', dragCallback);
      return function () {
        controls.removeEventListener('dragging-changed', dragChangeCallback);
        controls.removeEventListener('objectChange', dragCallback);
      };
    }
  });
  (0, _fiber.useFrame)(function () {
    // Outside of react rendering, adjust the positions of all tfs.
    var item = _SceneStore.default.getState().items[itemKey];

    transformRef.current.position.set(item.position.x, item.position.y, item.position.z);
    rotateRef.current.quaternion.set(item.rotation.x, item.rotation.y, item.rotation.z, item.rotation.w);
    scaleRef.current.scale.set(item.scale.x, item.scale.y, item.scale.z); // if (transformControls.current) {
    //   const { current: controls } = transformControls;
    //   controls.gizmo.position.set(item.position.x, item.position.y, item.position.z);
    //   controls.gizmo.quaternion.set(
    //     item.rotation.x,
    //     item.rotation.y,
    //     item.rotation.z,
    //     item.rotation.w
    //   );
    //   controls.gizmo.scale.set(item.scale.x, item.scale.y, item.scale.z);
    // }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("group", {
    ref: transformRef,
    onPointerDown: onClick,
    onPointerOver: onPointerOver,
    onPointerOut: onPointerOut
  }, /*#__PURE__*/_react.default.createElement("group", {
    ref: scaleRef
  }, /*#__PURE__*/_react.default.createElement("group", {
    ref: rotateRef
  }, node)), showName && /*#__PURE__*/_react.default.createElement(_drei.Html, {
    distanceFactor: 7,
    position: [0, 1, 0]
  }, /*#__PURE__*/_react.default.createElement(_antd.Tag, {
    style: {
      opacity: 0.75
    },
    className: "disable-text-selection"
  }, name))), false && editMode !== 'inactive' && /*#__PURE__*/_react.default.createElement(_drei.TransformControls, {
    scene: "local",
    ref: transformControls,
    mode: editMode
  }));
}