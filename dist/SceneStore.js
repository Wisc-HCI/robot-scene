"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zustand = _interopRequireDefault(require("zustand"));

var _immer = _interopRequireDefault(require("immer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var immer = function immer(config) {
  return function (set, get, api) {
    return config(function (fn) {
      return set((0, _immer.default)(fn));
    }, get, api);
  };
};

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
      return set(function (_) {
        return {
          items: items
        };
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
      return set(function (state) {
        return {
          items: _objectSpread(_objectSpread({}, state.items), {}, _defineProperty({}, key, item))
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
      return set(function (state) {
        state.items[key].name = name;
      });
    },
    setItemPosition: function setItemPosition(key, position) {
      return set(function (state) {
        state.items[key].position = position;
      });
    },
    setItemRotation: function setItemRotation(key, rotation) {
      return set(function (state) {
        state.items[key].rotation = rotation;
      });
    },
    setItemScale: function setItemScale(key, scale) {
      return set(function (state) {
        state.items[key].scale = scale;
      });
    },
    setItemColor: function setItemColor(key, color) {
      return set(function (state) {
        state.items[key].scale = color;
      });
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
      return set(function (state) {
        state.items[key].transformMode = mode;
      });
    },
    setItemOnMove: function setItemOnMove(key, fn) {
      return set(function (state) {
        state.items[key].onMove = fn;
      });
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
  }), _ref;
};

var useSceneStore = (0, _zustand.default)(immer(store));
var _default = useSceneStore;
exports.default = _default;