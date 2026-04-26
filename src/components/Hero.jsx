import { motion } from "framer-motion";
import profile from "../assets/profilepic.jpg";

function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20 border-b border-gray-800 flex items-center">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Hi, I'm <span className="text-blue-500">Karthik</span>
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6">
            Full Stack Developer & Thumbnail Designer
          </h2>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            I build scalable web applications and design high-converting thumbnails that grab attention and drive engagement.
          </p>

          <a
            href="#projects"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-white font-semibold transition duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          
          {/* Glow Background */}
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

      </div>

    </section>
  );
}

export default Hero;