"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const ref = useRef(null);

  const springProps = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 300, friction: 10 },
    reset: true,
  });

  const transitions = useTransition(expandedIndex, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: "auto" },
    leave: { opacity: 0, height: 0 },
    config: { mass: 1, tension: 280, friction: 12 },
  });

  const testimonialsData = [
    {
      quote:
        "“Sellvate transformed our Amazon listings and PPC campaigns – sales skyrocketed by 300% in just months!”",
      name: "Alex Johnson",
      role: "CEO, EcoGoods",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      quote:
        "“Their account management is top-notch; we saved hours weekly while optimizing inventory and ads effortlessly.”",
      name: "Sarah Lee",
      role: "Founder, TechGadgets",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    },
    {
      quote:
        "“Brand store development by Sellvate made our products stand out, boosting customer loyalty and conversions.”",
      name: "Michael Torres",
      role: "Marketing Director, HomeEssentials",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    },
  ];

  return (
    <section ref={ref} className="py-28 bg-gradient-to-br from-orange-50 to-amber-100/60">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <animated.div style={springProps}>
            <div className="text-center">
              <p className="text-lg font-medium text-orange-700 font-pj">
                Hear From Our Satisfied Amazon Sellers
              </p>
              <h2 className="font-poppins mt-4 text-3xl font-bold sm:text-4xl xl:text-5xl">
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 inline-block text-transparent bg-clip-text">
                  Client Testimonials
                </span>
              </h2>
            </div>

            <div className="mt-8 text-center md:mt-16">
              <Link
                href="#"
                title=""
                className="pb-2 text-base font-bold leading-7 text-orange-700 transition-all duration-200 border-b-2 border-orange-400/70 hover:border-orange-500 font-pj focus:outline-none focus:ring-1 focus:ring-orange-400 focus:ring-offset-2 hover:text-orange-800"
              >
                Check all 1,500+ reviews
              </Link>
            </div>
          </animated.div>

          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #f97316 -0.55%, #fb923c 22.86%, #f59e0b 48.36%, #fb923c 73.33%, #f97316 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {testimonialsData.map((testimonial, index) => {
                const isExpanded = expandedIndex === index;
                const cardSpring = useSpring({
                  from: { scale: 1, boxShadow: "0 5px 15px rgba(0,0,0,0.08)" },
                  to: {
                    scale: isExpanded ? 1.05 : 1,
                    boxShadow: isExpanded
                      ? "0 20px 35px rgba(249,115,22,0.25)"
                      : "0 5px 15px rgba(0,0,0,0.08)",
                  },
                  config: { mass: 1, tension: 320, friction: 12 },
                });

                return (
                  <animated.div
                    key={index}
                    style={cardSpring}
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="flex flex-col overflow-hidden cursor-pointer rounded-xl bg-white border border-orange-100 hover:border-orange-200 transition-colors"
                  >
                    <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                      <div className="flex-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, starIndex) => (
                            <StarIcon
                              key={starIndex}
                              size={18}
                              className="text-orange-500"
                            />
                          ))}
                        </div>

                        {transitions((styles, item) =>
                          item === index ? (
                            <animated.blockquote style={styles} className="flex-1 mt-8">
                              <p className="text-lg leading-relaxed text-neutral font-pj">
                                {testimonial.quote}
                              </p>
                            </animated.blockquote>
                          ) : null
                        )}
                      </div>

                      <div className="flex items-center mt-8">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src={testimonial.avatar}
                          alt=""
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-neutral font-pj">
                            {testimonial.name}
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </animated.div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 md:mt-24 text-center">
            <h3 className="text-2xl font-bold text-neutral mb-4">
              Ready to see results like these?
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Let’s talk about your goals and map out a tailored plan for your Amazon growth.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-xl"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TeamSection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const springProps = useSpring({
    from: { opacity: 0, y: 50, scale: 0.9 },
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, scale: isVisible ? 1 : 0.9 },
    config: { mass: 1, tension: 350, friction: 15 },
    delay: 200,
  });

  const buttonSpring = useSpring({
    from: { scale: 0.9, opacity: 0 },
    to: { scale: isVisible ? 1 : 0.9, opacity: isVisible ? 1 : 0 },
    config: { mass: 1, tension: 300, friction: 10 },
    delay: 400,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-3xl mx-4 lg:mx-auto max-w-7xl overflow-hidden shadow-2xl">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Team+Background')] bg-cover bg-center opacity-30 filter blur-sm"></div>
        <div className="relative text-center py-16">
          <animated.h2
            style={springProps}
            className="text-4xl font-extrabold mb-4 drop-shadow-md"
          >
            Powered by Amazing People
          </animated.h2>
          <animated.p
            style={springProps}
            className="text-xl mb-8"
          >
            More than 45+ talented and happy employees
          </animated.p>
          <animated.a
            href="#"
            style={buttonSpring}
            className="inline-block px-8 py-3 bg-white text-orange-600 font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white hover:text-orange-500 active:scale-95"
          >
            MEET THE SELLVATE TEAM →
          </animated.a>
        </div>
      </div>
       {/* CTA Section */}
       <section className="py-20 text-center bg-gradient-to-t from-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-orange-400 mb-6">
            Ready to Elevate Your Amazon Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let’s tailor a solution for your success. Contact us today for a free consultation!
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </section>
  );
};