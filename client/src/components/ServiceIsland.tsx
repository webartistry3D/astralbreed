"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

interface ServiceIslandProps {
  file: string;          // Path to your GLB file
  scale?: number;        // Optional scaling
  autoRotate?: boolean;  // Optional auto-rotation
  idleRotationSpeed?: number; // rotation speed
}

function IslandModel({
  file,
  scale = 1.5,
  autoRotate = false,
  idleRotationSpeed = 0.003,
}: ServiceIslandProps) {
  const ref = useRef<THREE.Group>(null);
  const gltf = useGLTF(file);
  const { scene, animations } = gltf;
  const { actions } = useAnimations(animations, ref);

  // Play first animation automatically (if any)
  useEffect(() => {
    const firstAction = Object.values(actions)[0];
    if (firstAction) firstAction.play();
  }, [actions]);

  // Idle rotation
  useFrame(() => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += idleRotationSpeed;
    }
  });

  return <primitive ref={ref} object={scene} scale={scale} />;
}

export default function ServiceIsland(props: ServiceIslandProps) {
  return (
    <Canvas camera={{ position: [2, 1, 2], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 4]} intensity={1} />
      <Suspense fallback={null}>
        <IslandModel {...props} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
