"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zustand = _interopRequireDefault(require("zustand"));

var _immer = _interopRequireDefault(require("immer"));

var _MeshConvert = require("./Util/MeshConvert");

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var store = function store(set, get) {
  var _ref;

  return _ref = {
    items: {},
    lines: {},
    tfs: {},
    controls: {},
    transforming: false,
    // Clearing Contents
    clearItems: function clearItems() {
      return set(function (_) {
        return {
          items: {}
        };
      });
    },
    clearLines: function clearLines() {
      return set(function (_) {
        return {
          lines: {}
        };
      });
    },
    clearTfs: function clearTfs() {
      return set(function (_) {
        return {
          tfs: {}
        };
      });
    },
    // Bulk Setting (This causes an entire re-render of the scene)
    setItems: function setItems(items) {
      set(function (_) {
        return {
          items: {}
        };
      });
      Object.keys(items).forEach(function (key) {
        return get().setItem(key, items[key]);
      });
    },
    setLines: function setLines(lines) {
      return set(function (_) {
        return {
          lines: lines
        };
      });
    },
    setTfs: function setTfs(tfs) {
      return set(function (_) {
        return {
          tfs: tfs
        };
      });
    },
    // Removal by key
    removeItem: function removeItem(key) {
      return set(function (state) {
        delete state.items[key];
      });
    },
    removeLine: function removeLine(key) {
      return set(function (state) {
        delete state.lines[key];
      });
    },
    removeTf: function removeTf(key) {
      return set(function (state) {
        delete state.tfs[key];
      });
    },
    // Adding items
    setItem: function setItem(key, item) {
      var _itemToGroupAndChildR = (0, _MeshConvert.itemToGroupAndChildRefs)(item),
          _itemToGroupAndChildR2 = _slicedToArray(_itemToGroupAndChildR, 2),
          group = _itemToGroupAndChildR2[0],
          childrenRefs = _itemToGroupAndChildR2[1];

      var ghostRef = ['translate', 'rotate', 'scale'].indexOf(item.transformMode) > -1 ? /*#__PURE__*/(0, _react.createRef)() : null;
      set(function (state) {
        return {
          items: _objectSpread(_objectSpread({}, state.items), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, item), {}, {
            group: group,
            childrenRefs: childrenRefs,
            ghostRef: ghostRef
          })))
        };
      });
    },
    setLine: function setLine(key, line) {
      return set(function (state) {
        return {
          lines: _objectSpread(_objectSpread({}, state.lines), {}, _defineProperty({}, key, line))
        };
      });
    },
    setTf: function setTf(key, tf) {
      return set(function (state) {
        return {
          tfs: _objectSpread(_objectSpread({}, state.tfs), {}, _defineProperty({}, key, tf))
        };
      });
    },
    // Item mutation
    setItemName: function setItemName(key, name) {
      return set((0, _immer.default)(function (state) {
        state.items[key].name = name;
      }));
    },
    setItemPosition: function setItemPosition(key, position) {
      return set((0, _immer.default)(function (state) {
        state.items[key].position = position;
      }));
    },
    setItemRotation: function setItemRotation(key, rotation) {
      return set(function (state) {
        state.items[key].rotation = rotation;
      });
    },
    setItemColor: function setItemColor(key, color) {
      return set(function (state) {
        // 'color' is either {r, g, b, a} or null
        // Changing the color requires re-generating the groups
        state.items[key].color = color;

        var _itemToGroupAndChildR3 = (0, _MeshConvert.itemToGroupAndChildRefs)(state.items[key]),
            _itemToGroupAndChildR4 = _slicedToArray(_itemToGroupAndChildR3, 2),
            group = _itemToGroupAndChildR4[0],
            childrenRefs = _itemToGroupAndChildR4[1];

        state.items[key] = _objectSpread(_objectSpread({}, state.items[key]), {}, {
          group: group,
          childrenRefs: childrenRefs
        });
      });
    },
    setItemScale: function setItemScale(key, scale) {
      return set((0, _immer.default)(function (state) {
        state.items[key].scale = scale;
      }));
    },
    setItemHighlighted: function setItemHighlighted(key, value) {
      return set(function (state) {
        state.items[key].highlighted = value;
      });
    },
    setItemOnClick: function setItemOnClick(key, fn) {
      return set(function (state) {
        state.items[key].onClick = fn;
      });
    },
    setItemOnPointerOver: function setItemOnPointerOver(key, fn) {
      return set(function (state) {
        state.items[key].onPointerOver = fn;
      });
    },
    setItemOnPointerOut: function setItemOnPointerOut(key, fn) {
      return set(function (state) {
        state.items[key].onPointerOut = fn;
      });
    },
    setItemTransformMode: function setItemTransformMode(key, mode) {
      return set((0, _immer.default)(function (state) {
        var ghostRef = ['translate', 'rotate', 'scale'].indexOf(mode) > -1 ? /*#__PURE__*/(0, _react.createRef)() : null;
        state.items[key].ghostRef = ghostRef;
        state.items[key].transformMode = mode;
      }));
    },
    setItemOnMove: function setItemOnMove(key, fn) {
      return set((0, _immer.default)(function (state) {
        state.items[key].onMove = fn;
      }));
    },
    // Line mutation
    setLineName: function setLineName(key, name) {
      return set(function (state) {
        state.lines[key].name = name;
      });
    },
    addLineVertex: function addLineVertex(key, vertex) {
      return set(function (state) {
        state.lines[key].vertices.push(vertex);
      });
    },
    removeLineVertex: function removeLineVertex(key) {
      return set(function (state) {
        state.lines[key].vertices.pop();
      });
    },
    setLineVertex: function setLineVertex(key, index, vertex) {
      return set(function (state) {
        state.lines[key].vertices[index] = vertex;
      });
    }
  }, _defineProperty(_ref, "removeLineVertex", function removeLineVertex(key, index) {
    return set(function (state) {
      state.lines[key].vertices.splice(index, 1);
    });
  }), _defineProperty(_ref, "setTfTranslation", function setTfTranslation(key, translation) {
    return set(function (state) {
      state.tfs[key].translation = translation;
    });
  }), _defineProperty(_ref, "setTfRotation", function setTfRotation(key, rotation) {
    return set(function (state) {
      state.tfs[key].rotation = rotation;
    });
  }), _defineProperty(_ref, "orbitControls", /*#__PURE__*/(0, _react.createRef)()), _ref;
};

var useSceneStore = (0, _zustand.default)(store);
var _default = useSceneStore;
exports.default = _default;