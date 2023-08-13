import { Canvas } from '@react-three/fiber'
import '../App.css';
import Cylinder from '../components/Cylinder'
import LightComponent from '../components/LightComponent';
import TypeWriter from '../components/TypewriterC'


const CylinderScreen = () =>{


    return(
        <>
        <div className='twContainer'>
                        <TypeWriter />
                    </div>
            <Canvas camera={{ position: [19, 0, 0]}} className='canvas'>
                <Cylinder />
                <LightComponent />
            </Canvas>
        </>
    )
}

export default CylinderScreen;