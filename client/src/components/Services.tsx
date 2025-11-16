import { useState } from "react";
import { Code2, Cog, Sparkles, Box, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Web App Development (React + TypeScript)",
    description:
      "Modern, responsive, clean UIs built for performance and business goals.",
    details:
      "I specialize in creating cutting-edge web applications using React, TypeScript, and modern frameworks. My approach focuses on building scalable, maintainable code with excellent user experiences. Services include: full-stack development, responsive design implementation, performance optimization, state management with Redux/Zustand, API integration, and deployment to production environments.",
  },
  {
    icon: Cog,
    title: "Automation & Python Scripting",
    description:
      "Eliminate repetitive tasks, integrate APIs, and streamline operations.",
    details:
      "Transform your business workflows with custom Python automation solutions. I build scripts and tools that save time and reduce errors by automating repetitive tasks. Expertise includes: file processing automation, data pipeline creation, API integrations, web scraping, report generation, task scheduling, database operations, and custom workflow automation tailored to your specific needs.",
  },
  {
    icon: Sparkles,
    title: "JavaScript Development",
    description:
      "High-quality frontend logic, interactive components, and optimization.",
    details:
      "Deliver exceptional user experiences with expert JavaScript development. I create interactive, performant frontend solutions using vanilla JavaScript and modern frameworks. Services include: complex UI component development, DOM manipulation, event handling, async operations, performance profiling and optimization, cross-browser compatibility, and modern ES6+ features implementation.",
  },
  {
    icon: Box,
    title: "3D Web Experiences",
    description:
      "Three.js powered visuals and interactive scenes for modern websites.",
    details:
      "Bring your website to life with immersive 3D experiences. Using Three.js and WebGL, I create stunning visual effects and interactive 3D elements that engage users. Capabilities include: 3D model integration, interactive scenes, particle systems, shader effects, physics simulations, responsive 3D layouts, and optimized performance for web delivery.",
  },
];

export default function Services() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const handleScroll = () => {
    const section = document.getElementById("services");
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollPercent = -rect.top / (rect.height + window.innerHeight);
      setParallaxOffset(scrollPercent * 100);
    }
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section
      id="services"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-mt-20"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-400/10 to-primary/10"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`relative w-full h-80 transition-transform duration-700 transform-style-3d cursor-pointer ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
                onClick={() => handleCardClick(index)}
                data-testid={`card-service-${index}`}
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    flippedCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div
                  className="absolute inset-0 backface-hidden bg-card/80 backdrop-blur-sm border border-card-border rounded-2xl p-8 hover-elevate"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-4">
                    Click to learn more
                  </p>
                </div>

                <div
                  className="absolute inset-0 backface-hidden bg-card/95 backdrop-blur-sm border border-card-border rounded-2xl p-6 overflow-y-auto"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlippedCard(null);
                      }}
                      data-testid={`button-close-service-${index}`}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
