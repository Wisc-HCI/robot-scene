"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zustand = _interopRequireDefault(require("zustand"));

var _immer = _interopRequireDefault(require("immer"));

var _SceneSlice = require("./SceneSlice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var immer = function immer(config) {
  return function (set, get, api) {
    return config(function (fn) {
      return set((0, _immer.default)(fn));
    }, get, api);
  };
};

var useSceneStore = (0, _zustand.default)(immer(_SceneSlice.SceneSlice));
var _default = useSceneStore;
exports.default = _default;