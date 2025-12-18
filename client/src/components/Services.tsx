"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Cog, Sparkles, Box } from "lucide-react";

import bgImage from "/images/lagos1.png";
import bgVideo from "/videos/city.mp4";

/* ---------------------------------------------
   CONFIG
--------------------------------------------- */
const USE_VIDEO_BACKGROUND = true;

/* ---------------------------------------------
   DATA
--------------------------------------------- */
const services = [
  {
    icon: Box,
    title: "Web3D",
    description:
      "3D Asset creation for immersive and interactive 3D web experiences using Three.js. Ideal for product showcases, experimental interfaces, and standout brand experiences.",
  },
  {
    icon: Sparkles,
    title: "JavaScript Engineering",
    description:
      "Clean, robust TypeScript and JavaScript engineering. I turn complex interfaces into intuitive, high-quality frontend systems with strong architectural foundations.",
  },
  {
    icon: Cog,
    title: "Python Automation",
    description:
      "Streamline workflows with intelligent automation. I design Python-powered systems that eliminate repetitive tasks and quietly improve operational efficiency.",
  },
  {
    icon: Code2,
    title: "Mobile & Web Apps DevOps",
    description:
      "Transform your ideas into high-performance, scalable web applications. I design and build responsive, accessible platforms optimized for speed, maintainability, and long-term growth.",
  },
];

/* ---------------------------------------------
   ANIMATION
--------------------------------------------- */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------------------------------------
   ROOT
--------------------------------------------- */
export default function Services() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {USE_VIDEO_BACKGROUND ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={bgVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}

        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-20 text-white drop-shadow">
          Services
        </h2>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isActive={activeTitle === service.title}
              onToggle={() =>
                setActiveTitle(prev =>
                  prev === service.title ? null : service.title
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   SERVICE CARD — TRUE GLASS
--------------------------------------------- */
function ServiceCard({
  service,
  isActive,
  onToggle,
  index,
}: {
  service: typeof services[number];
  isActive: boolean;
  onToggle: () => void;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onToggle}
      className="
        relative mx-auto w-full max-w-xl
        rounded-3xl cursor-pointer overflow-hidden

        bg-white/10
        backdrop-blur-xl backdrop-saturate-150

        border border-white/20
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* Glass edge highlight */}
      <div
        aria-hidden
        className="
          absolute inset-0 rounded-3xl
          bg-gradient-to-b
          from-white/25 via-transparent to-transparent
          pointer-events-none
        "
      />

      {/* HEADER */}
      <div className="relative flex items-center gap-5 px-8 py-6 text-white">
        <Icon className="w-8 h-8 text-white/90 shrink-0" />
        <h3 className="text-3xl font-semibold drop-shadow">
          {service.title}
        </h3>
      </div>

      {/* DESCRIPTION */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative overflow-hidden px-8 pb-6"
      >
        <p className="text-white/80 leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
