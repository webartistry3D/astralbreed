import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import smeToolImage from "@assets/generated_images/SME_Operations_Tool_Dashboard_e5c8c72c.png";
import fileManagementImage from "@assets/generated_images/File_Management_Automation_Interface_af0f96bf.png";
import handymanImage from "@assets/generated_images/Handyman_Marketplace_App_UI_f8879244.png";

const projects = [
  {
    title: "SMETools",
    description: "A suite of tools used to automate daily SME operations and data workflows.",
    image: smeToolImage,
    fullDescription:
      "A comprehensive operations management platform designed specifically for small and medium enterprises. This tool streamlines business operations by automating workflows, generating reports, and providing real-time insights.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Automated workflow processing",
      "Real-time dashboard analytics",
      "Custom report generation",
      "User role management",
      "API integrations",
      "Mobile-responsive design",
    ],
    challenges:
      "Creating a flexible system that works for different workflows while maintaining performance. Solved using caching & modular architecture.",
  },
  {
    title: "File Management Automation Script",
    description: "Python-based automation that reduced hours of manual work to minutes.",
    image: fileManagementImage,
    fullDescription:
      "An automation system that organizes, processes, and archives files. Uses content classification, metadata analysis, and automated directory management.",
    technologies: ["Python", "FastAPI", "Pandas", "SQLite", "Celery"],
    features: [
      "Automatic file classification",
      "Scheduled processing tasks",
      "Duplicate detection",
      "Batch operations",
      "Email notifications",
      "Full logging system",
    ],
    challenges:
      "Efficiently processing large file batches while maintaining accuracy. Solved with threading and checksum validation.",
  },
  {
    title: "Local Pro Services Hub",
    description: "A fast, clean service marketplace built with modern UI components.",
    image: handymanImage,
    fullDescription:
      "A two-sided marketplace connecting homeowners with service professionals. Includes booking, profiles, portfolios, and review systems.",
    technologies: ["React", "Next.js", "Form Handling", "GitHub"],
    features: [
      "Provider profiles",
      "Real-time booking system",
      "Rating & review system",
      "Location-based matching",
      "Push notifications",
    ],
    challenges:
      "Maintaining real-time availability syncing. Solved using optimistic UI and WebSocket updates.",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: typeof projects[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/40 overflow-y-auto"
      onClick={onClose}
    >
      <div className="flex justify-center p-4 md:p-8">
        <div
          className="relative w-full max-w-5xl bg-card border border-card-border rounded-2xl shadow-xl overflow-hidden flex flex-col mt-12 mb-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Section */}
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
              className="absolute top-4 right-4 bg-background/80 rounded-full"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Content Section */}
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
              <p className="text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Close Button */}
            <Button variant="secondary" className="gap-2" onClick={onClose}>
              <X className="h-4 w-4" />
              Close
            </Button>
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
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 border-card-border cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
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

      {/* Modal */}
      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
