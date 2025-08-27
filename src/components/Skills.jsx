import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';

const skills = {
  Frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Backend: ['Java', 'REST APIs'],
  Database: ['MySQL'],
  Tools: ['Git & GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA'],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 pb-20 px-6 md:px-20 text-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-rose-400"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-white">
              <FaCode className="text-rose-400" /> Frontend
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {skills.Frontend.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-white">
              <FaCode className="text-rose-400" /> Backend
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {skills.Backend.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Database */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-white">
              <FaDatabase className="text-rose-400" /> Database
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {skills.Database.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-white">
              <FaTools className="text-rose-400" /> Tools & Platforms
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {skills.Tools.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
