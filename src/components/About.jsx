import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-pic.jpg'; // replace with your image
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gray-950 py-20 px-6 md:px-20 text-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={aboutImg}
              alt="Sakthi Full Stack Developer"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rose-400">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            I’m a Computer Science student passionate about building modern, responsive, and user-friendly web applications. I specialize in crafting dynamic React interfaces and bringing ideas to life with clean, maintainable code.
            With a strong foundation in computer science and hands-on frontend project experience, I’m constantly learning new tools and best practices to enhance my skills. I also plan to expand my expertise into backend development using Java, aiming to become a well-rounded full stack developer.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            I’m actively seeking internship opportunities where I can contribute to impactful products and grow within a dynamic tech environment.
          </p>

          {/* Subsection: Education */}
          <div className="mt-6 bg-white/10 p-5 rounded-xl shadow-inner">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-rose-300 mb-2">
                <FaGraduationCap /> Education
            </h3>
            <ul className="text-gray-300 space-y-1 text-sm leading-relaxed">
              <li><span className="font-medium text-white">Pursuing Bachelor of Computer Application (BCA)</span> — (2023–2026)</li>
              <li>Graduating with strong fundamentals in data structures, algorithms, OOP, and full stack development.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
