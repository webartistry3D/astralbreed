import { useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = `${import.meta.env.BASE_URL}/models/obot.glb`;

function Model() {
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions } = useAnimations(animations, scene);

  /**
   * Enable shadows once (not every render)
   */
  useMemo(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  /**
   * Play all animations safely
   */
  useEffect(() => {
    if (!actions) return;

    Object.values(actions).forEach((action) => {
      if (!action) return;
      action.reset();
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
    });

    return () => {
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={9}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

/**
 * Preload model (correctly respects BASE_URL)
 */
useGLTF.preload(MODEL_URL);

export default Model;


/*
Canvas3D.tsx
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  // Load GLB model with animations
  const { scene, animations } = useGLTF("/models/obot.glb");
  const { actions } = useAnimations(animations, scene);

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
useGLTF.preload("/models/obot.glb");

export default function Canvas3D() {
  return (
    <Canvas
      shadows
      camera={{ fov: 45, position: [9, -3, 10] }}
      className="rounded-xl w-full h-full"
    >
      <Suspense fallback={null}>
        {/ HDRI Lighting /}
        {/<Environment files="/environment/citrus_orchard_puresky_1k.hdr" background />/}

        {/* User controls /}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.75}
        />

        {/* 3D Model /}
        <Model />

        {/* Scene Lighting /}
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
} */
