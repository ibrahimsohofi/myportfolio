import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, textReveal, letterAnimation, floating } from '../../utils/animation';
import DownloadCV from './DownloadCV';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

// Helper component for animated text
const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={textReveal}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char: string, index: number) => (
        <motion.span
          key={`${char}-${index}`} // Use both character and index for a more unique key
          className="inline-block"
          variants={letterAnimation}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left md:w-1/2"
        >
          <motion.span
            className="text-xl md:text-2xl text-blue-600 font-medium"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            Hello, I'm
          </motion.span>

          {/* Animated title with letter animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
            <AnimatedText text="Ibrahim Sohofi" />
          </h1>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl text-slate-600 dark:text-slate-400 font-medium mt-3"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="max-w-md md:max-w-xl mt-6 text-slate-600 dark:text-slate-400"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            I build responsive, accessible, and high-performance web applications with modern technologies.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-600/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>

            <DownloadCV />
          </motion.div>
        </motion.div>

        {/* Image container */}
        <motion.div
          className="hidden md:block md:w-1/2 relative h-[80vh] mt-12 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut"
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.img
              src="/images/professional-man.png"
              alt="Professional Developer"
              className="h-full object-contain z-10 drop-shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />

            {/* Subtle gradient background for the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-lg" />
          </div>
        </motion.div>
      </div>

      {/* Floating background decorative elements */}
      <motion.div
        className="absolute -bottom-16 -right-16 w-64 h-64 md:w-96 md:h-96 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl"
        initial="initial"
        animate="animate"
        variants={floating}
      />
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-3xl"
        initial="initial"
        animate="animate"
        variants={{
          initial: { y: 0 },
          animate: {
            y: [0, -15, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1
            }
          }
        }}
      />
    </section>
  );
};

export default Hero;
