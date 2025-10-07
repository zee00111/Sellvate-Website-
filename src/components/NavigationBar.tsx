/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

'use client';

import { motion } from "framer-motion";
import { Menu, X, Home, Settings, Users, Mail, Rocket } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/service", icon: Settings },
    { name: "Case Studies", href: "/casestudy", icon: Rocket },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-gradient-to-r from-orange-500 to-orange-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 focus:outline-none">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src="/sellvate.png"
                  alt="Sellvate Logo"
                  width={80}
                  height={80}
                  // className="object-cover"
                />
              </div>
              <span className={`hidden md:block text-xl font-bold text-teal ${scrolled ? "text-gray-700" : "text-white"}`}>
                SELLVATE
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  scrolled
                    ? "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <item.icon size={16} />
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-5 py-2 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Rocket size={18} />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-gradient-to-b from-orange-500 to-orange-600 text-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-lg font-medium hover:text-amber-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-10 pt-6 border-t border-white/20">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Rocket size={20} />
                Get Started
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};