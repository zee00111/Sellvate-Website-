'use client';

import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp,
  Target,
  Globe,
  BarChart3,
  Star,
  CheckCircle,
  Rocket,
  X,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

// Define TypeScript interfaces
interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  results: string[];
  category: string;
  icon: JSX.Element;
  fullDescription: string;
  metrics: {
    roas: string;
    acos: string;
    conversion: string;
    traffic: string;
  };
}

export default function CaseStudyPage() {
  const sectionRef = useRef(null);
  const isInView = true;

  // State for modal
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Amazon PPC Campaign Optimization",
      client: "Tech Gadget Startup",
      description: "We optimized their Amazon PPC strategy using AI-driven keyword clustering and automated bid adjustments.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
      results: ["215% increase in ROAS", "43% reduction in ACoS", "87% increase in conversion rate"],
      category: "PPC Optimization",
      icon: <Target className="text-teal-500" size={24} />,
      fullDescription: "This tech startup was struggling with high ad spend and low returns. We conducted a full audit of their campaigns, identified underperforming keywords, and implemented smart bidding rules. Within 3 months, their ROAS jumped from 1.2x to 3.7x, while ACoS dropped from 45% to 26%. We also integrated conversion tracking to measure post-click behavior, which helped refine targeting further.",
      metrics: {
        roas: "3.7x",
        acos: "26%",
        conversion: "87%",
        traffic: "120%"
      }
    },
    {
      id: 2,
      title: "Product Listing Enhancement",
      client: "Home Goods Brand",
      description: "We transformed their listings with SEO-rich titles, bullet points, and A+ content, turning them into top performers.",
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
      results: ["78% increase in organic traffic", "65% improvement in conversion rate", "4.8 average star rating"],
      category: "Listing Optimization",
      icon: <BarChart3 className="text-teal-500" size={24} />,
      fullDescription: "Their listings were generic and lacked emotional hooks. We rewrote all product titles, bullets, and descriptions using proven Amazon SEO techniques and added lifestyle imagery via A+ Content. We also optimized backend search terms and improved EBC (Enhanced Brand Content). As a result, organic traffic increased by 78%, and conversion rate jumped from 2.1% to 3.5% — leading to a 4.8-star average rating from over 1,200 reviews.",
      metrics: {
        roas: "N/A",
        acos: "N/A",
        conversion: "3.5%",
        traffic: "78%"
      }
    },
    {
      id: 3,
      title: "International Amazon Expansion",
      client: "Beauty Products Company",
      description: "We guided this US brand through expansion into 5 European marketplaces with localized listings and compliance checks.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww",
      results: ["Successful launch in 5 new markets", "127% YoY revenue growth", "Established brand presence in EU"],
      category: "Market Expansion",
      icon: <Globe className="text-cyan-500" size={24} />,
      fullDescription: "Expanding internationally requires more than just translation — it needs cultural adaptation, tax compliance, and logistics optimization. We handled everything: translated and localized listings, set up VAT registrations, managed FBA inventory across Germany, France, Italy, Spain, and the UK, and ran geo-targeted ads. In Year 1, they achieved 127% YoY growth and became a top 10 seller in 3 categories across Europe.",
      metrics: {
        roas: "N/A",
        acos: "N/A",
        conversion: "N/A",
        traffic: "127%"
      }
    },
    {
      id: 4,
      title: "Amazon DSP Advertising Strategy",
      client: "Premium Electronics Brand",
      description: "We leveraged Amazon DSP to target high-intent audiences off-Amazon, driving premium placements and maximizing customer lifetime value.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      results: ["3.2x higher CTR than standard PPC", "28% lower CPA", "Increased brand awareness by 40%"],
      category: "DSP Advertising",
      icon: <TrendingUp className="text-purple-500" size={24} />,
      fullDescription: "This brand wanted to reach customers before they even searched on Amazon. Using Amazon DSP, we created audience segments based on browsing behavior, retargeted cart abandoners, and ran video ads on premium sites like The New York Times and CNN. The result? A 3.2x higher CTR than standard PPC, 28% lower CPA, and a 40% increase in brand awareness measured via Amazon’s Brand Analytics tool. We also used DSP to drive traffic to their own website for email capture.",
      metrics: {
        roas: "N/A",
        acos: "N/A",
        conversion: "N/A",
        traffic: "40%"
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-900">
      {/* Hero Section */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-xl max-w-3xl mx-auto"
          >
            Discover how we’ve helped businesses achieve remarkable growth on Amazon — from startups to global brands.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-amber-100/50 overflow-hidden transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCase(study)}
              >
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                      {study.icon}
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">Client: {study.client}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{study.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 2).map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                  >
                    Read full case study
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Star className="text-yellow-500" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800">4.9</div>
              <div className="text-gray-600">Average Client Rating</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Rocket className="text-orange-500" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800">215%</div>
              <div className="text-gray-600">Avg. ROAS Increase</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="text-teal-500" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800">50+</div>
              <div className="text-gray-600">Markets Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jeff Stroman",
                role: "Founder, EcoGadgets",
                quote: "Sellvate didn't just manage my account — they transformed it. Sales up 240% in 3 months!",
                rating: 5
              },
              {
                name: "Ning Ash",
                role: "CEO, BeautyBloom",
                quote: "Their creative team made our listings look premium. Conversion rate jumped from 2% to 8%!",
                rating: 5
              },
              {
                name: "Ray O’Kon",
                role: "Director, TechGear Co.",
                quote: "The analytics dashboard is a game-changer. Real-time data helped us cut ACOS by 37%.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80`}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">“{testimonial.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How We Drive Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Audit & Strategy",
                description: "We start with a deep dive into your account, identifying opportunities and fixing critical issues.",
                icon: <Target className="text-teal-500" size={32} />
              },
              {
                step: 2,
                title: "Optimize & Execute",
                description: "We implement data-driven optimizations across listings, ads, and operations.",
                icon: <BarChart3 className="text-teal-500" size={32} />
              },
              {
                step: 3,
                title: "Scale & Grow",
                description: "We analyze performance, iterate strategies, and scale your business for maximum ROI.",
                icon: <TrendingUp className="text-cyan-500" size={32} />
              }
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100/50 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to become our next success story?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let’s discuss how our Amazon expertise can help your business achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {selectedCase.category}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{selectedCase.client}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedCase.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedCase.fullDescription}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-gray-800">{selectedCase.metrics.roas}</div>
                    <div className="text-xs text-gray-500">ROAS</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-gray-800">{selectedCase.metrics.acos}</div>
                    <div className="text-xs text-gray-500">ACoS</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-gray-800">{selectedCase.metrics.conversion}</div>
                    <div className="text-xs text-gray-500">Conversion</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-gray-800">{selectedCase.metrics.traffic}</div>
                    <div className="text-xs text-gray-500">Traffic</div>
                  </div>
                </div>

                {/* Full Results */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Full Results:</h3>
                  <ul className="space-y-2">
                    {selectedCase.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}