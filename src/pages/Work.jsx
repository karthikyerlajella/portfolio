import { motion } from "framer-motion";
import { useState } from "react";

import thumb1 from "../assets/work/1st.jpg";
import thumb2 from "../assets/work/2nd.jpg";
import thumb3 from "../assets/work/3rd.jpg";
import thumb4 from "../assets/work/4rt.jpg";
import thumb5 from "../assets/work/day6.jpg";
import thumb6 from "../assets/work/DAY7.jpg";

const works = [
  { img: thumb1, title: "YouTube Thumbnail" },
  { img: thumb2, title: "Gaming Thumbnail" },
  { img: thumb3, title: "Tech Thumbnail" },
  { img: thumb4, title: "Content Design" },
  { img: thumb5, title: "Creative Thumbnail" },
  { img: thumb6, title: "Engagement Design" },
];

function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full bg-gray-900 text-white px-6 py-20 border-b border-gray-800">
      
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-left text-blue-400 tracking-tight">
          My Design Work
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {works.map((work, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer relative group"
              onClick={() => setSelected(work.img)}
            >
              <img
                src={work.img}
                alt={`work-${index}`}
                className="w-full h-60 object-cover transition duration-300 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">
                
                <p className="text-lg font-semibold mb-2">
                  {work.title}
                </p>

                <span className="text-sm text-gray-300">
                  Click to view
                </span>

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected}
            alt="preview"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full rounded-lg shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}

export default Work;