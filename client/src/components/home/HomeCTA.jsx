// src/components/home/HomeCTA.jsx
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

const HomeCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.refresh();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[320px] md:h-[420px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ✅ PARALLAX
      }}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-indigo-900/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.3),transparent_70%)]"></div>

      {/* Animated Particles */}
      <div
        className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-300/50 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-300/70 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-300/60 rounded-full animate-ping delay-500"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-700/50" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 py-8 md:py-0 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Text */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-white max-w-2xl text-center md:text-left"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 drop-shadow-lg">
            Share Your Needs to Take Action
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-lg">
            Feel Free to Talk With Us
          </h3>

          {/* Decorative line */}
          <div className="mt-4 md:mt-6 flex justify-center md:justify-start">
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          </div>
        </div>

        {/* Buttons */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col sm:flex-row gap-3 md:gap-4"
        >
          <a
            href="tel:+918015371070"
            className="group bg-gradient-to-r from-gray-900 to-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 text-sm md:text-base shadow-xl hover:shadow-2xl border border-gray-700/50 hover:border-pink-400/50"
          >
            <span className="group-hover:animate-bounce">📞</span>
            <span>Call Now</span>
          </a>

          <a
            href="/contact"
            className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 text-sm md:text-base shadow-xl hover:shadow-2xl border border-purple-500/50 hover:border-white/50"
          >
            <span className="group-hover:animate-pulse">✈️</span>
            <span>Chat With Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
