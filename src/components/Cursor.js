import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { pageX: x, pageY: y } = event;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cursorStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    zIndex: 9999,
    width: isHovered ? '90px' : '275px',
    height: isHovered ? '90px' : '275px',
    borderRadius: '50%',
    background: '#F7B7CD50',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.5s, height 0.5s',
  };

  return (
    <div
      className="custom-cursor"
      style={cursorStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
};

export default Cursor;
