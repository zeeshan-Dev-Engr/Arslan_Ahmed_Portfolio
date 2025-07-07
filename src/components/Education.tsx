import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="education" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Industrial Engineering Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/85 to-gray-100/85 dark:from-gray-900/85 dark:to-gray-800/85 transition-colors duration-300"></div>
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
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">Background</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300"
          >
            Strong foundation in electronics engineering and continuous professional development
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-8 sm:mb-12 transition-colors duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start">
              <motion.div 
                className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </motion.div>
              
              <div className="flex-1">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Bachelor of Science in Electronics Engineering
                </motion.h3>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {[
                    { icon: Award, text: "International Islamic University Islamabad (IIUI)" },
                    { icon: MapPin, text: "Pakistan" },
                    { icon: Calendar, text: "Sept 2017 - Oct 2021" }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Icon className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="break-words">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
                
                <motion.p 
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Comprehensive program covering electronics engineering fundamentals, control systems, 
                  instrumentation, and digital signal processing. Strong emphasis on practical applications 
                  and industrial automation systems.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Core Subjects</h4>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {[
                        { text: "Control Systems Engineering", color: "bg-blue-500 dark:bg-blue-400" },
                        { text: "Electronic Instrumentation", color: "bg-teal-500 dark:bg-teal-400" },
                        { text: "Digital Signal Processing", color: "bg-purple-500 dark:bg-purple-400" },
                        { text: "Power Electronics", color: "bg-orange-500 dark:bg-orange-400" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className={`w-2 h-2 ${item.color} rounded-full mr-3 flex-shrink-0`}></span>
                          <span className="break-words">{item.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Specializations</h4>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {[
                        { text: "Industrial Automation", color: "bg-green-500 dark:bg-green-400" },
                        { text: "Process Control", color: "bg-indigo-500 dark:bg-indigo-400" },
                        { text: "Embedded Systems", color: "bg-pink-500 dark:bg-pink-400" },
                        { text: "Communication Systems", color: "bg-yellow-500 dark:bg-yellow-400" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className={`w-2 h-2 ${item.color} rounded-full mr-3 flex-shrink-0`}></span>
                          <span className="break-words">{item.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Development */}
          <motion.div 
            className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Continuous Learning & Development
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Technical Training</h4>
                <div className="space-y-3">
                  {[
                    { title: "SCADA Systems", desc: "Industrial data collection and visualization" },
                    { title: "PLC Programming", desc: "Factory IO simulation and control" },
                    { title: "MATLAB Programming", desc: "Vanderbilt University certification" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="p-3 sm:p-4 bg-gray-100 dark:bg-gray-700/30 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <h5 className="text-sm sm:text-base text-gray-900 dark:text-white font-medium mb-1 transition-colors duration-300">{item.title}</h5>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Safety & Compliance</h4>
                <div className="space-y-3">
                  {[
                    { title: "HSEQ Training", desc: "Comprehensive safety protocols at ARL" },
                    { title: "Occupational Safety", desc: "Hazard communication and prevention" },
                    { title: "Web Development", desc: "MERN stack development skills" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="p-3 sm:p-4 bg-gray-100 dark:bg-gray-700/30 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <h5 className="text-sm sm:text-base text-gray-900 dark:text-white font-medium mb-1 transition-colors duration-300">{item.title}</h5>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;