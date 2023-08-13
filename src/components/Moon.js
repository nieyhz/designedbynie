import React, { useRef } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'


const Moon = () => {


  const texture = useTexture('./models/textures/moon.jpeg')

  const height = useTexture('./models/textures/moonz.jpeg')
  
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <OrbitControls enableZoom = {false} />

      <mesh ref={boxRef} rotation-x={Math.PI * 0.55} rotation-y={Math.PI * 0.25}>
        <sphereGeometry args={[5, 160, 160]} />
        <meshStandardMaterial opacity={0.35} map={texture} transparent displacementMap={height} />
      </mesh>
    </>
    );
};

export default Moon;