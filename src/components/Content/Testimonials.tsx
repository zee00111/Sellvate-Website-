'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Define TypeScript interfaces
interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const teamMembers: TeamMember[] = [
    {
      name: "James Robrt",
      title: "Head of Amazon Strategy",
      bio: "Hampden Sydney College in Virginia. Expert in scaling brands from zero to hero.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Chen",
      title: "PPC & SEO Specialist",
      bio: "Stanford grad with 7+ years optimizing Amazon ad campaigns across 3 continents.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus Bell",
      title: "Creative Director",
      bio: "Former agency lead. Crafts scroll-stopping visuals that convert browsers into buyers.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Mehta",
      title: "Data & Analytics Lead",
      bio: "MIT alum. Turns raw data into actionable insights that drive 3x ROI for our clients.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Jeff Stroman",
      role: "Founder, EcoGadgets",
      quote: "Sellvate didn't just manage my account — they transformed it. Sales up 240% in 3 months!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ning Ash",
      role: "CEO, BeautyBloom",
      quote: "Their creative team made our listings look premium. Conversion rate jumped from 2% to 8%!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ray O’Kon",
      role: "Director, TechGear Co.",
      quote: "The analytics dashboard is a game-changer. Real-time data helped us cut ACOS by 37%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-900">
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C30,20 70,20 100,0 L100,100 L0,100 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                <span className="block">CREATIVE</span>
                <span className="block text-yellow-400">TEAM</span>
              </h1>
              <p className="mt-4 max-w-lg text-lg text-white/90">
                Meet the experts behind your Amazon success — strategists, creatives, and data nerds who live and breathe e-commerce.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl max-w-md text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400 mb-4">
                <path d="M14.5 10c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"/>
              </svg>
              <p className="italic">
                “We don’t just follow trends — we create them. Your success is our mission.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`rounded-3xl p-6 shadow-lg border ${
                  idx % 2 === 0 ? 'bg-teal-50 border-teal-200' : 'bg-amber-50 border-amber-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={sectionRef} className="py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
            <div className="hidden md:flex gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-5.93.5.5 0 0 1 .75.65v2.5a1.5 1.5 0 0 1-1.5 1.5h-2.5a1.5 1.5 0 0 1-1.5-1.5v-2.5a.5.5 0 0 1 .65-.75 10 10 0 1 1 5.93 5.93.5.5 0 0 1-.65.75h-2.5a1.5 1.5 0 0 1-1.5-1.5v-2.5a.5.5 0 0 1 .75-.65 10 10 0 1 1 5.93 5.93z"/>
                </svg>
                Clean Interface Design
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-5.93.5.5 0 0 1 .75.65v2.5a1.5 1.5 0 0 1-1.5 1.5h-2.5a1.5 1.5 0 0 1-1.5-1.5v-2.5a.5.5 0 0 1 .65-.75 10 10 0 1 1 5.93 5.93.5.5 0 0 1-.65.75h-2.5a1.5 1.5 0 0 1-1.5-1.5v-2.5a.5.5 0 0 1 .75-.65 10 10 0 1 1 5.93 5.93z"/>
                </svg>
                100% Editable Design
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
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
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? '#fbbf24' : 'none'}
                      stroke={i < testimonial.rating ? '#fbbf24' : '#d1d5db'}
                      strokeWidth="1"
                      className="w-5 h-5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87-.69 6.9L12 18.54l-4.34 2.56-.69-6.9-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">“{testimonial.quote}”</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Ready to Join Our Success Story?
            </h3>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-full hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}