import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaDownload, FaStar, FaAndroid, FaApple, FaGlobe, FaTimes } from 'react-icons/fa'
import VideoPlayer from '../ui/VideoPlayer'

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Product data with your actual video
  const products = [
    {
      id: 'budget-buddy',
      name: 'Budget Buddy',
      tagline: 'Smart Investment Tracker',
      description: 'AI-powered expense tracking application with intelligent budgeting algorithms, real-time bank integration, and predictive spending analytics.',
      features: [
        'Real-time expense categorization with AI',
        'Custom budgeting rules (50/30/20, envelope method)',
        'Bank transaction synchronization',
        'Predictive spending alerts and recommendations',
        'Multi-currency support for international users',
        'Investment portfolio tracking and analysis'
      ],
      tech: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Python ML'],
      demo: '/videos/budget-buddy-demo.mp4',
      poster: '/images/budget-buddy-poster.jpg',
      platforms: ['Android', 'iOS', 'Web Dashboard'],
      status: 'live',
      metrics: {
        users: '10,000+',
        rating: 4.8,
        downloads: '25,000+'
      }
    },
    {
      id: 'promo-buddy',
      name: 'Promo Buddy',
      tagline: 'Personalized Promotions Engine',
      description: 'Revolutionary promotion matching system for Sri Lanka - the first AI-powered platform connecting credit/debit card offers with user preferences.',
      features: [
        'AI-powered promotion matching algorithm',
        'Real-time merchant integration and updates',
        'Multi-channel campaign delivery (Push, SMS, Email)',
        'Comprehensive merchant dashboard with analytics'
      ],
      tech: ['React Native', 'AWS Lambda', 'Python', 'PostgreSQL'],
      demo: '/videos/budget-buddy-demo.mp4', // Using same video for demo
      platforms: ['Android', 'iOS', 'Web Dashboard'],
      status: 'live',
      metrics: {
        merchants: '500+',
        campaigns: '2,000+',
        engagement: '85%'
      }
    },
    {
      id: 'grandma-tales',
      name: 'Grandma Tales',
      tagline: 'Interactive Kids Stories',
      description: 'Voice-enabled storytelling application designed for safe, educational entertainment with parental controls and screen time management.',
      features: [
        'AI-powered voice narration in multiple languages',
        'Parental controls and screen time management',
        'Educational content curation by experts',
        'Offline story downloads for travel'
      ],
      tech: ['Flutter', 'Firebase', 'Google Cloud Text-to-Speech'],
      demo: '/videos/budget-buddy-demo.mp4', // Using same video for demo
      platforms: ['Android', 'iOS'],
      status: 'beta',
      metrics: {
        stories: '100+',
        families: '1,000+',
        engagement: '92%'
      }
    }
  ]

  const platformIcons = {
    'Android': FaAndroid,
    'iOS': FaApple,
    'Web': FaGlobe,
    'Web Dashboard': FaGlobe
  }

  const statusColors = {
    'live': 'bg-green-100 text-green-800',
    'beta': 'bg-yellow-100 text-yellow-800',
    'coming-soon': 'bg-blue-100 text-blue-800'
  }

  return (
    <section className="section-padding bg-gray-50" id="products">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Innovative Solutions for{' '}
            <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of intelligent applications and platforms that are transforming industries and empowering businesses worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Header */}
              <div className="relative p-6 bg-gradient-to-br from-primary-500 to-accent-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-primary-100 text-sm">
                      {product.tagline}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[product.status]}`}>
                    {product.status.replace('-', ' ')}
                  </span>
                </div>

                {/* Platforms */}
                <div className="flex items-center space-x-2 mb-4">
                  {product.platforms?.map((platform) => {
                    const Icon = platformIcons[platform] || FaGlobe
                    return (
                      <div key={platform} className="text-white/80 hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                    )
                  })}
                </div>

                {/* Metrics */}
                {product.metrics && (
                  <div className="grid grid-cols-2 gap-4 text-white/90 text-sm">
                    <div>
                      <div className="font-semibold">{product.metrics.users || product.metrics.merchants}</div>
                      <div className="text-primary-100">Active Users</div>
                    </div>
                    <div>
                      <div className="font-semibold flex items-center">
                        <FaStar className="mr-1 text-yellow-300" size={12} />
                        {product.metrics.rating || product.metrics.engagement}
                      </div>
                      <div className="text-primary-100">Rating</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {product.tech.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        +{product.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 group inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <FaPlay className="mr-2 text-sm" />
                    View Demo
                  </button>
                  
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors">
                    <FaDownload className="mr-2 text-sm" />
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal with Video - FIXED CLOSE BUTTON */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-heading font-bold">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600">{selectedProduct.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Video Player */}
              <div className="mb-6">
                <VideoPlayer
                  src={selectedProduct.demo}
                  poster={selectedProduct.poster}
                  className="w-full h-64 md:h-80"
                  autoPlay={false}
                  controls={true}
                />
              </div>

              {/* Product Details */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">About This Product</h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* All Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Features</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  <FaDownload className="mr-2" />
                  Request Demo
                </button>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="fixed inset-0 -z-10" 
            onClick={() => setSelectedProduct(null)}
          ></div>
        </div>
      )}
    </section>
  )
}

export default ProductShowcase