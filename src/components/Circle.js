import React, { useState, useEffect } from 'react';
import '../App.css';

const CircleFollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: position.y, left: position.x }}>
      <div
        className='circle'
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'red',
          zIndex: '100',
          transition: '1s all'
        }}
      ></div>
    </div>
  );
};

export default CircleFollowCursor;