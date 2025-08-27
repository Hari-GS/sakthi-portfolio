import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { FiGithub, FiMail, FiArrowRight } from 'react-icons/fi';
import { DiJava } from 'react-icons/di';
import { SiReact, SiMongodb, SiSpring } from 'react-icons/si';
import { FiDownload } from "react-icons/fi";
import profileImg from '../assets/main-profile.jpg';

const Hero = () => {
  return (
    <section id='home' className="min-h-screen bg-gray-900 flex items-center justify-center px-4 relative overflow-hidden md:pt-0 pt-20">
      {/* Tech Icons Floating Around */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-10 text-5xl text-rose-500"><SiReact /></div>
        <div className="absolute bottom-10 left-1/4 text-4xl text-emerald-400"><SiMongodb /></div>
        <div className="absolute top-20 right-16 text-4xl text-yellow-300"><DiJava /></div>
        <div className="absolute bottom-16 right-10 text-4xl text-green-400"><SiSpring /></div>
      </motion.div>

      <div className="relative max-w-lg w-full z-10">
        {/* Profile Image Container */}
        <motion.div
          whileHover={{ rotateX: 8, rotateY: -8 }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-40 h-40 mx-auto -mb-20 z-20"
        >
          {/* Pulsing Glow */}
          <div className="absolute inset-0 rounded-full bg-rose-500 opacity-20 blur-2xl animate-pulse z-[-1]"></div>
          
          {/* Gradient Ring & Image */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-rose-400 to-pink-500 p-[3px] shadow-lg">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-full object-cover w-full h-full border-[3px] border-gray-900"
            />
          </div>

          {/* Floating Glass Card Behind Image */}
          <div className="absolute inset-[-20px] bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl -z-10"></div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl pt-28 pb-10 px-6 md:px-10 text-center text-gray-100"
        >
          <h1 className="text-xl md:text-4xl font-bold mb-2 relative inline-block">
            <span className="relative z-10">Hi, I'm Sakthi</span>
          </h1>
          <p className=" text-base md:text-lg text-gray-300">
            Frontend Developer specializing in React, with strong Java expertise
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-rose-500 text-white px-5 py-2 rounded-lg hover:bg-rose-600 transition"
            >
              View Work <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-rose-400 text-rose-400 px-5 py-2 rounded-lg hover:bg-rose-500 hover:text-white transition"
            >
              Contact <FiMail />
            </a>
            <a
              href="/resume.pdf" // put the actual path of your resume file in the public folder
              download="Sakthi_Resume.pdf" // optional: rename file when downloading
              className="flex items-center gap-2 border border-gray-500 text-gray-300 px-5 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Download Resume <FiDownload />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
