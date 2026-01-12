//Canvas3D.tsx
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  // Load GLB model with animations
  const MODEL_URL = `${import.meta.env.BASE_URL}public/models/obot.glb`;
  const { scene, animations } = useGLTF(MODEL_URL);
  //const { scene, animations } = useGLTF("/public/models/obot.glb");
  const { actions } = useAnimations(animations, scene);

  useGLTF.preload(MODEL_URL);

  // Play all animations when available
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.reset();                 // reset to start
          action.play();                  // start animation
          action.setLoop(THREE.LoopRepeat, Infinity); // loop forever
          action.timeScale = 1;           // optional speed control
        }
      });
    }
  }, [actions]);

  // Enable shadows on all meshes
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <primitive
      object={scene}
      scale={9}              // Adjust size
      position={[0, -1, 0]}  // Slightly lower
      rotation={[0, Math.PI / 4, 0]} // Initial rotation
    />
  );
}

// Preload the GLB globally for faster loading
// useGLTF.preload("/public/models/obot.glb");

export default function Canvas3D() {
  return (
    <Canvas
      shadows
      camera={{ fov: 45, position: [9, -3, 10] }}
      className="rounded-xl w-full h-full"
    >
      <Suspense fallback={null}>
        {/* HDRI Lighting */}
        {/* <Environment files="/environment/citrus_orchard_puresky_1k.hdr" background />*/}

        {/* User controls */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.75}
        />

        {/* 3D Model */}
        <Model />

        {/* Scene Lighting */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ambientLight intensity={0.4} />
      </Suspense>
    </Canvas>
  );
}
