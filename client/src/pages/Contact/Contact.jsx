import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiPhone, FiMail, FiMapPin, FiBriefcase, FiSend } from "react-icons/fi";
import contactBanner from "../../assets/images/aboutbanner.jpg";
import parallaxImg from "../../assets/images/stats-bg.jpg"; // ← Apni parallax image ka path yahan hai

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;

    let processedValue = value;

    if (name === "name") {
      // Only allow letters, spaces, hyphens, and apostrophes for names
      if (!/^[a-zA-Z\s\-']*$/.test(value)) {
        return; // Ignore invalid characters
      }
      // Prevent starting with space or special characters
      if (value.length === 1 && !/^[a-zA-Z]$/.test(value)) {
        return;
      }
      // Limit length
      if (value.length > 50) {
        return;
      }
    }

    if (name === "mobile") {
      // Only allow digits and max 10 characters
      if (!/^\d*$/.test(value)) {
        return; // Ignore non-digit input
      }
      if (value.length > 10) {
        return; // Prevent more than 10 digits
      }
    }

    if (name === "email") {
      // Basic email format validation (allow common characters)
      if (value.length > 100) {
        return; // Limit email length
      }
    }

    if (name === "message") {
      // Limit message length
      if (value.length > 1000) {
        return;
      }
    }

    setFormData({ ...formData, [name]: processedValue });
    // Clear error for this field on change
    setErrors({ ...errors, [name]: "" });
  };

  // Send form data to backend API
  const sendToBackend = async (formData) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      throw new Error(
        `Server error: ${response.status} ${response.statusText}`
      );
    }

    // Check if response has content
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server returned invalid response format");
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      throw new Error("Server returned invalid JSON response");
    }

    if (data.success) {
      return { success: true, message: data.message };
    } else {
      throw new Error(data.message || "Failed to send message");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("");

    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Your Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    } else if (!/^[a-zA-Z\s\-']+$/.test(formData.name.trim())) {
      newErrors.name =
        "Name can only contain letters, spaces, hyphens, and apostrophes";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Your Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., name@example.com)";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Your Mobile No is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile =
        "Please enter a valid 10-digit mobile number starting with 6-9";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Your Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await sendToBackend(formData);

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);

        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
        setErrors({});

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage("");
          setSubmitStatus("");
        }, 5000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Contact Us | Get In Touch | Auro Tech Solutions</title>
        <meta
          name="description"
          content="Contact Auro Tech Solutions for web development, app development, and software solutions. Reach out to us for your technology needs and project inquiries."
        />
        <meta
          name="keywords"
          content="Contact Auro Tech Solutions, Get Quote, Web Development Contact, App Development Contact"
        />
        <meta name="author" content="Auro Tech Solutions" />
        <link rel="canonical" href="https://aurotechsolutions.com/contact" />
      </Helmet>

      {/* ================= CONTACT BANNER ================= */}
      <section className="relative w-full h-105 mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBanner})` }}
        />
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">Contact Us</h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              <span className="w-10 h-0.5 bg-white/40" />
            </div>

            <div className="text-sm">
              <Link to="/" className="text-pink-600 font-medium">
                Home
              </Link>
              <span className="text-white mx-2">/</span>
              <span className="text-white">Contact Us</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* ================= LEFT : CONTACT INFO ================= */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contact Info
            </h2>
            {/* decorative dots */}
            <div className="flex items-center gap-2 mb-10">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              <span className="w-10 h-0.5 bg-gray-300"></span>
            </div>
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                  <FiPhone className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone No</h4>
                  <a
                    href="tel:+918015371070"
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    +91 8015371070
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                  <FiMail className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email Id</h4>
                  <a
                    href="mailto:aurotechsolutionspvtltd@gmail.com"
                    className="text-gray-600 hover:text-pink-600 transition-colors break-all"
                  >
                    aurotechsolutionspvtltd@gmail.com
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                  <FiMapPin className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    No 182A, South Street Pachur Post, Orathanadu Thaluk,
                    <br />
                    Thanjavur District, Tamilnadu, India,
                    <br />
                    PIN - 614902
                  </p>
                </div>
              </div>
              {/* Careers */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                  <FiBriefcase className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Careers</h4>
                  <p className="text-gray-600">Apply for Your Career</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT : CONTACT FORM ================= */}
          <div
            data-aos="fade-left"
            className="bg-white shadow-xl border rounded-xl overflow-hidden"
          >
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-10 px-6">
              <h3 className="text-2xl font-bold mb-3">
                Let’s Get In Touch with us !
              </h3>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-10 h-0.5 bg-white/60"></span>
              </div>
              <p className="text-white/90 text-sm">
                It would be great to hear from you ! If you got any queries ?
                feel free to contact us !
              </p>
            </div>
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-8 grid md:grid-cols-2 gap-6"
            >
              {/* Left Inputs */}
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name (e.g., John Doe)"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={50}
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address (e.g., john@example.com)"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Your Mobile Number (10 digits, e.g., 9876543210)"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    autoComplete="tel"
                    inputMode="numeric"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              {/* Right Textarea */}
              <div className="md:row-span-4 flex flex-col">
                <textarea
                  name="message"
                  placeholder="Your Message (minimum 10 characters)"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  className="w-full border rounded-md px-4 py-3 flex-1 min-h-[200px] resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows={8}
                />
                <div className="flex justify-between mt-1">
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                  <p className="text-gray-400 text-xs ml-auto">
                    {formData.message.length}/1000 characters
                  </p>
                </div>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`md:col-span-2 p-4 rounded-md text-center ${
                    submitStatus === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              {/* Button */}
              <div className="md:col-span-2 flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 px-8 py-3 rounded-md text-white font-semibold
                  transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-lg hover:scale-105"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend className="text-lg" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= PARALLAX SECTION (Added at bottom) ================= */}
      <ContactParallaxSection />
    </>
  );
};

// ================= PARALLAX COMPONENT =================
const ContactParallaxSection = () => {
  return (
    <section
      className="relative w-full h-[420px] md:h-[500px] overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${parallaxImg})`,
      }}
    >
      {/* PURPLE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-700/70" />
      {/* CENTER CONTENT (currently blank – future me text/button add kar sakte ho) */}
      <div
        className="relative z-10 h-full flex items-center justify-center text-center px-4"
        data-aos="fade-up"
      >
        {/* Abhi blank rakha hai, parallax effect ke liye sirf background */}
      </div>
    </section>
  );
};

export default Contact;
