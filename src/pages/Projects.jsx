
import { motion } from "framer-motion";

import roomfinder from "../assets/projects/ganeshaa.jpg";
import portfolio from "../assets/projects/banner.jpg";
import aptitude from "../assets/projects/aptitude.jpg";
import medical from "../assets/projects/medical.jpg";

const projects = [
  {
    title: "RoomFinder",
    desc: "A room rental platform with filtering and location-based search to help users quickly find suitable accommodations.",
    impact: "Improves search efficiency and user experience for rental discovery.",
    tech: ["React", "Spring Boot", "MongoDB"],
    github: "", // add later
    live: "",   // add later
    image: roomfinder,
  },
  {
    title: "Portfolio Website",
    desc: "A modern single-page portfolio built with React and Tailwind, showcasing development and design skills.",
    impact: "Designed to present projects, certifications, and design work in a structured and interactive way.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "", // add later
    live: "",   // add later
    image: portfolio,
  },
  {
    title: "Aptitude Learner",
    desc: "An interactive learning platform for practicing aptitude questions with structured topics and problem-solving approach.",
    impact: "Helps users improve logical thinking and problem-solving speed.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/karthikyerlajella/Apptitude-web.git",
    live: "https://india-bix-web.vercel.app",
    image: aptitude,
  },
  {
    title: "Medical UI Design",
    desc: "A clean and responsive medical dashboard UI focused on usability and accessibility.",
    impact: "Improves healthcare interface experience with intuitive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/karthikyerlajella/medical-ui-frontend.git",
    live: "https://medical-ui-frontend.vercel.app",
    image: medical,
  },
];

function Projects() {
  return (
    <>
      

      <section className="w-full bg-gray-900 text-white px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-400 tracking-tight">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition"
              >

                {/* IMAGE */}
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                    {/* GitHub Button */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        GitHub
                      </a>
                    )}

                    {/* Live Button */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                      >
                        Live
                      </a>
                    )}

                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-3">
                    {project.desc}
                  </p>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.impact}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-3 py-1 rounded-lg text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;