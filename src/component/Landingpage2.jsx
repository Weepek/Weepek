 
import React, { useEffect, useRef, useCallback, memo, useMemo } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CALENDLY_URL, HERO_IMAGE, FALLBACK_IMAGE } from "./constants";
import "./LandingPage2.css";

gsap.registerPlugin(ScrollTrigger);

const useCalendly = () => {
  const scriptLoaded = useRef(false);

  const loadCalendly = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (scriptLoaded.current) return resolve();
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        scriptLoaded.current = true;
        resolve();
      };
      script.onerror = reject;
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });
  }, []);

  const openCalendlyPopup = useCallback(async () => {
    try {
      await loadCalendly();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } catch {
      window.open(CALENDLY_URL, "_blank");
    }
  }, [loadCalendly]);

  return { openCalendlyPopup };
};

const CreativeButton = memo(() => {
  const { openCalendlyPopup } = useCalendly();
  return (
    <motion.button
      onClick={openCalendlyPopup}
      aria-label="Book a meeting"
      className="relative inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden group focus:outline focus:outline-purple-400 mt-5"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        <CalendarDays className="w-5 h-5" />
        Book a Meeting
      </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
     <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition-opacity z-0"></span>
     <span className="absolute inset-0 flex items-center justify-center z-0">
        <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
      </span>
     <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
    </motion.button>
  );
});

const Particle = memo(({ type, count }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: `${type}-${i}`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
      animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 4}s`,
    }));
  }, [type, count]);

  return particles.map(({ id, left, top, animationDelay, animationDuration }) => (
    <div
      key={id}
      className={type}
      style={{
        left,
        top,
        animationDelay,
        animationDuration,
        position: "absolute",
      }}
    />
  ));
});

const LandingPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".particle", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });

      gsap.to(".background-image", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });

      gsap.to(".animated-gradient", {
        backgroundPosition: "200% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleImageError = useCallback((e) => {
    e.target.style.backgroundImage = `url(${FALLBACK_IMAGE})`;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center animated-gradient"
    >
      <div
        className="background-image absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        onError={handleImageError}
      />
      <Particle type="particle" count={12} />
      <Particle type="star" count={20} />

      <div className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl  ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-300 drop-shadow-md transition-all duration-300"
        >
          <span>Weepek </span>Your Web{" "}
          <span className="block">Development Partner</span>
        </motion.h1>
          <div className="flex justify-center my-4">
           <div className="w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-3xl"></div>
          </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl font-poppins text-gray-100 m-2 mt-6 md:mt-8 px-3 md:px-1">
          A creative digital studio crafting websites, apps, and branding with purpose.  
         Built for businesses of every scale, powered by research, and driven by design excellence.
        </p>

        <div className="mt-6 sm:mt-8">
          <CreativeButton />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
