import React from 'react';
import '../App.css';
import { Moon } from "lunarphase-js";
import { useState, useEffect } from 'react';

const Work = (props) =>{

    const date = new Date();
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const phaseEmoji = Moon.lunarPhaseEmoji(date);

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000)})

    return(
        <div className='toolbar' style={{color : props.color}}>
            <h3> {phaseEmoji} today's moon</h3>
            <h3>{time}</h3>
        </div>
    );
};

export default Work;