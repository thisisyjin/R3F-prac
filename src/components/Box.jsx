import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Box = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    return (meshRef.current.rotation.x += delta);
  });

  const handleClick = (e) => {
    console.log(e);
    setActive(!active);
  };

  const handlePointerOver = (e) => {
    console.log(e);
    setHover(true);
  };

  const handlePointerOut = (e) => {
    console.log(e);
    setHover(false);
  };

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "royalblue" : "orange"} />
    </mesh>
  );
};

export default Box;
