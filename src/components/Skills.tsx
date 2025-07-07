import React from 'react';
import { Cpu, Zap, Settings, Shield, Database, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Control Systems",
      icon: Cpu,
      color: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
      skills: [
        { name: "Honeywell C300/C200", level: 95 },
        { name: "Siemens S7-400", level: 90 },
        { name: "Allen Bradley 1756", level: 85 },
        { name: "Honeywell Masterlogic", level: 88 }
      ]
    },
    {
      title: "Instrumentation",
      icon: Zap,
      color: "from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500",
      skills: [
        { name: "Transmitters & Sensors", level: 95 },
        { name: "Control Valves", level: 92 },
        { name: "Analyzers", level: 88 },
        { name: "Field Instruments", level: 94 }
      ]
    },
    {
      title: "Safety Systems",
      icon: Shield,
      color: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
      skills: [
        { name: "ESD Systems", level: 90 },
        { name: "Fire & Gas Detection", level: 88 },
        { name: "HAZOP Studies", level: 85 },
        { name: "SIL Assessment", level: 82 }
      ]
    },
    {
      title: "Engineering Tools",
      icon: Settings,
      color: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
      skills: [
        { name: "P&ID Development", level: 90 },
        { name: "3D Model Review", level: 85 },
        { name: "FEED Engineering", level: 88 },
        { name: "Technical Documentation", level: 92 }
      ]
    },
    {
      title: "Software & Systems",
      icon: Database,
      color: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
      skills: [
        { name: "CMMS Maximo", level: 85 },
        { name: "SCADA Systems", level: 88 },
        { name: "MATLAB", level: 80 },
        { name: "Factory IO", level: 82 }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500",
      skills: [
        { name: "PLC Programming", level: 85 },
        { name: "MERN Stack", level: 75 },
        { name: "Technical Writing", level: 90 },
        { name: "System Integration", level: 88 }
      ]
    }
  ];

  const certifications = [
    "Learning SCADA - LinkedIn",
    "PLC Simulation Software Factory IO - LinkedIn",
    "Occupational Safety and Health - LinkedIn",
    "HSEQ Training at ARL",
    "Introduction to Programming with MATLAB - Vanderbilt University",
    "MERN Full Stack Web Development - TereSol"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Industrial Control Panel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-gray-100/85 dark:from-gray-800/85 dark:to-gray-900/85 transition-colors duration-300"></div>
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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">Skills</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300"
          >
            Comprehensive expertise across industrial automation and control systems
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <motion.div 
                    className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-3 sm:mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm transition-colors duration-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications */}
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
            Professional Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex items-center p-3 sm:p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700/70 transition-all duration-200"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.div 
                  className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 rounded-full mr-3 flex-shrink-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm transition-colors duration-300 break-words">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;