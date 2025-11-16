import { useState } from "react";
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

const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    description:
      "The core language of the web. I use modern JavaScript (ES6+) to build interactive user interfaces, handle complex logic, and create seamless user experiences. Proficient in async/await, promises, DOM manipulation, and modern JavaScript patterns.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    description:
      "JavaScript with superpowers. TypeScript adds type safety and better tooling to JavaScript projects. I leverage TypeScript to catch bugs early, improve code maintainability, and enable better IDE support for faster development.",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    description:
      "The leading frontend framework. I build scalable, component-based applications with React, utilizing hooks, context API, and modern patterns. Expert in state management, performance optimization, and creating reusable component libraries.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    description:
      "The React framework for production. I use Next.js for server-side rendering, static site generation, API routes, and optimized performance. Perfect for SEO-friendly applications and full-stack React projects.",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    description:
      "Versatile and powerful automation language. I write Python scripts for data processing, automation, web scraping, and backend services. Experienced with pandas, requests, BeautifulSoup, and automation libraries.",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
    description:
      "Modern, fast Python web framework. I build high-performance REST APIs with automatic documentation, type validation, and async support. Perfect for creating robust backend services and microservices.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    description:
      "Utility-first CSS framework. I use Tailwind to rapidly build custom designs without writing custom CSS. Expert in responsive design, dark mode, and creating consistent design systems with Tailwind.",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646CFF",
    description:
      "Next generation frontend tooling. Vite provides lightning-fast HMR and optimized builds. I use Vite for modern React projects, enjoying instant server start and blazing fast hot module replacement.",
  },
  {
    name: "Three.js",
    icon: SiThreedotjs,
    color: "#000000",
    description:
      "JavaScript 3D library. I create immersive 3D web experiences using Three.js, including interactive scenes, particle effects, 3D model rendering, and WebGL-powered visualizations.",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    description:
      "Version control essential. Proficient in Git workflows, branching strategies, pull requests, and collaborative development. I use Git to maintain clean commit history and manage complex codebases.",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    description:
      "Design and prototyping tool. I use Figma to collaborate with designers, create prototypes, and translate designs into pixel-perfect code. Skilled in component systems and design handoff workflows.",
  },
  {
    name: "API Integrations",
    icon: Plug,
    color: "#8B5CF6",
    description:
      "Connecting services seamlessly. Expert in integrating REST APIs, webhooks, and third-party services. I handle authentication, error handling, rate limiting, and ensure reliable communication between systems.",
  },
];

export default function Skills() {
  const [flippedSkill, setFlippedSkill] = useState<number | null>(null);

  const handleSkillClick = (index: number) => {
    setFlippedSkill(flippedSkill === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 lg:py-32 bg-background scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="perspective-1000 h-40"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`relative w-full h-full transition-all duration-500 cursor-pointer ${
                  flippedSkill === index
                    ? "scale-[2.5] z-50"
                    : "scale-100 z-0"
                }`}
                onClick={() => handleSkillClick(index)}
                data-testid={`skill-${index}`}
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    flippedSkill === index
                      ? "rotateY(180deg) scale(2.5)"
                      : "rotateY(0deg) scale(1)",
                }}
              >
                <div
                  className="absolute inset-0 backface-hidden bg-card/50 border border-card-border rounded-2xl p-6 hover-elevate flex flex-col items-center justify-center gap-4"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <skill.icon
                      className="w-12 h-12"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <p className="text-sm font-medium text-center text-muted-foreground">
                    {skill.name}
                  </p>
                </div>

                <div
                  className="absolute inset-0 backface-hidden bg-card/95 backdrop-blur-sm border border-card-border rounded-2xl p-4 flex flex-col"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    >
                      <skill.icon
                        className="w-6 h-6"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlippedSkill(null);
                      }}
                      data-testid={`button-close-skill-${index}`}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <h3 className="text-base font-semibold mb-2">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
