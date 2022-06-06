"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGenericShape = void 0;
exports.objectMap = objectMap;
exports.updateColorOverlay = updateColorOverlay;
exports.updateShapeMaterial = void 0;
exports.useCombinedRefs = useCombinedRefs;

var _react = _interopRequireWildcard(require("react"));

var _StandardMeshes = require("./StandardMeshes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}

function updateColorOverlay(ref, color, time) {
  if (ref.current && color) {
    var r = typeof color.r === 'function' ? color.r(time) / 255 : color.r / 255;
    var g = typeof color.g === 'function' ? color.g(time) / 255 : color.g / 255;
    var b = typeof color.b === 'function' ? color.b(time) / 255 : color.b / 255;
    var alpha = typeof color.a === 'function' ? color.a(time) : color.a;
    ref.current.color.r = r;
    ref.current.color.g = g;
    ref.current.color.b = b;
    ref.current.alpha = alpha;
  }
}

var updateShapeMaterial = function updateShapeMaterial(ref, color, time) {
  if (ref.current && color) {
    var r = typeof color.r === 'function' ? color.r(time) / 255 : color.r / 255;
    var g = typeof color.g === 'function' ? color.g(time) / 255 : color.g / 255;
    var b = typeof color.b === 'function' ? color.b(time) / 255 : color.b / 255;
    var opacity = typeof color.a === 'function' ? color.a(time) : color.a;
    ref.current.material.color.setRGB(r, g, b);
    ref.current.material.opacity = opacity;
    ref.current.material.transparent = opacity === 1 ? false : true;
  }
};

exports.updateShapeMaterial = updateShapeMaterial;

var createGenericShape = function createGenericShape(item) {
  var geometry = null;

  if (!item.shape) {
    return [];
  } else if (item.shape === 'cube') {
    geometry = (0, _StandardMeshes.BOX_GEOM)(item.shapeParams);
  } else if (item.shape === 'cylinder') {
    geometry = (0, _StandardMeshes.CYLINDER_GEOM)(item.shapeParams);
  } else if (item.shape === 'sphere') {
    geometry = (0, _StandardMeshes.SPHERE_GEOM)(item.shapeParams);
  } else if (item.shape === 'capsule') {
    geometry = (0, _StandardMeshes.CAPSULE_GEOM)(item.shapeParams);
  } else if (item.shape === 'arrow') {
    geometry = (0, _StandardMeshes.ARROW_GEOM)(item.shapeParams);
  }

  return [{
    geometry: geometry,
    type: 'part'
  }];
};

exports.createGenericShape = createGenericShape;

function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var targetRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    refs.forEach(function (ref) {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);
  return targetRef;
}