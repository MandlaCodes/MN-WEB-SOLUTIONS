import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    name: "Annah",
    role: "Founder of RoadtoEsling",
    quote:
      "Really love the design and colors of the website",
  },
  {
    name: "Mr Ndhlovu",
    role: "Owner of AvantGarde Landscaping",
    quote:
      "The website made it easier to attract clients and showcase our services",
  },
  {
    name: "Mandla",
    role: "-",
    quote:
      "Really love how attractive my portfolio is. I have received a lot of compliments from my friends and family",
  },
];

export const Testimonial = () => {
  const cardsRef = useRef([]); // Stores references for all testimonial cards
  const titleRef = useRef(null); // For animating the title
  const subtitleRef = useRef(null); // For animating the subtitle

  useLayoutEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for testimonial cards
    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        y: 50 + index * 10, // Different speeds for each card
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // When the top of the card hits the 80% of the viewport height
          end: "bottom top", // End when the bottom of the card hits the top of the viewport
          scrub: true, // Smooth scrolling effect
        },
      });
    });

    // Animate title and subtitle
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title Section */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          What Our Clients Say
        </h2>

        {/* Subtitle Section */}
        <p
          ref={subtitleRef}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Real feedback from some of our most recent and exciting 3D web projects.
        </p>

        {/* Testimonial Cards */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => el && cardsRef.current.push(el)} // Store reference for each card
              className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 text-left p-6 rounded-2xl shadow-2xl transition-transform hover:-translate-y-2 hover:shadow-pink-500/30"
            >
              <p className="italic text-white-100 mb-6 leading-relaxed">
                “{testimonial.quote}”
              </p>
              <div>
                <h4 className="text-white font-semibold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
