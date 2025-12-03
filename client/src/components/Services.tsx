"use client";

import { Code2, Cog, Sparkles, Box } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web App Development",
    description:
      "Modern and responsive web applications built with clean, scalable architecture—optimized for speed, accessibility, and long-term growth.",
  },
  {
    icon: Sparkles,
    title: "JavaScript Engineering",
    description:
      "High-quality frontend engineering with robust components, clean TypeScript, and optimized performance for interactive web experiences.",
  },
  {
    icon: Cog,
    title: "Automation & Python",
    description:
      "Python-based automation systems that streamline workflows, process data, eliminate repetitive tasks, and reduce manual workload.",
  },
  {
    icon: Box,
    title: "3D Web Creation",
    description:
      "Interactive 3D visuals, product showcases, and immersive experiences using Three.js and WebGL—fully optimized for smooth performance.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-card/50 border border-card-border rounded-2xl p-6 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
