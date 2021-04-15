import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

export function MeshType(meshFilePath) {
  return meshFilePath.substr(meshFilePath.length - 3);
}

export function MeshLoaderLookup(meshFilePath) {
  const type = MeshType(meshFilePath);

  let loader = undefined;
  switch (type) {
    case "stl":
      loader = STLLoader;
      break;
    case "dae":
      loader = ColladaLoader;
      break;
    case "obj":
      loader = OBJLoader;
      break;
    default:
      break;
  }
  return loader;
}
