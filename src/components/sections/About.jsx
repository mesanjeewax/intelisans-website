import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaUsers, FaAward, FaGlobeAmericas, FaCode, FaChartLine, FaBrain } from 'react-icons/fa'
import { stats } from '../../data/testimonials'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const values = [
    {
      icon: FaRocket,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: FaUsers,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with clients to understand their needs and deliver tailored solutions.'
    },
    {
      icon: FaAward,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, testing, and delivery to ensure robust, scalable solutions.'
    },
    {
      icon: FaGlobeAmericas,
      title: 'Global Reach',
      description: 'While based in Sri Lanka, we serve clients worldwide, bringing local expertise to global markets.'
    }
  ]

  const expertise = [
    {
      icon: FaCode,
      title: 'Software Development',
      description: 'Full-stack development with modern frameworks and technologies'
    },
    {
      icon: FaChartLine,
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions'
    },
    {
      icon: FaBrain,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive modeling'
    }
  ]

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-medium mb-4">
            About Intelisans
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Transforming Ideas into{' '}
            <span className="text-gradient">Digital Reality</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to democratize access to advanced technology solutions, Intelisans has been at the forefront of digital innovation, helping businesses leverage the power of data and intelligent applications.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Intelisans was born from a simple yet powerful belief: that every business, regardless of size, should have access to intelligent technology solutions that drive growth and efficiency.
              </p>
              <p>
                What started as a passion project to create smarter mobile applications has evolved into a comprehensive technology solutions company, specializing in data analytics, AI-powered applications, and cloud-based platforms.
              </p>
              <p>
                Today, we're proud to serve clients across multiple industries, from startups to established enterprises, helping them navigate their digital transformation journey with confidence.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Our Mission</h4>
              <p className="text-sm opacity-90">
                "To empower businesses with intelligent technology solutions that are not just innovative, but practical, scalable, and delivered with simplicity."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-heading font-bold mb-6">Why Choose Intelisans?</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <FaRocket className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Proven Track Record</h5>
                    <p className="text-sm opacity-90">50+ successful projects delivered on time and within budget</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <FaBrain className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Cutting-Edge Technology</h5>
                    <p className="text-sm opacity-90">Latest AI, ML, and cloud technologies in every solution</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <FaUsers className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Dedicated Support</h5>
                    <p className="text-sm opacity-90">24/7 support and ongoing maintenance for all projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 bg-gray-50 rounded-lg"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white text-xl" />
                </div>
                <h4 className="font-heading font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">Our Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 border border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white text-xl" />
                </div>
                <h4 className="font-heading font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            <div className="space-y-8">
              {[
                {
                  year: '2022',
                  title: 'Foundation',
                  description: 'Intelisans was founded with a focus on mobile app development and data analytics.'
                },
                {
                  year: '2023',
                  title: 'First Major Success',
                  description: 'Launched Budget Buddy, our first consumer mobile app that reached 10,000+ users.'
                },
                {
                  year: '2024',
                  title: 'Expansion',
                  description: 'Expanded into AI/ML solutions and launched Promo Buddy, the first-of-its-kind promotion platform in Sri Lanka.'
                },
                {
                  year: '2025',
                  title: 'Global Reach',
                  description: 'Serving clients worldwide with comprehensive technology solutions and data intelligence platforms.'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="text-primary-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="font-heading font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-heading font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses that trust Intelisans for their digital transformation journey. 
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium">
              Get Started Today
            </button>
            <button className="px-8 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors font-medium">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About