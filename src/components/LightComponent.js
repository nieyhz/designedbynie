import React, { useRef, useEffect } from 'react';

const LightComponent = () => {
  const lightRef = useRef();

  const updateLightPosition = (x, y) => {
    const light = lightRef.current;
    if (light) {

      const mouseX = (x / window.innerWidth) * 2 - 1;
      const mouseY = -(y / window.innerHeight) * 2 + 1;

      light.position.set(mouseX, mouseY, 1);
    }
  };

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
      <directionalLight ref={lightRef} intensity={1} color="#D14E7E" position={[0, 1, 1]} />
    </>
  );
};

export default LightComponent;
