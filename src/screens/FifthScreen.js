import  React from 'react';
import '../App.css';
import logo from '../images/logo.png'
import { PowerGlitch } from 'powerglitch'
import Toolbar from '../components/Toolbar'

const FifthScreen = () =>{

    

    return(
        <div className='wrapper'>
            <Toolbar
                color = '#fdfdfd'
            />
            <div className='projectContainer'>
                <div className='archiveCol'>
                    <img src={logo} alt='logo' className='logo' />
                    <div className='linkButton' style={{marginTop: 30}}>go to: www.paranoidkids.com</div>
                    <h4>year: 2021</h4>
                    <p>paranoid is the son of a generation that is constantly living in paranoia, the faith between humans is very low nowadays, we're just painting the reality.</p>
                    <h4>year: 2022</h4>
                    <p>we collaborated with Alcantara® for the inner side of our hoodie, we choose them for the brightness and the softness of the material</p>
                    <h4>year: 2023</h4>
                    <p>we're focusing on a more artistic wave of thinking and making products, also conceptually.</p>
                </div>
                <div className='archiveCol'>
                    <div className='galleryRow'>
                        <div id='para1'></div>
                        <div id='para2'></div>
                    </div>
                    <div className='galleryRow'>
                        <div id='para3'></div>
                        <div id='para4'></div>
                    </div>
                    <div className='galleryRow'>
                        <div id='para5'></div>
                        <div id='para6'></div>
                    </div>
                    <div className='galleryRow'>
                        <div id='para7'></div>
                        <div id='para8'></div>
                    </div>
                </div>
                <div className='archiveCol'>
                    <div className='halfCol' id=''>
                    </div>
                    <div className='halfCol' id=''>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FifthScreen;