"use client";
import { motion } from "framer-motion";
import { RocketIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const applyTheme = (nextTheme: "light" | "dark") => {
    setTheme(nextTheme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", nextTheme);
      // Optionally add a class for Tailwind dark variants
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", nextTheme);
    }
  };

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
      return;
    }
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="border-gray-200 w-full"
    >
      <div className="navbar bg-gradient-to-r from-orange-500 h-16 w-full to-orange-600 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-orange-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              
              </li>
              <li>
              <a href="/service">Service</a>
            </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
           <Link href="/" className="orange-outline text-xl p-0 flex items-center gap-2" style={{background: 'transparent', border: 'none'}}>
             <img src="/sellvate.png" alt="Sellvate Logo " width={70} height={70} style={{borderRadius: '10px'}} />
             {/* <span className="font-bold text-orange-500">SELLVATE</span> */}
           </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {/* Theme Toggle */}
          {/* <button
            type="button"
            onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
            className="btn btn-sm border-0 bg-white/20 hover:bg-white/30 text-white"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button> */}
          {/* <a className="btn btn-orange-outline btn-sm">SignUp</a> */}
          <a className="btn btn-orange-outline btn-sm">Get Started</a>
        </div>
      </div>
    </motion.nav>
  );
};
