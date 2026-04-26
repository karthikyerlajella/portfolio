import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <div id="home" className="pt-24">
        <Hero />
      </div>

      <div id="about" className="pt-24">
        <About />
      </div>

      <div id="projects" className="pt-24">
        <Projects />
      </div>

      <div id="work" className="pt-24">
        <Work />
      </div>

      <div id="experience" className="pt-24">
        <Experience />
      </div>

      <div id="contact" className="pt-24">
        <Contact />
      </div>

      

<Footer />
    </>
  );
}

export default Home;