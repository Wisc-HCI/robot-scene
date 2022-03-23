"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SceneLine;

var _react = _interopRequireWildcard(require("react"));

var _drei = require("@react-three/drei");

var _SceneContext = require("./SceneContext");

var _three = require("three");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { extend } from '@react-three/fiber';
// import { MeshLine, MeshLineMaterial } from 'meshline'
// import { CatmullRomCurve3, vector3 } from 'three';
// import { Select } from '@react-three/postprocessing';
// extend({ MeshLine, MeshLineMaterial })
// const minVector = new Vector3(0,0,0);
// const maxVector = new Vector3(255,255,255);
var Segment = function Segment(_ref) {
  var v1 = _ref.v1,
      v2 = _ref.v2,
      color = _ref.color;
  console.log({
    v1: v1,
    v2: v2,
    color: color
  });
  var colorVal = new _three.Color(color.x / 255, color.y / 255, color.z / 255);
  return /*#__PURE__*/_react.default.createElement("mesh", null, /*#__PURE__*/_react.default.createElement("meshLine", {
    attach: "geometry",
    points: [v1, v2]
  }), /*#__PURE__*/_react.default.createElement("meshLineMaterial", {
    attach: "material",
    transparent: true,
    color: colorVal.getHex(),
    lineWidth: 0.03,
    opacity: 0.5
  }));
};

function SceneLine(props) {
  var lineKey = props.lineKey;

  var _useSceneStore = (0, _SceneContext.useSceneStore)((0, _react.useCallback)(function (state) {
    return {
      vertices: state.lines[lineKey].vertices,
      width: state.lines[lineKey].width,
      hidden: state.lines[lineKey].hidden
    };
  }, [lineKey])),
      vertices = _useSceneStore.vertices,
      width = _useSceneStore.width,
      hidden = _useSceneStore.hidden;

  if (vertices.length <= 1) {
    return null;
  } // const positionCurve = new CatmullRomCurve3(vertices.map(v=>new Vector3(v.position.x,v.position.y,v.position.z)))
  // const colorCurve = new CatmullRomCurve3(vertices.map(v=>new Vector3(v.color.r,v.color.g,v.color.b)))
  // const points = positionCurve.getPoints(vertices.length*10);
  // const colors = colorCurve.getPoints(vertices.length*10);
  // console.log(points)


  return (
    /*#__PURE__*/
    // <Select enabled={true}>
    //   {/* <mesh>
    //     <meshLine attach='geometry' points={points}/>
    //     <meshLineMaterial attach="material" transparent color={colors[100]} lineWidth={0.03} opacity={0.5}/>
    //   </mesh> */}
    //   {points.slice(0,points.length-1).map((_,i)=>(
    //     <Segment key={i} v1={points[i]} v2={points[i+1]} color={colors[i].clamp(minVector,maxVector)} lineWidth={1} transparent/>
    //   ))}
    // </Select>
    _react.default.createElement(_drei.Line, {
      visible: !hidden,
      points: vertices.map(function (vertex) {
        return [vertex.position.x, vertex.position.y, vertex.position.z];
      }),
      color: "white",
      vertexColors: vertices.map(function (vertex) {
        return [vertex.color.r / 255, vertex.color.g / 255, vertex.color.b / 255];
      }),
      lineWidth: width
    })
  );
}