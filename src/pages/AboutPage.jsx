import React from 'react'
import SEOHead from '../components/ui/SEOHead'
import About from '../components/sections/About'
import Testimonials from '../components/sections/Testimonials'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div>
      <SEOHead page="about" />
      
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-gradient-to-br from-accent-500 to-secondary-500 text-white"
      >
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            About Intelisans
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Your trusted partner in digital transformation. Learn about our journey, values, and commitment to innovation.
          </p>
        </div>
      </motion.section>

      <About />
      <Testimonials />
    </div>
  )
}

export default AboutPage