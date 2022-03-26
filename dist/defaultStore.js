"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDefaultSceneStore = exports.SceneSlice = exports.ImmerSceneSlice = void 0;

var _zustand = _interopRequireDefault(require("zustand"));

var _middleware = require("zustand/middleware");

var _immer = _interopRequireDefault(require("immer"));

var _Timer = require("./Util/Timer");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var immer = function immer(config) {
  return function (set, get, api) {
    return config(function (partial, replace) {
      var nextState = typeof partial === "function" ? (0, _immer.default)(partial) : partial;
      return set(nextState, replace);
    }, get, api);
  };
};

var SceneSlice = function SceneSlice(set, get) {
  return {
    clock: new _Timer.Timer(),
    items: {},
    tfs: {},
    hulls: {},
    lines: {},
    texts: {},
    onMove: function onMove(id, source, worldTransform, localTransform) {
      return set(function (state) {
        console.log(localTransform);
        state[source][id].position = _objectSpread({}, localTransform.position);
        state[source][id].rotation = localTransform.quaternion;
        state[source][id].rotation.x = localTransform.quaternion.x;
        state[source][id].rotation.y = localTransform.quaternion.y;
        state[source][id].rotation.z = localTransform.quaternion.z;
        state[source][id].rotation.w = localTransform.quaternion.w;
        state[source][id].scale = _objectSpread({}, localTransform.scale);
      });
    },
    onClick: function onClick(id, hidden, event) {
      if (!hidden) {
        console.log("id: ".concat(id, " clicked!"));
      }

      if (get().items[id] && !hidden) {
        event.stopPropagation();
      }
    },
    onPointerOver: function onPointerOver(id, hidden, event) {// console.log(`id: ${id} hovered!`)
    },
    onPointerOut: function onPointerOut(id, hidden, event) {// console.log(`id: ${id} not hovered!`)
    },
    pause: function pause() {
      return set(function (state) {
        // state.clock.enableFixedDelta();
        // state.clock.setFixedDelta(0);
        state.clock.setTimescale(0);
      });
    },
    play: function play(speed) {
      return set(function (state) {
        // state.clock.disableFixedDelta();
        state.clock.setTimescale(speed ? speed : 1);
      });
    },
    reset: function reset(time) {
      return set(function (state) {
        console.log("setting time to ".concat(time));
        state.clock._elapsed = time ? time * 1000 : 0;
      });
    },
    // setClockTime: () => set(state=>{
    //     state.clock._elapsed
    // }),
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
    clearHulls: function clearHulls() {
      return set(function (_) {
        return {
          hulls: {}
        };
      });
    },
    clearTexts: function clearTexts() {
      return set(function (_) {
        return {
          texts: {}
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
    setHulls: function setHulls(hulls) {
      return set(function (_) {
        return {
          hulls: hulls
        };
      });
    },
    setTexts: function setTexts(texts) {
      return set(function (_) {
        return {
          texts: texts
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
    removeHull: function removeHull(key) {
      return set(function (state) {
        delete state.hulls[key];
      });
    },
    removeText: function removeText(key) {
      return set(function (state) {
        delete state.texts[key];
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
    setHull: function setHull(key, hull) {
      return set(function (state) {
        state.hulls[key] = hull;
      });
    },
    setText: function setText(key, text) {
      return set(function (state) {
        state.texts[key] = text;
      });
    },
    setProperty: function setProperty(path, value) {
      return set(function (state) {
        _lodash.default.set(state, path, value);
      });
    }
  };
};

exports.SceneSlice = SceneSlice;
var ImmerSceneSlice = immer((0, _middleware.subscribeWithSelector)(SceneSlice));
exports.ImmerSceneSlice = ImmerSceneSlice;
var useDefaultSceneStore = (0, _zustand.default)(ImmerSceneSlice);
exports.useDefaultSceneStore = useDefaultSceneStore;