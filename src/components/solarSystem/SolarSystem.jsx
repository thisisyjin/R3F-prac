import { useEffect, useState } from "react";
import Earth from "./Earth";
import Solar from "./Solar";

const SolarSystem = () => {
  const [objects, setObjects] = useState([]);

  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <Solar />
      <Earth position={[10, 0, 0]} />
    </>
  );
};

export default SolarSystem;
