import  React from 'react';
import '../App.css';
import Toolbar from '../components/Toolbar';
import Lovelist from '../components/Lovelist';
import favpainter from '../images/favpainter.png'
import favcity from '../images/favcity.jpg'
import favphoto from '../images/favphoto.jpg'
import favpainternd from '../images/favpainter.jpg'
import favsculp from '../images/serpotta.jpg'
import favclassic from '../images/caravaggio.jpg'


const FourthScreen = () =>{

    const size = {
        width: '40%',
        height: 150,
      };
      const view = 'list'; // or 'coverart'
      const theme = 'black'; // or 'white'


    return(
        <div className='wrapper' style={{flexDirection : 'column'}}>
            <Toolbar />
            <div className='archiveHeader' style={{backgroundColor : '#FFF', position : 'absolute', flexDirection : 'column'}}>about.me<br /><p className='about'>feel free to move things around and send me the screenshot</p>
            <div className='mobileFav' style={{textAlign : 'left', padding : '15px'}}>
                <p>fav.modern.painter: Guillermo Lorca</p>
                <p>fav.painter: Mark Rothko</p>
                <p>fav.classic.painter: Caravaggio</p>
                <p>fav.song: Runaway - Ye</p>
                <p>fav.phothographer: Rodchenko</p>
                <p>fav.book: thus spoke Zarathustra</p>
                <p>fav.film: Once upon a time in Hollywood - Tarantino</p>
                <p>fav.modern.painter: Guillermo Lorca</p>
            </div>
            </div><div className='linkButton screenButton'>SEND SCREENSHOT 📸 </div>
            <div className='container'>
                <div className='loveContainer'>
                    <div className='loveRow'>
                        <Lovelist 
                            name = 'fav.modern.painter'
                            content = 'Guillermo Lorca'
                            url = {favpainter}
                        />
                        <Lovelist
                            name = 'fav.painter'
                            content = 'Mark Rothko'
                            url = {favpainternd}
                        />
                        <Lovelist
                            name = 'fav.song'
                            content = 'Runaway - Ye'
                        />
                    </div>
                    <div className='loveRow'>

                        <Lovelist
                            name = 'fav.photographer'
                            content = 'Rodchenko'
                            url = {favphoto}
                        />
                        <Lovelist
                            name = 'fav.book'
                            content = 'thus spoke Zarathustra'
                            action = 'https://ia803405.us.archive.org/32/items/thus-spoke-zarathustra/Thus%20spoke%20Zarathustra.pdf'
                        />
                        <Lovelist
                            name = 'fav.film'
                            content = 'Once upon a time in Hollywood - TARANTINO'
                        />
                    </div>
                    <div className='loveRow'>
                        <Lovelist 
                            name = 'fav.color'
                            content = 'White'
                        />
                        <Lovelist
                            name = 'fav.sculptor'
                            content = 'Serpotta'
                            url = {favsculp}
                        />
                        <Lovelist
                            name = 'fav.classic.painter'
                            content = 'Caravaggio'
                            url = {favclassic}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthScreen;