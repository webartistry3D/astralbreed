"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: Icons.SiHtml5,
    color: "#E34F26",
    description: [
      "HyperText Markup Language: the standard language to structure web content.",
      "Organizes pages with semantic elements for clarity and accessibility.",
      "Essential for SEO, ensuring search engines understand your content.",
      "Forms the backbone of responsive and well-structured interfaces.",
      "I use HTML to create maintainable, semantic code that supports all frontend layouts."
    ],
  },
  {
    name: "Tailwind CSS",
    icon: Icons.SiTailwindcss,
    color: "#06B6D4",
    description: [
      "Utility-first CSS framework that allows for rapid styling without leaving HTML.",
      "Eliminates bulky CSS files and reduces styling conflicts.",
      "Supports responsive design and consistent UI across all components.",
      "Speeds up prototyping while keeping the design scalable.",
      "I use Tailwind to build modern, consistent, and visually appealing interfaces efficiently."
    ],
  },
  {
    name: "JavaScript",
    icon: Icons.SiJavascript,
    color: "#F7DF1E",
    description: [
      "The core programming language of the web for interactive functionality.",
      "Enables dynamic content, animations, and real-time UI updates.",
      "Bridges frontend interfaces with backend data seamlessly.",
      "Powers rich user experiences with responsive interactivity.",
      "I use JavaScript to build intuitive, dynamic apps that react to user behavior in real-time."
    ],
  },
  {
    name: "TypeScript",
    icon: Icons.SiTypescript,
    color: "#3178C6",
    description: [
      "Superset of JavaScript that adds strong typing and error checking.",
      "Reduces runtime bugs and improves maintainability of large projects.",
      "Enhances developer productivity by enabling better IDE support.",
      "Makes complex applications easier to scale and maintain.",
      "I use TypeScript to build reliable, robust apps while preventing common coding mistakes."
    ],
  },
  {
    name: "React",
    icon: Icons.SiReact,
    color: "#61DAFB",
    description: [
      "Component-based library for building reusable and maintainable UI elements.",
      "Virtual DOM ensures fast rendering and smooth UI updates.",
      "Ideal for building interactive dashboards and complex interfaces.",
      "Allows for modular, testable, and scalable web applications.",
      "I use React to deliver fast, responsive, and dynamic user experiences tailored to client needs."
    ],
  },
  {
    name: "Next.js",
    icon: Icons.SiNextdotjs,
    color: "#000000",
    description: [
      "React framework supporting SSR (Server-Side Rendering) and SSG (Static Site Generation).",
      "Optimizes apps for SEO, speed, and performance out of the box.",
      "Built-in routing, API handling, and image optimization simplify development.",
      "Perfect for production-grade, high-performance web apps.",
      "I use Next.js to deliver fast, scalable, and SEO-friendly applications efficiently."
    ],
  },
  {
    name: "Python",
    icon: Icons.SiPython,
    color: "#3776AB",
    description: [
      "High-level, versatile programming language used for automation, AI, and backend services.",
      "Simplifies complex tasks like data processing and workflow automation.",
      "Supports a vast ecosystem of libraries for machine learning and web development.",
      "Reduces manual labor through scripts and automated routines.",
      "I use Python to streamline backend workflows and implement intelligent, automated solutions."
    ],
  },
  {
    name: "FastAPI",
    icon: Icons.SiFastapi,
    color: "#009688",
    description: [
      "Modern Python framework for building high-performance APIs.",
      "Auto-generates interactive API documentation for easier integration.",
      "Supports asynchronous code for faster processing and scalability.",
      "Ideal for dashboards, microservices, and internal tools.",
      "I leverage FastAPI to deliver robust, secure, and scalable backend services quickly."
    ],
  },
  {
    name: "Vite",
    icon: Icons.SiVite,
    color: "#646CFF",
    description: [
      "Next-generation frontend build tool with lightning-fast development server.",
      "Supports instant Hot Module Replacement (HMR) for rapid iteration.",
      "Modern bundler that replaces slower legacy tools.",
      "Works seamlessly with React, Vue, and TypeScript projects.",
      "I use Vite to speed up development and ensure a smooth, efficient frontend workflow."
    ],
  },
  {
    name: "Three.js",
    icon: Icons.SiThreedotjs,
    color: "#000000",
    description: [
      "JavaScript library for creating 3D graphics directly in the browser.",
      "Enables interactive scenes, product viewers, and animations.",
      "Transforms standard web pages into immersive visual experiences.",
      "Perfect for showcasing complex data or products in a compelling way.",
      "I use Three.js to craft visually stunning, interactive experiences for users."
    ],
  },
  {
    name: "Git",
    icon: Icons.SiGit,
    color: "#F05032",
    description: [
      "Version control system to track code changes and collaborate with teams.",
      "Maintains a clean history of project evolution and prevents data loss.",
      "Supports branching and merging for safe experimentation.",
      "Essential for team projects and collaborative development.",
      "I use Git to ensure code integrity, team collaboration, and smooth deployment pipelines."
    ],
  },
  {
    name: "Figma",
    icon: Icons.SiFigma,
    color: "#F24E1E",
    description: [
      "UI/UX design tool for prototyping web and mobile applications.",
      "Supports real-time collaboration with clients and team members.",
      "Allows creation of visually consistent and user-friendly interfaces.",
      "Generates designs that can be directly translated into code.",
      "I use Figma to design intuitive and pixel-perfect interfaces before implementation."
    ],
  },
  {
    name: "API Integrations",
    icon: Icons.SiJavascript,
    color: "#8B5CF6",
    description: [
      "Connects applications to third-party services like payments, auth, and CRMs.",
      "Automates workflows and ensures seamless data exchange.",
      "Eliminates manual processes, reducing errors and increasing efficiency.",
      "Enables building more powerful, feature-rich applications.",
      "I implement API integrations to extend app functionality and improve user experience."
    ],
  },
  {
    name: "Node.js",
    icon: Icons.SiNodedotjs,
    color: "#339933",
    description: [
      "JavaScript runtime for building server-side applications.",
      "Supports real-time apps like chats, dashboards, and notifications.",
      "Enables building lightweight, scalable APIs and microservices.",
      "Perfect for event-driven and asynchronous backend processes.",
      "I use Node.js to deliver high-performance, scalable server solutions."
    ],
  },
  {
    name: "Express.js",
    icon: Icons.SiExpress,
    color: "#000000",
    description: [
      "Minimal Node.js framework for building APIs and web servers.",
      "Flexible routing and middleware allow custom backend logic.",
      "Ideal for RESTful APIs, authentication, and custom services.",
      "Reduces boilerplate code and accelerates server development.",
      "I leverage Express.js to build efficient, maintainable, and flexible backends."
    ],
  },
  {
    name: "MongoDB",
    icon: Icons.SiMongodb,
    color: "#47A248",
    description: [
      "NoSQL database for handling unstructured and flexible data.",
      "Supports scalable, document-based storage for modern apps.",
      "Handles dynamic schemas, ideal for rapidly evolving projects.",
      "Provides fast querying and aggregation for analytics and dashboards.",
      "I use MongoDB to store and retrieve data efficiently while allowing application flexibility."
    ],
  },
];




export default function Skills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 scroll-mt-20 bg-background relative">
      {/* Grid */}
      <div className={`max-w-7xl mx-auto px-6 md:px-8 transition-all duration-300 ${active !== null ? "blur-sm pointer-events-none" : ""}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">Tools</h2>

        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-card border shadow-sm cursor-pointer flex flex-col items-center gap-3"
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
              >
                <Icon className="w-10 h-10" style={{ color: skill.color }} />
                <p className="font-medium text-center">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Card */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            {/* SCALE WRAPPER (prevents layout glitch) */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
                transition: { duration: 0.25, ease: "easeInOut" }
              }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              className="max-w-md w-full"
            >
              {/* CARD CONTENT */}
              <div className="bg-card rounded-2xl p-8 shadow-xl relative flex flex-col items-center text-center">
                
                {/* Close Button */}
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-3 right-3 text-xl text-muted-foreground hover:text-foreground transition"
                >
                  ×
                </button>

                {/* Icon */}
                {(() => {
                  const Icon = skills[active].icon;
                  return (
                    <Icon
                      className="h-12 w-12 mb-4"
                      style={{ color: skills[active].color }}
                    />
                  );
                })()}

                <h3 className="text-xl font-semibold mb-4">{skills[active].name}</h3>

                {/* Bullet Point Description */}
                <div className="text-left space-y-2">
                  {skills[active].description.map((line, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      • {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
