"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export const ClientsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Array of client logos
  const clients = [
    { src: "/images/clients/airbnb.png", alt: "Airbnb" },
    { src: "/images/clients/aws.png", alt: "AWS" },
    { src: "/images/clients/digital-ocean.png", alt: "Digital Ocean" },
    { src: "/images/clients/docker.png", alt: "Docker" },
    { src: "/images/clients/gcp.png", alt: "GCP" },
    { src: "/images/clients/gitlab.png", alt: "GitLab" },
    { src: "/images/clients/jetbrains.png", alt: "JetBrains" },
    { src: "/images/clients/microsoft.png", alt: "Microsoft" },
    { src: "/images/clients/netflix.png", alt: "Netflix" },
    { src: "/images/clients/slack.png", alt: "Slack" },
    { src: "/images/clients/spotify.png", alt: "Spotify" },
    { src: "/images/clients/twitch.png", alt: "Twitch" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gradient-to-b from-white to-orange-50 sm:py-20 lg:py-24"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-poppins font-bold text-gray-800 sm:text-4xl sm:leading-tight">
            Trusted by world class companies.
          </h2>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap will-change-transform">
            {/* Original Clients */}
            {clients.map((client, index) => (
              <div
                key={`client-${index}`}
                className="inline-flex px-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 hover:border-orange-400"
                >
                  <img
                    height="70"
                    width="70"
                    className="w-[70px] h-[70px] object-contain"
                    src={client.src}
                    alt={client.alt}
                  />
                </motion.div>
              </div>
            ))}

            {/* Duplicates for Seamless Loop */}
            {clients.map((client, index) => (
              <div
                key={`client-duplicate-${index}`}
                className="inline-flex px-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 hover:border-orange-400"
                >
                  <img
                    height="70"
                    width="70"
                    className="w-[70px] h-[70px] object-contain"
                    src={client.src}
                    alt={client.alt}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.section>
  );
};