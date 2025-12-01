"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "react-icons/si";

const skills = [
  { name: "HTML", icon: Icons.SiHtml5, color: "#E34F26", description: "Markup language for structuring web content" },
  { name: "Tailwind CSS", icon: Icons.SiTailwindcss, color: "#06B6D4", description: "Utility-first CSS framework..." },
  { name: "JavaScript", icon: Icons.SiJavascript, color: "#F7DF1E", description: "The core language of the web..." },
  { name: "TypeScript", icon: Icons.SiTypescript, color: "#3178C6", description: "JavaScript with superpowers..." },
  { name: "React", icon: Icons.SiReact, color: "#61DAFB", description: "The leading frontend framework..." },
  { name: "Next.js", icon: Icons.SiNextdotjs, color: "#000000", description: "React framework for production..." },
  { name: "Python", icon: Icons.SiPython, color: "#3776AB", description: "Versatile automation language..." },
  { name: "FastAPI", icon: Icons.SiFastapi, color: "#009688", description: "Modern, fast Python web framework..." },
  { name: "Vite", icon: Icons.SiVite, color: "#646CFF", description: "Next-generation frontend tooling..." },
  { name: "Three.js", icon: Icons.SiThreedotjs, color: "#000000", description: "JavaScript 3D library..." },
  { name: "Git", icon: Icons.SiGit, color: "#F05032", description: "Version control essential..." },
  { name: "Figma", icon: Icons.SiFigma, color: "#F24E1E", description: "Design and prototyping tool..." },
  { name: "API Integrations", icon: Icons.SiJavascript, color: "#8B5CF6", description: "Connecting services seamlessly..." },
  { name: "Node.js", icon: Icons.SiNodedotjs, color: "#339933", description: "JavaScript runtime for server-side apps..." },
  { name: "Express.js", icon: Icons.SiExpress, color: "#000000", description: "Minimal Node.js web framework..." },
  { name: "MongoDB", icon: Icons.SiMongodb, color: "#47A248", description: "NoSQL document database..." },
];

export default function Skills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 scroll-mt-20 bg-background relative">
      {/* Grid */}
      <div className={`max-w-7xl mx-auto px-6 md:px-8 transition-all duration-300 ${active !== null ? "blur-sm pointer-events-none" : ""}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">Tools</h2>

        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-card border shadow-sm cursor-pointer flex flex-col items-center gap-3"
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
              >
                <Icon className="w-10 h-10" style={{ color: skill.color }} />
                <p className="font-medium text-center">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Card */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-card rounded-2xl p-8 max-w-md w-full shadow-xl cursor-pointer flex flex-col items-center text-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
              onClick={() => setActive(null)}
            >
              {(() => {
                const Icon = skills[active].icon;
                return <Icon className="h-12 w-12 mb-4" style={{ color: skills[active].color }} />;
              })()}
              <h3 className="text-xl font-semibold mb-2">{skills[active].name}</h3>
              <p className="text-muted-foreground text-sm">{skills[active].description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
