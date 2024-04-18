import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Solar = (props) => {
  const sunRef = useRef();

  useFrame((state, delta) => {
    sunRef.current.rotation.y += delta;
  });

  return (
    <mesh {...props} scale={5} ref={sunRef}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial color="#ff5100" />
    </mesh>
  );
};

export default Solar;
