import React, { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'

const LightComponent = () => {
  const lightRef = useRef();

  // Function to update the light position based on cursor movement
  const updateLightPosition = (x, y) => {
    const light = lightRef.current;
    if (light) {
      // Map cursor coordinates to the scene dimensions (adjust as needed)
      const mouseX = (x / window.innerWidth) * 2 - 1;
      const mouseY = -(y / window.innerHeight) * 2 + 1;

      // Move the light along the camera plane based on cursor position
      light.position.set(mouseX, mouseY, 1);
    }
  };

  // Event listener to update light position on cursor movement
  const handleMouseMove = (e) => {
    updateLightPosition(e.clientX, e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <sphereGeometry position={[0, 0, 0]} args={[0.5, 32, 32]}>
        <meshPhongMaterial color="#ff0000" />
      </sphereGeometry>
      <directionalLight ref={lightRef} intensity={1} color="#CC89B1" position={[0, 1, 1]} />
    </>
  );
};

export default LightComponent;
