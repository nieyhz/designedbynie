import  React from 'react';
import '../App.css';
import logo from '../images/tucanoLogo.png'

const SixthScreen = () =>{

    return(
        <div className='wrapper'>
            <div className='tucanoContainer'>
                <div className='archiveCol'>
                    <img src={logo} alt='logo' className='logoTucano' />
                    <h5>year: 2021</h5>
                    <p>tucano.</p>
                </div>
                <div className='archiveCol'>
                </div>
                <div className='archiveCol'>
                    <div className='halfCol' id=''>
                        <p>roles: <br /><br />
                            - owner<br />
                            - graphic designer <br />
                            - product designer and dev. <br />
                            - web designer and dev. <br />
                            <br />
                        </p>
                    </div>
                    <div className='halfCol' id=''></div>
                </div>
            </div>
        </div>
    );
};

export default SixthScreen;