"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TF = _interopRequireWildcard(require("./TF"));

var _Item = _interopRequireDefault(require("./Item"));

var _Line = _interopRequireDefault(require("./Line"));

var _Hull = _interopRequireDefault(require("./Hull"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tree = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var activeTf = _ref.activeTf,
      displayTfs = _ref.displayTfs,
      allTfs = _ref.allTfs,
      allItems = _ref.allItems,
      allLines = _ref.allLines,
      allHulls = _ref.allHulls,
      allTexts = _ref.allTexts,
      highlightColor = _ref.highlightColor,
      ghosts = _ref.ghosts,
      targetRef = _ref.targetRef,
      targetId = _ref.targetId,
      targetSource = _ref.targetSource,
      filterActive = _ref.filterActive,
      tfFilter = _ref.tfFilter,
      customProps = _ref.customProps;
  var TFComponent = activeTf === 'world' ? _TF.WorldTF : activeTf === 'gizmo' ? _TF.GizmoTF : _TF.default;
  var tfProps = activeTf === targetId ? customProps : {};
  var filteredTfs = filterActive ? allTfs.filter(function (tf) {
    return tfFilter.includes(tf.key);
  }) : allTfs;
  var newFilterActive = filterActive ? activeTf !== targetRef : filterActive;
  return /*#__PURE__*/_react.default.createElement(TFComponent, _extends({
    objectKey: activeTf,
    displayTfs: displayTfs,
    ref: targetId === activeTf ? targetRef : null
  }, tfProps, {
    ghost: ghosts,
    highlightColor: highlightColor
  }), filteredTfs.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (tf) {
    return /*#__PURE__*/_react.default.createElement(Tree, {
      key: tf.key,
      activeTf: tf.key,
      displayTfs: displayTfs,
      allTfs: allTfs,
      allItems: allItems,
      allLines: allLines,
      allHulls: allHulls,
      allTexts: allTexts,
      highlightColor: highlightColor,
      ghosts: ghosts,
      targetRef: targetRef,
      targetSource: targetSource,
      targetId: targetId,
      filterActive: newFilterActive,
      tfFilter: tfFilter,
      customProps: customProps
    });
  }), allItems.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (item) {
    var itemProps = item.key === targetId && targetSource === 'items' ? customProps : {};

    if (!filterActive || item.key === targetId || activeTf === targetId) {
      return /*#__PURE__*/_react.default.createElement(_Item.default, _extends({
        key: item.key,
        objectKey: item.key,
        highlightColor: highlightColor,
        ghost: ghosts,
        ref: item.key === targetId ? targetRef : null
      }, itemProps));
    }
  }), allLines.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (line) {
    var lineProps = line.key === targetId && targetSource === 'lines' ? customProps : {};

    if (!filterActive || line.key === targetId || activeTf === targetId) {
      return /*#__PURE__*/_react.default.createElement(_Line.default, _extends({
        key: line.key,
        objectKey: line.key,
        ref: line.lineKey === targetId ? targetRef : null
      }, lineProps));
    }
  }), allHulls.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (hull) {
    var hullProps = hull.key === targetId && targetSource === 'hulls' ? customProps : {};

    if (!filterActive || hull.key === targetId || activeTf === targetId) {
      return /*#__PURE__*/_react.default.createElement(_Hull.default, _extends({
        key: hull.key,
        objectKey: hull.key,
        highlightColor: highlightColor,
        ghost: ghosts,
        ref: hull.key === targetId ? targetRef : null
      }, hullProps));
    }
  }), allTexts.filter(function (v) {
    return v.frame === activeTf || activeTf === 'world' && !v.frame;
  }).map(function (text) {
    var textProps = text.key === targetId && targetSource === 'texts' ? customProps : {};

    if (!filterActive || text.key === targetId || activeTf === targetId) {
      return /*#__PURE__*/_react.default.createElement(_Text.default, _extends({
        key: text.key,
        objectKey: text.key,
        highlightColor: highlightColor,
        ref: text.key === targetId ? targetRef : null
      }, textProps));
    }
  }));
});
var _default = Tree;
exports.default = _default;