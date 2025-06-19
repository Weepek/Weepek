
import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import ser1img from "../assets/ser1img.png";
import ser2img from "../assets/DIGITAL.png";
import ser3img from "../assets/ser3img.png";
import ser4img from "../assets/ser5img.png";
import bac from "../assets/ser2.png";
import { MdRocket } from "react-icons/md";




const serviceDetails = [
 {
  iconPath: ser1img,
  title: "WEB & APP DEVELOPMENT",
  description: "Unlock the magic of app development with tailored, responsive solutions.",
  points: ["Responsive Design", "SEO Optimized", "Fast Loading"]
},
{
  iconPath: ser2img,
  title: "DIGITAL MARKETING",
  description: "Boost your brand visibility with targeted strategies and engaging campaigns.",
  points: ["Social Media Marketing", "Email Campaigns", "Google Ads"]
},
{
  iconPath: ser3img,
  title: "SEO & DOMAIN SETUP",
  description: "Enhance your online reach with expert SEO techniques and reliable domain management.",
  points: ["Keyword Optimization", "Domain Setup", "Performance Tracking"]
},
{
  iconPath: ser4img,
  title: "UI/UX DESIGN",
  description: "Design seamless digital experiences that captivate and convert users effectively.",
  points: ["Wireframing", "Prototyping", "User Research"]
}
];

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = ""; 
  };

  return (
    <section className="py-20  bg-black-100">
      <div className="container mx-auto">
        <motion.div
          className="mb-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-4xl font-bold text-blue-400" variants={fadeInVariants}>
            <ReactTyped strings={["What We Do?", "Our Services!"]} typeSpeed={50} backSpeed={30} loop />
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 2xl:gap-40 max-w-6xl mx-auto mt-6"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-8 rounded-custom-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all group relative overflow-hidden h-96 w-64 mx-auto"
              style={{
                backgroundImage: `url(${bac})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "2.5rem",
              }}
            >
              <div className="absolute inset-0 bg-black/50 z-0"></div>
              <div className="relative z-10 flex flex-col h-full justify-start space-y-6">
                <div>
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all">
                    <img
                      src={service.iconPath}
                      alt={service.title}
                      onError={handleImageError}
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                {/* <p className="text-gray-300">{service.description}</p> */}
                <ul className="text-sm text-gray-200 space-y-1 list-none">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                   <MdRocket className="text-purple-400" />
                   {point}
                  </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
