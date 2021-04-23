import { MeshStandardMaterial, MeshPhongMaterial, Color, NormalBlending, SrcAlphaFactor, OneMinusSrcAlphaFactor, ReverseSubtractEquation } from 'three';

export const MaterialMaker = (r, g, b, a) => {
  var color = new Color();
  color.setRGB(r/255, g/255, b/255);
  if (a <= 0.99) {
    return new MeshStandardMaterial({
      color : color.getHex(),
      opacity : a + 0.1,
      transparent : true,
      depthWrite : true,
      blendSrc : SrcAlphaFactor,
      blendDst : OneMinusSrcAlphaFactor,
      blendEquation : ReverseSubtractEquation,
      blending : NormalBlending
    });
  } else {
    return new MeshStandardMaterial({
      color : color.getHex(),
      opacity : a,
      blending : NormalBlending
    });
  }
};
