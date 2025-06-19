
// import React from "react";
// import './Feaatures.css';  
// import Aboutus from "../assets/contact.png";

// function HeroSection() {
//     return (
 
//         <section className="hero-section text-white py-50">
//             <div className="container mx-auto px-6 text-center">
//                 <h1 className="text-5xl font-bold mb-4">Empowering Businesses with Cutting-Edge Digital Website</h1>
//                 <p className="text-xl mb-8">At Weepek, we are your strategic technology partner, transforming ideas into dynamic, scalable solutions.</p>
//                 <button
//                   className="relative px-4 py-2 border border-purple-200 text-white rounded-full group overflow-hidden"
//                   aria-label="Open contact form"
//                 >
//                   <span className="absolute inset-0 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
//                   <span className="absolute inset-0 flex items-center justify-center z-0">
//                     <span className="w-0 h-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-1000 ease-in-out"></span>
//                   </span>
//                   <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
//                   <span className="relative z-10">Get Started</span>
//                 </button>
//             </div>
//         </section>
//     );
// }

// function AboutSection() {
//     return (
//         <section className="py-16 bg-black">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-start text-gray-500 mb-12">Who We Are</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div>
//                         <p className="text-lg text-gray-200 mb-4">Since our founding in 2023, <span className="text-bold text-normal text-purple-500">Weepek</span> has been dedicated to helping businesses of all sizes build a powerful digital presence. With over a decade of experience, we specialize in innovative Web and Mobile App Development, turning ideas into scalable solutions that drive growth and engagement.</p>
//                         <p className="text-lg text-gray-200">Our journey has seen us work with industries like retail, automotive, lifestyle, and emerging startups, delivering tailored solutions that resonate with their unique needs.</p>
//                     </div>
                    
//                     <div className="flex justify-center">
//                         <img src={Aboutus} alt="Weepek Team" className="w-full max-w-[400px] md:max-w-[400px] rounded-lg shadow-2xl transition-all duration-500 hover:scale-105  mt-5 md:-mt-20" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function ExpertiseSection() {
//     return (
//         <section className="py-16 bg-black">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center text-gray-400 mb-12">Our Expertise</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {[
//                         { title: "Custom Software Development", desc: "Tailored solutions that align perfectly with your business goals, built with precision and innovation." },
//                         { title: "Web & Mobile App Development", desc: "High-performance websites and feature-rich iOS/Android apps to boost engagement and retention." },
//                         { title: "UI/UX Design & Branding", desc: "Intuitive designs and cohesive brand identities that create meaningful user experiences." }
//                     ].map((item, index) => (
//                         <div key={index} className="p-6 card-bg rounded-lg card-hover transition">
//                             <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
//                             <p className="text-gray-200">{item.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// function WhyChooseSection() {
//     const features = [
//         { icon: "🚀", title: "Proven Experience", desc: "Over 2+ years delivering successful projects across retail, automotive, and startups." },
//         { icon: "🎨", title: "Brand-Driven Approach", desc: "Crafting cohesive digital experiences that build trust and loyalty." },
//         { icon: "🌐", title: "Collaborative & Transparent", desc: "Agile processes and clear communication for seamless partnerships." },
//         { icon: "⚙️", title: "Scalable & Future-Proof", desc: "Solutions designed to evolve with your business, ensuring long-term success." }
//     ];

//     return (
//         <section className="py-16 bg-black">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center text-gray-200 mb-12">Why Choose Weepek?</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {features.map((item, index) => (
//                         <div key={index} className="text-center">
//                             <div className="text-4xl opacity-80 mb-4">{item.icon}</div>
//                             <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
//                             <p className="text-gray-400">{item.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// // function AchievementsSection() {
// //     const achievements = [
// //         // { title: "Industry Recognition", desc: "Awarded 'Best Digital Agency 2023' by Tech Innovate Awards for our innovative solutions." },
// //         { title: "Client Success", desc: '"Weepek transformed our digital presence with a stunning app!" – Retail Client' },
// //         { title: "Global Reach", desc: "Served 100+ clients across 10+ countries, driving digital transformation worldwide." }
// //     ];

// //     return (
// //         <section className="py-16  bg-black">
// //             <div className="container  mx-auto  px-6">
// //                 <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Achievements</h2>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
// //                     {achievements.map((item, index) => (
// //                         <div key={index} className="p-6 bg-gray-50 rounded-lg text-center card-hover transition">
// //                             <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
// //                             <p className="text-gray-600">{item.desc}</p>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// function MissionVisionSection() {
//     return (
//         <section className="py-16 bg-black">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center text-gray-300 mb-12">Our Mission & Vision</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="p-6 bg-white rounded-lg shadow-lg card-hover transition">
//                         <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h3>
//                         <p className="text-gray-600">To empower businesses with cutting-edge technology and creative innovation, helping them thrive in the digital era.</p>
//                     </div>
//                     <div className="p-6 bg-gray-700 rounded-lg shadow-lg card-hover transition">
//                         <h3 className="text-2xl font-semibold text-purple-500 mb-4">Our Vision</h3>
//                         <p className="text-white">To be a trusted global partner in digital transformation, known for creativity, technical excellence, and client success.</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function TeamCultureSection() {
//     return (
//         <section className="py-16 bg-black">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center text-gray-200 mb-12">Our Team Culture</h2>
//                 <p className="text-lg text-gray-400 text-center mb-8">At Weepek, our team is driven by a passion for innovation, collaboration, and excellence. We foster a culture of creativity, where every idea is valued, and continuous learning keeps us ahead of the curve. Our values include integrity, transparency, and a relentless commitment to delivering exceptional results for our clients.</p>
//                 {/* <div className="flex justify-center">
//                     <img src="https://via.placeholder.com/600x300" alt="Team Culture" className="rounded-lg shadow-lg" />
//                 </div> */}
//             </div>
//         </section>
//     );
// }

// function ContactSection() {
//     return (
//         <section id="contact" className="py-16  bg-black text-white">
//             <div className="container mx-auto px-6 text-center">
//                 <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
//                 <p className="text-lg mb-8">Partner with Weepek to bring your ideas to life with innovative, scalable solutions.</p>
//                 <a href="mailto:contact@weepek.com" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">Contact Us</a>
//             </div>
//         </section>
//     );
// }

// // function Footer() {
// //     return (
// //         <footer className="bg-gray-800 text-white py-8">
// //             <div className="container mx-auto px-6 text-center">
// //                 <p>© 2025 Weepek. All rights reserved.</p>
// //             </div>
// //         </footer>
// //     );
// // }

// function Features() {
//     return (
//         <div className="bg-gray-100">
//             <HeroSection />
//             <AboutSection />
//             <ExpertiseSection />
//             <WhyChooseSection />
//             {/* <AchievementsSection /> */}
//             <MissionVisionSection />
//             <TeamCultureSection />
//             <ContactSection />
//             {/* <Footer /> */}
//         </div>
//     );
// }

// export default Features;

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import './Feaatures.css';
import Aboutus from "../assets/contact.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="hero-section relative text-white py-32"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide"
        >
          Empowering Businesses with Cutting-Edge Digital Solutions
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl mb-10 text-gray-200"
        >
          At Weepek, we transform ideas into dynamic, scalable experiences.
        </motion.p>
        {/* <motion.button
          variants={fadeInUp}
          className="relative px-6 py-3 text-lg border border-purple-300 text-white rounded-full overflow-hidden group transition-all duration-500 hover:scale-105"
          aria-label="Open contact form"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative z-10">Get Started</span>
        </motion.button> */}
        <a href="/weepek/contact">
         <button
                  className="relative px-4 py-2 border border-purple-200 text-white rounded-full group overflow-hidden"
                  aria-label="Open contact form"
                >
                  <span className="absolute inset-0 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
                  <span className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="w-0 h-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-1000 ease-in-out"></span>
                  </span>
                  <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
                  <span className="relative z-10">Get Started</span>
                </button>
                </a>
      </div>
    </motion.section>
  );
}

function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br "></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-start text-gray-200 mb-12"
        >
          Who We Are
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            className="text-gray-300 text-lg space-y-6"
          >
            <p>
              Since our founding in <strong className="text-purple-400">2023</strong>, <span className="font-bold text-purple-500">Weepek</span> has been dedicated to helping businesses of all sizes build a powerful digital presence.
            </p>
            <p>
              We specialize in innovative Web & Mobile App Development, UI/UX design, and scalable cloud solutions.
            </p>
            <p>
              Our journey includes partnerships with retail, automotive, lifestyle brands, and emerging startups.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <img src={Aboutus} alt="Weepek Team" className="w-full max-w-[400px] md:max-w-[400px] rounded-lg shadow-2xl transition-all duration-500 hover:scale-105 mt-5 md:-mt-20" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ExpertiseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="  "
    >
      {/* <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-300 mb-12"
        >
          Our Expertise
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Custom Software Development", desc: "Tailored solutions that align perfectly with your business goals, built with precision and innovation." },
            { title: "Web & Mobile App Development", desc: "High-performance websites and feature-rich iOS/Android apps to boost engagement and retention." },
            { title: "UI/UX Design & Branding", desc: "Intuitive designs and cohesive brand identities that create meaningful user experiences." }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div> */}
    </motion.section>
  );
}

function WhyChooseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const features = [
    { icon: "🚀", title: "Proven Experience", desc: "Over 2+ years delivering successful projects across retail, automotive, and startups." },
    { icon: "🎨", title: "Brand-Driven Approach", desc: "Crafting cohesive digital experiences that build trust and loyalty." },
    { icon: "🌐", title: "Collaborative & Transparent", desc: "Agile processes and clear communication for seamless partnerships." },
    { icon: "⚙️", title: "Scalable & Future-Proof", desc: "Solutions designed to evolve with your business, ensuring long-term success." }
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-200 mb-12"
        >
          Why Choose Weepek?
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 bg-gradient-to-br from-purple-700 to-blue-700 rounded-xl text-center text-white shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function MissionVisionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-gradient-to-tl from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-300 mb-12"
        >
          Our Mission & Vision
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">To empower businesses with cutting-edge technology and creative innovation, helping them thrive in the digital era.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="p-8 bg-gradient-to-tr from-purple-700 to-blue-700 rounded-lg shadow-lg text-white transform hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>To be a trusted global partner in digital transformation, known for creativity, technical excellence, and client success.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TeamCultureSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20  bg-gradient-to-bl  from-black to-gray-900" 
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-200 mb-12"
        >
          Our Team Culture
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-400 text-center mb-8 max-w-4xl mx-auto"
        >
          At Weepek, our team is driven by a passion for innovation, collaboration, and excellence. We foster a culture of creativity where every idea is valued, and continuous learning keeps us ahead of the curve. Our values include integrity, transparency, and a relentless commitment to delivering exceptional results for our clients.
        </motion.p>
      </div>
    </motion.section>
  );
}

function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      id="contact"
      className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white text-center"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-8"
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg mb-8"
        >
          Partner with Weepek to bring your ideas to life with innovative, scalable solutions.
        </motion.p>
        <motion.a
          variants={fadeInUp}
          href="mailto:contact@weepek.com"
          className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105 inline-block"
        >
          Contact Us
        </motion.a>
      </div>
    </motion.section>
  );
}

function Features() {
  return (
    <div className="bg-gray-100 font-sans">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <WhyChooseSection />
      <MissionVisionSection />
      <TeamCultureSection />
      {/* <ContactSection /> */}
    </div>
  );
}

export default Features;