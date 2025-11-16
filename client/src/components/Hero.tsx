import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

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
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-64 h-64 bg-gradient-to-br from-primary/30 to-cyan-400/30 rounded-3xl rotate-12 opacity-40 blur-2xl"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-56 h-56 bg-gradient-to-br from-primary/40 to-cyan-400/40 rounded-3xl -rotate-12"
              style={{ animation: "float 7s ease-in-out infinite 1s" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-48 h-48 bg-gradient-to-br from-cyan-400/30 to-primary/30 rounded-3xl rotate-45 opacity-50"
              style={{ animation: "spin-slow 20s linear infinite" }}
            />
          </div>
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
              className="text-base group"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-hire-me"
            >
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base"
              onClick={() => scrollToSection("#projects")}
              data-testid="button-view-projects"
            >
              View Projects
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-30px) rotate(-12deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }
      `}</style>
    </section>
  );
}
