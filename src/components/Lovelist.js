import React from 'react';
import  { useState } from "react";
import '../App.css';

const Lovelist = (props) =>{
        
        var screenWidth = window.innerWidth*0.9;
        var screenHeight = window.innerHeight*0.9;
        var randomX = Math.floor(Math.random() * screenWidth );
        var randomY = Math.floor(Math.random() * screenHeight );

        const [isDragging, setIsDragging] = useState(false);
        const [position, setPosition] = useState({ x: randomX, y: randomY });
        const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

        const handleMouseDown = (e) => {
          setIsDragging(true);
          setInitialPosition({ x: e.clientX, y: e.clientY });
        };
      
        const handleMouseMove = (e) => {
          if (!isDragging) return;
      
          const dx = e.clientX - initialPosition.x;
          const dy = e.clientY - initialPosition.y;
      
          setPosition((prevPosition) => ({
            x: prevPosition.x + dx,
            y: prevPosition.y + dy,
          }));
      
          setInitialPosition({ x: e.clientX, y: e.clientY });
        };
      
        const handleMouseUp = () => {
          setIsDragging(false);
        };



    return(
        <div className='square'
             style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                opacity: 0.5,
                cursor: isDragging ? "grabbing" : "grab",
             }}
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}>
            <div className='topBar'>
                {props.name}
                <div className='close'></div>
            </div>
            <div className='loveWrapper' 
                style={{
                    backgroundImage: `url(${props.url})`
             }}>
                 {props.embed}
                <a href={props.action}>{props.content}</a>

            </div>
            <input className='loveInput' placeholder='Type yours'></input>
        </div>
    );
};

export default Lovelist;