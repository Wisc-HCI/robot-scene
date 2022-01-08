"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WireframeMaterial = exports.RimLightMaterial = exports.MaterialMaker = exports.GhostMaterial = void 0;

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
  var vertexShader = "\n\t\tvarying vec3\tvVertexWorldPosition;\n\t\tvarying vec3\tvVertexNormal;\n\n\t\t// varying vec4\tvFragColor;\n\n\t\tvoid main(){\n\t\t\tvVertexNormal\t= normalize(normalMatrix * normal);\n\n\t\t\tvVertexWorldPosition\t= (modelMatrix * vec4(position, 1.0)).xyz;\n\n\t\t\t// set gl_Position\n\t\t\tgl_Position\t= projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\t\t}";
  var fragmentShader = "\n\t\tuniform vec3\tglowColor;\n\t\tuniform float\tcoeficient;\n\t\tuniform float\tpower;\n\n\t\tvarying vec3\tvVertexNormal;\n\t\tvarying vec3\tvVertexWorldPosition;\n\n\t\t// varying vec4\tvFragColor;\n\n\t\tvoid main(){\n\t\t\tvec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;\n\t\t\tvec3 viewCameraToVertex\t= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;\n\t\t\tviewCameraToVertex\t= normalize(viewCameraToVertex);\n\t\t\tfloat intensity\t\t= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);\n\t\t\tgl_FragColor\t\t= vec4(glowColor, intensity);\n\t\t}"; // create custom material from the shader code above
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

var RimLightMaterial = function RimLightMaterial(hex) {
  var color = new _three.Color(hex);
  var vertexShader = "\n\t// precision highp float;\n\t// attribute vec3 position;\n\t// attribute vec3 normal;\n\t// uniform mat3 normalMatrix;\n\t// uniform mat4 modelViewMatrix;\n\t// uniform mat4 projectionMatrix;\n\tvarying vec3 fNormal;\n\tvarying vec3 fPosition;\n\n\tvoid main()\n\t{\n\tfNormal = normalize(normalMatrix * normal);\n\tvec4 pos = modelViewMatrix * vec4(position, 1.0);\n\tfPosition = pos.xyz;\n\tgl_Position = projectionMatrix * pos;\n\t}";
  var fragmentShader = "\n\t// precision highp float;\n\n\tuniform vec3 color;\n\tuniform float start;\n\tuniform float end;\n\tuniform float alpha;\n\n\tvarying vec3 fPosition;\n\tvarying vec3 fNormal;\n\n\tvoid main()\n\t{    \n\t\n\tif(!gl_FrontFacing) {\n\t\tdiscard;\n\t\t}\n\tvec3 normal = normalize(fNormal);\n\tvec3 eye = normalize(-fPosition.xyz);\n\tfloat rim = smoothstep(start, end, 1.0 - dot(normal, eye));\n\tfloat value = clamp( rim, 0.0, 1.0 ) * alpha;\n\tgl_FragColor = vec4( value * color, length( value ) );\n\t}"; // create custom material from the shader code above
  //   that is within specially labeled script tags

  var material = new _three.ShaderMaterial({
    uniforms: {
      start: {
        type: "f",
        value: 0
      },
      end: {
        type: "f",
        value: 1
      },
      alpha: {
        type: "f",
        value: 1
      },
      color: {
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

exports.RimLightMaterial = RimLightMaterial;