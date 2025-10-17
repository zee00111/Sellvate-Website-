'use client';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Award, Users, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  expertise: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "10+ years of experience in Amazon marketplace strategies and e-commerce growth.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    email: "sarah@sellvate.com",
    expertise: ["Amazon Strategy", "Business Development", "Team Leadership"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of PPC",
    bio: "Amazon Advertising expert with proven track record of 300%+ ROAS improvements.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    email: "michael@sellvate.com",
    expertise: ["PPC Management", "Data Analytics", "Conversion Optimization"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Account Manager",
    bio: "Specialist in brand protection and account health management for Amazon sellers.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    email: "emily@sellvate.com",
    expertise: ["Account Management", "Brand Protection", "Customer Success"]
  },
  {
    id: 4,
    name: "David Kumar",
    role: "Senior SEO Specialist",
    bio: "Amazon listing optimization expert helping brands rank higher and convert better.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    email: "david@sellvate.com",
    expertise: ["SEO Optimization", "Keyword Research", "Content Strategy"]
  },
  {
    id: 5,
    name: "Jessica Taylor",
    role: "Creative Director",
    bio: "Award-winning designer creating compelling product visuals and A+ content.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    email: "jessica@sellvate.com",
    expertise: ["Product Photography", "A+ Content", "Brand Design"]
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Analytics Manager",
    bio: "Data scientist transforming raw metrics into actionable growth strategies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
    email: "james@sellvate.com",
    expertise: ["Data Analytics", "Business Intelligence", "Performance Tracking"]
  }
];

const stats = [
  { icon: <Users size={32} className="text-orange-500" />, value: "50+", label: "Team Members" },
  { icon: <Target size={32} className="text-orange-500" />, value: "500+", label: "Clients Served" },
  { icon: <Award size={32} className="text-orange-500" />, value: "15+", label: "Years Experience" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate team of Amazon experts dedicated to helping your business thrive in the competitive e-commerce landscape.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-orange-100 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-orange-50 rounded-full">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links - Show on hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-orange-50 text-orange-600 rounded-full border border-orange-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Join Our Growing Team</h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for Amazon excellence and client success.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                View Open Positions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
