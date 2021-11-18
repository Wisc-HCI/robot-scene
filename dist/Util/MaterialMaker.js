"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WireframeMaterial = exports.MaterialMaker = exports.GhostMaterial = void 0;

var _three = require("three");

var MaterialMaker = function MaterialMaker(r, g, b, a) {
  var color = new _three.Color();
  color.setRGB(r / 255, g / 255, b / 255);

  if (a <= 0.99) {
    return new _three.MeshStandardMaterial({
      color: color.getHex(),
      opacity: a + 0.1,
      transparent: true,
      depthWrite: true,
      blendSrc: _three.SrcAlphaFactor,
      blendDst: _three.OneMinusSrcAlphaFactor,
      blendEquation: _three.ReverseSubtractEquation,
      blending: _three.NormalBlending
    });
  } else {
    return new _three.MeshStandardMaterial({
      color: color.getHex(),
      opacity: a,
      blending: _three.NormalBlending
    });
  }
};

exports.MaterialMaker = MaterialMaker;

var WireframeMaterial = function WireframeMaterial(r, g, b) {
  var color = new _three.Color();
  color.setRGB(r / 255, g / 255, b / 255);
  return new _three.MeshStandardMaterial({
    color: color.getHex(),
    wireframe: false,
    depthTest: false,
    depthWrite: false,
    transparent: true
  });
};

exports.WireframeMaterial = WireframeMaterial;

var GhostMaterial = function GhostMaterial(hex) {
  var color = new _three.Color(hex);
  var vertexShader = ['varying vec3	vVertexWorldPosition;', 'varying vec3	vVertexNormal;', 'varying vec4	vFragColor;', 'void main(){', '	vVertexNormal	= normalize(normalMatrix * normal);', '	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;', '	// set gl_Position', '	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);', '}'].join('\n');
  var fragmentShader = ['uniform vec3	glowColor;', 'uniform float	coeficient;', 'uniform float	power;', 'varying vec3	vVertexNormal;', 'varying vec3	vVertexWorldPosition;', 'varying vec4	vFragColor;', 'void main(){', '	vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;', '	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;', '	viewCameraToVertex	= normalize(viewCameraToVertex);', '	float intensity		= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);', '	gl_FragColor		= vec4(glowColor, intensity);', '}'].join('\n'); // create custom material from the shader code above
  //   that is within specially labeled script tags

  var material = new _three.ShaderMaterial({
    uniforms: {
      coeficient: {
        type: "f",
        value: 1.5
      },
      power: {
        type: "f",
        value: 3
      },
      glowColor: {
        type: "c",
        value: color
      }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    //blending	: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    depthTest: false
  });
  return material;
};

exports.GhostMaterial = GhostMaterial;