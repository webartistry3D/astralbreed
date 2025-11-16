import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "Vite",
  "Three.js",
  "Git",
  "Figma",
  "API Integrations",
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

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-6 py-3 text-base font-medium hover:scale-105 transition-transform cursor-default"
              data-testid={`badge-skill-${index}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
