import AboutModel from "./AboutModel";
import { Suspense } from "react";

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

        <div className="grid md:grid-cols-[30%_70%] gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT SIDE — TEXT */}
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi. My name is <span className="text-foreground font-semibold">Kelechi Aribeana</span>.<br></br>
              I'm a Full-stack Engineer, Python Automation Expert, and 3D Web Creator
              with <span className="text-foreground font-semibold">3+ years</span> of
              hands-on experience helping SMEs, founders, and teams bring ideas and
              solutions to life.
            </p>

            <p>
              I specialize in building fast, modern, and interactive web
              applications, automating repetitive workflows, and creating
              immersive 3D experiences for the web.
            </p>

            <p>
              I've delivered a range of productivity tools that have helped entrepreneurs and SMEs
              automate processes, streamline workflows and save <br></br>man-hours. I love turning ideas 
              into real, functional, polished products. 🤩
            </p>
          </div>

          {/* RIGHT SIDE — 3D CANVAS */}
          <div className="w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            <AboutModel />
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
