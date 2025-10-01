'use client';

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Image
            src="/sellvate.png"
            alt="Sellvate Logo"
            width={120}
            height={120}
            className="mx-auto mb-8 animate-pulse transition-transform duration-300 hover:scale-110"
          />
          <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="mt-5 text-6xl leading-2 text-gray-900 sm:leading-tight md:text-6xl lg:text-6xl  font-poppins font-bold"
              >
              
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">
                Connect with Sellvate
                </span>
              </motion.h2>
          <br />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to supercharge your Amazon journey? Reach out to our dedicated team for tailored support, strategic insights, or exciting partnership opportunities. We're here to fuel your success!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              Drop Us a Message
            </h2>
            <form className="space-y-8">
              <div>
                <label className="block text-left text-gray-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                  rows={6}
                  placeholder="Tell us how we can help you succeed on Amazon!"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What services does Sellvate offer for Amazon sellers?
              </h3>
              <p className="text-gray-600">
                We provide a comprehensive suite of services, including Amazon PPC and SEO optimization, brand growth analytics, creative content and design, and dedicated seller support to help you scale your business effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How quickly can I expect a response from your team?
              </h3>
              <p className="text-gray-600">
                Our team typically responds within 24 hours. For urgent inquiries, you can call us at +1 (234) 567-890 for immediate assistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Do you work with small businesses or only large brands?
              </h3>
              <p className="text-gray-600">
                We work with Amazon sellers of all sizes, from solo entrepreneurs to established brands. Our strategies are tailored to fit your unique needs and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Can Sellvate help with international Amazon marketplaces?
              </h3>
              <p className="text-gray-600">
                Absolutely! We have expertise in optimizing and scaling businesses across global Amazon marketplaces, including North America, Europe, and beyond.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How do I get started with Sellvate?
              </h3>
              <p className="text-gray-600">
                Simply fill out the contact form above, email us at{" "}
                <a href="mailto:support@sellvate.com" className="text-orange-500 hover:underline">
                  support@sellvate.com
                </a>
                , or schedule a call with our team to discuss your goals and how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 mb-12 text-center">
            More Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <span className="text-3xl text-orange-500 mb-4 block">📧</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">
                Drop us a line at{" "}
                <a
                  href="mailto:support@sellvate.com"
                  className="text-orange-500 hover:underline"
                >
                  support@sellvate.com
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <span className="text-3xl text-orange-500 mb-4 block">📞</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">
                Reach our team at{" "}
                <a href="tel:+1234567890" className="text-orange-500 hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <span className="text-3xl text-orange-500 mb-4 block">🌐</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
              <p className="text-gray-600">
                Stay updated on{" "}
                <a
                  href="https://x.com/sellvate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  X
                </a>{" "}
                or{" "}
                <a
                  href="https://linkedin.com/company/sellvate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}