'use client';

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services does Sellvate offer for Amazon sellers?",
      a: "We provide a comprehensive suite of services, including Amazon PPC and SEO optimization, brand growth analytics, creative content and design, and dedicated seller support to help you scale your business effectively."
    },
    {
      q: "How quickly can I expect a response from your team?",
      a: "Our team typically responds within 24 hours. For urgent inquiries, you can call us at +1 (234) 567-890 for immediate assistance."
    },
    {
      q: "Do you work with small businesses or only large brands?",
      a: "We work with Amazon sellers of all sizes, from solo entrepreneurs to established brands. Our strategies are tailored to fit your unique needs and goals."
    },
    {
      q: "Can Sellvate help with international Amazon marketplaces?",
      a: "Absolutely! We have expertise in optimizing and scaling businesses across global Amazon marketplaces, including North America, Europe, and beyond."
    },
    {
      q: "How do I get started with Sellvate?",
      a: "Simply fill out the contact form, email us at support@sellvate.com, or schedule a call with our team to discuss your goals and how we can help."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0"></div>
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
            className="mt-5 text-6xl leading-2 text-gray-900 sm:leading-tight md:text-6xl lg:text-6xl font-poppins font-bold"
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

      {/* Two-Column Contact Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Let’s Scale Your Amazon Business Together
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you’re launching your first product or expanding globally, our experts are ready to craft data-driven strategies that multiply your visibility, conversions, and revenue.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Proven PPC & SEO frameworks that lower ACOS and boost organic rank.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Creative studio that produces scroll-stopping images, A+ content, and videos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Real-time analytics dashboard to track profit, inventory, and advertising KPIs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Dedicated account managers who speak e-commerce fluently—and human.</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Join hundreds of sellers who trust Sellvate to turn clicks into lifelong customers.
              </p>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-6 text-center">
                Drop Us a Message
              </h3>
              <form className="space-y-6">
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
                    rows={5}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic FAQ Section */}
      <section className="py-20  bg-gradient-to-t from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.q}
                  </h3>
                  <span className="text-orange-500 text-2xl">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
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