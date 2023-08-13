import React, { useRef, useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import Note from '../images/note.png'

const Line = (props) => {
    
  const h1Ref = useRef(null);

  // useEffect(() => {
  //   const h1Element = h1Ref.current;

  //   const handleMouseEnter = () => {
  //     gsap.to(h1Element, { duration: 0.3, scale: 1.1 });
  //   };

  //   const handleMouseLeave = () => {
  //     gsap.to(h1Element, { duration: 0.3, scale: 1 });
  //   };

  //   const handleMouseMove = (e) => {
  //     parallaxIt(e, h1Element, 30);
  //   };

  //   h1Element.addEventListener('mouseenter', handleMouseEnter);
  //   h1Element.addEventListener('mouseleave', handleMouseLeave);
  //   h1Element.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     h1Element.removeEventListener('mouseenter', handleMouseEnter);
  //     h1Element.removeEventListener('mouseleave', handleMouseLeave);
  //     h1Element.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // const parallaxIt = (e, element, movement) => {
  //   const relX = e.pageX - element.offsetLeft;
  //   const relY = e.pageY - element.offsetTop;

  //   gsap.to(element, {
  //     duration: 0.1,
  //     x: (relX - element.offsetWidth / 2) / element.offsetWidth * movement,
  //     y: (relY - element.offsetHeight / 2) / element.offsetHeight * movement,
  //     ease: 'power2.out',
  //   });
  // };

  return (
    <div className="lineContainer">
      <h1 ref={h1Ref}>{props.phrase}</h1>
      <div className='menuButton'>
        {props.menu}
        <img src={Note} className='note' alt='' />
      </div>
    </div>
  );
};

export default Line;