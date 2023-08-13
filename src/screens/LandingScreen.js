import  React from 'react';
import '../App.css';
import Typewriter from '../components/TypewriterC';
import Line from '../images/line.png'


const LandingScreen = () =>{

    return(
        <div className='wrapper'>
            {/* <Cursor /> */}
            <div className='overlay'></div>
            <div className='kimContainer'>
                <div className='leftKim'>
                    <Typewriter />
                </div>
            </div>
        </div>
    );
};

export default LandingScreen;