import React, { Fragment } from "react";
import Wrapper from "./Wrapper";

function OBJObject(props) {
  const { data } = props;
  const { children } = data;

  return (
    <Fragment>
      {children.map((m, i) => (
        <Wrapper {...props} data={m} key={i} />
      ))}
    </Fragment>
  );
}

export default OBJObject;
