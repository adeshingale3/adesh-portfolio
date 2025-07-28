import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const AnimatedSphere = () => {
    const sphereRef = useRef(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#9333ea"
                    attach="material"
                    distort={0.6}
                    speed={1.5}
                    roughness={0.1}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const Scene = () => {
    return (
        <Canvas className="h-screen">
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <pointLight position={[-10, -10, -10]} intensity={0.4} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
            <AnimatedSphere />
        </Canvas>
    );
};

export default Scene;