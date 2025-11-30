"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

interface ServiceIslandProps {
  file: string;                 // Path to your GLB file
  scale?: number;               // Optional scaling
  rotationSpeed?: number;       // clockwise rotation speed
}

function IslandModel({
  file,
  scale = 1.5,
  rotationSpeed = 0.002,        // subtle clockwise rotation
}: ServiceIslandProps) {
  const ref = useRef<THREE.Group>(null);
  const gltf = useGLTF(file);
  const { scene, animations } = gltf;
  const { actions } = useAnimations(animations, ref);

  // Play default animation if present
  useEffect(() => {
    const firstAction = Object.values(actions)[0];
    if (firstAction) firstAction.play();
  }, [actions]);

  // Clockwise rotation (negative rotation.y)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= rotationSpeed;
    }
  });

  return <primitive ref={ref} object={scene} scale={scale} />;
}

export default function ServiceIsland(props: ServiceIslandProps) {
  return (
    <Canvas camera={{ position: [0, 1, 4], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 4]} intensity={1} />

      <Suspense fallback={null}>
        <IslandModel {...props} />

        {/*
          No OrbitControls → user cannot click / drag / rotate
        */}
      </Suspense>
    </Canvas>
  );
}
