"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemToGroupAndChildRefs = exports.itemToGhostAndChildRefs = exports.itemToGhost = exports.hullToGroupAndRef = exports.NestedGhostConverter = exports.MeshConverter = exports.GhostConverter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _three = require("three");

var _threeStdlib = require("three-stdlib");

var _MeshLookup = require("../MeshLookup");

var _MaterialMaker = require("./MaterialMaker");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { rgbToHex } from './ColorConversion';
var MeshConverter = function MeshConverter(node, idx, materialOverride, opacity) {
  // console.log(node);
  if (node.type === 'group') {
    var nodes = node.children.map(function (child, i) {
      return MeshConverter(child, i, materialOverride, opacity);
    });

    var group = /*#__PURE__*/_react.default.createElement("group", {
      key: idx,
      up: [0, 0, 1],
      position: node.position,
      rotation: node.rotation,
      scale: node.scale
    }, nodes.map(function (node) {
      return node[0];
    }));

    var refs = [].concat.apply([], nodes.map(function (node) {
      return node[1];
    }));
    return [group, refs];
  } else {
    var frontRef = /*#__PURE__*/(0, _react.createRef)();
    var backRef = /*#__PURE__*/(0, _react.createRef)();

    if (materialOverride) {
      var mesh = /*#__PURE__*/_react.default.createElement("group", {
        key: idx,
        up: [0, 0, 1]
      }, /*#__PURE__*/_react.default.createElement("mesh", {
        ref: backRef,
        key: "".concat(idx, "B"),
        geometry: node.geometry,
        scale: node.scale,
        castShadow: false,
        receiveShadow: false
      }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
        transparent: true,
        wireframe: materialOverride.wireframe,
        attach: "material",
        opacity: opacity // color='#000000' 
        ,
        side: _three.BackSide
      })), /*#__PURE__*/_react.default.createElement("mesh", {
        ref: frontRef,
        key: "".concat(idx, "F"),
        geometry: node.geometry,
        scale: node.scale,
        castShadow: false,
        receiveShadow: false
      }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
        transparent: true,
        attach: "material",
        wireframe: materialOverride.wireframe,
        opacity: opacity // color='#000000'
        ,
        side: _three.FrontSide
      })));

      return [mesh, [frontRef, backRef]];
    } else {
      var _mesh = /*#__PURE__*/_react.default.createElement("mesh", {
        ref: frontRef,
        key: idx,
        geometry: node.geometry,
        material: node.material,
        scale: node.scale,
        castShadow: true,
        receiveShadow: true
      });

      return [_mesh, [frontRef]];
    }
  }
};

exports.MeshConverter = MeshConverter;

var NestedGhostConverter = function NestedGhostConverter(node, idx, highlightColor) {
  // console.log(node);
  if (node.type === 'group') {
    var nodes = node.children.map(function (child, i) {
      return NestedGhostConverter(child, i, highlightColor);
    });

    var group = /*#__PURE__*/_react.default.createElement("group", {
      key: idx,
      up: [0, 0, 1],
      position: node.position,
      rotation: node.rotation,
      scale: node.scale
    }, nodes.map(function (node) {
      return node[0];
    }));

    var refs = [].concat.apply([], nodes.map(function (node) {
      return node[1];
    }));
    return [group, refs];
  } else {
    var ref = /*#__PURE__*/(0, _react.createRef)();

    var mesh = /*#__PURE__*/_react.default.createElement("mesh", {
      ref: ref,
      key: idx,
      geometry: node.geometry,
      material: (0, _MaterialMaker.GhostMaterial)(highlightColor),
      scale: node.scale,
      castShadow: true,
      receiveShadow: true
    });

    return [mesh, [ref]];
  }
};

exports.NestedGhostConverter = NestedGhostConverter;

var GhostConverter = function GhostConverter(node, idx, highlightColor) {
  if (node.type === 'group') {
    var nodes = node.children.map(function (child, i) {
      return GhostConverter(child, i, highlightColor);
    });

    var group = /*#__PURE__*/_react.default.createElement("group", {
      key: idx,
      position: node.position,
      rotation: node.rotation,
      scale: node.scale,
      up: [0, 0, 1]
    }, nodes);

    return group;
  } else {
    var material = (0, _MaterialMaker.GhostMaterial)(highlightColor); // const material = WireframeMaterial(255,255,255);

    return /*#__PURE__*/_react.default.createElement("mesh", {
      key: idx,
      geometry: node.geometry,
      material: material,
      scale: node.scale,
      castShadow: false,
      receiveShadow: false
    });
  }
};

exports.GhostConverter = GhostConverter;

var itemToGroupAndChildRefs = function itemToGroupAndChildRefs(item) {
  var color = item.color,
      shape = item.shape,
      wireframe = item.wireframe;
  var materialOverride = color ? _objectSpread(_objectSpread({}, color), {}, {
    wireframe: wireframe
  }) : undefined;
  var opacity = color ? color.a : 1.0;
  var content = [];

  if (shape in _MeshLookup.MeshLookupTable) {
    content = (0, _MeshLookup.MeshLookup)(shape);
  }

  var nodes = content.map(function (node, i) {
    return MeshConverter(node, i, materialOverride, opacity);
  });

  var group = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, nodes.map(function (node) {
    return node[0];
  }));

  var refs = [].concat.apply([], nodes.map(function (node) {
    return node[1];
  }));
  return [group, refs];
};

exports.itemToGroupAndChildRefs = itemToGroupAndChildRefs;

var itemToGhost = function itemToGhost(item, highlightColor) {
  var shape = item.shape;
  var content = [];

  if (shape in _MeshLookup.MeshLookupTable) {
    content = (0, _MeshLookup.MeshLookup)(shape);
  }

  var nodes = content.map(function (node, i) {
    return GhostConverter(node, i, highlightColor);
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, nodes);
};

exports.itemToGhost = itemToGhost;

var itemToGhostAndChildRefs = function itemToGhostAndChildRefs(item, highlightColor) {
  var shape = item.shape;
  var content = shape in _MeshLookup.MeshLookupTable ? (0, _MeshLookup.MeshLookup)(shape) : [];
  var nodes = content.map(function (node, i) {
    return NestedGhostConverter(node, i, highlightColor);
  });

  var group = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, nodes.map(function (node) {
    return node[0];
  }));

  var refs = [].concat.apply([], nodes.map(function (node) {
    return node[1];
  }));
  return [group, refs];
};

exports.itemToGhostAndChildRefs = itemToGhostAndChildRefs;

var hullToGroupAndRef = function hullToGroupAndRef(hull) {
  var vertices = hull.vertices,
      hullKey = hull.hullKey,
      wireframe = hull.wireframe;
  var frontRef = /*#__PURE__*/(0, _react.createRef)();
  var backRef = /*#__PURE__*/(0, _react.createRef)();
  var geometry = new _threeStdlib.ConvexGeometry(vertices.map(function (v) {
    return new _three.Vector3(v.x, v.y, v.z);
  }));

  var group = /*#__PURE__*/_react.default.createElement("group", {
    key: hullKey,
    up: [0, 0, 1]
  }, /*#__PURE__*/_react.default.createElement("mesh", {
    ref: backRef,
    key: "".concat(hullKey, "B"),
    geometry: geometry,
    castShadow: false,
    receiveShadow: false
  }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
    transparent: true,
    wireframe: wireframe,
    attach: "material",
    side: _three.BackSide
  })), /*#__PURE__*/_react.default.createElement("mesh", {
    ref: frontRef,
    key: "".concat(hullKey, "F"),
    geometry: geometry,
    castShadow: false,
    receiveShadow: false
  }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
    transparent: true,
    attach: "material",
    wireframe: wireframe,
    side: _three.FrontSide
  })));

  return [group, [frontRef, backRef]];
};

exports.hullToGroupAndRef = hullToGroupAndRef;