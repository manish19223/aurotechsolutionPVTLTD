import { useEffect, useRef, useState } from "react";
import { FaSmile, FaCoffee, FaThumbsUp, FaBuilding } from "react-icons/fa";
import VideoFile from "../../assets/images/video.mp4";

/* =======================
   STATS DATA
======================= */
const stats = [
  { icon: <FaSmile />, value: 500, label: "Happy Clients" },
  { icon: <FaCoffee />, value: 750, label: "Cups of Coffee" },
  { icon: <FaThumbsUp />, value: 430, label: "Projects Done" },
  { icon: <FaBuilding />, value: 4, label: "Years Experience" },
];

/* =======================
   COUNTER COMPONENT
======================= */
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let current = 0;
          const step = Math.ceil(value / 60);

          const interval = setInterval(() => {
            current += step;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-gray-900">
      {count}+
    </span>
  );
};

/* =======================
   MAIN SECTION
======================= */
const StatsWithVideo = () => {
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
      className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-200 via-cyan-100 to-indigo-200 overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/25 to-blue-400/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Mobile: Video at top, Stats below */}
        <div
          className={`block md:hidden mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative h-[280px] md:h-[320px] mx-auto max-w-md">
            <div className="w-full h-full overflow-hidden bg-gray-200 shadow-2xl rounded-2xl border border-white/20">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={VideoFile} type="video/mp4" />
              </video>
              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* ================= LEFT STATS ================= */}
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-14 gap-y-8 md:gap-y-12 lg:gap-y-16 z-10">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center md:text-left transition-all duration-700 delay-${
                  (i + 1) * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative">
                  <div className="text-[#2A2AFF] text-3xl md:text-4xl mb-2 mx-auto md:mx-0 w-fit group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 text-[#2A2AFF] text-3xl md:text-4xl mb-2 mx-auto md:mx-0 w-fit opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300">
                    {s.icon}
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="flex gap-1 mb-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 bg-[#2A2AFF] rounded-full animate-pulse" />
                  <span
                    className="w-1.5 h-1.5 bg-[#6A1B9A] rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-[#8A2BE2] rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>

                <Counter value={s.value} />
                <p className="mt-1 text-gray-700 text-sm md:text-base font-medium">
                  {s.label}
                </p>

                {/* Animated underline */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#2A2AFF] to-[#8A2BE2] rounded-full mx-auto md:mx-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT VIDEO ================= */}
          <div
            className={`relative h-[320px] md:h-[400px] lg:h-[520px] hidden md:block transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div
              className="
                absolute
                right-[-80px] lg:right-[-140px]
                top-1/2
                -translate-y-1/2
                w-[500px] lg:w-[750px]
                h-[350px] lg:h-[550px]
                overflow-hidden
                bg-gray-200
                shadow-[ -20px_0_60px_rgba(42,42,255,0.35) ] lg:shadow-[ -30px_0_80px_rgba(42,42,255,0.35) ]
                rounded-l-[200px] lg:rounded-l-[300px]
                rounded-r-[30px] lg:rounded-r-[40px]
                border border-white/20
              "
            >
              <video
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={VideoFile} type="video/mp4" />
              </video>

              {/* Video overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsWithVideo;
