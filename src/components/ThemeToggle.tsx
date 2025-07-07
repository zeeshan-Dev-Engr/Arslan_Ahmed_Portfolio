import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Sun className="w-6 h-6 text-yellow-500" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Moon className="w-6 h-6 text-blue-400" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;