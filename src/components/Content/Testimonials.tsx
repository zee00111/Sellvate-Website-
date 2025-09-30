"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import { StarIcon } from "lucide-react";

export const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const ref = useRef(null);

  const springProps = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 300, friction: 10 }, // Increased tension, reduced friction for bounce
    reset: true,
  });

  const transitions = useTransition(expandedIndex, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: "auto" },
    leave: { opacity: 0, height: 0 },
    config: { mass: 1, tension: 280, friction: 12 }, // Bouncier transition for quote expansion
  });

  const testimonialsData = [
    {
      quote: "“Sellvate transformed our Amazon listings and PPC campaigns – sales skyrocketed by 300% in just months!”",
      name: "Alex Johnson",
      role: "CEO, EcoGoods",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
    },
    {
      quote: "“Their account management is top-notch; we saved hours weekly while optimizing inventory and ads effortlessly.”",
      name: "Sarah Lee",
      role: "Founder, TechGadgets",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
    },
    {
      quote: "“Brand store development by Sellvate made our products stand out, boosting customer loyalty and conversions.”",
      name: "Michael Torres",
      role: "Marketing Director, HomeEssentials",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <animated.div style={springProps}>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">
                Hear From Our Satisfied Amazon Sellers
              </p>
              <h2 className="font-poppins mt-4 text-3xl font-bold text-neutral sm:text-4xl xl:text-5xl">
                Client Testimonials
              </h2>
            </div>

            <div className="mt-8 text-center md:mt-16">
              <a
                href="#"
                title=""
                className="pb-2 text-base font-bold leading-7 text-neutral transition-all duration-200 border-b-2 border-neutral hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-neutral focus:ring-offset-2 hover:text-gray-600"
              >
                Check all 1,500+ reviews
              </a>
            </div>
          </animated.div>

          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #3b82f6 -0.55%, #3b82f6 22.86%, #3b82f6 48.36%, #3b82f6 73.33%, #3b82f6 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {testimonialsData.map((testimonial, index) => {
                const isExpanded = expandedIndex === index;
                const cardSpring = useSpring({
                  from: { scale: 1, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
                  to: {
                    scale: isExpanded ? 1.1 : 1,
                    boxShadow: isExpanded ? "0 15px 30px rgba(0,0,0,0.2)" : "0 5px 15px rgba(0,0,0,0.1)"
                  },
                  config: { mass: 1, tension: 320, friction: 8 }, // Bouncier hover/expand effect
                });

                return (
                  <animated.div
                    key={index}
                    style={cardSpring}
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="flex flex-col overflow-hidden cursor-pointer rounded-xl bg-white"
                  >
                    <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                      <div className="flex-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, starIndex) => (
                            <StarIcon
                              key={starIndex}
                              size={18}
                              className="text-blue-500"
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
    config: { mass: 1, tension: 350, friction: 15 }, // Increased tension, reduced friction for bouncy reveal
    delay: 200,
  });

  const buttonSpring = useSpring({
    from: { scale: 0.9, opacity: 0 },
    to: { scale: isVisible ? 1 : 0.9, opacity: isVisible ? 1 : 0 },
    config: { mass: 1, tension: 300, friction: 10 }, // Bouncier button animation
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
    </section>
  );
};