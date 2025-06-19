import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import web from "../assets/web1.webp";
import mobile from "../assets/mobile.webp";
import Brand from "../assets/Brand.webp";
import stategic from "../assets/stategic.webp";
import seo from "../assets/seo.webp";
import customeaapp from "../assets/customeaapp.png";
import robotic from "../assets/Robotic.webp";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Fallback image for service images
const fallbackImage = "/assets/fallback-service.png";

const serviceDetails = [
  {
    title: "Custom Website Services",
    features: [
      { subtitle: "✅ Responsive Design" },
      { subtitle: "⚡ Fast Loading" },
      { subtitle: "🔒 Secure & Reliable" },
      { subtitle: "🛠️ Custom Features" },
      { subtitle: "🧹 Easy Maintenance" },
    ],
    moreDetails: `We build fast, secure, and mobile-friendly websites tailored to your brand. From responsive design to custom features, everything is optimized for performance and growth.`,
    image: web,
    icon: "🌐",
  },
  {
    title: "Mobile Application Development",
    features: [
      { subtitle: "🔄 Cross-Platform Support" },
      { subtitle: "🧩 Custom APIs" },
      { subtitle: "🎯 User-Friendly Design" },
      { subtitle: "🔁 Ongoing Support" },
      { subtitle: "📈 Scalable Architecture" },
      { subtitle: "💡 Feature-Rich" },
    ],
    moreDetails: `We develop smooth, feature-rich apps for Android and iOS. Designed for scalability, performance, and a seamless user experience across devices.`,
    icon: "📱",
    image: mobile,
  },
  {
    title: "Logo & Brand Identity Design",
    features: [
      { subtitle: "🎨 Creative Concepts" },
      { subtitle: "📏 Scalable Designs" },
      { subtitle: "🧭 Brand Consistency" },
      { subtitle: "📂 Multiple Formats" },
      { subtitle: "🌀 Variety of Styles" },
    ],
    moreDetails: `Unique logos and full brand identity systems that reflect your values. Delivered in all formats, ready for digital and print use.`,
    icon: "🎨",
    image: Brand,
  },
  {
    title: "Digital Marketing Solutions",
    features: [
      { subtitle: "📱 Social Media Management" },
      { subtitle: "💰 Paid Advertising" },
      { subtitle: "📧 Email Marketing" },
      { subtitle: "✍️ Content Creation" },
      { subtitle: "📊 Performance Tracking" },
    ],
    moreDetails: `Boost your online presence with targeted ads, engaging content, and social media strategies. We drive traffic, leads, and measurable growth.`,
    icon: "📢",
    image: stategic,
  },
  {
    title: "SEO (Search Engine Optimization)",
    features: [
      { subtitle: "🔍 Website Audits" },
      { subtitle: "🗝️ Keyword Research" },
      { subtitle: "📝 On-Page SEO" },
      { subtitle: "🔗 Link Building" },
      { subtitle: "📈 Analytics & Reporting" },
    ],
    moreDetails: `Rank higher on Google with our complete SEO solutions—from keyword research to link building and performance reporting.`,
    icon: "🔍",
    image: seo,
  },
  {
    title: "Robotic Process Automation with UiPath",
    features: [
      { subtitle: "🤖 Automate Tasks" },
      { subtitle: "🧠 Custom Bots" },
      { subtitle: "✅ Improve Accuracy" },
      { subtitle: "📦 Scalable Solutions" },
      { subtitle: "🔌 System Integration" },
    ],
    moreDetails: `Automate repetitive tasks and boost accuracy using UiPath. We build custom bots to streamline your operations and save time.`,
    icon: "🤖",
    image: robotic,
  },
  {
    title: "Custom Business Applications with Zoho Creator",
    features: [
      { subtitle: "📲 Custom Apps" },
      { subtitle: "🔁 Automated Workflows" },
      { subtitle: "📱 Multi-Device Access" },
      { subtitle: "☁️ Secure Cloud" },
    ],
    moreDetails: `Create powerful internal apps without coding. Automate workflows, access data securely from any device, and scale with ease.`,
    icon: "🧩",
    image: customeaapp,
  },
];

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    className={`arrow-button arrow-button-${direction} ${disabled ? "arrow-button-disabled" : ""}`}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    }}
    disabled={disabled}
    aria-label={`Navigate to ${direction} slide`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 hover:bg-purple-100 rounded-3xl text-white transition-all duration-500 p-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
);

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupIndex, setPopupIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const totalSlides = serviceDetails.length;

  // Handle image loading errors
  const handleImageError = (e) => {
    console.warn(`Image failed to load: ${e.target.src}, using fallback`);
    e.target.src = fallbackImage;
    e.target.onerror = null; // Prevent infinite loop if fallback also fails
  };

  // Preload images for current, next and previous slides
  useEffect(() => {
    const imagesToPreload = [
      currentIndex,
      (currentIndex + 1) % totalSlides,
      (currentIndex - 1 + totalSlides) % totalSlides
    ].map(idx => serviceDetails[idx].image);

    imagesToPreload.forEach((src) => {
      if (!loadedImages[src]) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [src]: true }));
        };
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          img.src = fallbackImage;
        };
      }
    });
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    // Ensure containerRef is assigned
    if (!containerRef.current) return;

    // GSAP animations
    const ctx = gsap.context(() => {
      // Delay ScrollTrigger refresh to ensure DOM is ready
      gsap.delayedCall(0.1, () => {
        ScrollTrigger.refresh();
      });

      // Parallax for particles
      gsap.utils.toArray(".particle", containerRef.current).forEach((element) => {
        gsap.to(element, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });

      // Parallax for carousel images
      gsap.utils.toArray(".carousel-slide img", containerRef.current).forEach((element) => {
        gsap.to(element, {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });

      // Staggered animation for text elements
      gsap.utils.toArray(".carousel-slide h2, .feature-item", containerRef.current).forEach((element, i) => {
        gsap.from(element, {
          opacity: 0,
          y: 20,
          delay: i * 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        });
      });

      // Gradient animation
      if (containerRef.current.classList.contains("animated-gradient")) {
        gsap.to(containerRef.current, {
          backgroundPosition: "200% 50%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        });
      }
    }, containerRef);

    // Auto-scroll for carousel
    if (!isPaused && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }

    // Cleanup
    return () => {
      ctx.revert();
      clearInterval(intervalRef.current);
    };
  }, [isPaused, totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index % totalSlides);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleInteractionStart = () => setIsPaused(true);
  const handleInteractionEnd = () => setIsPaused(false);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);

  return (
    <>
      <style>
        {`
          @keyframes particle-float {
            0% { transform: translateY(0); opacity: 0.6; }
            100% { transform: translateY(-100vh); opacity: 0; }
          }
          @keyframes starry-twinkle {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          @keyframes gradientLoop {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient {
            background: linear-gradient(555deg, #030c26, #000000, #020203, #030c26);
            background-size: 200% 100%;
            animation: gradientLoop 8s ease-in-out infinite;
          }
          .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            animation: particle-float 10s linear infinite;
            pointer-events: none;
            z-index: 2;
          }
          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: starry-twinkle 2s infinite;
            pointer-events: none;
            z-index: 2;
          }
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
          .carousel-slide img {
            transition: transform 0.3s ease;
            will-change: transform;
          }
          .carousel-slide img:hover {
            transform: scale(1.05);
          }
          .feature-item {
            transition: transform 0.3s ease;
            will-change: transform;
          }
          .feature-item:hover {
            transform: translateY(-5px);
          }
          .pagination-dot {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transition: background 0.3s ease;
            cursor: pointer;
          }
          .pagination-dot-active {
            background: #ffffff;
          }
          .arrow-button-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}
      </style>
      <section
        ref={containerRef}
        className="py-20 text-white min-h-screen animated-gradient relative overflow-hidden"
      >
        {/* Reduced number of particles/stars for better performance */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        <div className="container mx-auto px-4 relative z-10">
          {/* Intro Text */}
          <motion.div
            className="mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-7xl font-extrabold mb-4 font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-400">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-200 font-poppins">
              We provide expert digital solutions to help your business succeed in today's competitive market.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div
            className="carousel-container relative"
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            <motion.div
              className="carousel-slide"
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 ">
                {/* Optimized Image Component */}
                <motion.div
                  className="w-full lg:w-[31rem] 2xl:w-[75rem] 2xl:h-[40rem] h-96 lg:h-[31rem] rounded-xl overflow-hidden shadow-2xl relative gap-20 mt-20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Loading placeholder */}
                  {!loadedImages[serviceDetails[currentIndex].image] && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                      <span className="text-4xl">{serviceDetails[currentIndex].icon}</span>
                    </div>
                  )}
                  
                  {/* Optimized image */}
                  <motion.img
                    src={serviceDetails[currentIndex].image}
                    alt={serviceDetails[currentIndex].title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className={`w-full
                       h-full object-cover transition-opacity duration-300 ${
                      loadedImages[serviceDetails[currentIndex].image] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoadedImages(prev => ({
                      ...prev,
                      [serviceDetails[currentIndex].image]: true
                    }))}
                    onError={handleImageError}
                  />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className="w-10/12 lg:w-8/12 space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl 2xl:text-7xl  font-bold leading-tight font-poppins text-white">
                    {serviceDetails[currentIndex].title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Show only first 3 features on the main page */}
                    {serviceDetails[currentIndex].features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 border border-gray-600 p-4 rounded-xl  shadow-md hover:shadow-lg transition-shadow duration-300 feature-item"
                        aria-label={`Feature: ${feature.subtitle}`}
                      >
                        <h3 className="text-sm  sm:text-base lg:text-xl 2xl:text-2xl font-semibold text-white mb-1 font-poppins">
                          {feature.subtitle}
                        </h3>
                      </div>
                    ))}
                    {/* "View More" button to show remaining features */}
                    {serviceDetails[currentIndex].features.length > 3 && (
                      <div 
                        className="bg-white/10 border border-gray-600 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 feature-item cursor-pointer flex items-center justify-center"
                        onClick={() => openPopup(currentIndex)}
                      >
                        <h3 className="text-sm sm:text-base font-semibold text-white mb-1 font-poppins">
                          +{serviceDetails[currentIndex].features.length - 3} more features
                        </h3>
                      </div>
                    )}
                  </div>
                  <button
                    className="mt-4 inline-block bg-purple-500 hover:bg-purple-600 transition-colors text-white font-semibold px-6 py-2 rounded-lg font-poppins  lg:text-xl 2xl:text-2xl"
                    onClick={() => openPopup(currentIndex)}
                  >
                    Read More
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <div className="arrow-buttons absolute -bottom-5 right-4 z-20 flex gap-4">
                <ArrowButton direction="prev" onClick={goPrev} disabled={totalSlides <= 1} />
                <ArrowButton direction="next" onClick={goNext} disabled={totalSlides <= 1} />
              </div>
            )}

            {/* Pagination Dots */}
            {totalSlides > 1 && (
              <div className="pagination flex justify-center gap-2 mt-6">
                {serviceDetails.map((_, index) => (
                  <button
                    key={index}
                    className={`pagination-dot ${index === currentIndex ? "pagination-dot-active" : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Popup */}
        {popupIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 font-poppins text-gray-800">
                {serviceDetails[popupIndex].title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-4 font-poppins">
                {serviceDetails[popupIndex].moreDetails}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {serviceDetails[popupIndex].features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 border border-gray-200 p-4 rounded-xl"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 font-poppins">
                      {feature.subtitle}
                    </h3>
                  </div>
                ))}
              </div>
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-poppins"
                onClick={closePopup}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Services;