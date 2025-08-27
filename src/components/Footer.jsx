import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3"
      >
        {/* Name / Branding */}
        <span className="text-gray-300 font-semibold md:text-lg text-base">
          © {new Date().getFullYear()} Sakthi. All Rights Reserved.
        </span>

        {/* Optional subtle note */}
        <span className="text-sm text-gray-500">
          Designed & Built with ❤️ !
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
