"use client";

import { User, Code, Cpu, Box } from "lucide-react";

export default function About() {
  const skills = [
    { icon: User, title: "Full-stack Engineering", description: "Building fast, responsive, and maintainable web applications using modern frameworks and best practices." },
    { icon: Cpu, title: "Python Automation", description: "Automating repetitive workflows, data processing, and business processes to save time and reduce errors." },
    { icon: Code, title: "JavaScript & TypeScript", description: "Developing robust frontend and backend solutions with clean, scalable code." },
    { icon: Box, title: "3D Web Experiences", description: "Creating interactive and immersive web visuals using lightweight techniques (without heavy 3D assets)." },
  ];

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
        <div className="grid md:grid-cols-[50%_50%] gap-12 max-w-6xl mx-auto items-start">
          {/* LEFT SIDE — TEXT */}
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi, my name is <span className="text-foreground font-semibold">Kelechi Aribeana</span>.<br />
              I'm a Full-stack Engineer, Python Automation Expert, and 3D Web Creator
              with <span className="text-foreground font-semibold">3+ years</span> of experience helping SMEs, founders, and teams bring ideas to life.
            </p>

            <p>
              I specialize in building modern web applications, automating workflows, and creating engaging interactive experiences for the web.
            </p>

            <p>
              I've delivered productivity tools that help entrepreneurs and SMEs streamline workflows, automate processes, and save man-hours. I love turning ideas into functional, polished products. 🤩
            </p>
          </div>

          {/* RIGHT SIDE — ICON CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-card/50 border border-card-border rounded-xl"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
