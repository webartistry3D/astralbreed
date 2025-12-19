"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Cog, Sparkles, Box, LucideIcon } from "lucide-react";

import bgImage from "/images/lagos1.png";
import bgVideo from "/videos/city.mp4";

/* ---------------------------------------------
   CONFIG
--------------------------------------------- */
const USE_VIDEO_BACKGROUND = true;

const COLLAPSED_HEIGHT = 120;
const EXPANDED_MIN_HEIGHT = 220;

/* ---------------------------------------------
   TYPES
--------------------------------------------- */
type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/* ---------------------------------------------
   DATA
--------------------------------------------- */
const services: Service[] = [
  {
    icon: Box,
    title: "Web3D",
    description:
      "Experience high-fidelity 3D asset creation and real-time web interactions using Three.js and WebGL. I build interactive product showcases, data-driven 3D interfaces, and experimental visuals that elevate brands, improve engagement, and turn static pages into immersive experiences.",
  },
  {
    icon: Sparkles,
    title: "JavaScript Engineering",
    description:
      "Production-grade JavaScript and TypeScript engineering focused on clarity, performance, and scalability. I architect complex frontend systems, manage application state cleanly, and deliver intuitive interfaces backed by maintainable, well-structured code.",
  },
  {
    icon: Cog,
    title: "Python Automation",
    description:
      "Automation systems that quietly save time and reduce operational friction. I design Python-powered workflows for file processing, data handling, reporting, and system integrations—turning hours of manual work into reliable, repeatable processes.",
  },
  {
    icon: Code2,
    title: "DevOps: Mobile & Web Apps",
    description:
      "End-to-end development of scalable mobile and web applications—from architecture and UI to deployment and optimization. I build fast, accessible platforms with modern tooling, ensuring performance, reliability, and smooth growth as products evolve.",
  },
];

/* ---------------------------------------------
   ANIMATION
--------------------------------------------- */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------------------------------------
   ROOT
--------------------------------------------- */
export default function Services() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <Background />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-12 text-white drop-shadow">
          Services
        </h2>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const isActive = activeTitle === service.title;

            return (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                isActive={isActive}
                onToggle={() =>
                  setActiveTitle(prev =>
                    prev === service.title ? null : service.title
                  )
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   BACKGROUND
--------------------------------------------- */
function Background() {
  return (
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

      <div className="absolute inset-0 bg-black/50" />
    </div>
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
  service: Service;
  isActive: boolean;
  onToggle: () => void;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
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

      {/* CONTENT */}
      <div className="relative text-white">
        {/* HEADER (always visible) */}
        <header className="flex items-center gap-5 px-8 py-6">
          <Icon className="w-8 h-8 text-white/90 shrink-0" />
          <h3 className="text-3xl font-semibold drop-shadow">
            {service.title}
          </h3>
        </header>

        {/* DESCRIPTION (masked, not removed) */}
        <motion.div
          initial={false}
          animate={{
            maxHeight: isActive ? 260 : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{
            maxHeight: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.2 },
          }}
          className="overflow-hidden px-8"
        >
          <p className="pb-6 text-white/80 leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      </div>
    </motion.article>
  );
}

