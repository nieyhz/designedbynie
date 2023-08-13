import React from 'react';
import Typewriter from 'typewriter-effect';


const TypewriterC = () => {


    return(
      <>
       <Typewriter 
  onInit={(typewriter) => {
    typewriter.typeString('Vivere il presente ')
    .typeString('osservando il futuro.<br>')
      .changeDelay(100)
      .pauseFor(1000)
      .start();

    typewriter.typeString('Living the present while looking at the future.  (G. Dorfles)')
      .changeDelay(10)
      .pauseFor(1000)
      .start();
  }}
/>
      </>
    );
  };
  
  export default TypewriterC;
  