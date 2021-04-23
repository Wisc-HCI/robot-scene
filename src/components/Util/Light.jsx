import React from 'react';

export const AmbientLight = React.forwardRef((props, ref) => {
  return <ambientLight ref={ref} {...props} />;
});

export const PointLight = React.forwardRef((props, ref) => {
  return <pointLight ref={ref} {...props} />;
});

export const DirectionalLight = React.forwardRef((props, ref) => {
  return <directionalLight ref={ref} {...props} />;
});
