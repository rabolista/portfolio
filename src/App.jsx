import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Desktop from "./components/desktop/Desktop";
import BootScreen from "./components/desktop/BootScreen";
import ClassicSite from "./components/classic/ClassicSite";

function RabOS() {
  const [booted, setBooted] = useState(false);
  if (!booted) return <BootScreen onDone={() => setBooted(true)} />;
  return <Desktop />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RabOS />} />
      <Route path="/portfolio" element={<ClassicSite />} />
    </Routes>
  );
}
