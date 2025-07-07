import React from 'react';
import { Target, Award, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Target, label: 'Years Experience', value: '5+', color: 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500' },
    { icon: Award, label: 'Major Projects', value: '15+', color: 'from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500' },
    { icon: Users, label: 'Team Projects', value: '50+', color: 'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500' },
    { icon: Globe, label: 'Countries', value: '6+', color: 'from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500' },
  ];

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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const statVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Industrial Control Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-gray-50/85 dark:from-gray-800/85 dark:to-gray-900/85 transition-colors duration-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">Me</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300"
          >
            Passionate about delivering innovative engineering solutions in complex industrial environments
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/90 dark:bg-gray-800/90 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Professional Summary</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 transition-colors duration-300">
                Dedicated and results-driven Instrumentation and Control Engineer with extensive experience in 
                industrial instrumentation, control systems, and hardware development within the EPC and refinery 
                maintenance sectors. Demonstrated expertise in the oil and gas industry, with a proven track record 
                of delivering high-quality projects on schedule.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Skilled in developing and implementing engineering solutions to optimize system performance and reliability. 
                Seeking opportunities to leverage technical expertise to drive successful project outcomes in complex 
                refinery and EPC environments.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/90 dark:bg-gray-800/90 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Key Expertise</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                {[
                  'Industrial Instrumentation & Control Systems',
                  'EPC Project Development & Execution',
                  'Oil & Gas Industry Operations',
                  'HAZOP & SIL Assessment Studies'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                      index === 0 ? 'bg-blue-500 dark:bg-blue-400' :
                      index === 1 ? 'bg-teal-500 dark:bg-teal-400' :
                      index === 2 ? 'bg-purple-500 dark:bg-purple-400' :
                      'bg-orange-500 dark:bg-orange-400'
                    }`}></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover="hover"
                  className="group bg-white/90 dark:bg-gray-800/90 p-4 sm:p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 transition-colors duration-300">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;