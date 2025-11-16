import { Card } from "@/components/ui/card";
import smeToolImage from "@assets/generated_images/SME_Operations_Tool_Dashboard_e5c8c72c.png";
import fileManagementImage from "@assets/generated_images/File_Management_Automation_Interface_af0f96bf.png";
import handymanImage from "@assets/generated_images/Handyman_Marketplace_App_UI_f8879244.png";

const projects = [
  {
    title: "SME Operations Tool",
    description:
      "A suite of tools used to automate daily SME operations and data workflows.",
    image: smeToolImage,
  },
  {
    title: "File Management Automation Script",
    description:
      "Python-based automation that reduced hours of manual work to minutes.",
    image: fileManagementImage,
  },
  {
    title: "Handyman Marketplace App",
    description:
      "A clean, fast service marketplace built with modern UI components.",
    image: handymanImage,
  },
];

export default function Projects() {
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
              className="overflow-hidden hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group"
              data-testid={`card-project-${index}`}
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
