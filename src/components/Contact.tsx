import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahmedarslan053@gmail.com',
      href: 'mailto:ahmedarslan053@gmail.com',
      color: 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92-332-5663559',
      href: 'tel:+923325663559',
      color: 'from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      href: '#',
      color: 'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/arslan-ahmed-070191173/',
      color: 'from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500'
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
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Industrial Control Systems"
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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">Touch</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300"
          >
            Ready to collaborate on your next engineering project? Let's discuss how we can work together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center p-3 sm:p-4 bg-gray-100 dark:bg-gray-700/30 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-all duration-200 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div 
                        className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm sm:text-base text-gray-900 dark:text-white font-medium transition-colors duration-300">{info.label}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 break-words">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">Professional Summary</h3>
              <div className="space-y-4">
                {[
                  { text: "5+ years in instrumentation and control systems", color: "bg-blue-500 dark:bg-blue-400", title: "Engineering Expertise" },
                  { text: "Oil & Gas, Petrochemicals, EPC Projects", color: "bg-teal-500 dark:bg-teal-400", title: "Industry Focus" },
                  { text: "International projects across 6+ countries", color: "bg-purple-500 dark:bg-purple-400", title: "Project Experience" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-3 h-3 ${item.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base text-gray-900 dark:text-white font-medium mb-1 transition-colors duration-300">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Send a Message
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {[
                { name: 'name', label: 'Your Name', icon: User, type: 'text', placeholder: 'Enter your full name' },
                { name: 'email', label: 'Email Address', icon: Mail, type: 'email', placeholder: 'Enter your email address' }
              ].map((field, index) => {
                const Icon = field.icon;
                return (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      <Icon className="w-4 h-4 inline mr-2" />
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or inquiry..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-300 dark:border-gray-700 text-center transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors duration-300">
            © 2025 Arslan Ahmed. All rights reserved. | Instrumentation & Control Engineer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;