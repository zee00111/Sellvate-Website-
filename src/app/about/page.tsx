'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50 dark:from-[#0d1117] dark:to-[#0b0f14] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Image src="/sellvate.png" alt="Sellvate Logo" width={150} height={150} className="mx-auto mb-8 animate-pulse" />
          <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="mt-5 text-6xl leading-2 text-gray-900 dark:text-white sm:leading-tight md:text-6xl lg:text-6xl  font-poppins font-bold"
              >
              
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">
                About us
                </span>
              </motion.h2>
              <br />
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Sellvate, we're more than just a service – we're your dedicated ally in conquering the Amazon marketplace. Born from real-world seller struggles and triumphs, we blend cutting-edge tech, creative flair, and data smarts to turn your Amazon dreams into reality. Whether you're a solo entrepreneur or scaling a brand, we're here to elevate your game.
          </p>
        </div>
      </section>

      {/* Our Story Section - Modern Card Layout */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-12 text-center">Our Journey: From Sellers to Game-Changers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-white dark:bg-[var(--card)] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-transparent dark:border-[var(--card-border)]">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Sellvate started in a garage with a simple idea: Amazon sellers deserve better tools and support. Our founders, seasoned e-commerce pros who battled the same listing woes and ad frustrations you face, decided to flip the script. Today, we're a vibrant team helping thousands navigate Amazon's twists and turns with strategies that actually work – because we've been there.
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🚀</span> Masterful Amazon PPC & SEO to skyrocket visibility
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">📊</span> In-depth Brand Growth Analytics for smart decisions
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🎨</span> Stunning Creative Content & Design that converts
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🤝</span> Round-the-Clock Seller Support when you need it most
                </li>
              </ul>
            </div>
            <Image 
              src="https://images.unsplash.com/photo-1515165562835-cf7747c1bc6b?auto=format&fit=crop&w=600&q=80" 
              alt="Our Team in Action" 
              width={600} 
              height={400} 
              className="rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Alternating Layout with Animations */}
      <section className="py-20 bg-orange-50 dark:bg-[#0f141b]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-12 text-center">Why Sellers Love Partnering with Sellvate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Image 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
              alt="Business Growth Visualization" 
              width={600} 
              height={400} 
              className="rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-300" 
            />
            <div className="bg-white dark:bg-[var(--card)] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-transparent dark:border-[var(--card-border)]">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                In a sea of generic agencies, Sellvate stands out by treating your business like our own. We dive deep into your unique challenges, crafting personalized plans that deliver tangible growth. No cookie-cutter approaches here – just honest, innovative solutions backed by data and a genuine passion for your success.
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🏆</span> Proven Track Record of Boosting Sales
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🛠️</span> Tailored Strategies That Fit Your Brand
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">📞</span> 24/7 Expert Support for Peace of Mind
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🔧</span> Advanced Tools to Stay Ahead of Trends
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section - Modern with Gradients */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-12 text-center">Innovation: The Heart of Sellvate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-[#101826] dark:to-[#0f1720] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                We're obsessed with staying ahead in the fast-paced world of e-commerce. By harnessing AI, machine learning, and creative storytelling, we ensure your Amazon presence isn't just competitive – it's revolutionary. Our team thrives on turning emerging trends into your unfair advantage.
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🤖</span> AI-Powered Insights for Predictive Growth
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🔄</span> Ongoing Optimization to Maximize ROI
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🌟</span> Bold Creative Campaigns That Captivate
                </li>
              </ul>
            </div>
            <Image 
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" 
              alt="Innovation in Action" 
              width={600} 
              height={400} 
              className="rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-orange-50 dark:bg-[#0f141b]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-12 text-center">Meet the Sellvate Squad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <Image 
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" 
              alt="Our Collaborative Team" 
              width={600} 
              height={400} 
              className="rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-300" 
            />
            <div className="bg-white dark:bg-[var(--card)] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-transparent dark:border-[var(--card-border)]">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Our team is a melting pot of talent: Amazon vets who've scaled brands from zero to hero, marketing wizards who craft viral campaigns, and tech whizzes building tools that simplify your life. United by a love for e-commerce, we're committed to your wins – big and small.
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🛒</span> Seasoned Amazon Specialists
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">📈</span> Creative Marketing Experts
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">💻</span> Forward-Thinking Tech Innovators
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-t from-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-400 mb-6">Ready to Elevate Your Amazon Game?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the Sellvate family and watch your business soar. Let's chat about how we can tailor our expertise to your unique needs.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors duration-300 text-lg shadow-md">
            Get in Touch Today
          </a>
        </div>
      </section>
    </main>
  );
}