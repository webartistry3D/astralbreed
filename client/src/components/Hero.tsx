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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                  JavaScript Developer
                </span>
                <br />
                <span className="text-foreground">• Automation Engineer</span>
                <br />
                <span className="text-foreground">• 3D Web Creator</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
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

          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-cyan-400 rounded-3xl rotate-12 animate-float opacity-20 blur-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-56 h-56 bg-gradient-to-br from-primary to-cyan-400 rounded-3xl -rotate-12 animate-float-delayed"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-primary rounded-3xl rotate-45 animate-spin-slow opacity-60"
                  style={{
                    animation: "spin-slow 20s linear infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-20px) rotate(-12deg);
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
