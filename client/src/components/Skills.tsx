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
import { Plug } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "API Integrations", icon: Plug },
];

export default function Skills() {
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
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/50 border border-card-border hover:scale-105 hover-elevate transition-all cursor-default group"
              data-testid={`skill-${index}`}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <skill.icon className="w-12 h-12 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
