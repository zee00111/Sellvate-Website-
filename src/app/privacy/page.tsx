/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

// Inline SVG Icons
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const CookieIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M10 16.5c.5 0 1-.5 1-1s-.5-1-1-1-1 .5-1 1 .5 1 1 1z" />
    <path d="M14 12.5c.5 0 1-.5 1-1s-.5-1-1-1-1 .5-1 1 .5 1 1 1z" />
    <path d="M16 16.5c.5 0 1-.5 1-1s-.5-1-1-1-1 .5-1 1 .5 1 1 1z" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default function PrivacyPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <UserIcon />,
      content: "At Sellvate, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
    },
    {
      id: "information",
      title: "Information We Collect",
      icon: <DatabaseIcon />,
      content: (
        <>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Identity Data includes first name, last name, username or similar identifier.</li>
            <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
            <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li>Usage Data includes information about how you use our website and services.</li>
            <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>
        </>
      )
    },
    {
      id: "use",
      title: "How We Use Your Information",
      icon: <ShieldIcon />,
      content: (
        <>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our services</li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
          </ul>
        </>
      )
    },
    {
      id: "security",
      title: "Data Security",
      icon: <LockIcon />,
      content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know."
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: <DatabaseIcon />,
      content: "We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements."
    },
    {
      id: "rights",
      title: "Your Legal Rights",
      icon: <ShieldIcon />,
      content: (
        <>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </>
      )
    },
    {
      id: "cookies",
      title: "Cookies",
      icon: <CookieIcon />,
      content: (
        <>
          We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          <p className="mt-2">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
        </>
      )
    },
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      icon: <DocumentIcon />,
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date at the top of this Privacy Policy."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 py-16 px-4">
        <div className="max-w-4xl mt-4 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-cyan-100"
          >
            Last Updated: June 15, 2023
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Section */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 border-b border-amber-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Phone className="text-orange-600" />
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <Mail className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                <a
                  href="mailto:privacy@sellvate.com"
                  className="text-orange-600 hover:text-orange-700 hover:underline"
                >
                  privacy@sellvate.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                <span>123 Business Avenue, Suite 100, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="p-6 md:p-8">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-10"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center gap-4 w-full text-left group"
                  aria-expanded={expanded === section.id}
                >
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl text-white group-hover:scale-105 transition-transform">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {section.title}
                  </h2>
                </button>
                <div
                  className={`mt-4 pl-16 pr-4 transition-all duration-300 ${
                    expanded === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="text-gray-600 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
