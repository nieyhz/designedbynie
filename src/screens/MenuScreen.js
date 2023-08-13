import  React from 'react';
import '../App.css';
import Toolbar from '../components/Toolbar'
import Line from '../components/Line'
import video from '../images/eye.mp4'

const MenuScreen = () =>{

    return(
        <div className='wrapper' style={{backgroundColor : '#111'}}>
            <Toolbar color = '#F1F1F1' />
            <div className='container'>
                <div className='video'>
                <video src={video}  autoPlay muted loop className='videoEye' />
                </div>
                <div className='buttonContainer'>
                    <div className='buttonRow'>
                        <div className='buttonMenu'>FUTURE</div>
                        <div className='buttonMenu'>SENSITIVE</div>
                    </div>
                    <div className='buttonRow'>
                        <div className='buttonMenu'>HUMAN</div>
                        <div className='buttonMenu'>BEING</div>
                    </div>
                </div> 
            </div>
        </div>
    );
};



export default MenuScreen;