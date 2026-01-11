import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Initialize AOS once
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const initAOS = () => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: "ease-out-cubic",
        mirror: false,
        anchorPlacement: "top-bottom",
        startEvent: "DOMContentLoaded",
      });
    };

    // Initialize immediately if DOM is ready, otherwise wait
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAOS);
    } else {
      initAOS();
    }

    // Cleanup
    return () => {
      document.removeEventListener("DOMContentLoaded", initAOS);
    };
  }, []);

  // Refresh AOS on route change with delay
  useEffect(() => {
    // Small delay to ensure components are mounted
    const refreshAOS = () => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    };

    refreshAOS();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
