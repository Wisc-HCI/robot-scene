import { ShaderMaterial, MeshStandardMaterial, BackSide, UniformsLib, UniformsUtils,
         Color, NormalBlending, SrcAlphaFactor, OneMinusSrcAlphaFactor,
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

export const WireframeMaterial = (r, g, b) => {
	var color = new Color();
  	color.setRGB(r/255, g/255, b/255);
	
	return new MeshStandardMaterial({
		color: color.getHex(),
		wireframe: false,
		depthTest: false,
		depthWrite: false,
		transparent: true
	})
}

export const GhostMaterial = (hex) => {
  var color = new Color(hex);
  var vertexShader	= `
		varying vec3	vVertexWorldPosition;
		varying vec3	vVertexNormal;

		// varying vec4	vFragColor;

		void main(){
			vVertexNormal	= normalize(normalMatrix * normal);

			vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;

			// set gl_Position
			gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}`
	var fragmentShader	= `
		uniform vec3	glowColor;
		uniform float	coeficient;
		uniform float	power;

		varying vec3	vVertexNormal;
		varying vec3	vVertexWorldPosition;

		// varying vec4	vFragColor;

		void main(){
			vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;
			vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;
			viewCameraToVertex	= normalize(viewCameraToVertex);
			float intensity		= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);
			gl_FragColor		= vec4(glowColor, intensity);
		}`

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
		depthTest   : false
	});
	return material
}

export const RimLightMaterial = (hex) => {
	var color = new Color(hex);
	var vertexShader	= `
	// precision highp float;
	// attribute vec3 position;
	// attribute vec3 normal;
	// uniform mat3 normalMatrix;
	// uniform mat4 modelViewMatrix;
	// uniform mat4 projectionMatrix;
	varying vec3 fNormal;
	varying vec3 fPosition;

	void main()
	{
	fNormal = normalize(normalMatrix * normal);
	vec4 pos = modelViewMatrix * vec4(position, 1.0);
	fPosition = pos.xyz;
	gl_Position = projectionMatrix * pos;
	}`
	var fragmentShader	= `
	// precision highp float;

	uniform vec3 color;
	uniform float start;
	uniform float end;
	uniform float alpha;

	varying vec3 fPosition;
	varying vec3 fNormal;

	void main()
	{    
	
	if(!gl_FrontFacing) {
		discard;
		}
	vec3 normal = normalize(fNormal);
	vec3 eye = normalize(-fPosition.xyz);
	float rim = smoothstep(start, end, 1.0 - dot(normal, eye));
	float value = clamp( rim, 0.0, 1.0 ) * alpha;
	gl_FragColor = vec4( value * color, length( value ) );
	}`
  
	// create custom material from the shader code above
	//   that is within specially labeled script tags
	var material	= new ShaderMaterial({
		uniforms: {
			start	: {
				type	: "f",
				value	: 0
			},
			end	: {
				type	: "f",
				value	: 1
			},
			alpha	: {
				type	: "f",
				value	: 1
			},
			color	: {
				type	: "c",
				value	: color
			},
		},
		vertexShader	: vertexShader,
		fragmentShader	: fragmentShader,
		//blending	: THREE.AdditiveBlending,
		transparent	: true,
		depthWrite	: false,
		depthTest   : false
	});
	return material
  }
  

export const OutlineMaterial = (hex) => {
	const vertexShader = `
		#include <common>
		#include <uv_pars_vertex>
		#include <displacementmap_pars_vertex>
		#include <fog_pars_vertex>
		#include <morphtarget_pars_vertex>
		#include <skinning_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>
	
		uniform float outlineThickness;
	
		vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {
				float thickness = outlineThickness;
				const float ratio = 1.0; // TODO: support outline thickness ratio for each vertex
				vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );
				// NOTE: subtract pos2 from pos because BackSide objectNormal is negative
				vec4 norm = normalize( pos - pos2 );
				return pos + norm * thickness * pos.w * ratio;
		}
	
		void main() {
	
			#include <uv_vertex>
	
		  	#include <beginnormal_vertex>
			#include <morphnormal_vertex>
			#include <skinbase_vertex>
			#include <skinnormal_vertex>
	
		 	#include <begin_vertex>
			#include <morphtarget_vertex>
			#include <skinning_vertex>
			#include <displacementmap_vertex>
			#include <project_vertex>
	
		 	vec3 outlineNormal = - objectNormal; // the outline material is always rendered with BackSide
	
		 	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );
	
		 	#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>
	
		}
		`
	
	  const fragmentShader = `
		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>
	
		uniform vec3 outlineColor;
		uniform float outlineAlpha;
	
		void main() {
	
			#include <clipping_planes_fragment>
			#include <logdepthbuf_fragment>
	
			gl_FragColor = vec4( outlineColor, outlineAlpha );
	
			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>
	
		}
		`

		var color = new Color(hex);

		const uniformsOutline = {
			outlineThickness: { value: 0.005 },
			outlineColor: { value: [color.r, color.g, color.b] },
			outlineAlpha: { value: 1.0 },
		}

		return new ShaderMaterial({
			type: 'OutlineEffect',
			uniforms: UniformsUtils.merge([UniformsLib['fog'], UniformsLib['displacementmap'], uniformsOutline]),
			vertexShader,
			fragmentShader,
			side: BackSide,
			transparent	: true,
			depthWrite	: false,
			// depthTest   : false
		})
}