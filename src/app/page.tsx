import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Portfolio from "../components/sections/portfolio";
import Contact from "../components/sections/contact";
import Experience from "../components/sections/work-experience";
import Education from "../components/sections/education";
import Certification from "../components/sections/certifications";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certification />
      <Portfolio />
      <Contact />
    </main>
  );
}
