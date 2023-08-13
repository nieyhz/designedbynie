import './App.css';
import { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import MoonScreen from './screens/MoonScreen'
import Loader from './components/Loader'
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
