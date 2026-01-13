// Canvas3D.tsx
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * 🔐 GitHub Pages–safe, Vite-safe, Drei-safe model URL
 * Resolves to:
 *   /astralbreed/models/obot.glb
 */
//const MODEL_URL = `${import.meta.env.BASE_URL}models/obot.glb`;

/*
const MODEL_URL = new URL(
  "models/obot.glb",
  window.location.origin + import.meta.env.BASE_URL
).toString();
*/

const MODEL_URL = new URL(
  "models/obot.glb", new URL(import.meta.env.BASE_URL, window.location.origin)
).toString();

/**
 * Preload ONCE at module scope
 * (Do NOT place inside components)
 */
useGLTF.preload(MODEL_URL);

function Model() {
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions } = useAnimations(animations, scene);

  /**
   * Play all animations safely
   */
  useEffect(() => {
    if (!actions) return;

    Object.values(actions).forEach((action) => {
      if (!action) return;

      action.reset();
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.timeScale = 1;
      action.play();
    });
  }, [actions]);

  /**
   * Enable shadows AFTER scene is guaranteed
   */
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={9}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function Canvas3D() {
  return (
    <Canvas
      shadows
      camera={{ fov: 45, position: [9, -3, 10] }}
      className="rounded-xl w-full h-full"
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.75}
        />

        <Model />

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
