import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
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
