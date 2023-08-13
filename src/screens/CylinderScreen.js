import { Canvas } from '@react-three/fiber'
import '../App.css';
import Cylinder from '../components/Cylinder'
import LightComponent from '../components/LightComponent';
import TypeWriter from '../components/TypewriterC'


const CylinderScreen = () =>{


    return(
        <>
        <Canvas camera={{ position: [19, 0, 0]}} className='canvas' style={{backgroundImage : 'none'}}>
                <Cylinder />
                <LightComponent />
            </Canvas>
        <div className='twContainer'>
                        <TypeWriter />
                    </div>
            
        </>
    )
}

export default CylinderScreen;