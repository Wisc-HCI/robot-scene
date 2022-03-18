"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDefaultSceneStore = exports.SceneSlice = exports.ImmerSceneSlice = void 0;

var _zustand = _interopRequireDefault(require("zustand"));

var _middleware = require("zustand/middleware");

var _immer = _interopRequireDefault(require("immer"));

var _Timer = require("./Util/Timer");

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
    onMove: function onMove(itemId, worldTransform, localTransform) {
      return set(function (state) {
        console.log(localTransform);
        state.items[itemId].position = _objectSpread({}, localTransform.position);
        state.items[itemId].rotation = localTransform.quaternion;
        state.items[itemId].rotation.x = localTransform.quaternion.x;
        state.items[itemId].rotation.y = localTransform.quaternion.y;
        state.items[itemId].rotation.z = localTransform.quaternion.z;
        state.items[itemId].rotation.w = localTransform.quaternion.w;
        state.items[itemId].scale = _objectSpread({}, localTransform.scale);
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
    // Item mutation
    setItemName: function setItemName(key, name) {
      return set(function (state) {
        state.items[key].name = name;
      });
    },
    setItemShowName: function setItemShowName(key, showName) {
      return set(function (state) {
        state.items[key].showName = showName;
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
        state.items[key].color = color;
      });
    },
    setItemWireframe: function setItemWireframe(key, wireframe) {
      return set(function (state) {
        state.items[key].wireframe = wireframe;
      });
    },
    setItemHighlighted: function setItemHighlighted(key, value) {
      return set(function (state) {
        state.items[key].highlighted = value;
      });
    },
    setItemHidden: function setItemHidden(key, value) {
      return set(function (state) {
        state.items[key].hidden = value;
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
    setLineWidth: function setLineWidth(key, width) {
      return set(function (state) {
        state.lines[key].width = width;
      });
    },
    setLineVertices: function setLineVertices(key, vertices) {
      return set(function (state) {
        state.items[key].vertices = vertices;
      });
    },
    addLineVertex: function addLineVertex(key, vertex) {
      return set(function (state) {
        state.lines[key].vertices.push(vertex);
      });
    },
    setLineVertex: function setLineVertex(key, index, vertex) {
      return set(function (state) {
        state.lines[key].vertices[index] = vertex;
      });
    },
    setLineHidden: function setLineHidden(key, value) {
      return set(function (state) {
        state.lines[key].hidden = value;
      });
    },
    removeLineVertex: function removeLineVertex(key, index) {
      return set(function (state) {
        state.lines[key].vertices.splice(index, 1);
      });
    },
    // TF mutation
    setTfTranslation: function setTfTranslation(key, translation) {
      return set(function (state) {
        state.tfs[key].translation = translation;
      });
    },
    setTfRotation: function setTfRotation(key, rotation) {
      return set(function (state) {
        state.tfs[key].rotation = rotation;
      });
    },
    // Hull mutation
    setHullName: function setHullName(key, name) {
      return set(function (state) {
        state.hulls[key].name = name;
      });
    },
    setHullVertices: function setHullVertices(key, vertices) {
      return set(function (state) {
        state.hulls[key].vertices = vertices;
      });
    },
    addHullVertex: function addHullVertex(key, vertex) {
      return set(function (state) {
        state.hulls[key].vertices.push(vertex);
      });
    },
    setHullVertex: function setHullVertex(key, index, vertex) {
      return set(function (state) {
        state.hulls[key].vertices[index] = vertex;
      });
    },
    removeHullVertex: function removeHullVertex(key, index) {
      return set(function (state) {
        state.hulls[key].vertices.splice(index, 1);
      });
    },
    setHullColor: function setHullColor(key, color) {
      return set(function (state) {
        state.hulls[key].scale = color;
      });
    },
    setHullWireframe: function setHullWireframe(key, wireframe) {
      return set(function (state) {
        state.hulls[key].wireframe = wireframe;
      });
    },
    setHullHighlighted: function setHullHighlighted(key, value) {
      return set(function (state) {
        state.hulls[key].highlighted = value;
      });
    },
    setHullHidden: function setHullHidden(key, value) {
      return set(function (state) {
        state.hulls[key].hidden = value;
      });
    },
    setHullOnClick: function setHullOnClick(key, fn) {
      return set(function (state) {
        state.hulls[key].onClick = fn;
      });
    },
    setHullOnPointerOver: function setHullOnPointerOver(key, fn) {
      return set(function (state) {
        state.hulls[key].onPointerOver = fn;
      });
    },
    setHullOnPointerOut: function setHullOnPointerOut(key, fn) {
      return set(function (state) {
        state.hulls[key].onPointerOut = fn;
      });
    }
  };
};

exports.SceneSlice = SceneSlice;
var ImmerSceneSlice = immer((0, _middleware.subscribeWithSelector)(SceneSlice));
exports.ImmerSceneSlice = ImmerSceneSlice;
var useDefaultSceneStore = (0, _zustand.default)(ImmerSceneSlice);
exports.useDefaultSceneStore = useDefaultSceneStore;