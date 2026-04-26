import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "916304808790"; // replace if needed
    const text = `Hello, I'm ${name}. ${message}`;
    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full bg-gray-900 text-white px-6 py-16 border-b border-gray-800 flex items-center justify-center">
      
      <div className="max-w-4xl w-full mx-auto px-4 relative">

        {/* Glow Background */}
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left text-blue-400 tracking-tight">
            Contact Me
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Send via WhatsApp
            </button>

          </form>

          {/* DIVIDER */}
          <div className="my-6 border-t border-gray-700"></div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap gap-4 justify-start">
            
            <a
              href="https://github.com/karthikyerlajella"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/karthik-yerlajella/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition duration-300"
            >
              LinkedIn
            </a>

            <p className="text-gray-400 flex items-center">
              📧 karthik.yerlajella@gmail.com
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;