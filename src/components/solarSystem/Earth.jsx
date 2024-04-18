import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Earth = ({ position }) => {
  const earthRef = useRef();

  useFrame((state, delta) => {
    earthRef.current.rotation.y += delta;
  });

  return (
    <mesh position={position} ref={earthRef}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial color="#0066ff" />
    </mesh>
  );
};

export default Earth;
