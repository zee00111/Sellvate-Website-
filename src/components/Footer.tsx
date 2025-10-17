'use client';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 text-white pt-20 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Image src="/sellvate.png" alt="Sellvate Logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Sellvate</h3>
                <p className="text-xs text-gray-400">Amazon Business Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering businesses with innovative Amazon solutions, reliable infrastructure, and world-class support to accelerate growth and success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-orange-400 transition-colors">
                <Mail size={16} className="text-orange-500" />
                <span>contact@sellvate.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-orange-400 transition-colors">
                <Phone size={16} className="text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-orange-400 transition-colors">
                <MapPin size={16} className="text-orange-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 border border-gray-700 hover:border-orange-500">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 border border-gray-700 hover:border-blue-500">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition-all duration-300 border border-gray-700 hover:border-pink-500">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 border border-gray-700 hover:border-blue-600">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gray-600 hover:scale-110 transition-all duration-300 border border-gray-700 hover:border-gray-600">
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/casestudy" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/service#amazon-listing" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Amazon Listing Optimization
                </Link>
              </li>
              <li>
                <Link href="/service#ppc-management" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  PPC Management
                </Link>
              </li>
              <li>
                <Link href="/service#account-management" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Account Management
                </Link>
              </li>
              <li>
                <Link href="/service#brand-protection" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Brand Protection
                </Link>
              </li>
              <li>
                <Link href="/service#analytics" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Analytics & Reporting
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Legal & Resources
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all hover:translate-x-1 inline-block">
                  Support Center
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest Amazon selling strategies and updates</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-orange-500/30">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-orange-400 font-semibold">Sellvate</span>. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>All Systems Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
