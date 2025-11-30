import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Canvas3D from "./Canvas3D";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center bg-gray-800 justify-start scroll-mt-20">
      {/* Optional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />

      {/* 3D Canvas */}
      <div className="w-full max-w-7xl h-96 mt-16">
        <Canvas3D />
      </div>

      {/* Hero Text */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 text-center">
        {/*
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
          <div>
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text">
              JavaScript Developer<br></br> •
            </span>
          </div>
          <div>
            <span className="text-foreground">Python Automation<br></br> • </span>
          </div>
          <div>
            <span className="text-foreground">3D Web Creator</span>
          </div>
        </h1> */}

        <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          I build and deploy fast, modern web experiences with JavaScript and intelligent automation tools with Python.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-base flex items-center justify-center gap-2 transition-colors"
            onClick={() => scrollToSection("#contact")}
          >
            Hire Me
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-pink-500 hover:bg-pink-600 text-white text-base"
            onClick={() => scrollToSection("#projects")}
          >
            View Projects
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>

  );
}
