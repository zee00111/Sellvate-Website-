import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import React, { useState } from "react";

export const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Maximize your Amazon business growth with Sellvate. Expert digital marketing, analytics, and support for sellers who want to win on Amazon.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a href="#" title="" className="">
                  <TwitterIcon />
                </a>
              </li>

              <li>
                <a href="#" title="" className="">
                  <FacebookIcon />
                </a>
              </li>

              <li>
                <a href="#" title="" className="">
                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a href="#" title="" className="">
                  <GithubIcon />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Sellvate
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" className="flex text-base text-black transition-all duration-200">About Sellvate</a>
              </li>
              <li>
                <a href="#" className="flex text-base text-black transition-all duration-200">Amazon Services</a>
              </li>
              <li>
                <a href="#" className="flex text-base text-black transition-all duration-200">Case Studies</a>
              </li>
              <li>
                <a href="#" className="flex text-base text-black transition-all duration-200">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>

              <button type="submit" className="btn btn-orange mt-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © {new Date().getFullYear()}, All Rights Reserved, Sellvate
        </p>
      </div>
    </section>
  );
};
