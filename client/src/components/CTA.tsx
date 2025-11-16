import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-cyan-400/10 to-primary/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to build something{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              fast, modern, and efficient?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground">
            Let's turn your idea into a working product.
          </p>

          <Button
            size="lg"
            className="text-base group"
            data-testid="button-contact"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
