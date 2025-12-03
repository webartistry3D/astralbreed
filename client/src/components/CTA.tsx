import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

import Engineer1 from "./Engineer1";
import Engineer2 from "./Engineer2";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-cyan-400/10 to-primary/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* TEXT CENTERED */}
        <div className="text-center space-y-4 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to build something{" "}<br></br>
            <span className="text-cyan-500">fast</span>,{" "} <br></br>
            <span className="text-yellow-400">modern</span>, <br></br>and{" "}<br></br>
            <span className="text-pink-500">efficient?</span>
          </h2>

          {/*<p className="text-lg md:text-xl text-muted-foreground">
            Let’s turn your idea into a working product.
          </p>*/}

          <Button
            size="lg"
            className="text-base group bg-yellow-500 border-yellow-0 hover:bg-yellow-600 text-black"
            data-testid="button-contact"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        {/* 3D MODELS — positioned behind the text */}
        <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
          {/* LEFT MODEL */}
          <div className="w-[25%] min-w-[120px] h-60 md:h-72 lg:h-80">
            <Engineer1 />
          </div>

          {/* RIGHT MODEL */}
          <div className="w-[25%] min-w-[120px] h-60 md:h-72 lg:h-80">
            <Engineer2 />
          </div>
        </div>

      </div>
    </section>
  );
}
