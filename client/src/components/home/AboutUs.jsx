import { Bell, Building2, ThumbsUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import aboutImg from "../../assets/images/about_us_3.jpg";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Optional: reset animation when scrolling back up (uncomment if needed)
          // setIsVisible(false);
        }
      },
      {
        threshold: 0.05, // Trigger when 5% visible (earlier trigger)
        rootMargin: "0px 0px -100px 0px", // Trigger 100px before element enters viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6 md:-translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-hero">
            About <span className="text-pink-600">Us</span>
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-6 md:w-8 h-px bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-2 h-2 rounded-full bg-pink-600"></span>
            <span className="w-6 md:w-8 h-px bg-gray-300"></span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* IMAGE */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12 md:translate-y-16"
            }`}
          >
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <img
                src={aboutImg}
                alt="About Auro Tech"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Border overlay */}
            <div className="absolute inset-4 md:inset-6 border rounded-xl md:rounded-2xl border-white/40 pointer-events-none group-hover:border-white/60 transition-colors duration-300"></div>

            {/* Simple floating elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-30"></div>
          </div>

          {/* CONTENT CARD */}
          <div
            className={`bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12 md:translate-y-16"
            }`}
          >
            <h3 className="text-lg md:text-xl text-heading mb-3 md:mb-4 text-gray-800">
              Auro Tech Solutions – Your Technology Partner
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              At Auro Tech Solutions, We Develop Innovative and Reliable
              Products & Services. All of Our technologies give Efficient
              Solutions for Your Requirements.
              <br />
              <br />
              Auro Tech Solutions was Started by Young Entrepreneur Mr. M.Sankar
              on September 1st, 2020. The Goal of Auro Tech Solutions
              Technologies is "LEARN - EXECUTE - TEACH".
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base">
              View More
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-16 md:mt-20 lg:mt-24">
          {/* Item 1 */}
          <div
            className={`flex flex-col sm:flex-row gap-4 p-4 md:p-6 rounded-xl hover:bg-pink-50 transition-all duration-700 delay-700 group cursor-pointer ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 md:translate-y-6"
            }`}
          >
            <div className="shrink-0 flex justify-center sm:justify-start">
              <Bell className="text-pink-600 w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-200" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-subheading text-base md:text-lg text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
                We are Professional
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
                We Develop & Promote Advanced Information Technologies (AIT) for
                your Need.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className={`flex flex-col sm:flex-row gap-4 p-4 md:p-6 rounded-xl hover:bg-pink-50 transition-all duration-700 delay-900 group cursor-pointer ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 md:translate-y-6"
            }`}
          >
            <div className="shrink-0 flex justify-center sm:justify-start">
              <Building2 className="text-pink-600 w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-200" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-subheading text-base md:text-lg text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
                We are Efficient
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
                Our Business Philosophy is Assure the Quality of Product & Build
                Trust from you.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div
            className={`flex flex-col sm:flex-row gap-4 p-4 md:p-6 rounded-xl hover:bg-pink-50 transition-all duration-700 delay-1100 group cursor-pointer ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 md:translate-y-6"
            }`}
          >
            <div className="shrink-0 flex justify-center sm:justify-start">
              <ThumbsUp className="text-pink-600 w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-200" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-subheading text-base md:text-lg text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
                We are Smartest
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
                We are Committed to Provide you Best Quality Solutions at Low
                Cost & Efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
