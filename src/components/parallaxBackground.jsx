import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow video down to 50% speed
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.9], ["0%", "100%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">

        <motion.div className="absolute inset-0 w-full h-screen -z-50 overflow-hidden"
         style={{
          backgroundImage: "url(/assets/thisisengineering-sbVu5zitZt0-unsplash.jpg).",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain3Y,
        }}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/18458403-hd_1920_1080_24fps.mp4" type="video/mp4." />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/thisisengineering-sbVu5zitZt0-unsplash.jpg).",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png).",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png).",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png).",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
