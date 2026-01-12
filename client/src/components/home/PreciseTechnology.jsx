import { useEffect, useRef, useState } from "react";
import convenient from "../../assets/images/convenient.png";
import scalable from "../../assets/images/scalable.png";
import efficient from "../../assets/images/efficient.png";
import support from "../../assets/images/support.png";

const PreciseTechnology = () => {
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
      className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Premium Background Elements - Optimized for performance */}
      <div
        className={`absolute inset-0 opacity-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-20" : "opacity-0"
        }`}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl gpu-accelerated"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl gpu-accelerated"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl gpu-accelerated"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* HEADING */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Precise <span className="text-red-600">Technology</span>
          </h2>

          {/* divider */}
          <div className="mt-4 flex items-center justify-center gap-2">
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

          {/* SUBTEXT */}
          <p
            className={`mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 transition-all duration-1000 delay-1400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Started as a team with Ideas and now we Deliver the Amazing
            Solutions.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-16 mt-12 md:mt-16 lg:mt-20">
          {/* Item 1 */}
          <div
            className={`flex flex-col items-center group transition-all duration-700 delay-1600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative p-3 md:p-4 rounded-full bg-gray-50 group-hover:bg-red-50 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={convenient}
                alt="Convenient"
                className="relative w-16 md:w-28 lg:w-36 h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="mt-3 md:mt-6 text-base md:text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 text-center">
              Convenient
            </h4>
            <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Item 2 */}
          <div
            className={`flex flex-col items-center group transition-all duration-700 delay-1800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative p-3 md:p-4 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={scalable}
                alt="Scalable"
                className="relative w-16 md:w-28 lg:w-36 h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="mt-3 md:mt-6 text-base md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-center">
              Scalable
            </h4>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Item 3 */}
          <div
            className={`flex flex-col items-center group transition-all duration-700 delay-2000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative p-3 md:p-4 rounded-full bg-gray-50 group-hover:bg-green-50 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={efficient}
                alt="Efficient"
                className="relative w-16 md:w-28 lg:w-36 h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="mt-3 md:mt-6 text-base md:text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 text-center">
              Efficient
            </h4>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Item 4 */}
          <div
            className={`flex flex-col items-center group transition-all duration-700 delay-2200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative p-3 md:p-4 rounded-full bg-gray-50 group-hover:bg-purple-50 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={support}
                alt="Support"
                className="relative w-16 md:w-28 lg:w-36 h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="mt-3 md:mt-6 text-base md:text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 text-center">
              Support
            </h4>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreciseTechnology;
