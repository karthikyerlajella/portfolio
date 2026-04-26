import { useEffect, useState } from "react";

function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "work", "experience", "contact"];

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (section) =>
    active === section ? "text-blue-400 font-semibold" : "hover:text-blue-400";

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900/80 backdrop-blur-md text-white fixed w-full z-50">
      
      <h2 className="text-xl font-bold">Karthik</h2>

      <div className="space-x-6">
       <a href="#home" className={`${linkStyle("home")} transition`}>Home</a>

<a href="#about" className={`${linkStyle("about")} transition`}>About</a>

<a href="#projects" className={`${linkStyle("projects")} transition`}>Projects</a>

<a href="#work" className={`${linkStyle("work")} transition`}>Work</a>

<a href="#experience" className={`${linkStyle("experience")} transition`}>Experience</a>

<a href="#contact" className={`${linkStyle("contact")} transition`}>Contact</a>
      </div>

    </nav>
  );
}

export default Header;