import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github } from "lucide-react";
import smeToolImage from "@assets/generated_images/SME_Operations_Tool_Dashboard_e5c8c72c.png";
import fileManagementImage from "@assets/generated_images/File_Management_Automation_Interface_af0f96bf.png";
import handymanImage from "@assets/generated_images/Handyman_Marketplace_App_UI_f8879244.png";

const projects = [
  {
    title: "SME Operations Tool",
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
      "The main challenge was creating a flexible system that could adapt to different business workflows while maintaining performance with large datasets. Solved this by implementing efficient data caching strategies and modular architecture.",
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
    title: "Handyman Marketplace App",
    description: "A clean, fast service marketplace built with modern UI components.",
    image: handymanImage,
    fullDescription:
      "A two-sided marketplace platform connecting homeowners with skilled handyman professionals. Features include service booking, real-time availability, secure payments, and review systems.",
    technologies: ["React", "Next.js", "Stripe", "Firebase", "Framer Motion"],
    features: [
      "Service provider profiles and portfolios",
      "Real-time booking system",
      "Integrated payment processing",
      "Rating and review system",
      "Geolocation-based service matching",
      "Push notifications for bookings",
    ],
    challenges:
      "Creating a seamless booking experience while handling real-time availability updates was complex. Implemented optimistic UI updates and WebSocket connections for instant synchronization.",
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="flex justify-center p-4 md:p-8">
        <div
          className="relative w-full max-w-5xl bg-card border border-card-border rounded-2xl shadow-xl overflow-hidden flex flex-col mt-12 mb-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image with Close Button */}
          <div className="relative aspect-video overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 space-y-6 max-h-[80vh] overflow-y-auto">
            <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
            <p className="text-muted-foreground">{project.fullDescription}</p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
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
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
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
              <h3 className="text-xl font-semibold mb-2">Challenges & Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Live Demo
              </Button>
              <Button variant="outline" className="gap-2">
                <Github className="h-4 w-4" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <p className="text-xs text-primary mt-4">Click to view details</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="flex justify-center p-4 md:p-8">
            <div
              className="relative w-full max-w-5xl bg-card border border-card-border rounded-2xl shadow-xl overflow-hidden flex flex-col mt-12 mb-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Top-Right Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-10 space-y-6 max-h-[80vh] overflow-y-auto">
                <h2 className="text-3xl md:text-4xl font-bold">{projects[selectedProject].title}</h2>
                <p className="text-muted-foreground">{projects[selectedProject].fullDescription}</p>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, i) => (
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
                  <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {projects[selectedProject].features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Challenges & Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">{projects[selectedProject].challenges}</p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Live Demo
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                  {/* New Close Button */}
                  <Button
                    variant="secondary"
                    className="gap-2"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-4 w-4" />
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
