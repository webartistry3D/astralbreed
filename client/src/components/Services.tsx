"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { Code2, Cog, Sparkles, Box, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Lazy load 3D component
const ServiceIsland = lazy(() => import("./ServiceIsland"));

// GLB model paths
const ISLAND_MODELS = [
  "/models/cyberpunk-bar.glb",     // Web App Development
  "/models/cyberpunk-bar-1.glb",   // Automation & Python
  "/models/cyberpunk-bar-2.glb",   // JS Development
  "/models/cyberpunk-bar-3.glb",   // 3D Web Experiences
];

const services = [
  { icon: Code2, title: "Web App Development", description: "Modern, responsive UIs...", details: "Full-stack web app services..." },
  { icon: Cog, title: "Automation & Python", description: "Eliminate repetitive tasks...", details: "Custom Python automation..." },
  { icon: Sparkles, title: "JavaScript Development", description: "High-quality frontend...", details: "Expert JS development..." },
  { icon: Box, title: "3D Web Experiences", description: "Three.js visuals...", details: "Immersive 3D web experiences..." },
];

export default function Services() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Scroll-based parallax
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");
      if (section) {
        const rect = section.getBoundingClientRect();
        const scrollPercent = -rect.top / (rect.height + window.innerHeight);
        setParallaxOffset(scrollPercent * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-mt-20">
      {/* Parallax Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-400/10 to-primary/10"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const isFlipped = flippedCard === index;
            const Icon = service.icon;

            return (
              <div key={index} className="group perspective-1000 h-96" style={{ perspective: "1000px" }}>
                <div
                  className="relative w-full h-full transition-transform duration-500 cursor-pointer"
                  onClick={() => setFlippedCard(isFlipped ? null : index)}
                  style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  {/* FRONT SIDE */}
                  <div
                    className="absolute inset-0 backface-hidden bg-card/0 backdrop-blur-md border border-card-border rounded-2xl p-4 flex flex-col justify-between"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-full h-60 rounded-xl overflow-hidden">
                      <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                        <ServiceIsland file={ISLAND_MODELS[index]} scale={1.6} />
                      </Suspense>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                      <p className="text-xs text-muted-foreground/60 mt-1">Click to learn more</p>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className="absolute inset-0 backface-hidden bg-card/95 backdrop-blur-md border border-card-border rounded-2xl p-4 flex flex-col overflow-y-auto"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={(e) => { e.stopPropagation(); setFlippedCard(null); }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
