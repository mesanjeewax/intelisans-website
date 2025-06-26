import React from 'react'
import SEOHead from '../components/ui/SEOHead'
import Contact from '../components/sections/Contact'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <div>
      <SEOHead page="contact" />
      
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-gradient-to-br from-primary-500 to-accent-500 text-white"
      >
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch for a free consultation and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </motion.section>

      <Contact />
    </div>
  )
}

export default ContactPage