/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

'use client';

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Rocket,
  Database,
  Search,
  ShieldCheck,
  Palette
} from 'lucide-react';

// Define TypeScript interface
interface Service {
  title: string;
  description: string;
  details: string;
  price: string;
  icon: JSX.Element;
}

export default function Services() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleDetails = (title: string) => {
    setExpanded(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const services: Service[] = [
    {
      title: "Full-Service Management",
      description: "Complete Amazon business management with dedicated support across all channels.",
      details: "Our full-service package covers every aspect of your Amazon operation, from account setup to performance optimization, with 24/7 expert support.",
      price: "Starting at $1,200/month",
      icon: <BarChart3 className="text-teal-500" size={48} />
    },
    {
      title: "Amazon Advertising Management",
      description: "Expert PPC management for unprecedented growth and optimized ad spend.",
      details: "Leverage our PPC expertise to maximize ROI with targeted campaigns, keyword optimization, and ad performance tracking.",
      price: "Starting at $900/month",
      icon: <Rocket className="text-amber-500" size={48} />
    },
    {
      title: "Demand-Side Platform (DSP) Advertising",
      description: "Advanced DSP solutions for maximum control, higher margins, and invaluable data.",
      details: "Unlock premium ad placements across Amazon and beyond with our DSP services, tailored for large-scale advertisers with a $15,000 minimum ad spend.",
      price: "10% of ad spend ($15,000 minimum)",
      icon: <Database className="text-cyan-500" size={48} />
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Advanced solutions for boosting your Amazon search rankings.",
      details: "Enhance your product visibility with our SEO strategies, including keyword research, listing optimization, and competitor analysis.",
      price: "Starting at $700/month",
      icon: <Search className="text-orange-500" size={48} />
    },
    {
      title: "Compliance & Troubleshooting",
      description: "Ensure compliance and resolve issues with expert troubleshooting.",
      details: "Stay ahead of Amazon policies with our compliance checks and resolve technical or account issues swiftly with our dedicated team.",
      price: "Starting at $500/month",
      icon: <ShieldCheck className="text-emerald-500" size={48} />
    },
    {
      title: "Design & Creative Services",
      description: "Elevate your brand with professional design and creative content.",
      details: "From stunning product images to A+ content and branding, our creative team crafts visuals that convert and engage.",
      price: "Starting at $600/month",
      icon: <Palette className="text-violet-500" size={48} />
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-amber-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Image
              src="/sellvate.png"
              alt="Sellvate Logo"
              width={140}
              height={140}
              className="relative mx-auto opacity-95"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-400"
          >
            Our Expert Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-cyan-100 leading-relaxed"
          >
            Unlock your Amazon potential with Sellvate’s specialized services, designed to drive growth, optimize performance, and enhance your brand presence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Discover Our Offerings
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const isOpen = expanded[service.title] || false;
              return (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-xl border border-amber-100/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <button
                    onClick={() => toggleDetails(service.title)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold flex items-center justify-center gap-2 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? 'Hide Details' : 'Learn More'}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-5 overflow-hidden"
                      >
                        <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                          <p className="text-gray-700 mb-3">{service.details}</p>
                          <p className="font-bold text-amber-700">{service.price}</p>
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
      <section className="py-20 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Elevate Your Amazon Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-100 mb-8 leading-relaxed"
          >
            Let’s tailor a solution for your success. Contact us today for a free consultation!
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-300 text-lg shadow-lg"
          >
            Get Started Now
          </motion.a>
        </div>
      </section>
    </main>
  );
}