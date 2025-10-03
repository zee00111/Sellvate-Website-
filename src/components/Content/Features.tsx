"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { UserIcon, ShoppingBagIcon, MegaphoneIcon, PackageIcon, StoreIcon, BarChartIcon } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
      delayChildren: 0.3,   // Initial delay before starting
      staggerDirection: 1,  // 1 for forward, -1 for reverse
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotate: -5,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Features = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="py-20 bg-gradient-to-t
       from-[#1fbfa4] to-[#178fe6]/80 text-white font-poppins overflow-hidden"
    >
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10 relative" data-aos="fade-up" data-aos-delay="200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-50 pointer-events-none"></div>

        <div className="text-center mb-16" data-aos="fade-up" >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9, y: -30 }}
            animate={hasAnimated ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl text-white font-extrabold mb-6 tracking-wide drop-shadow-lg"
          >
            Elevate Your Amazon Empire with Sellvate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-00 max-w-3xl mx-auto leading-relaxed"
          >
            Unleash explosive growth, streamline operations, and dominate the marketplace with our cutting-edge Amazon services tailored for visionary sellers.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-orange-500 p-8 rounded-2xl shadow-md cursor-pointer overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <UserIcon className="mx-auto mb-6 text-orange-500" size={48} />
            <h3 className="text-2xl font-bold mb-4">Amazon Account Management</h3>
            <p className="text-gray-700 leading-relaxed">Expertly manage your Amazon account for seamless operations, full compliance, and unbeatable performance that scales with your business ambitions.</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-orange-500 p-8 rounded-2xl shadow-md cursor-pointer overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <ShoppingBagIcon className="mx-auto mb-6 text-orange-500" size={48} />
            <h3 className="text-2xl font-bold mb-4">Amazon Listing Optimization</h3>
            <p className="text-gray-700 leading-relaxed">Transform your product listings into magnetic masterpieces with SEO magic and compelling narratives that captivate buyers and skyrocket conversions.</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-orange-500 p-8 rounded-2xl shadow-md cursor-pointer overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <MegaphoneIcon className="mx-auto mb-6 text-orange-500" size={48} />
            <h3 className="text-2xl font-bold mb-4">Advertising on Amazon</h3>
            <p className="text-gray-700 leading-relaxed">Ignite your visibility with precision-targeted PPC campaigns that drive floods of traffic, amplify sales, and deliver maximum ROI like never before.</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-orange-500 p-8 rounded-2xl shadow-md cursor-pointer overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <PackageIcon className="mx-auto mb-6 text-orange-500" size={48} />
            <h3 className="text-2xl font-bold mb-4">Inventory Management</h3>
            <p className="text-gray-700 leading-relaxed">Master your stock with real-time tracking and predictive insights, eliminating stockouts and overselling while optimizing for peak efficiency.</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-orange-500 p-8 rounded-2xl shadow-md cursor-pointer overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <StoreIcon className="mx-auto mb-6 text-orange-500" size={48} />
            <h3 className="text-2xl font-bold mb-4">Brand Store Development</h3>
            <p className="text-gray-700 leading-relaxed">Craft immersive Amazon Brand Stores that enchant visitors, showcase your products brilliantly, and forge unbreakable brand loyalty.</p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: -2,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-orange-500 p-8 rounded-2xl shadow-md cursor-pointer overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <BarChartIcon className="mx-auto mb-6 text-orange-500" size={48} />
            <h3 className="text-2xl font-bold mb-4">Performance Analytics</h3>
            <p className="text-gray-700 leading-relaxed">Unlock profound insights through advanced analytics, tracking sales trends, customer behaviors, and campaigns for strategic, data-fueled triumphs.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};