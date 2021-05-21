"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zustand = _interopRequireDefault(require("zustand"));

var _immer = _interopRequireDefault(require("immer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var immer = function immer(config) {
  return function (set, get, api) {
    return config(function (fn) {
      return set((0, _immer.default)(fn));
    }, get, api);
  };
};

var store = function store(set) {
  var _ref;

  return _ref = {
    items: {},
    lines: {},
    tfs: {},
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
        state.items[key] = item;
      });
    },
    setLine: function setLine(key, line) {
      return set(function (state) {
        state.lines[key] = line;
      });
    },
    setTf: function setTf(key, tf) {
      return set(function (state) {
        state.tfs[key] = tf;
      });
    },
    // Item mutation
    setItemName: function setItemName(key, name) {
      return set(function (state) {
        state.items[key].name = name;
      });
    },
    setItemPosition: function setItemPosition(key, x, y, z) {
      return set(function (state) {
        state.items[key].position = {
          x: x,
          y: y,
          z: z
        };
      });
    },
    setItemRotation: function setItemRotation(key, w, x, y, z) {
      return set(function (state) {
        state.items[key].rotation = {
          w: w,
          x: x,
          y: y,
          z: z
        };
      });
    },
    setItemColor: function setItemColor(key, w, x, y, z) {
      return set(function (state) {
        state.items[key].rotation = {
          w: w,
          x: x,
          y: y,
          z: z
        };
      });
    },
    setItemScale: function setItemScale(key, x, y, z) {
      return set(function (state) {
        state.items[key].scale = {
          x: x,
          y: y,
          z: z
        };
      });
    },
    setItemHighlighted: function setItemHighlighted(key, value) {
      return set(function (state) {
        state.items[key].highlighted = value;
      });
    },
    setItemEditMode: function setItemEditMode(key, value) {
      return set(function (state) {
        state.items[key].editMode = value;
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
    setItemOnTranslate: function setItemOnTranslate(key, fn) {
      return set(function (state) {
        state.items[key].onTranslate = fn;
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
  }), _defineProperty(_ref, "setTfTranslation", function setTfTranslation(key, x, y, z) {
    return set(function (state) {
      state.tfs[key].translation = {
        x: x,
        y: y,
        z: z
      };
    });
  }), _defineProperty(_ref, "setTfRotation", function setTfRotation(key, w, x, y, z) {
    return set(function (state) {
      state.tfs[key].rotation = {
        w: w,
        x: x,
        y: y,
        z: z
      };
    });
  }), _ref;
};

var useSceneStore = (0, _zustand.default)(immer(store));
var _default = useSceneStore;
exports.default = _default;