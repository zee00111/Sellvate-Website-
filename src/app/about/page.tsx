//  eslint-disable react/no-unescaped-entities 
/* eslint-disable @next/next/no-img-element */

'use client';



import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Rocket,
  Target,
  Lightbulb,
  Users,
  Sparkles,
  ShieldCheck,
  Brain,
  ChartLine,
  Settings,
  Briefcase
} from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-[#0d1117] dark:to-[#0b0f14] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-amber-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Image
              src="/sellvate.png"
              alt="Sellvate Logo"
              width={150}
              height={150}
              className="relative mx-auto"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-400"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl mt-6 max-w-3xl mx-auto text-cyan-100 leading-relaxed"
          >
            At Sellvate, we're more than just a service – we're your dedicated ally in conquering the Amazon marketplace. Born from real-world seller struggles and triumphs, we blend cutting-edge tech, creative flair, and data smarts to turn your Amazon dreams into reality.
          </motion.p>
        </div>
      </section>

      {/* Our Story - Asymmetric Layout with Accent Line */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content with Vertical Accent */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-4 border-amber-500"
            >
              <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-6">
                Our Journey: From Sellers to Game-Changers
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Sellvate started in a garage with a simple idea: Amazon sellers deserve better tools and support. Our founders, seasoned e-commerce pros who battled the same listing woes and ad frustrations you face, decided to flip the script. Today, we're a vibrant team helping thousands navigate Amazon's twists and turns with strategies that actually work – because we've been there.
              </p>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Rocket className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Masterful Amazon PPC & SEO to skyrocket visibility</span>
                </div>
                <div className="flex items-start gap-3">
                  <ChartLine className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>In-depth Brand Growth Analytics for smart decisions</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Stunning Creative Content & Design that converts</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Round-the-Clock Seller Support when you need it most</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=870&auto=format&fit=crop&ixlib=rb
                -4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Team in Action"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Alternating with Gradient Cards */}
      <section className="py-20 bg-amber-50 dark:bg-[#0f141b]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-12 text-center">
            Why Sellers Love Partnering with Sellvate
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Business Growth Visualization"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Right: Content Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100/50"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                In a sea of generic agencies, Sellvate stands out by treating your business like our own. We dive deep into your unique challenges, crafting personalized plans that deliver tangible growth. No cookie-cutter approaches here – just honest, innovative solutions backed by data and a genuine passion for your success.
              </p>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Target className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Proven Track Record of Boosting Sales</span>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Tailored Strategies That Fit Your Brand</span>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>24/7 Expert Support for Peace of Mind</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Advanced Tools to Stay Ahead of Trends</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Section - Gradient Background */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-12 text-center">
            Innovation: The Heart of Sellvate
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Gradient Card */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-100 to-orange-200 dark:from-[#101826] dark:to-[#0f1720] p-8 rounded-2xl shadow-xl"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                We're obsessed with staying ahead in the fast-paced world of e-commerce. By harnessing AI, machine learning, and creative storytelling, we ensure your Amazon presence isn't just competitive – it's revolutionary. Our team thrives on turning emerging trends into your unfair advantage.
              </p>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Brain className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>AI-Powered Insights for Predictive Growth</span>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCcw className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Ongoing Optimization to Maximize ROI</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Bold Creative Campaigns That Captivate</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                alt="Innovation in Action"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team - Reverse Layout */}
      <section className="py-20 bg-amber-50 dark:bg-[#0f141b]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-12 text-center">
            Meet the Sellvate Squad
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
                alt="Our Collaborative Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100/50"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Our team is a melting pot of talent: Amazon vets who've scaled brands from zero to hero, marketing wizards who craft viral campaigns, and tech whizzes building tools that simplify your life. United by a love for e-commerce, we're committed to your wins – big and small.
              </p>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Users className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Seasoned Amazon Specialists</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Creative Marketing Experts</span>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Forward-Thinking Tech Innovators</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Elevate Your Amazon Game?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-100 mb-8 leading-relaxed"
          >
            Join the Sellvate family and watch your business soar. Let's chat about how we can tailor our expertise to your unique needs.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-300 text-lg shadow-lg"
          >
            Get in Touch Today
          </motion.a>
        </div>
      </section>
    </main>
  );
}

// Add this if you're using RefreshCcw or Cpu icons
import { RefreshCcw, Cpu, TrendingUp } from 'lucide-react';