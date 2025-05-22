import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold">
              Ibrahim<span className="text-blue-600">S</span>
            </a>
          </motion.div>

          <motion.div
            className="text-center md:text-right text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="flex items-center justify-center md:justify-end">
              &copy; {currentYear} Ibrahim Sohofi. All rights reserved.
            </p>
            <p className="mt-2 flex items-center justify-center md:justify-end">
              Made with
              <motion.span
                className="mx-1 text-red-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1,
                }}
              >
                <FaHeart />
              </motion.span>
              using React, Tailwind & Framer Motion
            </p>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#home" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
