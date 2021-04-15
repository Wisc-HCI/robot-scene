"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RobotScene = RobotScene;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fiber = require("@react-three/fiber");

var _resizeObserver = require("@juggle/resize-observer");

var _CameraControls = _interopRequireDefault(require("./CameraControls"));

var _SceneObject = _interopRequireDefault(require("./SceneObject"));

var _StandardMeshes = require("./Util/StandardMeshes");

var _FrameObject = _interopRequireDefault(require("./FrameObject"));

var _MeshObject = _interopRequireDefault(require("./MeshObject"));

var _NaoHead = _interopRequireDefault(require("./MeshObject/NaoHead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import NaoHeadMesh from "./MeshObject/meshes/NewNaoHead.glb";
function RobotScene(props) {
  // For the objects in props.content, render the objects.
  // Those should be in the suspense element.
  var displayTfs = props.displayTfs,
      displayGrid = props.displayGrid,
      isPolar = props.isPolar;
  var backgroundColor = props.backgroundColor,
      content = props.content,
      tfTree = props.tfTree;
  backgroundColor = backgroundColor === undefined ? "#303030" : backgroundColor;
  content = content === undefined ? [] : content;
  tfTree = tfTree === undefined ? {
    world: {
      translation: {
        x: 0,
        y: 0,
        z: 0
      },
      rotation: {
        w: 1,
        x: 0,
        y: 0,
        z: 0
      }
    }
  } : tfTree; // TODO: apply the transforms to the objects
  // based on props.tftree
  // (feel free to structure tftree in any easy/obvious way)

  return /*#__PURE__*/_react.default.createElement(_fiber.Canvas, {
    style: {
      background: backgroundColor
    },
    resize: {
      polyfill: _resizeObserver.ResizeObserver
    }
  }, /*#__PURE__*/_react.default.createElement(_CameraControls.default, null), /*#__PURE__*/_react.default.createElement("ambientLight", null), /*#__PURE__*/_react.default.createElement("pointLight", {
    position: [10, 10, 10]
  }), /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: null
  }, /*#__PURE__*/_react.default.createElement(_NaoHead.default, null), content.map(function (objData, i) {
    if (_StandardMeshes.STANDARD_MESHES.indexOf(objData.type) > -1) {
      return /*#__PURE__*/_react.default.createElement(_SceneObject.default, {
        key: i,
        type: objData.type,
        scale: objData.scale,
        position: objData.position,
        rotation: objData.rotation,
        color: objData.color,
        transform: tfTree[objData.frame]
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_MeshObject.default, {
        key: i,
        path: objData.path,
        scale: objData.scale,
        position: objData.position,
        rotation: objData.rotation,
        color: objData.color,
        transform: tfTree[objData.frame]
      });
    }
  }), displayTfs ? Object.keys(tfTree).map(function (frame, i) {
    return /*#__PURE__*/_react.default.createElement(_FrameObject.default, {
      key: i,
      tmp: frame,
      transform: tfTree[frame]
    });
  }) : null), displayGrid ? isPolar ? /*#__PURE__*/_react.default.createElement("polarGridHelper", {
    args: [10, 16, 8, 64, "white", "gray"]
  }) : /*#__PURE__*/_react.default.createElement("gridHelper", {
    args: [20, 20, "white", "gray"]
  }) : null);
}

var tree = {
  world: {
    translation: {
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      w: 1,
      x: 0,
      y: 0,
      z: 0
    }
  },
  other1: {
    translation: {
      x: 1,
      y: 0,
      z: 0
    },
    rotation: {
      w: 1,
      x: 0,
      y: 0,
      z: 0
    }
  },
  other2: {
    translation: {
      x: -2,
      y: 0,
      z: 2
    },
    rotation: {
      w: 0.525322,
      x: 0.8509035,
      y: 0,
      z: 0
    }
  },
  other3: {
    translation: {
      x: 2,
      y: 0,
      z: 0
    },
    rotation: {
      w: -0.604,
      x: -0.002,
      y: -0.756,
      z: 0.252
    }
  }
};
var objects = [{
  type: "cube",
  name: "My Cube",
  frame: "world",
  position: {
    x: 0,
    y: 0,
    z: 0
  },
  rotation: {
    w: 1,
    x: 0,
    y: 0,
    z: 0
  },
  color: {
    r: 255,
    g: 50,
    b: 10,
    a: 0.75
  },
  scale: {
    x: 0.5,
    y: 0.5,
    z: 0.5
  },
  highlighted: false
}, {
  type: "sphere",
  name: "My Sphere",
  frame: "world",
  position: {
    x: 0,
    y: 2,
    z: 0
  },
  rotation: {
    w: 1,
    x: 0,
    y: 0,
    z: 0
  },
  color: {
    r: 255,
    g: 255,
    b: 70,
    a: 0.25
  },
  scale: {
    x: 1,
    y: 2,
    z: 1
  },
  highlighted: false
}, // See here about rotating the cylinder to match  the representation from ROS:
// https://github.com/RobotWebTools/ros3djs/blob/develop/src/markers/Marker.js
{
  type: "cylinder",
  name: "My Cylinder",
  frame: "other2",
  position: {
    x: 0,
    y: 0,
    z: 0
  },
  rotation: {
    w: 1,
    x: 0,
    y: 0,
    z: 0
  },
  color: {
    r: 10,
    g: 200,
    b: 235,
    a: 0.5
  },
  scale: {
    x: 1,
    y: 1,
    z: 1
  },
  highlighted: false
}, {
  type: "arrow",
  name: "My Arrow",
  frame: "other1",
  position: {
    x: 1,
    y: 0,
    z: 0
  },
  rotation: {
    w: -0.604,
    x: -0.002,
    y: -0.756,
    z: 0.252
  },
  color: {
    r: 255,
    g: 70,
    b: 250,
    a: 0.5
  },
  scale: {
    x: 3,
    y: 1,
    z: 3
  },
  highlighted: false
}, {
  type: "arrow",
  name: "My Arrow",
  frame: "other3",
  position: {
    x: 0,
    y: 0,
    z: 0
  },
  rotation: {
    w: 1,
    x: 0,
    y: 0,
    z: 0
  },
  color: {
    r: 255,
    g: 70,
    b: 250,
    a: 0.5
  },
  scale: {
    x: 3,
    y: 1,
    z: 3
  },
  highlighted: false
} // {
//   type: "mesh",
//   path: "/HeadPitch.dae",
//   name: "Nao Head",
//   frame: "world",
//   position: { x: 0, y: -1, z: 0 },
//   rotation: { w: 1, x: 0, y: 0, z: 0 },
//   scale: { x: 0.01, y: 0.01, z: 0.01 },
//   highlighted: true
// },
// {
//   type: "mesh",
//   path: "/test.stl",
//   name: "test",
//   frame: "world",
//   position: { x: 0, y: 0, z: -3 },
//   rotation: { w: 1, x: 0, y: 0, z: 0 },
//   scale: { x: 1, y: 1, z: 1 },
//   color: { r: 255, g: 0, b: 255, a: 255 }
// },
// {
//   type: "mesh",
//   path: "/LHipPitch_0.10.stl",
//   name: "Nao Hip",
//   frame: "world",
//   position: { x: 0, y: 2, z: 1 },
//   rotation: { w: 1, x: 0, y: 0, z: 0 },
//   color: { r: 255, g: 25, b: 25, a: 255 }, // I think you can override STL Colors?
//   scale: { x: 1, y: 1, z: 1 },
//   highlighted: false
// },
// {
//   type: "mesh",
//   path: "/LHipYawPitch_0.10.stl",
//   name: "Nao Hip",
//   frame: "world",
//   position: { x: 0, y: 5, z: 1 },
//   rotation: { w: 1, x: 0, y: 0, z: 0 },
//   scale: { x: 1, y: 1, z: 1 },
//   highlighted: false
// },
// {
//   type: "mesh",
//   path: "/wheel.obj", // Not sure about the mtl files. If you could also load the textures, that would be great
//   name: "Eve Wheel",
//   frame: "world",
//   position: { x: 2, y: 2, z: 0 },
//   rotation: { w: 1, x: 0, y: 0, z: 0 },
//   color: { r: 1, g: 0.5, b: 0.25, a: 0.5 },
//   scale: { x: 1, y: 1, z: 1 },
//   highlighted: false
// }
];
RobotScene.propTypes = {
  content: _propTypes.default.array,
  tfTree: _propTypes.default.object,
  displayTfs: _propTypes.default.bool,
  displayGrid: _propTypes.default.bool,
  isPolar: _propTypes.default.bool
};
RobotScene.defaultProps = {
  content: objects,
  tfTree: tree,
  displayTfs: true,
  displayGrid: true,
  isPolar: false
};