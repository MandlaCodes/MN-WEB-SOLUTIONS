import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse", // ensures it reverses when you scroll back up
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "Roadtoesling.com",
      description: "A website for a business that assists teachers in applying to teach abroad.",
      image: "/assets/Screenshot 2025-05-09 165948.png", // updated path
      link: "https://roadtoesling.com",
    },
    {
      title: "AvantGarde Landscape",
      description: "A clean website made for a landscaping company specifically designed to increase clients.",
      image: "/assets/projects/portfolio.png", // updated path
      link: "https://yourportfolio.example.com",
    },
    {
      title: "Portfolio website",
      description: "Portfolio website made to showcase work and skills to employers",
      image: "/assets/projects/fitness.png", // updated path
      link: "https://yourfitnessapp.example.com",
    },
    {
      title: "Little Lemon",
      description: "Custom website for a local restaurant with booking system.",
      image: "/assets/projects/booking.png", // updated path
      link: "https://yourbookingplatform.example.com",
    },
  ];

  return (
    <section id="projects" className="c-space section-spacing">
      <h2 className="text-heading mb-8">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (cardsRef.current[index] = el)}
            className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-neutral-300 mt-2">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
