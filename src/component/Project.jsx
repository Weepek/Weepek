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
import "./Landingpage2.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
   
  const ProjectCard = ({ title, subtitle, image, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-between  bg-gray-300/5 overflow-hidden rounded-3xl group cursor-pointer min-w-[250px] md:w-full  min-h-[250px]"
    aria-label={`View ${title} Project`}
    variants={cardVariants}
  >
    <div className="-translate-x-5">
      <h1 className="transform -rotate-90  text-xl md:text-3xl font-bold text-purple-800 whitespace-nowrap">
        {title}
      </h1>
    </div>
    <img
      src={image}
      alt={`${title} preview`}
      className="w-3/4 h-46 md:h-full -translate-x-10  md:-translate-x-1 justify-center transition-transform duration-750 group-hover:md:-translate-x-10 hover:-translate-x-16 rounded-2xl "
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.target.src = "/assets/fallback-project.webp";
        e.target.onerror = null;
      }}
    />
    {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-yellow-100">
      <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      <p className="text-sm md:text-base">{subtitle}</p>
    </div> */}
  </motion.a>
  );

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
            className="text-2xl lg:text-5xl font-Clash text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-400"
            variants={fadeInVariants}
          >
            {/* <ReactTyped
              strings={typedStrings}
              typeSpeed={50}
              backSpeed={30}
              loop
            /> */}
          </motion.h2>
          <motion.h2
            className="text-3xl font-Clash text-center lg:text-center text-white tracking-[.20em] mt-10"
            variants={fadeInVariants}
          >
            Work
          </motion.h2>
          {/* Catchy Points for Website */}
          <motion.div
            className="mt-4 ml-2.5 font-Nunito justify-center text-center flex text-white/20 text-lg  "
            variants={fadeInVariants}
          >
            <p>Responsive and modern website tailored to your brand</p>
          </motion.div>
        </motion.div>

        {/* website project */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 rounded-3xl gap-6"
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
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform rounded-2xl"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.src = "/assets/fallback-project.webp";
                e.target.onerror = null;
              }}
            />
            <div className="invisible md:visible absolute bottom-0 left-4 p-4  to-transparent w-full">
              <h3 className="text-black text-2xl font-bold">Cake'es</h3>
              <div className="text-xl text-yellow-100 mt-2">
                UI/UX & Website
              </div>
            </div>
          </motion.a>
       
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
            className="text-3xl tracking-[.20em] font-Clash text-center text-white/30 mt-10"
            variants={fadeInVariants}
          >
            UI/UX & Design
          </motion.h2>
          {/* Catchy Points for UI/UX & Design */}
          {/* <motion.div
            className="mt-4  text-center text-gray-300/50  text-xl font-Nunito "
            variants={fadeInVariants}
          >
            <h4>Visually stunning designs crafted for user engagement </h4>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 rounded-3xl gap-6 justify-center items-center "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
              <ProjectCard
            title="LOGO DESIGN"
            subtitle="Web Development"
            image={logodesign2}
            url="https://example.com/another-project"
          />
          <ProjectCard
            title="LOGO DESIGN"
            subtitle="Web Development"
            image={logodesign2}
            url="https://example.com/another-project"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Project);


 