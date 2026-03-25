import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vishal Kumar | React Developer</title>
        <meta
          name="description"
          content="Vishal Kumar - React Developer specializing in React, Node.js, and modern web technologies. Building beautiful, performant web experiences."
        />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, Django, TypeScript, Web Developer, Portfolio" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
