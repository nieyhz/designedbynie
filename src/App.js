import './App.css';
import { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import LandingScreen from './screens/LandingScreen';
import FifthScreen from './screens/FifthScreen';
import SixthScreen from './screens/SixthScreen';
import MenuScreen from './screens/MenuScreen';
import Toolbar from './components/Toolbar'
import MoonScreen from './screens/MoonScreen'
import Loader from './components/Loader'
import LightComponent from './components/LightComponent';
import CylinderScreen from './screens/CylinderScreen';

function App() {


  useEffect(() => {
    document.title = 'designed.by.nie';
  }, []);
  
  return (
    <>
    <Loader>
      <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      responsiveWidth = {600}
      scrollingSpeed = {1000} /* Options here */

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <CylinderScreen />
            </div>
            <div className="section">
              <MoonScreen />
            </div>
            <div className="section">
              <FourthScreen /> 
            </div>
            <div className="section">
              <ThirdScreen />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
      />
    </Loader>
    </>
  );
}

export default App;
