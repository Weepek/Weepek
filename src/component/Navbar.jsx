import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ToggleLeft, ToggleRight } from "lucide-react";
import logo from "../assets/logo3.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isHomeInView, setIsHomeInView] = useState(true);
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", link: "/weepek/" },
    { id: "about", label: "About", link: "/weepek/About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact Us", link: "/weepek/contact" }
  ];

  const services = [
    "Landing Page",
    "E-commerce Page",
    "Mobile App",
    "Custom Website",
    "Other"
  ];

  useEffect(() => {
    // Observe the home section to detect when it's in view
    const homeSection = document.getElementById("home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  useEffect(() => {
    // Handle hash-based scrolling after navigation
    const hash = location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/weepek/") {
      // Navigate to home page with hash
      window.location.href = `/weepek/#${sectionId}`;
    } else {
      // Scroll to section if already on home page
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9418dc6a-6fa2-4fd2-b812-99070a75a8bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      setSelectedService("");
      setIsModalOpen(false);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 10000);
    } else {
      console.log("Error", data);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <>
      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gray-950 text-white px-6 py-3 rounded-b-lg shadow-lg">
            Your message has been sent! We will get in touch soon.
          </div>
        </motion.div>
      )}

      {/* Desktop Navbar */}
      {isHomeInView && location.pathname === "/weepek/" && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed w-[90%] md:w-[70%] lg:w-[80%] left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-b-3xl"
        >
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="w-12" src={logo} alt="Eepek logo" />
                <div
                  className="text-3xl font-bold bg-gradient-to-r from-[#6E3AD6] to-[#5A91E2] text-transparent bg-clip-text cursor-pointer"
                  onClick={() => scrollToSection("home")}
                  aria-label="Go to home section"
                >
                  eepek
                </div>
              </div>

              <div className="hidden gap-6 lg:flex lg:items-center lg:space-x-8">
                {navItems.map((item) => (
                  <span
                    key={item.id}
                    className="relative group mx-2 inline-block"
                  >
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="text-blue-100 hover:text-blue-300 text-xl hover:text-third transition-all duration-200  "
                        aria-label={`Go to ${item.label} page`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-blue-100 hover:text-blue-300 text-xl hover:text-third transition-colors  tansition-all duration-200 "
                        aria-label={`Go to ${item.label} section`}
                      >
                        {item.label}
                      </button>
                    )}

                    {/* Hover underline animation */}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-500 transition-all duration-500 group-hover:w-5"></span>
                  </span>
                ))}
              </div>

              {/* Get In Touch */}
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  className="relative px-4 py-2 border border-purple-200 text-white rounded-full group overflow-hidden    "
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Open contact form"
                >
                  <span className="absolute inset-0 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
                  <span className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="w-0 h-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 rounded-full group-hover:w-64 group-hover:h-64 group-hover:opacity-100 transition-all duration-1200 ease-in-out"></span>
                  </span>
                  <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse" />
                  <span className="relative z-10">Get In Touch</span>
                </button>
              </div>

              <button
                className="lg:hidden text-primary focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>

            {/* Mobile content */}
            {isOpen && (
              <motion.div
                className="lg:hidden bg-gray-900 border border-white/20 rounded-b-2xl shadow-lg mt-2 px-6 py-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
              >
                <div className="flex flex-col items-center space-y-4">
                  {navItems.map((item) => (
                    <span key={item.id} className="w-full">
                      {item.link ? (
                        <Link
                          to={item.link}
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-center text-primary text-lg font-medium py-2 rounded-md hover:bg-white/10 transition duration-200"
                          aria-label={`Go to ${item.label} page`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="block w-full text-center text-primary text-lg font-medium py-2 rounded-md hover:bg-white/10 transition duration-200"
                          aria-label={`Go to ${item.label} section`}
                        >
                          {item.label}
                        </button>
                      )}
                    </span>
                  ))}

                  {/* Get In Touch button */}
                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition duration-200 outline-offset-10"
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsOpen(false);
                    }}
                    aria-label="Open contact form"
                  >
                    Get In Touch
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>
      )}

      {/* Floating Button */}
      {(!isHomeInView || location.pathname !== "/weepek/") && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8 }}
          className="fixed top-6 right-6 z-50"
        >
          <div className="relative">
            <motion.button
              className="bg-gradient-to-r from-[#6E3AD6] to-[#5A91E2] p-3 rounded-full shadow-lg text-white hover:shadow-xl transition-shadow"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {isOpen ? (
                <ToggleRight className="w-6 h-6" />
              ) : (
                <ToggleLeft className="w-6 h-6" />
              )}
            </motion.button>
            {isOpen && (
              <motion.div
                className="absolute right-0 top-14 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-4 w-48"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item) => (
                  <span key={item.id}>
                    {item.link ? (
                      <Link
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm font-medium text-gray-800 hover:text-purple-700 w-full text-left py-2 px-3 rounded-md hover:bg-gray-100/50 transition-colors"
                        aria-label={`Go to ${item.label} page`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsOpen(false);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            scrollToSection(item.id);
                            setIsOpen(false);
                          }
                        }}
                        tabIndex={0}
                        className="block text-sm font-medium text-gray-800 hover:text-blue-500 w-full text-left py-2 px-3 rounded-md hover:bg-gray-100/50 transition-colors"
                        aria-label={`Go to ${item.label} section`}
                      >
                        {item.label}
                      </button>
                    )}
                  </span>
                ))}
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setIsModalOpen(true);
                      setIsOpen(false);
                    }
                  }}
                  tabIndex={0}
                  className="cursor-pointer text-sm font-medium text-gray-800 bg-gradient-to-br from-purple-300 to-blue-200 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-purple-300 hover:text-blue-600 w-full text-left py-2 px-3 rounded-md hover:bg-gray-100/50 transition-colors"
                  aria-label="Open contact form"
                >
                  Get In Touch
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
          <motion.div
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-6 w-[90%] max-w-md rounded-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={() => {
                setIsModalOpen(false);
                setSelectedService("");
              }}
              className="absolute top-3 right-3 text-white hover:text-gray-300"
              aria-label="Close contact form"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold text-white text-center">
              Join Us
            </h2>
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
                aria-label="Your name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
                aria-label="Your email"
              />
              <input
                type="text"
                name="Mobile Number"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
                aria-label="Your mobile number"
              />
              <select
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
                aria-label="Select a service"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="text-black">
                    {service}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                required
                aria-label="Your message"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
                aria-label="Send message"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Navbar;
