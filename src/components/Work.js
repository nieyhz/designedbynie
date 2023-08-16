import React from 'react';
import '../App.css';


const Work = (props) =>{
    return(
        <div className='workContainer'>
            <h2>{props.year}</h2>
            <h3>{props.name}</h3>
            {props.tag}
            {props.content}
            <p>
            {props.customer}
            </p>
            <p>
            {props.text}
            </p>
        </div>
    );
};

export default Work;