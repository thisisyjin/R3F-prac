import { Canvas } from "@react-three/fiber";
import SolarSystem from "./solarSystem/SolarSystem";

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{
          aspect: window.innerWidth / window.innerHeight,
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 50, 0],
          up: [0, 0, 1],
        }}
        style={{ width: window.innerWidth, height: window.innerHeight }}
      >
        {/* <BoxTest /> */}
        <SolarSystem />
      </Canvas>
    </div>
  );
}

export default App;
