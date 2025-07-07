import React from 'react';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "I&C Design Engineer",
      company: "DESCON Headquarters",
      location: "Lahore",
      period: "Jun 2025 – Present",
      description: "Preparing and Developing design deliverables for the I&C department related to EPC projects in the Oil&Gas and petrochemical industries, focusing on FEED (Front-End Engineering Design) and Detailed engineering for both Brownfield and Greenfield projects.",
      skills: ["EPC Projects", "FEED Engineering", "Oil & Gas", "Petrochemicals"],
      color: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
    },
    {
      title: "Instrumentation & Control Engineer",
      company: "Brillante Engineers",
      location: "Thermodesign Engineering ltd",
      period: "May 2024 – April 2025",
      description: "Comprehensive I&C engineering role covering design, development, and review of instrumentation systems for major international projects.",
      highlights: [
        "Developed Basis of Design and Instrument Index Lists",
        "Prepared Instrument Datasheets and Technical Bid Evaluations",
        "Created Control System Specifications for PCS, ESD, F&G, HIPPS",
        "Participated in HAZOP and SIL Assessment Studies"
      ],
      projects: [
        "Detail Engineering of Well Manifold -32 & 33 | BAPCO UPSTREAM | BAHRAIN",
        "Detail Engineering of PPF Facility | ADNOC | UAE",
        "Detail Engineering of Gas Dehydration Unit | BAPCO UPSTREAM | BAHRAIN"
      ],
      skills: ["HAZOP", "SIL Assessment", "Control Systems", "P&ID Review"],
      color: "from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500"
    },
    {
      title: "Instrument and Control Engineer",
      company: "Attock Refinery Limited (ARL)",
      location: "Pakistan",
      period: "Feb 2023 – April 2024",
      description: "Field instrumentation experience with comprehensive maintenance and control systems expertise.",
      highlights: [
        "Maintenance of Gauges, Analyzers, and Control Valves",
        "Testing and commissioning of sensors and transmitters",
        "DCS and ESD systems maintenance",
        "CMMS Maximo implementation"
      ],
      systems: [
        "DCS Systems (Honeywell C300, C200)",
        "ESD Systems (Honeywell Safety Manager)",
        "PLC (Siemens S7-400, Allen Bradley 1756)",
        "Fire & Gas Detection Systems"
      ],
      skills: ["DCS", "ESD", "PLC", "Field Instrumentation"],
      color: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500"
    },
    {
      title: "Technical Support Engineer",
      company: "Gaichu Managed Services",
      location: "Islamabad",
      period: "Aug 2022 – Feb 2023",
      description: "International technical support with focus on network infrastructure and hardware troubleshooting.",
      highlights: [
        "Hardware and network troubleshooting",
        "Router and modem configuration",
        "International client communication",
        "System diagnostics and solutions"
      ],
      skills: ["Network Configuration", "Hardware Troubleshooting", "Client Support"],
      color: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500"
    }
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
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
    <section id="experience" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Oil Refinery at Sunset"
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
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">Experience</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300"
          >
            A comprehensive journey through industrial engineering and control systems
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-4 sm:left-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 rounded-full hidden md:block mt-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                />
                
                <div className="md:ml-12 lg:ml-16 bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {exp.title}
                      </motion.h3>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                        <motion.div 
                          className="flex items-center"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="break-words">{exp.company}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.6 }}
                          viewport={{ once: true }}
                        >
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          {exp.location}
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.7 }}
                          viewport={{ once: true }}
                        >
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          {exp.period}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <motion.p 
                    className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    {exp.description}
                  </motion.p>

                  {exp.highlights && (
                    <motion.div 
                      className="mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.9 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 + 1 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                            <span className="break-words">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {exp.projects && (
                    <motion.div 
                      className="mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 1.2 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Notable Projects:</h4>
                      <ul className="space-y-2">
                        {exp.projects.map((project, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 + 1.3 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                            <span className="break-words">{project}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {exp.systems && (
                    <motion.div 
                      className="mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 1.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Systems Expertise:</h4>
                      <ul className="space-y-2">
                        {exp.systems.map((system, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 + 1.6 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                            <span className="break-words">{system}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 1.8 }}
                    viewport={{ once: true }}
                  >
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 1.9 + i * 0.05, type: "spring", stiffness: 300 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;