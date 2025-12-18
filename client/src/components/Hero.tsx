import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Canvas3D from "./Canvas3D";
import TypingText from "./TypingText";
import { ScrollLockManager } from "@/lib/scrollLockManager";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showButtonAnimations, setShowButtonAnimations] = useState(false);

  // Lock scroll on Hero section entry
  useEffect(() => {
    const manager = ScrollLockManager.getInstance();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            manager.lock("hero", 6800);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTypingComplete = () => {
    setShowButtonAnimations(true);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;
    
    const lenis = (window as any).lenis;
    if (lenis) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      lenis.scrollTo(elementTop, { duration: 1.2 });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex flex-col items-center bg-black justify-start scroll-mt-20"
    >
      {/* Optional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />

      {/* 3D Canvas */}
      <div className="w-full max-w-7xl h-80 md:h-96 mt-4 md:mt-16">
        <Canvas3D />
      </div>

      {/* Hero Text */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12 text-center">
        <div className="h-[60px] md:h-[80px] flex items-start justify-center">
          <TypingText
            text={`Building systems that simplify complexity and unlock people.`}
            speed={100}
            onComplete={handleTypingComplete}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button
            size="lg"
            className={`bg-cyan-500 hover:bg-cyan-600 text-white text-base flex items-center justify-center gap-2 transition-colors ${showButtonAnimations ? 'hero-button-hire' : 'opacity-0'}`}
            onClick={() => scrollToSection("#about")}
          >
            About Me
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className={`bg-pink-500 hover:bg-pink-600 text-white text-base ${showButtonAnimations ? 'hero-button-projects' : 'opacity-0'}`}
            onClick={() => scrollToSection("#projects")}
          >
            Projects
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>    </section>

  );
}
