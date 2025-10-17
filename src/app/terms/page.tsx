/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Inline SVG Icons
const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CopyrightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16c-1.38 0-2.5-1.12-2.5-2.5S10.62 11 12 11s2.5 1.12 2.5 2.5S13.38 16 12 16z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12" y2="17" />
  </svg>
);

const PowerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

const ScaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function TermsPage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <DocumentIcon />,
      content: (
        <>
          <p>
            Welcome to Sellvate ("Company", "we", "our", "us"). These Terms and Conditions govern your use of our website located at{" "}
            <Link href="/" className="text-orange-600 hover:text-orange-700 hover:underline">
              www.sellvate.com
            </Link>{" "}
            and all related services.
          </p>
          <p className="mt-2">
            By accessing our website and using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our website or use our services.
          </p>
        </>
      )
    },
    {
      id: "services",
      title: "Services Description",
      icon: <ShieldIcon />,
      content: "Sellvate provides Amazon marketing and optimization services including but not limited to PPC campaign management, listing optimization, market expansion strategies, and brand analytics. The specific services to be provided will be outlined in a separate agreement or statement of work between Sellvate and the client."
    },
    {
      id: "responsibilities",
      title: "User Responsibilities",
      icon: <UserIcon />,
      content: (
        <>
          <p>When using our services, you agree to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Provide accurate and complete information as required for service delivery</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access or use of your account</li>
            <li>Not use our services for any illegal or unauthorized purpose</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </>
      )
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: <CopyrightIcon />,
      content: "The content on our website, including text, graphics, logos, images, and software, is the property of Sellvate and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent."
    },
    {
      id: "payment",
      title: "Payment Terms",
      icon: <CreditCardIcon />,
      content: "Payment terms for our services will be specified in the service agreement between Sellvate and the client. Unless otherwise stated, invoices are due within 30 days of issuance. Late payments may incur additional fees of 1.5% per month or the maximum allowed by law."
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <AlertIcon />,
      content: "To the maximum extent permitted by law, Sellvate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services, even if we have been advised of the possibility of such damages. Our total liability for any claim arising from these terms shall not exceed the amount paid by you for the services in the 12 months preceding the claim."
    },
    {
      id: "termination",
      title: "Termination",
      icon: <PowerIcon />,
      content: "We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms and Conditions. Upon termination, all rights granted to you under these terms will cease immediately."
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: <RefreshIcon />,
      content: "We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the date at the top of these terms and by maintaining a current version on our website. Your continued use of the services after such changes constitutes acceptance of the revised terms."
    },
    {
      id: "governing",
      title: "Governing Law",
      icon: <ScaleIcon />,
      content: "These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in New York County, New York."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 py-16 px-4">
        <div className="max-w-4xl mt-4 mx-auto text-center ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Terms and Conditions
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
              <MailIcon className="text-orange-600" />
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <MailIcon className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                <a href="mailto:info@sellvate.com" className="text-orange-600 hover:text-orange-700 hover:underline">
                  info@sellvate.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <LocationIcon className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                <span>123 Business Avenue, Suite 100, New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="p-6 md:p-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="mb-10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl text-white mt-1 flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">{section.title}</h2>
                    <div className="text-gray-600 leading-relaxed">
                      {section.content}
                    </div>
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