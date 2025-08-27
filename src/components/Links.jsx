import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiFileText } from "react-icons/fi";

const Links = () => {
  return (
    <section id="links" className=" bg-gray-950 px-6 pt-5 pb-20 text-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Explore More
        </motion.h2>
        <p className="text-gray-400 md:text-lg text-base">
          Here are my professional resources — check out my GitHub for projects and my resume for career details.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-3xl mx-auto">
        {/* GitHub Link */}
        <motion.a
          href="https://github.com/sakthi223" // replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-xl hover:bg-white/20 transition w-full md:w-auto justify-center"
        >
          <FiGithub className="text-2xl text-rose-400" />
          <div className="flex flex-col text-left">
            <span className="md:text-lg text-base font-semibold">GitHub</span>
            <span className="text-gray-400 text-sm">Explore my works</span>
          </div>
        </motion.a>

        {/* Resume Link */}
        <motion.a
          href="/Sakthi-Resume.pdf" // replace with actual resume file path
          target="_blank"
          download="Sakthi_Resume.pdf" // optional: rename file when downloading
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-xl hover:bg-white/20 transition w-full md:w-auto justify-center"
        >
          <FiFileText className="text-2xl text-rose-400" />
          <div className="flex flex-col text-left">
            <span className="md:text-lg text-base font-semibold">Resume</span>
            <span className="text-gray-400 text-sm">Download my latest resume</span>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Links;
