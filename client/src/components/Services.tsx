"use client";

import { Code2, Cog, Sparkles, Box } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web App Development",
    description:
      "Transform your ideas into high-performance, modern web applications. I build responsive, scalable, and user-friendly platforms optimized for speed, accessibility, and long-term growth, so your users enjoy a seamless experience while your business thrives online.",
  },
  {
    icon: Sparkles,
    title: "JavaScript Engineering",
    description:
      "Delivering interactive, high-quality frontend solutions with clean TypeScript and robust components. I ensure optimized performance and smooth user experiences, turning complex web interfaces into intuitive, engaging digital products.",
  },
  {
    icon: Cog,
    title: "Automation & Python",
    description:
      "Streamline your workflows and eliminate repetitive tasks with intelligent Python-based automation. From data processing to task management, I reduce manual workload and increase efficiency, so your team can focus on what truly matters.",
  },
  {
    icon: Box,
    title: "3D Web Creation",
    description:
      "Bring your brand to life with immersive 3D web experiences. Using Three.js and WebGL, I create interactive product showcases, virtual environments, and stunning visuals, fully optimized for smooth, seamless performance across devices.",
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
