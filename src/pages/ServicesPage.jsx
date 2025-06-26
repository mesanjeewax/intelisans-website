import React from 'react'
import SEOHead from '../components/ui/SEOHead'
import Services from '../components/sections/Services'
import { motion } from 'framer-motion'

const ServicesPage = () => {
  return (
    <div>
      <SEOHead page="services" />
      
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-gradient-to-br from-secondary-500 to-primary-500 text-white"
      >
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs. From mobile apps to AI-powered analytics.
          </p>
        </div>
      </motion.section>

      <Services />
    </div>
  )
}

export default ServicesPage