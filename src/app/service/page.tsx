'use client';

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Services() {
  // State to track which service's details are expanded
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Function to toggle details for a specific service
  const toggleDetails = (serviceTitle: string) => {
    setExpanded((prev) => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle],
    }));
  };

  // Array of services with titles, descriptions, details, prices, and icons
  const services = [
    {
      title: "Full-Service Management",
      description: "Complete Amazon business management with dedicated support across all channels.",
      details:
        "Our full-service package covers every aspect of your Amazon operation, from account setup to performance optimization, with 24/7 expert support.",
      price: "Starting at $1,200/month",
      icon: "https://img.icons8.com/ios-filled/100/f97316/combo-chart.png",
    },
    {
      title: "Amazon Advertising Management",
      description: "Expert PPC management for unprecedented growth and optimized ad spend.",
      details:
        "Leverage our PPC expertise to maximize ROI with targeted campaigns, keyword optimization, and ad performance tracking.",
      price: "Starting at $900/month",
      icon: "https://img.icons8.com/ios-filled/100/f97316/gear.png",
    },
    {
      title: "Demand-Side Platform (DSP) Advertising",
      description: "Advanced DSP solutions for maximum control, higher margins, and invaluable data.",
      details:
        "Unlock premium ad placements across Amazon and beyond with our DSP services, tailored for large-scale advertisers with a $15,000 minimum ad spend.",
      price: "10% of ad spend ($15,000 minimum)",
      icon: "https://img.icons8.com/ios-filled/100/f97316/database.png",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Advanced solutions for boosting your Amazon search rankings.",
      details:
        "Enhance your product visibility with our SEO strategies, including keyword research, listing optimization, and competitor analysis.",
      price: "Starting at $700/month",
      icon: "https://img.icons8.com/ios-filled/100/f97316/search.png",
    },
    {
      title: "Compliance & Troubleshooting",
      description: "Ensure compliance and resolve issues with expert troubleshooting.",
      details:
        "Stay ahead of Amazon policies with our compliance checks and resolve technical or account issues swiftly with our dedicated team.",
      price: "Starting at $500/month",
      icon: "https://img.icons8.com/ios-filled/100/f97316/settings.png",
    },
    {
      title: "Design & Creative Services",
      description: "Elevate your brand with professional design and creative content.",
      details:
        "From stunning product images to A+ content and branding, our creative team crafts visuals that convert and engage.",
      price: "Starting at $600/month",
      icon: "https://img.icons8.com/ios-filled/100/f97316/paint-brush.png",
    },
  ];

  return (
    <main className="min-h-screen  text-white">
      {/* Hero Section */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Image
            src="/sellvate.png"
            alt="Sellvate Logo"
            width={140}
            height={140}
            className="mx-auto mb-8 opacity-90"
          />
           <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="mt-5 text-6xl leading-2 text-gray-900 sm:leading-tight md:text-6xl lg:text-6xl  font-poppins font-bold"
              >
              
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">
                Our Expert Services
                </span>
              </motion.h2>
              <br />
          <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Unlock your Amazon potential with Sellvate’s specialized services, designed to drive growth,
            optimize performance, and enhance your brand presence.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-20 bg-gradient-to-t from-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-10 md:mb-12 text-center">
            Discover Our Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const isOpen = !!expanded[service.title];
              return (
                <motion.div
                  key={service.title}
                  layout
                  className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-orange-700/20 transition-all duration-300 border border-gray-700/60"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      width={60}
                      height={60}
                      className="transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-5 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() => toggleDetails(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-orange
                    text-orange-300 hover:bg-orange-900/50 hover:text-orange-600 transition-colors duration-200"
                    aria-expanded={isOpen}
                    aria-controls={`details-${service.title}`}
                  >
                    <span className="font-semibold">{isOpen ? "Hide Details" : "Learn More"}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      ➔
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`details-${service.title}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 overflow-hidden"
                      >
                        <div className="p-4 bg-gray-700/70 rounded-lg text-gray-200 border border-gray-600/60">
                          <p className="mb-2">{service.details}</p>
                          <p className="text-orange-400 font-semibold">{service.price}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-t from-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-400 mb-6">
            Ready to Elevate Your Amazon Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let’s tailor a solution for your success. Contact us today for a free consultation!
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </main>
  );
}