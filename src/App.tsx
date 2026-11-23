import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About, Process, Services, Skills, Stats } from "./components/Sections";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FloatingButtons, Footer } from "./components/Footer";
import Loader from "./components/Loader";
import { useReveal, useTheme } from "./hooks";
import { setProfileFavicon } from "./components/ProfileImg";

export default function App() {
  const { dark, toggle } = useTheme();
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  const handleDone = useCallback(() => setLoading(false), []);
  // reveal the page underneath as the curtain starts lifting
  const handleLeave = useCallback(() => setReady(true), []);

  useReveal(ready);
  useEffect(() => setProfileFavicon(), []);

  return (
    <>
      {loading && <Loader onDone={handleDone} onLeave={handleLeave} />}
      <div className={`min-h-screen overflow-x-hidden font-sans ${ready ? "page-in" : "opacity-0"}`}>
        <Navbar dark={dark} toggle={toggle} />
        <main>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Process />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}
