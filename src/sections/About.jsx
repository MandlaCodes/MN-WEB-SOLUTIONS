import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

// Animation Variants
const fadeVariant = (direction = "left", index = 0) => {
  const x = direction === "left" ? -100 : 100;
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15,
      },
    },
  };
};

// Animated wrapper component
const AnimatedSection = ({ children, direction = "left", className, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={fadeVariant(direction, index)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      {/* Adjusted heading with added margin-top */}
      <h2 className="text-heading mt-16">About MN Web Solutions</h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* Section 1 */}
        <AnimatedSection direction="left" className="flex items-end grid-default-color grid-1" index={1}>
          <img
            src="/assets/Futuristic MN Web Solutions Logo.png" // updated path
            className="absolute scale-[1] md:scale-[0.8] lg:scale-[1.33] left-1/2 top-1/5 -translate-x-1/2 -translate-y-1/3"
          />
          <div className="absolute inset-x-0 -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo pointer-events-none" />
        </AnimatedSection>

        {/* Section 2 */}
        <div
          direction="right"
          className="bg-gradient-to-br from-gray-500 to-black rounded-2xl shadow-2xl backdrop-blur-md grid-2 pt-5 pb-5 w-full min-h-fit"
          index={2}
        >
          <div className="relative z-10 flex flex-col justify-center w-full p-4 sm:p-6 md:p-12 text-white">
            <p className=" text-base sm:text-lg leading-relaxed text-white">
              At <strong>MN Web Solutions</strong>, every website is crafted from scratch to reflect your brand, engage your audience, and scale with your growth. We specialize in creating custom web solutions that are not only visually stunning but also highly functional.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <AnimatedSection direction="left" className="grid-black-color grid-3" index={3}>
          <div className="z-10 w-[50%]">
            <p className="headtext">Remote. Reliable. Ready.</p>
            <p className=" text-white">
              We're based in Johannesburg, South Africa — but we deliver solutions to clients worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </AnimatedSection>

        {/* Section 4 */}
        <AnimatedSection direction="right" className="bg-gradient-to-br from-gray-500 to-white rounded-2xl shadow-2xl backdrop-blur-md grid-2 pt-5 pb-5 grid-4" index={4}>
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext text-black">Ready to bring your vision to life?</p>
            <CopyEmailButton />
          </div>
        </AnimatedSection>

        {/* Section 5 */}
        <AnimatedSection direction="left" className=" grid-default-color  grid-5" index={5}>
          <div className="z-10 w-[50%]">
            <h4 className=" text-2xl text-black-500">Tech We Trust</h4>
            <p className="pt-5 text-xl text-white">
              Our tech stack is built on the latest and greatest tools in web development. We prioritize performance, security, and user experience in every project.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default About;
