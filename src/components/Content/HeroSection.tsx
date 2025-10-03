'use client';

import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useId, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Inline SVG Logos (replace with real brand logos if needed)
const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinearLogo = () => (
  <svg viewBox="0 0 24 24" fill="#5E6AD2" className="w-8 h-8">
    <rect x="4" y="4" width="16" height="16" rx="2" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-gray-800">
    <path d="M9 21V18M15 21V18M3 21H21M3 3H21V9H3V3ZM3 15H21V21H3V15Z" />
  </svg>
);

const MailchimpLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.5L12 13 6.5 16.5V8.5l5.5 3.5 5.5-3.5v8z" />
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M5 0C3.619 0 2.5 1.12 2.5 2.5S3.619 5 5 5s2.5-1.12 2.5-2.5S6.381 0 5 0zm0 20C3.619 20 2.5 21.12 2.5 22.5S3.619 25 5 25s2.5-1.12 2.5-2.5S6.381 20 5 20zm14 0c-1.381 0-2.5 1.12-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.12 2.5-2.5S19.381 20 18 20zM5 10C3.619 10 2.5 11.12 2.5 12.5S3.619 15 5 15s2.5-1.12 2.5-2.5S6.381 10 5 10zm14 0c-1.381 0-2.5 1.12-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.12 2.5-2.5S19.381 10 18 10z" />
  </svg>
);

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[number, number]>;
  strokeDasharray?: number;
  className?: string;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  squares,
  className = "",
  ...props
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>

        <radialGradient id="fadeMask" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <mask id="maskGradient">
          <rect width="100%" height="100%" fill="url(#fadeMask)" />
        </mask>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        mask="url(#maskGradient)"
      />
    </svg>
  );
}

export const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden pt-24 pb-32"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700"></div>

      {/* Grid Pattern Overlay */}
      <GridPattern
        className="fill-teal-400/10 stroke-teal-400/20"
        width={40}
        height={40}
        x={-1}
        y={-1}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-6 text-center">
            {/* Badge */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 
              rounded-full bg-white px-6 py-3 backdrop-blur-sm"
            >
              <Rocket className="text-amber-300" size={18} />
              <span className="font-medium text-orange">
                Your Amazon Sales Rocket Fuel: Data-Powered Digital Marketing Strategies
              </span>
            </div>

            {/* Headline */}
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-5 text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              Unlock Your Amazon Potential
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                with Sellvate
              </span>
            </h1>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-teal-700 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>

              <Link
                href="/audit"
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <ArrowRight size={20} />
                Free Amazon Audit
              </Link>
            </div>

            {/* Trusted By */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-12"
            >
              <p className="mb-4 text-center text-lg font-medium text-cyan-100">
                Trusted by Amazon Sellers Worldwide
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {[GitHubLogo, LinearLogo, FigmaLogo, MailchimpLogo, NotionLogo].map((Logo, i) => (
                  <Link
                    key={i}
                    href="#"
                    target="_blank"
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label={`Trusted partner ${i + 1}`}
                    data-aos="zoom-in"
                    data-aos-delay={500 + i * 100}
                  >
                    <Logo />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};