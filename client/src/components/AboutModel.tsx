import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/cyberpunk-bar.glb"); // Load GLB model

  // Infinite clockwise rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.0005; // control speed + direction
    }
  });

  return <primitive ref={ref} object={scene} scale={1.5} />;
}

export default function AboutModel() {
  return (
    <Canvas
      camera={{ position: [2, -0.3, 2], fov: 45 }}
      className="w-full h-full"
    >
      {/* Soft ambient + directional lighting */}
      <ambientLight intensity={0.04} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Suspense fallback={null}>
        <Model />
        {/*<Environment files="night" />*/}
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
