import React from 'react'
import SEOHead from '../components/ui/SEOHead'
import Products from '../components/sections/Products'
import DataAnalytics from '../components/sections/DataAnalytics'
import { motion } from 'framer-motion'

const ProductsPage = () => {
  return (
    <div>
      <SEOHead page="products" />
      
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-gradient-to-br from-primary-500 to-accent-500 text-white"
      >
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our Products & Solutions
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Discover our comprehensive portfolio of intelligent applications and data analytics platforms that are transforming businesses worldwide.
          </p>
        </div>
      </motion.section>

      <Products />
      <DataAnalytics />
    </div>
  )
}

export default ProductsPage