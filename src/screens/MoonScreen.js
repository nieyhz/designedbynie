import { Canvas } from '@react-three/fiber'
import '../App.css';
import Moon from '../components/Moon'
import LightComponent from '../components/LightComponent';
import Toolbar from '../components/Toolbar'


const MoonScreen = () =>{


    return(
        <>
        <Toolbar color={'#F1F1F1'} />
        <div className='bioContainer'>
                        <p>Name: Nicolas Gelmini</p>
                        <p>Birthplace: Brescia, Italy</p>
                        <p>Birthday: 30 January, 1999</p>
                        <p>Mail: nicolas.gelmini99@gmail.com</p><br />
                        <p>Education:</p>
                        <p>High school - C. Golgi - Graphic design and Photography</p>
                        <p>University - Politecnico di Milano - Product design</p>
                        <p>Languages: Italian, English</p><br />
                        <p>instagram: nicolas.gelmini</p>
                    </div>
            <Canvas camera={{ position: [0, 15, 0]}} className='canvas'>
                <Moon />
                <LightComponent />
            </Canvas>
        </>
    )
}

export default MoonScreen;