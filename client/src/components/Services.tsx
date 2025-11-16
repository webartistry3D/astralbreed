import { Card } from "@/components/ui/card";
import { Code2, Cog, Sparkles, Box } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web App Development (React + TypeScript)",
    description:
      "Modern, responsive, clean UIs built for performance and business goals.",
  },
  {
    icon: Cog,
    title: "Automation & Python Scripting",
    description:
      "Eliminate repetitive tasks, integrate APIs, and streamline operations.",
  },
  {
    icon: Sparkles,
    title: "JavaScript Development",
    description:
      "High-quality frontend logic, interactive components, and optimization.",
  },
  {
    icon: Box,
    title: "3D Web Experiences",
    description:
      "Three.js powered visuals and interactive scenes for modern websites.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group"
              data-testid={`card-service-${index}`}
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
