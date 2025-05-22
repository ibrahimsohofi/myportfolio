import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollProgress from './components/ScrollProgress';
import loadFonts from './utils/fontLoader';

function App() {
  // Enable smooth scrolling and load fonts
  useEffect(() => {
    // Set smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Load optimized fonts
    loadFonts();

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
