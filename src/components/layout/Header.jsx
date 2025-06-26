import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Elegant Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Glowing background for logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-2xl shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center group-hover:scale-105 relative overflow-hidden">
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <img 
                  src="/images/logo.png" 
                  alt="Intelisans Logo" 
                  className="w-7 h-7 object-contain relative z-10"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <span 
                  className="text-white font-bold text-lg relative z-10"
                  style={{ display: 'none' }}
                >
                  I
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-white group-hover:text-primary-400 transition-colors leading-tight">
                Intelisans
              </span>
              <span className="text-xs text-gray-400 font-medium leading-tight">
                AI & Software Solutions
              </span>
            </div>
          </Link>

          {/* Elegant Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                  location.pathname === item.path
                    ? 'text-white bg-white/10 backdrop-blur-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Elegant Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-gray-300 border border-gray-600 rounded-xl hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-300 font-medium group"
            >
              <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                Hire Us
              </span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-medium shadow-lg hover:shadow-primary-500/25 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-2 border border-gray-800/50"
        >
          <nav className="py-4 space-y-1 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-800/50 mt-4">
              <a 
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-4 text-center border border-gray-600 text-gray-300 rounded-xl font-medium hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
              >
                Hire Us
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium"
              >
                Get Quote
              </Link>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header