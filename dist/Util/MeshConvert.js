"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hullToGroupAndRef = exports.itemToGhost = exports.itemToGroupAndChildRefs = exports.GhostConverter = exports.MeshConverter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _three = require("three");

var _threeStdlib = require("three-stdlib");

var _MeshLookup = require("../MeshLookup");

var _MaterialMaker = require("./MaterialMaker");

var _ColorConversion = require("./ColorConversion");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MeshConverter = function MeshConverter(node, idx, materialOverride, opacity) {
  // console.log(node);
  if (node.type === 'group') {
    var nodes = node.children.map(function (child, i) {
      return MeshConverter(child, i, materialOverride, opacity);
    });

    var group = /*#__PURE__*/_react.default.createElement("group", {
      key: idx,
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

    if (materialOverride) {
      if (opacity < 1.0) {
        var mesh = /*#__PURE__*/_react.default.createElement("group", {
          key: idx,
          ref: ref
        }, /*#__PURE__*/_react.default.createElement("mesh", {
          key: "".concat(idx, "B"),
          geometry: node.geometry,
          scale: node.scale,
          castShadow: false,
          receiveShadow: false
        }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
          transparent: true,
          attach: "material",
          opacity: opacity,
          color: (0, _ColorConversion.rgbToHex)(materialOverride),
          side: _three.BackSide
        })), /*#__PURE__*/_react.default.createElement("mesh", {
          key: "".concat(idx, "F"),
          geometry: node.geometry,
          scale: node.scale,
          castShadow: false,
          receiveShadow: false
        }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
          transparent: true,
          attach: "material",
          opacity: opacity,
          color: (0, _ColorConversion.rgbToHex)(materialOverride),
          side: _three.FrontSide
        })));

        return [mesh, [ref]];
      } else {
        var _mesh = /*#__PURE__*/_react.default.createElement("mesh", {
          ref: ref,
          key: idx,
          geometry: node.geometry,
          scale: node.scale,
          castShadow: true,
          receiveShadow: true
        }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
          attach: "material",
          opacity: opacity,
          color: (0, _ColorConversion.rgbToHex)(materialOverride)
        }));

        return [_mesh, [ref]];
      }
    } else {
      var _mesh2 = /*#__PURE__*/_react.default.createElement("mesh", {
        ref: ref,
        key: idx,
        geometry: node.geometry,
        material: node.material,
        scale: node.scale,
        castShadow: true,
        receiveShadow: true
      });

      return [_mesh2, [ref]];
    }
  }
};

exports.MeshConverter = MeshConverter;

var GhostConverter = function GhostConverter(node, idx, highlightColor) {
  if (node.type === 'group') {
    var nodes = node.children.map(function (child, i) {
      return GhostConverter(child, i, highlightColor);
    });

    var group = /*#__PURE__*/_react.default.createElement("group", {
      key: idx,
      position: node.position,
      rotation: node.rotation,
      scale: node.scale
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
      shape = item.shape;
  var materialOverride = color ? color : undefined;
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

var hullToGroupAndRef = function hullToGroupAndRef(hull) {
  var color = hull.color,
      vertices = hull.vertices,
      hullKey = hull.hullKey;
  var ref = /*#__PURE__*/(0, _react.createRef)();
  var geometry = new _threeStdlib.ConvexGeometry(vertices.map(function (v) {
    return new _three.Vector3(v.x, v.y, v.z);
  }));
  var group = null;

  if (color.a < 1.0) {
    group = /*#__PURE__*/_react.default.createElement("group", {
      key: hullKey,
      ref: ref
    }, /*#__PURE__*/_react.default.createElement("mesh", {
      key: "".concat(hullKey, "B"),
      geometry: geometry,
      castShadow: false,
      receiveShadow: false
    }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
      transparent: true,
      attach: "material",
      opacity: color.a,
      color: (0, _ColorConversion.rgbToHex)(color),
      side: _three.BackSide
    })), /*#__PURE__*/_react.default.createElement("mesh", {
      key: "".concat(hullKey, "F"),
      geometry: geometry,
      castShadow: false,
      receiveShadow: false
    }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
      transparent: true,
      attach: "material",
      opacity: color.a,
      color: (0, _ColorConversion.rgbToHex)(color),
      side: _three.FrontSide
    })));
  } else {
    group = /*#__PURE__*/_react.default.createElement("mesh", {
      ref: ref,
      key: "".concat(hullKey),
      geometry: geometry,
      castShadow: true,
      receiveShadow: true
    }, /*#__PURE__*/_react.default.createElement("meshLambertMaterial", {
      transparent: true,
      attach: "material",
      opacity: color.a,
      color: (0, _ColorConversion.rgbToHex)(color)
    }));
  }

  return [group, ref];
};

exports.hullToGroupAndRef = hullToGroupAndRef;