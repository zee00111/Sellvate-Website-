"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 15
    } 
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.5
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const HowItWork = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 text-black overflow-hidden"
    >
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-poppins text-4xl font-extrabold leading-tight drop-shadow-lg"
          >
            How Sellvate Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-lg mx-auto mt-4 text-lg leading-relaxed"
          >
            Seamlessly elevate your Amazon business with our intuitive, results-driven process – from setup to scaling success.
          </motion.p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          {/* Curved SVG Path for chain-like animation */}
          <svg className="absolute inset-x-0 hidden md:block top-2 md:px-20 lg:px-28 w-full h-32" viewBox="0 0 800 100" preserveAspectRatio="none">
            <motion.path
              d="M0 50 Q 200 -50 400 50 Q 600 150 800 50"
              fill="none"
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="4"
              strokeDasharray="5,5"
              variants={pathVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </svg>

          <motion.div 
            className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={stepVariants}>
              <motion.div 
                className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-orange-600 to-orange-400 rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                variants={iconVariants}
              >
                <span className="text-xl font-semibold text-white">1</span>
              </motion.div>
              <motion.h3 
                className="mt-6 text-xl font-semibold leading-tight md:mt-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Onboard & Manage Account
              </motion.h3>
              <motion.p 
                className="mt-4 text-base"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We handle your Amazon account setup, optimization, and ongoing management for peak performance and compliance.
              </motion.p>
            </motion.div>

            <motion.div variants={stepVariants}>
              <motion.div 
                className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-orange-600 to-orange-400 rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
                variants={iconVariants}
              >
                <span className="text-xl font-semibold text-white">2</span>
              </motion.div>
              <motion.h3 
                className="mt-6 text-xl font-semibold leading-tight md:mt-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Optimize Listings
              </motion.h3>
              <motion.p 
                className="mt-4 text-base"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Craft compelling, SEO-optimized product listings that attract buyers and boost visibility in Amazon searches.
              </motion.p>
            </motion.div>

            <motion.div variants={stepVariants}>
              <motion.div 
                className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-orange-600 to-orange-400 rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                variants={iconVariants}
              >
                <span className="text-xl font-semibold text-white">3</span>
              </motion.div>
              <motion.h3 
                className="mt-6 text-xl font-semibold leading-tight md:mt-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Launch Ads & Analyze
              </motion.h3>
              <motion.p 
                className="mt-4 text-base"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Deploy targeted PPC campaigns, track performance with advanced analytics, and scale for maximum ROI.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};