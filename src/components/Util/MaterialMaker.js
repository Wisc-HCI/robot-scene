import { ShaderMaterial, MeshBasicMaterial, MeshPhysicalMaterial, MeshStandardMaterial,
         Color, NormalBlending, AdditiveBlending, SrcAlphaFactor, OneMinusSrcAlphaFactor,
         ReverseSubtractEquation } from 'three';
import { extend } from '@react-three/fiber';
		 

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

class ReflectorMaterial extends MeshPhysicalMaterial {
  _tDiffuse
  _textureMatrix
  constructor(parameters = {}) {
    super(parameters)
    this.setValues(parameters)
    this._tDiffuse = { value: null }
    this._textureMatrix = { value: null }
  }

  onBeforeCompile(shader) {
    shader.uniforms.tDiffuse = this._tDiffuse
    shader.uniforms.textureMatrix = this._textureMatrix

    shader.vertexShader = `
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
     
      ${shader.vertexShader}
    `
    shader.vertexShader = shader.vertexShader.replace(
      '#include <project_vertex>',
      `
        #include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        `
    )

    shader.fragmentShader = `
        uniform sampler2D tDiffuse;
        varying vec4 my_vUv;
        ${shader.fragmentShader}
    `
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <map_fragment>',
      `
        #include <map_fragment>
        vec3 coord = my_vUv.xyz / my_vUv.w;
        vec4 base = sRGBToLinear(texture2DProj( tDiffuse, my_vUv ));
        diffuseColor.rgb += 1.0 * base.rgb;
      `
    )
  }
  get tDiffuse() {
    return this._tDiffuse.value
  }
  set tDiffuse(v) {
    this._tDiffuse.value = v
  }
  get textureMatrix() {
    return this._textureMatrix.value
  }
  set textureMatrix(v) {
    this._textureMatrix.value = v
  }
}

extend({ ReflectorMaterial })
