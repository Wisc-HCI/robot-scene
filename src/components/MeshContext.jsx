import React from "react";
import { createContext, useContext } from "react";
import { createGenericShape } from "./Util/Helpers";

const GENERIC_SHAPES = ["cube", "cylinder", "sphere", "capsule", "arrow"];

export const MeshContext = createContext();

export const useMesh = (item) => {
  const lookup = useContext(MeshContext);
  const value = lookup[item.shape];
  if (GENERIC_SHAPES.includes(item.shape)) {
    return createGenericShape(item);
  } else if (value && typeof value === 'function') {
    return value();
  } else {
    console.warn(
      `Shape not loaded: ${item.shape} (reading property 'shape' of item)`,
      item
    );
    return [];
  }
};

export const MeshProvider = ({ meshes, children }) => {
  return <MeshContext.Provider value={meshes}>{children}</MeshContext.Provider>;
};
