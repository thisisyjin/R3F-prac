import Box from "./components/Box";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <Canvas camera={}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
