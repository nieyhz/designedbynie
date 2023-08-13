import React from 'react';
import '../App.css';
import Footer from '../components/Footer.js'
import Work from '../components/Work.js'
import poster1 from '../images/poster1.jpg'
import poster2 from '../images/poster2.jpg'
import poster4 from '../images/poster1.png'
import poster5 from '../images/poster5.png'
import poster6 from '../images/poster6.png'
import poster9 from '../images/poster4.jpg'
import poster10 from '../images/poster5.jpg'
import logo from '../images/logo.png'
import video from '../images/video.mp4'
import videoFluffig from '../images/fluffig.mp4'
import { Fragment } from 'react';
import packshot from '../images/packshot.png'
import paranoid from '../images/paranoid.png'
import epta from '../images/epta.png'
import epta2 from '../images/epta2.png'
import tucano from '../images/tucano.png'
import tucano2 from '../images/tucano4.png'
import tacticalbrain from '../images/tacticalbrain.png'
import tacticalLine from '../images/tacticalLine.png'
import greenforest from '../images/greenforest.png'
import greenforestLine from '../images/greenforestLine.png'
import schimic from '../images/schimic.png'
import schimicLine from '../images/schimicLine.png'

const ThirdScreen = () =>{

    const openProject = () =>{
        alert('coming soon')
    }

    return(
        <div className='wrapper' style={{flexDirection : 'column'}}>
            <div className='archiveHeader'>designed.by.nie - archive</div>
            <div className='archiveContainer'>
                <div className='archiveCol'>
                    <Work 
                        name = 'Graphic design contest - 1st place'
                        year = '2012'
                        content = {<iframe width="70%" height="30%" src="https://www.youtube.com/embed/lPQ8_czZtdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                        text = 'I delved into graphic design at the age of 13, this was my first win in a graphic contest.'
                        tag = {<div className='tag'>graphic</div>}
                    />
                    <Work 
                        name = 'Call of Duty Clan'
                        text = 'I got into the gaming world, started working with clans which they used to ask me for logos, YouTube covers and layouts, 3D intros and more.'
                        tag = {<div className='tag'>branding</div>}
                        content = {<iframe width="70%" height="30%" src="https://www.youtube.com/embed/AMoDzrn3jdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                    />
                    <Work 
                        name = 'Habplus - Habbo retroserver'
                        year = '2013'
                        text = 'Making little changes to my Habbo retroserver CMS got me into the web-design world. Habplus has been my first real project, 200€ a week with adsense, then got blocked after couple months.'
                        tag = {<div className='tag'>web</div>}
                    />
                    <Work 
                        name = 'Schimichouse'
                        year = '2016'
                        text = 'Schimichouse is a project for the future-me, the concept is a mix between food&beverage and social clubs.'
                        tag = {<div className='tag'>branding</div>}
                    />

                    <Work 
                        name = 'Graduation in Graphic Design'
                        year = '2018'
                        text = 'Graduation in Graphic design & photography'
                        tag = {<div className='tag'>graphic</div>}
                        content = { <Fragment>
                                        <img alt='banana' src={poster1} className='workImage'></img>
                                        <img alt='banana' src={poster2} className='workImage'></img>
                                    </Fragment>}
                    />
                    <Work 
                        name = 'Some shots'
                        tag = {<div className='tag'>art</div>}
                        content = { <Fragment>
                                        <div className='shots'>
                                            <div>
                                                <img alt='banana' src={poster6} className='shotImage'></img>
                                                <img alt='banana' src={poster10} className='shotImage' height=''></img>
                                            </div>
                                            <div>
                                                <img alt='banana' src={poster9} className='shotImage'></img>
                                                <img alt='banana' src={poster5} className='shotImage' height=''></img>
                                            </div>
                                            <div className='linkButton'>go to: instagram.com/nicolas.gelmini</div>
                                        </div>
                                    </Fragment>}
                    />
                </div>
                <div className='archiveCol'>
                    <Work 
                        name = 'Joined Politecnico di Milano'
                        year = '2020'
                        text = 'My first significant achievement was being accepted into the Design Department at Polimi. In Italy, it is highly coveted because it offers the best preparation, with exceptional teachers and mentors.'
                        tag = {<div className='tag'>product</div>}
                    />
                    <Work 
                        name = 'Autism project'
                        text = 'With politecnico we studied for months the autistic world and then developed a series of products for helping the autistic kids.'
                        tag = {<div className='tag'>product</div>}
                        content = { <Fragment>
                            <video src={videoFluffig} className='workImage fluffig' autoPlay muted loop></video>
                        </Fragment>}
                    />
                    <Work 
                        name = 'Logo design'
                        text = 'Logo for a mushroom trading company'
                        tag = {<div className='tag'>graphic</div>}
                        content = { <Fragment>
                            <img alt='banana' src={greenforest} className='workImage' style={{ marginBottom: '15px', width: '29%'}}></img>
                            <img alt='banana' src={greenforestLine} className='workImage' style={{ marginBottom: '15px', width: '29%'}}></img>
                        </Fragment>}
                    />
                    <Work 
                        name = 'Logo design'
                        text = 'Logo for a social club.'
                        tag = {<div className='tag'>graphic</div>}
                        content = { <Fragment>
                            <img alt='banana' src={schimic} className='workImage' style={{ marginBottom: '15px', width: '27%'}}></img>
                            <img alt='banana' src={schimicLine} className='workImage' style={{ marginBottom: '15px', width: '27%'}}></img>
                        </Fragment>}
                    />
                    <Work 
                        name = 'Tactical brain'
                        text = 'Web design, developement and branding for a softair gun shop.'
                        tag = {<div className='tag'>web</div>}
                        content = { <Fragment>
                            <div className='linkButton'>go to: tacticalbrain.it</div>
                        </Fragment>}
                    />
                    <Work 
                        name = 'Logo design'
                        text = 'Logo for a softair gunshop.'
                        tag = {<div className='tag'>graphic</div>}
                        content = { <Fragment>
                            <img alt='banana' src={tacticalbrain} className='workImage' style={{ marginBottom: '15px' }}></img>
                            <img alt='banana' src={tacticalLine} className='workImage' style={{ marginBottom: '15px' }}></img>
                        </Fragment>}
                    />
                    <Work 
                        name = 'Paranoid kids'
                        year = '2021'
                        text = {<Fragment>
                            <div className='linkButton'>go to: instagram.com/paranoid.kids</div>
                        </Fragment>
                        }
                        tag = {<div className='tag'>branding</div>}
                        content = { <Fragment>
                                        <img alt='banana' src={logo} className='workImage'></img>
                                        <video src={video} className='workImage' autoPlay muted loop></video>
                                    </Fragment>}
                    />
                    <Work 
                        name = 'Paranoid kids'
                        text = 'The hoodie has been developed with the Alcantara team, the inner side of our hoodie was made entirely with this italian microfiber.'
                        tag = {<div className='tag'>fashion</div>}
                        content = { <Fragment>
                                        <div className='shots'>
                                            <div>
                                                <img alt='banana' src={packshot} className='shotImage'></img>
                                                <img alt='banana' src={paranoid} className='shotImage'></img>
                                            </div>
                                        </div>
                                        <div className='linkButton openProject' onClick={openProject}>OPEN PROJECT</div>
                                    </Fragment>}
                    />
                </div>
                <div className='archiveCol'>
                    <Work 
                            year = '2022'
                            name = 'Paranoid kids'
                            text = 'Web design and developement for paranoidkids. E-commerce side with woocommerce.'
                            tag = {<div className='tag'>web</div>}
                            content = { <Fragment>
                                            <div className='linkButton'>go to: paranoidkids.com</div>
                                        </Fragment>}
                    />
                    <Work 
                            name = 'Tucano'
                            text = 'Tucano is a react-native app that takes inspo in Fumanji, an argentinian card game for smokers. Most of the cards have been generated throguh AI.'
                            tag = {<div className='tag'>app-dev</div>}
                            content = { <Fragment>
                                            <img alt='banana' src={tucano} className='workImage'  style={{ width: '31%' }}></img>
                                            <img alt='banana' src={tucano2} className='workImage'  style={{ width: '31%' }}></img>
                                            <div className='linkButton openProject' onClick={openProject}>OPEN PROJECT</div>
                                        </Fragment>}
                    />
                    <Work 
                        name = 'Leda collection'
                        text = 'Leda is a minimalistic lamp we made in our product course. The project started from scratch till the 1:1 prototype made out of steel, aluminium, both powder-coated.'
                        tag = {<div className='tag'>product</div>}
                        content = { <Fragment>
                                        <img alt='banana' src={poster4} className='workImage'></img>
                                        <div className='linkButton openProject' onClick={openProject}>OPEN PROJECT</div>
                                    </Fragment>}
                    />
                    <Work 
                        name = 'Icor'
                        text = 'Web developement.'
                        tag = {<div className='tag'>web</div>}
                        content = { <Fragment>
                                        <div className='linkButton'>go to: www.icorcostruzioni.it</div>
                                    </Fragment>}
                    />
                    <Work 
                        name = 'Design for the food&beverage next-gen'
                        year = '2023'
                        text = 'Student project with IARP, a multionational company that is leader in the Food&Beverage market. We develop together a solution for next-generation restaurants like dark kitchen, cloud kitchen and ghost kitchen.'
                        tag = {<div className='tag'>product</div>}
                        content = { <Fragment>
                            <img alt='banana' src={epta} className='workImage'></img>
                            <img alt='banana' src={epta2} className='workImage' style={{ width: '27%' }}></img>
                            <div className='linkButton openProject' onClick={openProject}>OPEN PROJECT</div>
                        </Fragment>}
                    />
                    <Work 
                        name = 'designedbynie'
                        text = 'Web design and developement of my portfolio.'
                        tag = {<div className='tag'>web</div>}
                        content = { <Fragment>
                                        <div className='linkButton'>go to: www.designedbyn.ie</div>
                                    </Fragment>}
                    />
                    <Work 
                        name = 'Coming soon'
                        tag = {<div className='tag'>art</div>}
                        content = { <Fragment>
                        </Fragment>}
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ThirdScreen;