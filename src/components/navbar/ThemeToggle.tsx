import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../utils/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full ${
        isDark ? 'bg-slate-700' : 'bg-slate-200'
      } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {isDark ? (
          <FiSun className="text-yellow-400 text-lg" />
        ) : (
          <FiMoon className="text-slate-700 text-lg" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
