import React, { useRef } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { AmbientLight } from 'three';


const Cylinder = () => {

    const texture = useTexture('./models/textures/lines.png')

  
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y -= 0.005;
  });

  return (
    <>
        <OrbitControls zoomSpeed={0.05}/>
    
      <mesh ref={boxRef} rotation-x={Math.PI * 0.15}>
        <ambientLight  intensity={0.1}/>
        <cylinderGeometry args={[10, 10, 10]}  />
        <meshStandardMaterial map={texture} opacity={0.5}  alphaTest={0.15}  depthWrite={false} transparent={true} />
      </mesh>
    </>
    );
};

export default Cylinder;