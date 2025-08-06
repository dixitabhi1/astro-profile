import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Skills3D from '@/components/Skills3D';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero3D />
        <About />
        <Skills3D />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
