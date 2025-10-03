'use client';

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// Lucide Icons
import { Mail, Phone, Globe, ChevronDown } from 'lucide-react';

// Define TypeScript interfaces
interface FAQItem {
  q: string;
  a: string;
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

// FAQ Data
const faqs: FAQItem[] = [
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

// Reusable Contact Card
const ContactCard: React.FC<ContactCardProps> = ({ icon, title, children }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-amber-100/50 transition-all duration-300 text-center group"
  >
    <div className="flex justify-center mb-5">
      <div className="p-3 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <div className="text-gray-600">{children}</div>
  </motion.div>
);

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form (in real app, you'd send to API)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 text-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-orange-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Image
              src="/sellvate.png"
              alt="Sellvate Logo"
              width={120}
              height={120}
              className="relative mx-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-400"
          >
            Connect with Sellvate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl mt-6 max-w-3xl mx-auto leading-relaxed text-cyan-100"
          >
            Ready to supercharge your Amazon journey? Reach out to our dedicated team for tailored support, strategic insights, or exciting partnership opportunities. We're here to fuel your success!
          </motion.p>
        </div>
      </section>

      {/* Two-Column Contact Section */}
      <section className="py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Let’s Scale Your Amazon Business Together
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you’re launching your first product or expanding globally, our experts are ready to craft data-driven strategies that multiply your visibility, conversions, and revenue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { title: "PPC & SEO Optimization", desc: "Lower ACOS and boost organic rank" },
                  { title: "Creative Studio", desc: "Scroll-stopping images and videos" },
                  { title: "Analytics Dashboard", desc: "Real-time profit and KPI tracking" },
                  { title: "Dedicated Support", desc: "e-commerce fluent account managers" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start p-4 bg-white/50 rounded-xl border border-amber-100"
                  >
                    <div className="p-2 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg mr-4">
                      <ChevronDown className="text-white rotate-90 w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-700 pt-4">
                Join hundreds of sellers who trust Sellvate to turn clicks into lifelong customers.
              </p>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-3xl shadow-xl border border-amber-100"
            >
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 mb-6 text-center">
                Drop Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-left text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100"
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-left text-gray-700 font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                    rows={5}
                    placeholder="Tell us how we can help you succeed on Amazon!"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                >
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-orange-500"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
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

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 mb-12 text-center"
          >
            More Ways to Reach Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard icon={<Mail size={24} />} title="Email Us">
              <a
                href="mailto:support@sellvate.com"
                className="text-orange-500 hover:underline font-medium hover:text-amber-600 transition-colors"
              >
                support@sellvate.com
              </a>
            </ContactCard>

            <ContactCard icon={<Phone size={24} />} title="Call Us">
              <a 
                href="tel:+1234567890" 
                className="text-orange-500 hover:underline font-medium hover:text-amber-600 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </ContactCard>

            <ContactCard icon={<Globe size={24} />} title="Follow Us">
              <div className="flex justify-center space-x-4 mt-2">
                <a
                  href="https://x.com/sellvate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-amber-600 transition-colors"
                >
                  X
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="https://linkedin.com/company/sellvate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-amber-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </ContactCard>
          </div>
        </div>
      </section>
    </main>
  );
}