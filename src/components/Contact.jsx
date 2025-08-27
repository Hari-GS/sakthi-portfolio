import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className=" bg-gray-950 px-6 py-20 text-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-2 text-rose-400"
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-400 md:text-lg text-base">Let's work together! Contact me via any of the options below.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
        {/* Phone */}
        <motion.a
          href="tel:+911234567890" // replace with your phone
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-xl hover:bg-white/20 transition w-full md:w-auto justify-center"
        >
          <FiPhone className="text-2xl text-rose-400" />
          <span className="md:text-lg text-base">+91 9047779971</span>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:sakthivigneshwaridev05@gmail.com" // replace with your email
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-xl hover:bg-white/20 transition w-full md:w-auto justify-center"
        >
          <FiMail className="text-2xl text-rose-400" />
          <span className="md:text-lg text-base">sakthivigneshwaridev05@gmail.com</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/sakthi-vigneshwari-a057a32a9/" // replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-xl hover:bg-white/20 transition w-full md:w-auto justify-center"
        >
          <FiLinkedin className="text-2xl text-rose-400" />
          <span className="md:text-lg text-base">LinkedIn</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
