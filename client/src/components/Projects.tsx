"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import smeToolImage from "@assets/generated_images/SME_Operations_Tool_Dashboard_e5c8c72c.png";
import fileManagementImage from "@assets/generated_images/File_Management_Automation_Interface_af0f96bf.png";
import handymanImage from "@assets/generated_images/Handyman_Marketplace_App_UI_f8879244.png";

const projects = [
  {
    title: "SMETools",
    description: "A suite of tools used to automate daily SME operations and data workflows.",
    image: smeToolImage,
    fullDescription:
      "A comprehensive operations management platform designed specifically for small and medium enterprises. This tool streamlines daily business operations by automating data workflows, generating reports, and providing real-time insights into business metrics.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Automated data workflow processing",
      "Real-time dashboard analytics",
      "Custom report generation",
      "User role management",
      "Integration with third-party APIs",
      "Mobile-responsive design",
    ],
    challenges:
      "The main challenge was creating a flexible system that could adapt to different business workflows while maintaining performance with large datasets. Solved by implementing efficient data caching strategies and modular architecture.",
  },
  {
    title: "File Management Automation Script",
    description: "Python-based automation that reduced hours of manual work to minutes.",
    image: fileManagementImage,
    fullDescription:
      "An intelligent file management system that automates the organization, processing, and archival of files. The script uses Python to monitor directories, classify files based on content and metadata, and execute automated workflows.",
    technologies: ["Python", "FastAPI", "Pandas", "SQLite", "Celery"],
    features: [
      "Automatic file classification and tagging",
      "Scheduled file processing tasks",
      "Duplicate detection and removal",
      "Batch file operations",
      "Email notifications for completed tasks",
      "Comprehensive logging system",
    ],
    challenges:
      "Handling large volumes of files efficiently while ensuring data integrity was critical. Implemented multi-threaded processing and checksum verification to ensure reliability and speed.",
  },
  {
    title: "Local Pro Services Hub",
    description: "A clean, fast service marketplace built with modern UI components.",
    image: handymanImage,
    fullDescription:
      "A two-sided marketplace platform connecting homeowners with skilled handyman and service professionals. Features include service booking, real-time availability, and review systems.",
    technologies: ["React", "Next.js", "Form Handling", "GitHub", "Framer Motion"],
    features: [
      "Service provider profiles and portfolios",
      "Real-time booking system",
      "Rating and review system",
      "Geolocation-based service matching",
      "Push notifications for bookings",
    ],
    challenges:
      "Creating a seamless booking experience while handling real-time availability updates was complex. Implemented optimistic UI updates and WebSocket connections for instant synchronization.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-regular text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                onClick={() => setSelectedProject(index)}
                className="relative h-36 cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center filter brightness-75"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects[selectedProject]}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock background scroll
  useEffect(() => {
    const originalStyle = document.body.style.cssText;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed"; // prevent scroll jump on mobile
    document.body.style.width = "100%";

    return () => {
      document.body.style.cssText = originalStyle;
    };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent scroll bleed on mobile
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (!modalRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = modalRef.current;
      const isScrollingUp = e.touches[0].clientY > e.touches[0].clientY;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;

      // prevent scrolling beyond modal boundaries
      if ((atTop && isScrollingUp) || (atBottom && !isScrollingUp)) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => document.removeEventListener("touchmove", handleTouchMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // click outside closes modal
    >
      <motion.div
        ref={modalRef}
        className="relative w-full max-w-4xl h-[80vh] bg-card border border-card-border rounded-2xl shadow-xl flex flex-col overflow-y-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()} // prevent backdrop close
      >
        {/* Image */}
        <div className="relative h-1/3 w-full flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Scrollable content */}
        <div className="p-6 flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
          <p className="text-muted-foreground">{project.fullDescription}</p>

          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Challenges & Solutions</h3>
            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}





