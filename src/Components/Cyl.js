import React, { useRef } from 'react'
import {  useTexture } from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';


const Cyl = () => {
  let tex = useTexture("./reel.png");
  let myRef = useRef(null)
useFrame((state,delta)=>{myRef.current.rotation.y += delta;
})
  return (
    <>
    <group  rotation={[0,1.4,0.3]}>
     <mesh ref={myRef}>
    
    <cylinderGeometry args={[2, 2, 2, 60, 60,true]}/>
    <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide}/>
  </mesh>
  </group>
    </>
  )
}

export default Cyl