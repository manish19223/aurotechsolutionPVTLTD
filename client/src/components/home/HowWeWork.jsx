// src/components/home/HowWeWork.jsx

import { useEffect, useRef, useState } from "react";
import processImage from "../../assets/images/work-process.png";
// 👆 yaha apni image ka exact path lagana

const HowWeWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/25 to-blue-400/25 rounded-full blur-2xl animate-pulse delay-1400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ====== HEADING ====== */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            How we <span className="text-pink-600">{`{Work}`}</span>
          </h2>

          {/* divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span
              className={`w-8 md:w-10 h-px bg-gradient-to-r from-transparent via-pink-600 to-transparent transition-all duration-700 delay-400 ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
            <span
              className={`w-2 h-2 rounded-full bg-pink-600 transition-all duration-700 delay-600 ${
                isVisible ? "scale-100 animate-bounce" : "scale-0"
              }`}
            ></span>
            <span
              className={`w-2 h-2 rounded-full bg-pink-600 transition-all duration-700 delay-800 ${
                isVisible ? "scale-100 animate-bounce" : "scale-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            ></span>
            <span
              className={`w-2 h-2 rounded-full bg-pink-600 transition-all duration-700 delay-1000 ${
                isVisible ? "scale-100 animate-bounce" : "scale-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className={`w-8 md:w-10 h-px bg-gradient-to-r from-transparent via-pink-600 to-transparent transition-all duration-700 delay-1200 ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>

          <p
            className={`mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4 transition-all duration-1000 delay-1400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Our Working Process based on 6 Levels of unit
          </p>
        </div>

        {/* ====== CONTENT ====== */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT : IMAGE */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6 max-w-full overflow-hidden">
              <img
                src={processImage}
                alt="Our Work Process"
                className="max-w-full h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT : DARK CONTENT BOX */}
          <div className="bg-[#1f1f1f] text-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 order-1 lg:order-2">
            <p className="text-gray-200 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              We are a full-scale IT provider who will start with your idea to
              completely create or integrate it into the existing system and
              maintain it.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-4 md:mb-6">
              Our Process Key Features
            </h3>

            <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs md:text-sm flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm md:text-base">
                  Innovative design & development
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs md:text-sm flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm md:text-base">
                  Cost-Efficient & Quick Setup
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs md:text-sm flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm md:text-base">
                  Fast Working Process
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs md:text-sm flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm md:text-base">Best Support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs md:text-sm flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm md:text-base">
                  Long-Lasting Services
                </span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We will do the design, development, deployment, hosting and
              completely support you in the entire lifecycle of the product or
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
