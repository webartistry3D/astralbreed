"use client";

import { useState } from "react";
import * as Icons from "react-icons/si";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(skills.length).fill(false)
  );

  const toggleSkill = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isOpen = openStates[index];

            return (
              <div
                key={index}
                className="border border-card-border rounded-xl bg-card overflow-visible relative"
              >
                {/* Skill Header */}
                <button
                  onClick={() => toggleSkill(index)}
                  className="w-full flex justify-between items-center p-4 cursor-pointer focus:outline-none relative z-10"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-md"
                      style={{ color: skill.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {/* Description Tray with smooth animation */}
                <div
                  className={`
                    absolute left-0 right-0 top-full bg-card border-t border-card-border px-4 text-sm text-muted-foreground shadow-xl rounded-b-xl z-20
                    transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"}
                    overflow-hidden
                  `}
                >
                  {skill.description.map((line, idx) => (
                    <p key={idx}>• {line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


