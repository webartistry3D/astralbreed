"use client";

import { useState, KeyboardEvent, useRef } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiTailwindcss,
  SiVite,
  SiThreedotjs,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { Plug, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useState as useReactState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

// ---------------- Skill Data ----------------
const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", description: "Markup language for structuring web content", model: "/models/html.glb" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", description: "Utility-first CSS framework...", model: "/models/tailwind.glb" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", description: "The core language of the web...", model: "/models/javascript.glb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "JavaScript with superpowers...", model: "/models/typescript.glb" },
  { name: "React", icon: SiReact, color: "#61DAFB", description: "The leading frontend framework...", model: "/models/react.glb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", description: "React framework for production...", model: "/models/nextjs.glb" },
  { name: "Python", icon: SiPython, color: "#3776AB", description: "Versatile automation language...", model: "/models/python.glb" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", description: "Modern, fast Python web framework...", model: "/models/fastapi.glb" },
  { name: "Vite", icon: SiVite, color: "#646CFF", description: "Next-generation frontend tooling...", model: "/models/vite.glb" },
  { name: "Three.js", icon: SiThreedotjs, color: "#000000", description: "JavaScript 3D library...", model: "/models/threejs.glb" },
  { name: "Git", icon: SiGit, color: "#F05032", description: "Version control essential...", model: "/models/GitHub.glb" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", description: "Design and prototyping tool...", model: "/models/figma.glb" },
  { name: "API Integrations", icon: Plug, color: "#8B5CF6", description: "Connecting services seamlessly...", model: "/models/api.glb" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", description: "JavaScript runtime for server-side apps...", model: "/models/nodejs.glb" },
  { name: "Express.js", icon: SiExpress, color: "#000000", description: "Minimal Node.js web framework...", model: "/models/express.glb" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", description: "NoSQL database for flexible data storage...", model: "/models/mongodb.glb" },
];

// Hook: Responsive Detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useReactState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

// ---------------- ModelMesh Component ----------------
function ModelMesh({ index, modelPath, active, onClick }) {
  const isMobile = useIsMobile();
  const group = useRef<THREE.Group>(null);
  const hoverRef = useRef(false);
  const { scene } = useGLTF(modelPath);

  // Responsive grid
  const rows = 4;
  const cols = 4;

  const spacingX = isMobile ? 0.45 : 0.3;
  const spacingY = isMobile ? 0.45 : 0.3;

  const row = Math.floor(index / cols);
  const col = index % cols;

  const startX = ((cols - 1) * spacingX) / -2;
  const startY = ((rows - 1) * spacingY) / 2;

  const initialX = startX + col * spacingX;
  const initialY = startY - row * spacingY;

  const FLOAT_AMPLITUDE = 0.009;
  const FLOAT_FREQUENCY = 2.0;

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();

    // Floating effect
    group.current.position.x = initialX;
    group.current.position.y = initialY + Math.sin(t * FLOAT_FREQUENCY + index) * FLOAT_AMPLITUDE;

    // Hover / active scaling
    const targetScale = (active ? 1.15 : 1.0) * (hoverRef.current ? 1.1 : 1.0);
    group.current.scale.setScalar(
      THREE.MathUtils.lerp(group.current.scale.x, targetScale, 0.1)
    );
  });

  return (
    <group
      ref={group}
      position={[initialX, initialY, 0]}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        hoverRef.current = true;
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        hoverRef.current = false;
      }}
    >
      <primitive object={scene.clone()} />
    </group>
  );
}

// ---------------- Main Skills Component ----------------
export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">Tech Stack</h2>

        {/* Responsive Canvas Height */}
        <div className={`w-full ${isMobile ? "h-[350px]" : "h-[500px]"} md:h-[600px] lg:h-[700px]`}>
          <Canvas
            camera={{
              position: isMobile ? [0, 0, 10] : [0, 0, 6],
              fov: isMobile ? 60 : 50,
            }}
            gl={{ antialias: true }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.8} position={[5, 5, 5]} />
            <Suspense fallback={null}>
              {skills.map((skill, index) => (
                <ModelMesh
                  key={index}
                  index={index}
                  modelPath={skill.model}
                  active={activeSkill === index}
                  onClick={() =>
                    setActiveSkill(activeSkill === index ? null : index)
                  }
                />
              ))}
            </Suspense>
          </Canvas>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeSkill !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 sm:px-6"
              onClick={() => setActiveSkill(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-xl bg-card p-6 rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 left-4"
                  onClick={() => setActiveSkill(null)}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-3 justify-center mb-4 mt-2">
                  {(() => {
                    const Icon = skills[activeSkill].icon;
                    return (
                      <Icon
                        className="w-10 h-10"
                        style={{ color: skills[activeSkill].color }}
                      />
                    );
                  })()}
                  <h3 className="text-xl font-semibold">
                    {skills[activeSkill].name}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">
                  {skills[activeSkill].description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
