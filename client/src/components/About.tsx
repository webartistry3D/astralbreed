export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-background scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi! I'm <span className="text-foreground font-semibold">Kelechi</span> — a
              JavaScript Developer, Python Automation Engineer, and 3D/Web App
              Builder with <span className="text-foreground font-semibold">4 years</span> of
              hands-on experience helping SMEs, founders, and teams bring digital
              ideas to life.
            </p>

            <p>
              I specialize in building fast, modern, and interactive web
              applications, automating repetitive workflows, and creating
              lightweight 3D experiences for the web.
            </p>

            <p>
              I've delivered SME tools, automated file management processes, built
              handyman marketplace systems, and crafted responsive UIs for
              startups and small businesses. I love turning ideas into real,
              functional, polished products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
