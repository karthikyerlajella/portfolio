import { motion } from "framer-motion";
import profile from "../assets/profilepic.jpg";

function About() {
  return (
    <section className="w-full bg-gray-900 text-white px-6 py-20 border-b border-gray-800 flex items-center">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          
          {/* Glow */}
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* Floating Image */}
          <motion.img
            src={profile}
            alt="Karthik"
            className="w-72 h-72 object-cover rounded-[30px] shadow-2xl relative z-10"
            
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400 tracking-tight">
            About Me
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a Full Stack Developer focused on building scalable and efficient web applications. I enjoy turning complex problems into simple, user-friendly solutions.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Along with development, I specialize in thumbnail design, creating visually engaging content that improves click-through rates and audience engagement. I combine technical skills with creative thinking to deliver impactful results.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-4 py-2 rounded-lg">React</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">Java</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">Spring Boot</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">MongoDB</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">DSA</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;