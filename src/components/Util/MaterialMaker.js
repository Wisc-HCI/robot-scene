import { ShaderMaterial, MeshBasicMaterial, MeshStandardMaterial, MeshPhongMaterial,
         Color, NormalBlending, AdditiveBlending, SrcAlphaFactor, OneMinusSrcAlphaFactor,
         ReverseSubtractEquation } from 'three';

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

export const GlowMaterial = (r, g, b) => {
  var color = new Color();
  color.setRGB(r/255, g/255, b/255);
  var vertexShader	= [
		'varying vec3	vVertexWorldPosition;',
		'varying vec3	vVertexNormal;',

		'varying vec4	vFragColor;',

		'void main(){',
		'	vVertexNormal	= normalize(normalMatrix * normal);',

		'	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;',

		'	// set gl_Position',
		'	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
		'}',

		].join('\n')
	var fragmentShader	= [
		'uniform vec3	glowColor;',
		'uniform float	coeficient;',
		'uniform float	power;',

		'varying vec3	vVertexNormal;',
		'varying vec3	vVertexWorldPosition;',

		'varying vec4	vFragColor;',

		'void main(){',
		'	vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;',
		'	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;',
		'	viewCameraToVertex	= normalize(viewCameraToVertex);',
		'	float intensity		= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);',
		'	gl_FragColor		= vec4(glowColor, intensity);',
		'}',
	].join('\n')

	// create custom material from the shader code above
	//   that is within specially labeled script tags
	var material	= new ShaderMaterial({
		uniforms: {
			coeficient	: {
				type	: "f",
				value	: 1.5
			},
			power		: {
				type	: "f",
				value	: 3
			},
			glowColor	: {
				type	: "c",
				value	: color
			},
		},
		vertexShader	: vertexShader,
		fragmentShader	: fragmentShader,
		//blending	: THREE.AdditiveBlending,
		transparent	: true,
		depthWrite	: false,
	});
	return material
}

export const GhostMaterial = (r, g, b) => {
  var color = new Color();
  color.setRGB(r/255, g/255, b/255);
  return new MeshBasicMaterial( { color: color, transparent: true, blending: AdditiveBlending } )
}
