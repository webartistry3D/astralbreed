export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-background scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi! I'm <span className="text-foreground font-semibold">Kelechi Aribeana</span> — a
              JavaScript Developer, Python Automation Engineer, and 3D Web Creator
              with <span className="text-foreground font-semibold">3 years</span> of
              hands-on experience helping SMEs, founders, and teams bring digital
              ideas to life.
            </p>

            <p>
              I specialize in building fast, modern, and interactive web
              applications, automating repetitive workflows, and creating
              lightweight 3D experiences for the web.
            </p>

            <p>
              I've delivered SME tools, including an Invoice Generator, SM Content Calendar Generator, a Client Service Booking app, automated file management processes, built a 
              handyman marketplace system, and crafted responsive UIs for
              startups and small businesses. I love turning ideas into real,
              functional, polished products.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-400 rounded-2xl"
                style={{ animation: "rotate3d 10s linear infinite" }}
              />
              <div className="absolute inset-4 bg-background rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👤</div>
                  <p className="text-sm text-muted-foreground">
                    3D Avatar Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotate3d {
          0% {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
          }
          25% {
            transform: perspective(1000px) rotateY(90deg) rotateX(5deg);
          }
          50% {
            transform: perspective(1000px) rotateY(180deg) rotateX(0deg);
          }
          75% {
            transform: perspective(1000px) rotateY(270deg) rotateX(-5deg);
          }
          100% {
            transform: perspective(1000px) rotateY(360deg) rotateX(0deg);
          }
        }
      `}</style>
    </section>
  );
}
