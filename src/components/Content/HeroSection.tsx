"use client";
import {
  GitHubLogo,
  LinearLogo,
  FigmaLogo,
  MainChimpLogo,
  NotionLogo,
} from "@/components/Content/HeroLogos";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlayIcon, RocketIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useId } from "react";

export const HeroSection = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden py-32"
      >
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [13, 20],
            [15, 15],
            [10, 10],
            [20, 10],
          ]}
        />
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 flex flex-col items-center gap-6 text-center">
             
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="badge py-4 badge-neutral text-poppins"
              >
                <RocketIcon className="text-primary-content" size={"18"} />{" "}
                &nbsp;Your Amazon Sales Rocket Fuel: Data-Powered Digital Marketing Strategies
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="mt-5 text-6xl leading-2 text-gray-900 sm:leading-tight md:text-6xl lg:text-6xl  font-poppins font-bold"
              >
                Unlock Your Amazon Potential<br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text">
                  with Sellvate
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="flex justify-center gap-2"
              >
                <Link
                  href="#"
                  title="Get Started"
                  className="btn btn-orange-outline"
                >
                  Get Started
                </Link>

                <Link href="#" title="Watch demo" className="btn btn-orange">
                  <ArrowRightIcon />
                  Free Amazon Audit

                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="mt-8"
              >
                <p className="mb-4 text-center text-base font-medium text-black">
                  Trusted by Amazon Sellers Worldwide
                </p>
                <div
                  className="wow fadeInUp flex items-center justify-center gap-4 text-center"
                  data-wow-delay=".3s"
                >
                  <Link
                    href="#"
                    className="text-black duration-300 ease-in-out "
                    target="_blank"
                  >
                    <GitHubLogo fill="none" height={26} width={30} />
                  </Link>
                  <Link
                    href="#"
                    className="text-black duration-300 ease-in-out "
                    target="_blank"
                  >
                    <LinearLogo fill="#5E6AD2" height={32} width={32} />
                  </Link>
                  <Link
                    href="#"
                    className="text-black duration-300 ease-in-out "
                    target="_blank"
                  >
                    <FigmaLogo fill="none" height={32} width={32} />
                  </Link>
                  <Link
                    href="#"
                    className="text-black duration-300 ease-in-out "
                    target="_blank"
                  >
                    <MainChimpLogo fill="none" height={32} width={32} />
                  </Link>
                  <Link
                    href="#"
                    className="text-black duration-300 ease-in-out "
                    target="_blank"
                  >
                    <NotionLogo fill="none" height={32} width={32} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

interface GridPatternProps {
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: any;
  [key: string]: any;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  squares,
  ...props
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full fill-orange-100 stroke-orange-200"
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
        // stroke="orange"
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
      strokeWidth={0}
      fill={`url(#${id})`}
      mask="url(#maskGradient)"
      />

      {/* {squares && (
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(([x, y]) => (
        <rect
          strokeWidth="0"
          key={`${x}-${y}`}
          width={width - 1}
          height={height - 1}
          x={x * width + 1}
          y={y * height + 1}
          fill="orange"
        />
        ))}
      </svg>
      )} */}
    </svg>
  );
}
