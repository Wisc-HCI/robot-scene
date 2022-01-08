// import logo from './logo.svg';
// import Scene from './components/Scene';
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import cameraData from './camera_para.dat';
import hiroImage from './hiro.patt';
import './App.css';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  )
}

function App() {
  console.log(cameraData)
  return (
    <div className="App">
      <div style={{ height: '100vh', width: '100vw' }}>
        <ARCanvas
          cameraParametersUrl={cameraData}
          camera={{ up: [0, 1, 0]}}
        >
          <ambientLight />
          <pointLight position={[10, 10, 0]} intensity={10.0} />
          <ARMarker
            type="pattern"
            patternUrl={hiroImage}
            onMarkerFound={() => { console.log("Marker Found") }}>
            <Box />
            {/* <group rotation={[Math.PI / 2, 0, 0]} up={[0, 0, 1]}>
              <gridHelper args={[20, 20, `white`, `gray`]} />
            </group> */}
          </ARMarker>
        </ARCanvas>
      </div>

    </div>
  );
}

export default App;
