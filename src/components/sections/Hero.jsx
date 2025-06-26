import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPlay, FaCode, FaChartLine, FaBrain, FaTimes } from 'react-icons/fa'

const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  // Smooth mouse tracking for subtle interactions
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' }
  ]

  const services = [
    { icon: FaCode, label: 'App Development', color: 'from-blue-500 to-cyan-500' },
    { icon: FaChartLine, label: 'Data Analytics', color: 'from-green-500 to-emerald-500' },
    { icon: FaBrain, label: 'AI Solutions', color: 'from-purple-500 to-pink-500' }
  ]

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Subtle Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl"
          />
          <motion.div
            style={{
              x: -mousePosition.x,
              y: -mousePosition.y,
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary-500/5 to-primary-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Refined Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                  Trusted by 25+ businesses worldwide
                </span>
              </div>
            </motion.div>

            {/* Bold, Modern Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[0.9] tracking-tight"
            >
              <span className="block text-gray-900">Smart</span>
              <span className="block bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Solutions
              </span>
              <span className="block text-gray-900">Delivered Simply</span>
            </motion.h1>

            {/* Refined Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We craft intelligent mobile apps, data analytics platforms, and AI-powered solutions that transform your business ideas into digital reality.
            </motion.p>

            {/* Elegant CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link
                to="/products"
                className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-2xl"
              >
                <span className="mr-3 font-medium">View Our Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button 
                onClick={() => setShowDemoModal(true)}
                className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-600 transition-colors">
                  <FaPlay className="text-white text-sm ml-0.5" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </motion.div>

            {/* Minimalist Services Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="group"
                >
                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="text-white text-xl" />
                    </div>
                    <h3 className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                      {service.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Subtle Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Demo Modal */}
      {showDemoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">
                  Budget Buddy Demo
                </h3>
                <p className="text-gray-600 mt-1">See our AI-powered expense tracker in action</p>
              </div>
              <button
                onClick={() => setShowDemoModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="aspect-video bg-gray-900 rounded-2xl mb-6 flex items-center justify-center">
                <video
                  controls
                  autoPlay
                  className="w-full h-full rounded-2xl"
                  poster="/videos/budget-buddy-poster.jpg"
                >
                  <source src="/videos/budget-buddy-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Experience how Budget Buddy transforms expense tracking with AI-powered insights and intuitive design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/products"
                    className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-medium"
                    onClick={() => setShowDemoModal(false)}
                  >
                    Explore All Products
                    <FaArrowRight className="ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                    onClick={() => setShowDemoModal(false)}
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Hero