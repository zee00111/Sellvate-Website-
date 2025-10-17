'use client';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';

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
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/service" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/casestudy" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              {/* <li><Link href="/investor" className="text-gray-300 hover:text-white transition-colors">Investor Relations</Link></li> */}
              {/* <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li> */}
            </ul>
          </div>
          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-orange-500 pb-2">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
