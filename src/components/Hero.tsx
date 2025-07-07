import React from 'react';
import { ChevronDown, Cpu, Zap, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Oil and Gas Industrial Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-gray-900/70 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/80 transition-colors duration-300"></div>
      </div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div 
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 sm:top-40 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-teal-500/20 dark:bg-teal-400/20 rounded-full"
          animate={{
            y: [-30, 30, -30],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 sm:bottom-40 left-20 sm:left-40 w-20 sm:w-40 h-20 sm:h-40 bg-purple-500/20 dark:bg-purple-400/20 rounded-full"
          animate={{
            y: [-25, 25, -25],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div 
          className="absolute top-16 sm:top-32 left-1/4 w-8 sm:w-16 h-8 sm:h-16 border-2 border-blue-400/30 dark:border-blue-300/30"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-16 sm:bottom-32 right-1/4 w-10 sm:w-20 h-10 sm:h-20 border-2 border-teal-400/30 dark:border-teal-300/30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-8 sm:left-16 w-6 sm:w-12 h-6 sm:h-12 bg-gradient-to-br from-blue-500/30 to-teal-500/30 dark:from-blue-400/30 dark:to-teal-400/30"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 transition-colors duration-300"
          >
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Arslan Ahmed
            </span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 mb-6 sm:mb-8 transition-colors duration-300"
          >
            Instrumentation & Control Engineer
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300"
          >
            Dedicated engineer with extensive experience in industrial instrumentation, 
            control systems, and hardware development within the EPC and refinery sectors.
          </motion.p>

          {/* 3D Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-8 mb-8 sm:mb-12"
          >
            <motion.div 
              className="group cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Cpu className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 text-center transition-colors duration-300">Control Systems</p>
            </motion.div>
            
            <motion.div 
              className="group cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 text-center transition-colors duration-300">Instrumentation</p>
            </motion.div>
            
            <motion.div 
              className="group cursor-pointer"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Settings className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 text-center transition-colors duration-300">Engineering</p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-center"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        variants={floatingVariants}
        animate="animate"
      >
        <ChevronDown className="w-6 sm:w-8 h-6 sm:h-8 text-gray-300 transition-colors duration-300" />
      </motion.div>
    </section>
  );
};

export default Hero;