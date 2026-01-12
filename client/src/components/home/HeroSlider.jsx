import { useEffect, useState } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";

const slides = [
  {
    image: `${banner1}`,
    tag: "Hello",
    title: "Upgrade Your Business With Our Technology",
    description:
      "We are Team of Energetic Developers to Making the Technology Futures with You",
  },
  {
    image: `${banner2}`,
    tag: "Hey, There",
    title: "We Give Wings To Your Business",
    description: "Take your Business Online with Safe.",
  },
  {
    image: `${banner3}`,
    tag: "You Know?",
    title: "We Are Your Digital Partner",
    description: "Make as a Business Technology Partner.",
  },
  {
    image: `${banner4}`,
    tag: "It's Really!",
    title: "We Make Your Brand Shine",
    description: "Take upto your Business Online & Be Bright your Life.",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      slides.forEach((slide) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => {
          setImagesLoaded((prev) => new Set([...prev, slide.image]));
        };
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[active];
  const isImageLoaded = imagesLoaded.has(slide.image);

  return (
    <section className="relative banner-responsive w-full overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slides.map((slideItem, index) => {
          const isActive = index === active;
          const isLoaded = imagesLoaded.has(slideItem.image);

          return (
            <div
              key={`slide-${index}`}
              className={`hero-slide absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
              style={{
                backgroundImage: `url(${slideItem.image})`,
                filter: isLoaded ? "none" : "blur(2px)",
                willChange: "opacity",
              }}
            />
          );
        })}
      </div>

      {/* Loading overlay for first load */}
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 animate-pulse" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-600/50 md:bg-blue-600/40" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          {/* Tag */}
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <span className="text-4xl md:text-5xl lg:text-6xl font-600 leading-none">
              "
            </span>
            <span className="text-base md:text-lg opacity-90">{slide.tag}</span>
          </div>

          {/* Title */}
          <h1 className="text-heading font-600 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-3xl">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg max-w-xl opacity-90 leading-relaxed">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base">
              View More
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              active === i
                ? "bg-pink-600 scale-125"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
