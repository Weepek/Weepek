import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We provide web development, mobile app development, UI/UX design, and digital branding for startups and businesses.",
  },
  {
    question: "How much does a website or app cost?",
    answer:
      "Pricing depends on the features and complexity of the project. We offer custom quotes after understanding your needs.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes! We offer free bug support for 1–3 months post-launch and affordable maintenance plans afterward.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use React, React Native, Node.js, Firebase, Flutter, and other modern tools based on project requirements.",
  },
  {
    question: "Can we work together if I’m in a different country?",
    answer:
      "Absolutely! We work with clients worldwide and adjust to your preferred time zones and communication methods.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto mt-10 items-center justify-center    px-4  py-16 min-h-screen"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        variants={itemVariants}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-6 mt-30">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-xl transition hover:scale-[1.01]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-white text-lg md:text-2xl font-Nunito">
                {faq.question}
              </span>
              <ChevronDown
                className={`text-white transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0,}}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className=" mt-4"
                >
                  <hr className="text-white mb-5 w-10/12"/>
                  <p className="text-2xl  font-Nunito weight-200  p-5 rounded-2xl text-white ">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* New CTA section */}
      <motion.div
        variants={itemVariants}
        className="mt-16 text-center px-6 py-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
      >
        <p className="text-white text-lg md:text-xl mb-4">
          Still have questions?
        </p>
        <a
          href="/weepek/contact" // update this to your actual contact page URL
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition"
        >
          Contact Us
        </a>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;