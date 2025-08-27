import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Sample project images (replace with your actual images)
import project1 from "../assets/Screenshot (15).png";
import project2 from "../assets/Screenshot (16).png";
import project3 from "../assets/Screenshot (264).png";

const projects = [
  {
    id: 1,
    title: "Invoice Extractor & Tracker",
    img: project1,
    desc: "Web app with JWT authentication, OCR-based invoice upload, and real-time status tracking. TechStack used are React js, Tailwind CSS, Spring Boot, MongoDB and used Tesseract for OCR Extraction"
  },
  {
    id: 2,
    title: "Trending Movies Web App",
    img: project2,
    desc: "Built a responsive React app integrating the TMDB API to display real-time trending movies with search, detailed info, and favorites functionality. Designed a modern, seamless UI using Tailwind CSS. Tech stack: React.js, Tailwind CSS."
  },
  {
    id: 3,
    title: "Portfolio Platform",
    img: project3,
    desc: "Designed and developed a personal portfolio to showcase my profile and projects. Created the UI in Figma and implemented it using React.js and Tailwind CSS for a modern, responsive experience."
  }
];

const Projects = () => {
  return (
    <section id="projects" className=" bg-gray-900 px-6 py-20 text-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12 text-rose-400">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          My Projects
        </motion.h2>
        <p className="text-gray-400 text-lg">Some of the work I’ve done recently</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
