'use client';

import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import React, { useState } from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left: Logo & Description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12  flex items-center justify-center mr-4">
                <img src="/sellvate.png" alt="Sellvate Logo" width={44} height={44} className="object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sellvate</h3>
                <p className="text-orange-400 text-sm">Business Solutions for Amazon Sellers</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with innovative solutions, reliable infrastructure, and world-class support to drive growth and success.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-orange-500 pb-2">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/service" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/casestudy" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              {/* <li><a href="/investor" className="text-gray-300 hover:text-white transition-colors">Investor Relations</a></li> */}
              {/* <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li> */}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-orange-500 pb-2">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              {/* <li><a href="/cookie" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li> */}
              {/* <li><a href="/gdpr" className="text-gray-300 hover:text-white transition-colors">GDPR Compliance</a></li> */}
              {/* <li><a href="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li> */}
              {/* <li><a href="/legal" className="text-gray-300 hover:text-white transition-colors">Legal Notices</a></li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-orange-500 pb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, insights, and business solutions.
            </p>
            <form className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400">
              By subscribing, you agree to our <a href="/privacy" className="underline">Privacy Policy</a> and consent to receive updates from our team.
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Sellvate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="/support" className="text-gray-400 hover:text-white text-sm">Support</a> */}
            <a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</a>
            {/* <a href="/sitemap" className="text-gray-400 hover:text-white text-sm">Sitemap</a> */}
            <div className="flex items-center">
              <span className="text-gray-400 text-sm">English</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M12 19l9-9M12 19l-9-9M12 19v-7H8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};