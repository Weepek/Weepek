 


import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo3.png';

function Footer() {
  const navigate = useNavigate();

  const socialIcons = [
    { Icon: FaFacebookF, color: 'hover:text-blue-600', href: '#' },
    { Icon: RiTwitterXFill, color: 'hover:text-black', href: '#' },
    { Icon: FaInstagram, color: 'hover:text-pink-500', href: 'https://www.instagram.com/weepek_?igsh=MTU2MTJqcW1iY3N1' },
    { Icon: FaWhatsapp, color: 'hover:text-green-600', href: 'https://wa.me/7010039610' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative spotlight gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

      <footer className="py-14 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
         initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          
          {/* Left Section - Social Icons Centered Vertically */}
          <motion.div
            className="flex justify-start items-center h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-6 items-center">
              {socialIcons.map(({ Icon, color, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={26} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Logo and Branding */}
          <motion.div
            className="flex justify-center md:justify-end items-center "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={logo} alt="Weepek logo" className="w-12 h-12 object-contain" />
            <div
              onClick={() => navigate('/weepek')}
              className="text-4xl font-extrabold bg-gradient-to-r from-[#6E3AD6] to-[#5A91E2] text-transparent bg-clip-text cursor-pointer tracking-wide"
            >
              eepek
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © {new Date().getFullYear()} Weepek. All rights reserved.
        </motion.div>
      </footer>
    </div>
  );
}

export default Footer;


 