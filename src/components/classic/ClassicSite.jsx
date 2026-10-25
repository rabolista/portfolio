import Nav from "./Nav";
import Hero from "./Hero";
import MapSection from "./MapSection";
import Journey from "./Journey";
import Skills from "./Skills";
import Contact from "./Contact";

export default function ClassicSite() {
  return (
    <div className="min-h-screen bg-blueprint-bg">
      <Nav />
      <Hero />
      <MapSection />
      <Journey />
      <Skills />
      <Contact />
      <footer className="text-center py-8 text-blueprint-faint text-xs font-display">
        Built with React, Tailwind CSS &amp; React Flow — edit freely in /src
      </footer>
    </div>
  );
}
