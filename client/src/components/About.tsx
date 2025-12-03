"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-background scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            {/*Hi, my name is <span className="text-foreground font-semibold">Kelechi Aribeana</span>.<br />*/}
            I'm a Full-stack Engineer, Python Automation Expert, and 3D Web Creator with 
            <span className="text-foreground font-semibold"> 3+ years</span> of experience helping SMEs, founders, and teams bring ideas to life.
          </p>

          <p>
            I specialize in building modern web applications, automating workflows, and creating engaging interactive experiences for the web.
          </p>

          <p>
            I've delivered productivity tools that help entrepreneurs and SMEs streamline workflows, automate processes, and save man-hours. I love turning ideas into functional, polished products. 🤩
          </p>
        </div>
      </div>
    </section>
  );
}
