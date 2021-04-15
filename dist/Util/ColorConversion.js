"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbToHex = exports.componentToHex = void 0;

var componentToHex = function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

exports.componentToHex = componentToHex;

var rgbToHex = function rgbToHex(color) {
  return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
};

exports.rgbToHex = rgbToHex;