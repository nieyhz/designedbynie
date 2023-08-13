import  React from 'react';
import '../App.css';
import Toolbar from '../components/Toolbar'
import Line from '../components/Line'
import video from '../images/eye.mp4'

const SecondScreen = () =>{

    return(
        <div className='wrapper'>
            <Toolbar color = '#F1F1F1' />
            <div className='container'>
                <div className='squareContainer'>
                    <div className='landingContainer'>
                        <div className='video'>
                        <video src={video}  autoPlay muted loop className='videoEye' />
                        </div>
                        <Line 
                            phrase = 'FUTURE '
                            menu = 'landing.container'
                        />
                        <Line 
                            phrase = 'SENSITIVE'
                            menu = 'archive.container'
                        />
                        <Line 
                            phrase = 'HUMAN'
                            menu = 'favs.container'
                        />
                        <Line 
                            phrase = 'FOR'
                            menu = 'contact'
                        />
                        <Line 
                            phrase = 'FUTURE SENSITIVE DESIGN'
                            menu = 'social'
                        />
                    </div>
                    {/* <div className='sideCol'></div>
                    <div className='mainCol'>
                        <h1>Future sensitive human, for future sensitive design.<br /><br /> Got in touch with design when i was a kid and never stopped since then.<br /><br /> And never will.</h1>
                        <h2>Go to archive</h2>
                    </div>
                    <div className='sideCol'>
                    </div> */}
                </div>
            </div>
        </div>
    );
};



export default SecondScreen;