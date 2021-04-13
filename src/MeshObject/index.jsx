import React, { Fragment } from "react";

import { useLoader } from "@react-three/fiber";
import { MeshLoaderLookup, MeshType } from "../Util/MeshLoader";
import STLObject from "./STLObject";
import DAEObject from "./DAEObject";
import OBJObject from "./OBJObject";

function MeshObject(props) {
  const { path } = props;

  const fullPath = "./meshes" + path;
  const type = MeshType(fullPath);
  const data = useLoader(MeshLoaderLookup(fullPath), fullPath);

  let meshes;
  switch (type) {
    case "stl":
      meshes = <STLObject {...props} data={data} />;
      break;
    case "dae":
      meshes = <DAEObject {...props} data={data} />;
      break;
    case "obj":
      meshes = <OBJObject {...props} data={data} />;
      break;
    default:
      meshes = null;
      break;
  }

  return <Fragment>{meshes}</Fragment>;
}

export default MeshObject;
