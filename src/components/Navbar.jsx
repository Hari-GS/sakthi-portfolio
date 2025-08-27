import React from 'react';

const Navbar = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-900 py-4 px-6 md:px-16 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-200">
        
        {/* Logo / Name */}
        <div className="text-2xl font-semibold tracking-wide text-rose-400">
          Sakthi Vigneshwari G
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link, idx) => (
            <li key={idx} className="relative group cursor-pointer">
              <a 
                href={link.href} 
                className="transition-colors duration-200 group-hover:text-rose-400"
              >
                {link.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden">
          {/* Add mobile menu logic here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
