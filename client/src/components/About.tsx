"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollLockManager } from "@/lib/scrollLockManager";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    // Lock scroll when About section comes into view
    const aboutSection = document.querySelector('[id="about"]');
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Lock scroll for 1.2 seconds (animation duration)
            ScrollLockManager.getInstance().lock("about", 1200);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 scroll-mt-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/kelechi.png')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-1" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white"
          data-aos="fade-up"
          data-aos-delay={150}
        >
          About Me
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-200 leading-relaxed">
          <p data-aos="fade-up" data-aos-delay={250}>
            I'm a Full-stack Engineer, Python Automation Specialist, and Web3D Creator, with 3+ years 
            experience building and deploying web solutions for business owners and SMEs.
          </p>
          <p data-aos="fade-up" data-aos-delay={350}>
            I specialize in building web and mobile applications, automating workflows, and creating fully immersive web experiences.
          </p>
          <p data-aos="fade-up" data-aos-delay={450}>
            I've delivered productivity tools that have helped businesses streamline workflows, automate processes, and solve real world business challenges. I love turning ideas into functional, polished products! ✨
          </p>
        </div>
      </div>
    </section>
  );
}
