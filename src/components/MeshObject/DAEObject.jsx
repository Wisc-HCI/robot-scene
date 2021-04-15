import React, { Fragment } from "react";

import { Mesh } from "three";
import Wrapper from "./Wrapper";

function DAEObject(props) {
  const { data } = props;
  const { nodes } = data;

  // It might be better to explore a group route?
  const meshes = Object.keys(nodes)
    .filter((key) => {
      return nodes[key] instanceof Mesh;
    })
    .map((key) => {
      return nodes[key];
    });

  return (
    <Fragment>
      {meshes.map((m, i) => (
        <Wrapper {...props} data={m} key={i} />
      ))}
    </Fragment>
  );
}

export default DAEObject;
