import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { motion, useScroll, useTransform } from "framer-motion"; // Import framer-motion hooks

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const { scrollYProgress } = useScroll(); // Get scrollY progress

  // Horizontal movement for astronaut based on scroll position
  const moveX = useTransform(scrollYProgress, [0, 0.5], [0, -15]); // Adjust as needed

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space ">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Astronaut
              scale={isMobile ? 1.5 : 0.9}
              position={isMobile ? [0, -6.5, -4] : [2, -0.4, 0]}
              rotation={[0, 6.6, 0]} // Adjust as needed to face camera
            />
            <Rig moveX={moveX} /> {/* Pass moveX as prop to Rig */}
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig({ moveX }) {
  // Update astronaut's position with horizontal movement based on scroll
  return useFrame((state, delta) => {
    // Apply the horizontal movement based on scroll (moveX)
    easing.damp3(
      state.camera.position,
      [moveX.get(), 1 + state.mouse.y / 10, 3], // Use moveX for horizontal
      0.5,
      delta
    );
  });
}


export default Hero;
