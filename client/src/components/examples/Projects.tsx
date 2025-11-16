import Projects from "../Projects";
import { ThemeProvider } from "../ThemeProvider";

export default function ProjectsExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="bg-background">
        <Projects />
      </div>
    </ThemeProvider>
  );
}
