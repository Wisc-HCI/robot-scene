"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeshType = MeshType;
exports.MeshLoaderLookup = MeshLoaderLookup;

var _OBJLoader = require("three/examples/jsm/loaders/OBJLoader");

var _ColladaLoader = require("three/examples/jsm/loaders/ColladaLoader");

var _STLLoader = require("three/examples/jsm/loaders/STLLoader");

function MeshType(meshFilePath) {
  return meshFilePath.substr(meshFilePath.length - 3);
}

function MeshLoaderLookup(meshFilePath) {
  var type = MeshType(meshFilePath);
  var loader = undefined;

  switch (type) {
    case "stl":
      loader = _STLLoader.STLLoader;
      break;

    case "dae":
      loader = _ColladaLoader.ColladaLoader;
      break;

    case "obj":
      loader = _OBJLoader.OBJLoader;
      break;

    default:
      break;
  }

  return loader;
}