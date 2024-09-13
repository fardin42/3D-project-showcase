// import { gsap } from "gsap";
import { Canvas } from '@react-three/fiber';


import { OrbitControls } from '@react-three/drei';

import React from 'react';
import './App.css';
import './style.css';

import Cyl from './Components/Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
function App() {

  return (

    <Canvas flat camera={{fov:60}}>
   
          <OrbitControls/>
          <ambientLight/>
     <Cyl/>
     <EffectComposer>
<Bloom
    intensity={1.0} // The bloom intensity.
    luminanceThreshold={0.6} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.3} // smoothness of the luminance threshold. Range is [0, 1]
    mipmapBlur={true} // Enables or disables mipmap blur.
/>
{/* <ToneMapping adaptive/> */}
</EffectComposer>

  
    </Canvas>


  );
}

export default App;
