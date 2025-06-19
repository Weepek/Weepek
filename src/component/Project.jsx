 

// import React from "react";
// import { motion } from "framer-motion";
// import { ReactTyped } from "react-typed";
// import featureimg from "../assets/pro1.png";

// function Project() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.05 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 10 },
//     },
//   };

//   const fadeInVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 10 },
//     },
//   };

//   return (
//     <section className="py-20 bg-black">
//       <div className="container mx-auto px-6">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.h2
//             className="text-xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mt-4"
//             variants={fadeInVariants}
//           >
//             <ReactTyped
//               strings={["Projects", "We Create"]}
//               typeSpeed={50}
//               backSpeed={30}
//               loop
//             />
//           </motion.h2>
//         </motion.div>

//         {/* Grid Section */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6  "
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Card 1 */}
//           <motion.a
//             href="https://cakees-fooi.onrender.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative block overflow-hidden rounded-lg group"
//             variants={cardVariants}
//           >
//             <img
//               src={featureimg}
//               alt="Cake'es project"
//               className=" object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
//               <h3 className="text-yellow-100 text-2xl font-bold">Cake'es</h3>
//               <div className="text-xl text-yellow-100 mt-2">UI/UX & Website</div>
//             </div>
//           </motion.a>

//           {/* Card 2 - Updated with different content */}
//           <motion.a
//             href="https://example.com/another-project" // Replace with actual URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative block overflow-hidden rounded-lg group"
//             variants={cardVariants}
//           >
//             <img
//               src={featureimg} // Use a different image
//               alt="Another project"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
//               <h3 className="text-yellow-100 text-2xl font-bold">Another Project</h3>
//               <div className="text-xl text-yellow-100 mt-2">Web Development</div>
//             </div>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Project;
 
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import featureimg from "../assets/pro1.webp";
import featureimg2 from "../assets/pro1.webp";  
import logodesign from "../assets/logodesign1.jpg"; 
import logodesign2 from "../assets/logodesign2.jpg"; 
import './Landingpage2.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Project = () => {
  const typedStrings = useMemo(() => ["Our Works", "We Create!"], []);

  return (
    <section className="py-20 bg-black">
      {/* Website Section */}
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-xl lg:text-5xl font-Clash text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-400"
            variants={fadeInVariants}
          >
            <ReactTyped
              strings={typedStrings}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.h2>
          <motion.h2
            className="text-xl lg:text-7xl font-Clash   bg-gradient-to-r from-[#9e85cf] to-[#0b07d3] text-transparent bg-clip-text  mt-20 text-start"
            variants={fadeInVariants}
          >
            Website
          </motion.h2>
          {/* Catchy Points for Website */}
          <motion.div
            className="mt-4 ml-2.5 font-Nunito   flex text-gray-300 text-2xl  "
            variants={fadeInVariants}
          >
            <p  >Responsive and modern website tailored to your brand</p>
            
          </motion.div>
        </motion.div>
          
          {/* website project */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 rounded-3xl gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href="https://cakees-fooi.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden group animated-border-btn"
            variants={cardVariants}
            aria-label="View Cake'es project"
          >
            <img
              src={featureimg}
              alt="Cake'es UI/UX and website project"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102 will-change-transform"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.src = "/assets/fallback-project.webp";
                e.target.onerror = null;
              }}
            />
            <div className="absolute bottom-0 left-4 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h3 className="text-yellow-100 text-2xl font-bold">Cake'es</h3>
              <div className="text-xl text-yellow-100 mt-2">UI/UX & Website</div>
            </div>
          </motion.a>

          {/* <motion.a
            href="https://example.com/another-project"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-lg group animated-border-btn"
            variants={cardVariants}
            aria-label="View Another Project"
          >
            <img
              src={featureimg2}
              alt="Another web development project"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102 will-change-transform"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.src = "/assets/fallback-project.webp";
                e.target.onerror = null;
              }}
            />
            <div className="absolute bottom-0 left-4 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h3 className="text-yellow-100 text-2xl font-bold">Another Project</h3>
              <div className="text-xl text-yellow-100 mt-2">Web Development</div>
            </div>
          </motion.a> */}
        </motion.div>
      </div>

      {/* UI/UX & Design Section */}
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-7xl font-Clash text-center bg-gradient-to-r from-[#9e85cf] to-[#0b07d3] text-transparent bg-clip-text mt-10"
            variants={fadeInVariants}
          >
            UI/UX & Design
          </motion.h2>
          {/* Catchy Points for UI/UX & Design */}
          <motion.div
            className="mt-4  text-center  text-gray-300 text-2xl font-Nunito "
            variants={fadeInVariants}
          >
             <h4>Visually stunning designs crafted for user engagement </h4>
           
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-3xl gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href="https://cakees-fooi.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-lg group animated-border-btn"
            variants={cardVariants}
            aria-label="View Cake'es project"
          >
            <img
              src={logodesign}
              alt="Cake'es UI/UX and website project"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.src = "/assets/logodesign1.jpg";
                e.target.onerror = null;
              }}
            />
            <div className="absolute bottom-0 left-4 p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-yellow-100 text-2xl font-bold">Logo Design</h3>
              <div className="text-xl text-yellow-100 mt-2">UI/UX & Website</div>
            </div>
          </motion.a>

          <motion.a
            href="https://example.com/another-project"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-lg group animated-border-btn"
            variants={cardVariants}
            aria-label="View Another Project"
          >
            <img
              src={logodesign2}
              alt="Another web development project"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.src = "/assets/fallback-project.webp";
                e.target.onerror = null;
              }}
            />
            <div className="absolute bottom-0 left-4 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 className="text-yellow-100 text-2xl font-bold">Another Project</h3>
              <div className="text-xl text-yellow-100 mt-2">Web Development</div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Project);