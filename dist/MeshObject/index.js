"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _MeshLoader = require("../Util/MeshLoader");

var _STLObject = _interopRequireDefault(require("./STLObject"));

var _DAEObject = _interopRequireDefault(require("./DAEObject"));

var _OBJObject = _interopRequireDefault(require("./OBJObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function MeshObject(props) {
  var path = props.path;
  var fullPath = "./meshes" + path;
  var type = (0, _MeshLoader.MeshType)(fullPath);
  var data = (0, _fiber.useLoader)((0, _MeshLoader.MeshLoaderLookup)(fullPath), fullPath);
  var meshes;

  switch (type) {
    case "stl":
      meshes = /*#__PURE__*/_react.default.createElement(_STLObject.default, _extends({}, props, {
        data: data
      }));
      break;

    case "dae":
      meshes = /*#__PURE__*/_react.default.createElement(_DAEObject.default, _extends({}, props, {
        data: data
      }));
      break;

    case "obj":
      meshes = /*#__PURE__*/_react.default.createElement(_OBJObject.default, _extends({}, props, {
        data: data
      }));
      break;

    default:
      meshes = null;
      break;
  }

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, meshes);
}

var _default = MeshObject;
exports.default = _default;