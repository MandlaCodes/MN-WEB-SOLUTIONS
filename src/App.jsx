import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";  // Assuming you're using framer-motion for animations

import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  const [mountain3Y, setMountain3Y] = useState(0);
  const videoRef = useRef(null);

  // Parallax effect based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMountain3Y(window.scrollY * 0.3); // Adjust multiplier for desired parallax speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Parallax Video Background */}
      <motion.div
        className="absolute inset-0 w-full h-screen -z-50 overflow-hidden"
        style={{
          backgroundImage: "url(/assets/thisisengineering-sbVu5zitZt0-unsplash.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain3Y, // Parallax effect based on scroll
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/18458403-hd_1920_1080_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
