import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaServer, FaBullhorn, FaLaptopCode, FaDesktop } from "react-icons/fa";

const cards = [
  {
    icon: <FaLaptopCode />,
    title: "Consistency Develop",
    text: "We are the Consistency Team & Have a Flexible Work for Develop Your Project.",
  },
  {
    icon: <FaDesktop />,
    title: "Efficient Technology",
    text: "We Use Efficient Technology to Fulfill your Requirement & Complete Your Process.",
  },
  {
    icon: <FaServer />,
    title: "Reliable Support",
    text: "We know how our Work Satisfy You, So We give you More Reliable Support.",
  },
  {
    icon: <FaBullhorn />,
    title: "Fast Delivery",
    text: "We Made & Giving to You what You Expect and Submit Your Project at Express Time.",
  },
];

const WhyChooseUs = () => {
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
      className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-stone-100 via-gray-50 to-slate-100 overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-8 w-64 h-64 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-8 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* TITLE */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-pink-800 to-purple-800 bg-clip-text text-transparent">
            Why Choose <span className="text-pink-600">Us ?</span>
          </h2>

          {/* Divider */}
          <div className="flex justify-center items-center gap-2 my-4">
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
            className={`text-gray-600 mb-10 md:mb-14 text-sm md:text-base max-w-2xl mx-auto px-4 transition-all duration-1000 delay-1400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            We Giving Better Solution on your Business Scope
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          centeredSlides={true} // Cards center mein nicely align honge jab 3 visible
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Hover par pause (user experience better)
          }}
          grabCursor={true}
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false, // Mobile par full center better nahi, left align
            },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // Large screen par 3 cards visible → sliding mandatory & visible
          }}
          pagination={{
            el: ".why-pagination",
            clickable: true,
          }}
          className="
            [&_.swiper-pagination-bullet]:w-2
            [&_.swiper-pagination-bullet]:h-2
            [&_.swiper-pagination-bullet]:bg-gray-300
            [&_.swiper-pagination-bullet]:opacity-100
            [&_.swiper-pagination-bullet]:transition-all
            [&_.swiper-pagination-bullet]:duration-300
            [&_.swiper-pagination-bullet-active]:w-6
            [&_.swiper-pagination-bullet-active]:rounded-full
            [&_.swiper-pagination-bullet-active]:bg-gradient-to-r
            [&_.swiper-pagination-bullet-active]:from-pink-600
            [&_.swiper-pagination-bullet-active]:to-purple-600
          "
        >
          {cards.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="
                  group
                  h-full
                  border rounded-xl p-8 text-left bg-white
                  transition-all duration-500 ease-out
                  hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600
                  hover:shadow-[0_0_30px_rgba(236,72,153,0.45)]
                "
              >
                <div className="text-pink-600 text-4xl mb-6 transition-colors duration-500 group-hover:text-white">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold mb-3 text-gray-900 transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PAGINATION OUTSIDE */}
        <div className="why-pagination flex justify-center gap-2 mt-10" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
