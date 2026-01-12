import React, { useEffect, useRef, useState } from "react";
import parallax_2 from "../../assets/images/parallax_2.jpg";
import client1 from "../../assets/images/client-1.jpg";
import client2 from "../../assets/images/client-2.jpg";
import client3 from "../../assets/images/client-3.jpg";
import client4 from "../../assets/images/client-4.jpg";
import client5 from "../../assets/images/client-5.jpg";
/**
 * OurClients – Premium Parallax + Sliding Logos Section
 * TailwindCSS required
 */

const clients = [
  { id: 1, src: client1, alt: "SAP Promoters" },
  { id: 2, src: client2, alt: "Valapakkam Tech" },
  { id: 3, src: client3, alt: "Spark Digital" },
  { id: 4, src: client4, alt: "Anbazhagan Fashion" },
  { id: 5, src: client5, alt: "RAA Consultancy" },
];

const OurClients = () => {
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
    <section ref={sectionRef} className="w-full overflow-hidden">
      {/* ================= PARALLAX HEADER ================= */}
      <div
        className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${parallax_2})`,
        }}
      >
        {/* Premium Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-purple-900/30 to-black/40"></div>

        {/* Animated Background Elements */}
        <div
          className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/10 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative text-center px-4 z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-hero tracking-wide drop-shadow-2xl">
              Our Clients
            </h2>

            {/* Animated Divider */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <span
                className={`w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-white/40 transition-all duration-700 delay-300 ${
                  isVisible ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
              <span
                className={`w-2 h-2 rounded-full bg-pink-500 transition-all duration-500 delay-500 ${
                  isVisible ? "scale-100 animate-bounce" : "scale-0"
                }`}
              ></span>
              <span
                className={`w-2 h-2 rounded-full bg-purple-500 transition-all duration-500 delay-700 ${
                  isVisible ? "scale-100 animate-bounce" : "scale-0"
                }`}
                style={{ animationDelay: "0.1s" }}
              ></span>
              <span
                className={`w-12 sm:w-16 h-[1px] bg-gradient-to-r from-white/40 to-transparent transition-all duration-700 delay-900 ${
                  isVisible ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODERN CLIENT LOGO SLIDER ================= */}
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]"></div>
        </div>

        {/* Section Header */}
        <div className="relative z-10 text-center mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl text-heading text-gray-800 mb-2">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
            We're proud to partner with innovative companies across various
            industries
          </p>
        </div>

        {/* Modern Slider Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-50 via-blue-50/30 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-indigo-50/50 via-blue-50/30 to-transparent z-10"></div>

          {/* Slider Track */}
          <div className="flex animate-modernSlide">
            {/* First set of modern cards */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 px-3 md:px-6"
              >
                <div className="group relative">
                  {/* Modern Card with Glassmorphism */}
                  <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Logo container with better styling */}
                    <div className="relative flex items-center justify-center h-16 md:h-20">
                      <img
                        src={client.src}
                        alt={client.alt}
                        className="h-12 md:h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Company name */}
                    <div className="mt-3 text-center">
                      <p className="text-xs md:text-sm text-description text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        {client.alt}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-8 transition-all duration-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 px-3 md:px-6"
              >
                <div className="group relative">
                  <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center justify-center h-16 md:h-20">
                      <img
                        src={client.src}
                        alt={client.alt}
                        className="h-12 md:h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-xs md:text-sm text-description text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        {client.alt}
                      </p>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-8 transition-all duration-500 rounded-full"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300"></div>
                </div>
              </div>
            ))}

            {/* Third set for extra smooth looping */}
            {clients.map((client, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 px-3 md:px-6"
              >
                <div className="group relative">
                  <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center justify-center h-16 md:h-20">
                      <img
                        src={client.src}
                        alt={client.alt}
                        className="h-12 md:h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-xs md:text-sm text-description text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        {client.alt}
                      </p>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-8 transition-all duration-500 rounded-full"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="relative z-10 mt-8 md:mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 border-2 border-white"></div>
              <div className="w-8 h-8 text-xs flex items-center justify-center text-white font-600 bg-gradient-to-r from-orange-500 to-red-500 border-2 border-white rounded-full">
                +
              </div>
            </div>
            <span className="text-sm text-description text-gray-700">
              50+ Happy Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
