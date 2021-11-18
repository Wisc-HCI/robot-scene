"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectMap = objectMap;

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}