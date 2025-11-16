import { useState, useRef } from "react";
import {
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
} from "react-icons/si";
import { Plug, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", description: "The core language of the web. I use modern JavaScript (ES6+) to build interactive user interfaces, handle complex logic, and create seamless user experiences. Proficient in async/await, promises, DOM manipulation, and modern JavaScript patterns." },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "JavaScript with superpowers. TypeScript adds type safety and better tooling to JavaScript projects. I leverage TypeScript to catch bugs early, improve code maintainability, and enable better IDE support for faster development." },
  { name: "React", icon: SiReact, color: "#61DAFB", description: "The leading frontend framework. I build scalable, component-based applications with React, utilizing hooks, context API, and modern patterns. Expert in state management, performance optimization, and creating reusable component libraries." },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", description: "The React framework for production. I use Next.js for server-side rendering, static site generation, API routes, and optimized performance. Perfect for SEO-friendly applications and full-stack React projects." },
  { name: "Python", icon: SiPython, color: "#3776AB", description: "Versatile and powerful automation language. I write Python scripts for data processing, automation, web scraping, and backend services. Experienced with pandas, requests, BeautifulSoup, and automation libraries." },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", description: "Modern, fast Python web framework. I build high-performance REST APIs with automatic documentation, type validation, and async support. Perfect for creating robust backend services and microservices." },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", description: "Utility-first CSS framework. I use Tailwind to rapidly build custom designs without writing custom CSS. Expert in responsive design, dark mode, and creating consistent design systems with Tailwind." },
  { name: "Vite", icon: SiVite, color: "#646CFF", description: "Next generation frontend tooling. Vite provides lightning-fast HMR and optimized builds. I use Vite for modern React projects, enjoying instant server start and blazing fast hot module replacement." },
  { name: "Three.js", icon: SiThreedotjs, color: "#000000", description: "JavaScript 3D library. I create immersive 3D web experiences using Three.js, including interactive scenes, particle effects, 3D model rendering, and WebGL-powered visualizations." },
  { name: "Git", icon: SiGit, color: "#F05032", description: "Version control essential. Proficient in Git workflows, branching strategies, pull requests, and collaborative development. I use Git to maintain clean commit history and manage complex codebases." },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", description: "Design and prototyping tool. I use Figma to collaborate with designers, create prototypes, and translate designs into pixel-perfect code. Skilled in component systems and design handoff workflows." },
  { name: "API Integrations", icon: Plug, color: "#8B5CF6", description: "Connecting services seamlessly. Expert in integrating REST APIs, webhooks, and third-party services. I handle authentication, error handling, rate limiting, and ensure reliable communication between systems." },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Skillset & Tech
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="relative">
                {/* Grid Card */}
                <motion.div
                  layoutId={`card-${index}`}
                  className="relative w-full h-40 md:h-48 flex flex-col items-center justify-center bg-card/50 border border-card-border rounded-2xl p-4 cursor-pointer hover:shadow-lg"
                  onClick={() => setActiveSkill(index)}
                >
                  <Icon className="w-12 h-12" style={{ color: skill.color }} />
                  <p className="text-sm font-medium text-center text-muted-foreground mt-2">
                    {skill.name}
                  </p>
                </motion.div>

                {/* Expanded Card */}
                <AnimatePresence>
                  {activeSkill === index && (
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 sm:px-6"
                      onClick={() => setActiveSkill(null)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        layoutId={`card-${index}`}
                        className="relative w-full max-w-md sm:max-w-2xl md:max-w-3xl bg-card/95 backdrop-blur-md border border-card-border rounded-2xl p-6 flex flex-col cursor-pointer max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Close Button */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 left-4"
                          onClick={() => setActiveSkill(null)}
                        >
                          <X className="h-5 w-5" />
                        </Button>

                        {/* Icon & Name */}
                        <div className="flex items-center gap-3 justify-center mb-4 mt-2">
                          <Icon className="w-10 h-10" style={{ color: skill.color }} />
                          <h3 className="text-xl md:text-2xl font-semibold">{skill.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
