import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';



const Cyl = () => {
    let Tex = useTexture("./portfolio bg.png");
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    });
    return (
        <group rotation={[-0.1, 1.3, 0.5]}>
            <mesh ref={cyl}>
            <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
            <meshStandardMaterial map={Tex} side={THREE.DoubleSide} />
        </mesh>
        </group>
    )
}

export default Cyl
