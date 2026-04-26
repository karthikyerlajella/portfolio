import { motion } from "framer-motion";
import { useState } from "react";

import cert1 from "../assets/certificates/certi1.png";
import cert2 from "../assets/certificates/certi2.jpeg";
import cert3 from "../assets/certificates/certi3.jpeg";
import cert4 from "../assets/certificates/certi4.jpeg";
import cert5 from "../assets/certificates/certi5.jpeg";
import cert6 from "../assets/certificates/certi6.jpg";

const experiences = [
  {
    title: "Java Full Stack Internship",
    desc: "Completed internship with hands-on backend and frontend development.",
    image: cert1,
    pdf: true, // only this one has PDF
  },
  {
    title: "Frontend Development",
    desc: "Learned React, UI design, and modern frontend practices.",
    image: cert2,
  },
  {
    title: "Backend Development",
    desc: "Worked with Java, APIs, and server-side logic.",
    image: cert3,
  },
  {
    title: "Technical Certification",
    desc: "Covered advanced programming concepts.",
    image: cert4,
  },
  {
    title: "Advanced Learning",
    desc: "Improved problem-solving and development skills.",
    image: cert5,
  },
  {
    title: "Project Training",
    desc: "Hands-on real-world project experience.",
    image: cert6,
  },
];

function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      

      <section className="w-full bg-gray-900 text-white px-6 py-20 border-b border-gray-800">
        
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-400 tracking-tight">
            Experience & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
                onClick={() => setSelected(exp.image)}
              >
                
                <h3 className="text-xl font-semibold mb-3">
                  {exp.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {exp.desc}
                </p>

                <img
                  src={exp.image}
                  alt="certificate"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />

                {/* 🔥 PDF LINK ONLY FOR INTERNSHIP */}
                {exp.pdf && (
                  <a
                    href="/certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 underline text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Full Certificate (PDF)
                  </a>
                )}

              </motion.div>
            ))}

          </div>
        </div>

        {/* MODAL */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="preview"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full rounded-lg shadow-2xl"
            />
          </div>
        )}

      </section>
    </>
  );
}

export default Experience;