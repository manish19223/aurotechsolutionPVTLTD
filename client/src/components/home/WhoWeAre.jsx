import { useState, useEffect, useRef } from "react";
import whoImg from "../../assets/images/who_we_are.jpg";

const data = [
  {
    id: 1,
    title: "Why With Us ?",
    content:
      "Regularly considering realities and innovations in project management methodologies, we have developed a robust process that ensures quality work on time. We Understand & Digitalized Your Idea.",
  },
  {
    id: 2,
    title: "What we Make ?",
    content:
      "We start a project with an Ideation Workshop that encompasses a thinking process to gather, organize, and refine the client requirements. Ideas are the Best Inventions by Humans.",
  },
  {
    id: 3,
    title: "How We Work ?",
    content:
      "Our Design Sprint involves the Double Diamond approach of Design Thinking. We Find, Explain, Design, Code, and Deliver the right solution followed by wireframes and prototypes.",
  },
];

const WhoWeAre = () => {
  const [openId, setOpenId] = useState(null);
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
    <section ref={sectionRef} className="bg-blue-50 py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADING */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span
              className={`inline-block transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              WHO WE{" "}
            </span>
            <span
              className={`inline-block text-pink-600 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              ARE ?
            </span>
          </h2>

          <div className="mt-4 flex justify-center items-center gap-2 mb-6">
            <span
              className={`w-6 md:w-8 h-px bg-gray-300 transition-all duration-500 delay-600 ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
            />
            <span
              className={`w-2 h-2 bg-pink-600 rounded-full transition-all duration-500 delay-700 ${
                isVisible ? "scale-100" : "scale-0"
              }`}
            />
            <span
              className={`w-2 h-2 bg-pink-600 rounded-full transition-all duration-500 delay-800 ${
                isVisible ? "scale-100" : "scale-0"
              }`}
            />
            <span
              className={`w-2 h-2 bg-pink-600 rounded-full transition-all duration-500 delay-900 ${
                isVisible ? "scale-100" : "scale-0"
              }`}
            />
            <span
              className={`w-6 md:w-8 h-px bg-gray-300 transition-all duration-500 delay-1000 ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>

          <p
            className={`mt-6 text-gray-700 font-medium text-base md:text-lg transition-all duration-700 delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            We Work With Emerging Talent and Established Ideas
          </p>
        </div>

        {/* MAIN */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
          {/* IMAGE */}
          <div
            className={`relative self-start transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              <img
                src={whoImg}
                alt="Who We Are"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Simple floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-30"></div>
            </div>
            <div className="absolute inset-4 md:inset-6 border border-white/40 rounded-2xl pointer-events-none group-hover:border-white/60 transition-colors duration-300" />
          </div>

          {/* ACCORDION */}
          <div
            className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {data.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id}>
                  {/* HEADER */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className={`w-full flex justify-between items-center px-4 md:px-6 py-4 md:py-6 text-left text-lg md:text-xl font-semibold transition-colors duration-200 hover:bg-pink-50 ${
                      isOpen ? "bg-pink-50" : ""
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-200 ${
                          isOpen
                            ? "bg-pink-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`${
                          isOpen ? "text-pink-600" : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                    <span
                      className={`text-xl md:text-2xl font-light transition-transform duration-200 ${
                        isOpen ? "rotate-45 text-pink-600" : "text-gray-400"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* CONTENT */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 md:px-6 py-4 md:py-5 text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.content}
                    </div>
                  </div>

                  {/* BOTTOM LINE */}
                  {index !== data.length - 1 && (
                    <div className="h-px bg-gray-200 w-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
