import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code, GraduationCap, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { easeInOut } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: easeInOut }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700' 
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${
              scrolled 
                ? 'text-gray-900 dark:text-white' 
                : 'text-white'
            }`}>
              Arslan Ahmed
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                      : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/50'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`focus:outline-none transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    custom={index}
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center space-x-2"
                    onClick={e => {
                      setIsOpen(false);
                      setTimeout(() => {
                        const el = document.querySelector(item.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                      e.preventDefault();
                    }}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;