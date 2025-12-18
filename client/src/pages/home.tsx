import FullPage from "@/components/FullPage";
import Section from "@/components/Section";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <FullPage>
      {/*<Section id="home">*/}
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <CTA />
      {/*</Section>*/}

      {/*
      <Section id="about">
        <About />
      </Section>

      <Section id="services">
        <Services />
      </Section>

      <Section id="skills">
        <Skills />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="cta">
        <CTA />
      </Section>
      */}
    </FullPage>
  );
}
