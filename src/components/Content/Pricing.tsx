"use client";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Pricing = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section
      className="py-32 bg-neutral"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <motion.h2
              className="font-poppins text-xl font-bold leading-tight text-secondary-content lg:leading-tight md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Discover Our Flexible Pricing Plans Specially Tailored to Suit
              Your Unique Hiring Process
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <blockquote className="mt-2">
                <p className="text-lg leading-relaxed text-white">
                  Choose the perfect plan for your business, whether you are
                  a small startup looking to scale or an enterprise-level
                  organization with complex hiring requirements. Ensuring you
                  get the most value out of our recruitment software.
                </p>
              </blockquote>
            </motion.div>
          </div>

          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="overflow-hidden card bg-white">
              <div className="p-10">
                <p className="mt-4 text-6xl font-bold text-neutral">$200</p>

                <ul className="flex flex-col mt-8 space-y-4">
                  {[
                    "Advanced features for complex recruitment needs",
                    "Scalable options to accommodate increasing hiring demands",
                    "Enhanced features for efficient candidate management",
                    "Dedicated support and customization options for seamless integration",
                  ].map((item, index) => (
                    <motion.li
                      className="inline-flex items-center space-x-2"
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.6 + index * 0.2,
                      }}
                    >
                      <Check size={18} />
                      <span className="text-base font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <button className="btn btn-orange mt-4 w-full">
                  Get Full Access
                </button>

                <div className="flex items-center mt-5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500">
                    14 Days Moneyback Guarantee
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
