import { FlipWords } from "./FlipWords";
import { motion, useScroll, useTransform } from "framer-motion";
import Buttons from "./Buttons";

const HeroText = () => {
  const { scrollYProgress } = useScroll();
  
  // Horizontal parallax effect: Move content horizontally off the screen as user scrolls
  const moveX = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);

  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative z-10 mt-20 md:mt-40  text-center md:text-left"
      style={{ x: moveX }}  // Apply horizontal movement here
    >
      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-4">
        <motion.h1 
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
         
        </motion.h1>

        <motion.p
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          We craft
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <FlipWords
            words={words}
            className="text-7xl font-extrabold text-transparant"
          />
        </motion.div>

        <motion.p
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
        >
          Web Solutions that deliver.
        </motion.p>

        <motion.div
          className="mt-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
        >
          <Buttons />
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col gap-6 md:hidden">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
        
        </motion.h1>

        <motion.p
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          We craft
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <FlipWords
            words={words}
            className="text-6xl font-black text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
          />
        </motion.div>

        <motion.p
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-cyan-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6 }}
        >
          Web Solutions that deliver.
        </motion.p>

        <motion.div
          className="mt-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
        >
          <Buttons />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroText;
