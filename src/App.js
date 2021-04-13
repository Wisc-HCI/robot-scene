import './App.css';
import RobotScene from './RobotScene';

export default function App() {
  // I assume this matches the form from a tf listener with roslib or is trival to produce
  // What is not clear to me is if you are creating the tf tree relative to some
  // base (app) frame such that walking the tree is unnecessary.

  // materials = useLoader(MTLLoader , "/ph_medium.mtl");
  //const object = useLoader(OBJLoader, "/ph_medium.obj");
  // materials.preload();

  let tftree = {
    world: {
      translation: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 }
    },
    other1: {
      translation: { x: 1, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 }
    },
    other2: {
      translation: { x: -2, y: 0, z: 2 },
      rotation: { w: 0.525322, x: 0.8509035, y: 0, z: 0 }
    },
    other3: {
      translation: { x: 2, y: 0, z: 0 },
      rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 }
    }
  };

  // Are we still using some kind of URDF parser on the frontend
  // or can we assume the backend coalesces all markers into this form first?

  let data = [
    {
      type: "cube",
      name: "My Cube",
      frame: "world",
      position: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 255, g: 50, b: 10, a: 0.75 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      highlighted: false
    },
    {
      type: "sphere",
      name: "My Sphere",
      frame: "world",
      position: { x: 0, y: 2, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 255, g: 255, b: 70, a: 0.25 },
      scale: { x: 1, y: 2, z: 1 },
      highlighted: false
    },
    // See here about rotating the cylinder to match  the representation from ROS:
    // https://github.com/RobotWebTools/ros3djs/blob/develop/src/markers/Marker.js
    {
      type: "cylinder",
      name: "My Cylinder",
      frame: "other2",
      position: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 10, g: 200, b: 235, a: 0.5 },
      scale: { x: 1, y: 1, z: 1 },
      highlighted: false
    },
    {
      type: "arrow",
      name: "My Arrow",
      frame: "other1",
      position: { x: 1, y: 0, z: 0 },
      rotation: { w: -0.604, x: -0.002, y: -0.756, z: 0.252 },
      color: { r: 255, g: 70, b: 250, a: 0.5 },
      scale: { x: 3, y: 1, z: 3 },
      highlighted: false
    },
    {
      type: "arrow",
      name: "My Arrow",
      frame: "other3",
      position: { x: 0, y: 0, z: 0 },
      rotation: { w: 1, x: 0, y: 0, z: 0 },
      color: { r: 255, g: 70, b: 250, a: 0.5 },
      scale: { x: 3, y: 1, z: 3 },
      highlighted: false
    },
    // {
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
  // const object = useLoader(OBJLoader, "/ph_medium.obj");

  return (
    <div
      className="App"
      style={{ height: "100vh", width: "100vw", padding: 0 }}
    >
      <RobotScene content={data} tfTree={tftree} displayTfs displayGrid />
    </div>
  );
}
