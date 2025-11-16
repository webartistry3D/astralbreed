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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96">
          <Canvas3D />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 max-w-5xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <div className="mb-3">
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text">
                  👨🏾‍💻 JavaScript Developer
                </span>
              </div><br></br>
              <div className="mb-3">
                <span className="text-foreground">🤖 Python Automation</span>
              </div><br></br>
              <div>
                <span className="text-foreground">🎲 3D Web Creator</span>
              </div>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              I build fast, modern web experiences and intelligent automation
              tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white text-base flex items-center justify-center gap-2 transition-colors "
              onClick={() => scrollToSection("#contact")}
              data-testid="button-hire-me"
            >
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-pink-500 hover:bg-pink-600 text-white text-base"
              onClick={() => scrollToSection("#projects")}
              data-testid="button-view-projects"
            >
              View Projects
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
