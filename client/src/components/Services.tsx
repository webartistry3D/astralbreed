"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Code2, Cog, Sparkles, Box } from "lucide-react";

/* ---------------------------------------------
   DATA
---------------------------------------------- */
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
    title: "Mobile & Web Applications",
    description:
      "Transform your ideas into high-performance, scalable web applications. I design and build responsive, accessible platforms optimized for speed, maintainability, and long-term growth.",
  }
];

/* ---------------------------------------------
   VARIANTS
---------------------------------------------- */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },   // Offscreen below
  visible: { opacity: 1, y: 0 },   // In viewport
  exit: { opacity: 0, y: -40 },    // Leaving viewport above
};

/* ---------------------------------------------
   ROOT
---------------------------------------------- */
export default function Services() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* BACKDROP */}
      <AnimatePresence>
        {activeTitle && (
          <motion.div
            className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-20 max-w-3xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-20">Services</h2>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isActive={activeTitle === service.title}
              onToggle={() =>
                setActiveTitle((prev) =>
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
   SERVICE CARD — FULL CONTROL WITH EXIT
---------------------------------------------- */
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
      layout="position"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, margin: "-100px" }} // triggers before fully visible
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.15 }}
      onClick={onToggle}
      className="mx-auto w-full max-w-xl rounded-3xl border border-card-border bg-card shadow-sm cursor-pointer overflow-hidden"
    >
      {/* HEADER */}
      <div className="flex items-center gap-5 px-8 py-6">
        <Icon className="w-8 h-8 text-primary shrink-0" />
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>

      {/* EXPANDING CONTENT */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8">
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
