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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Enhanced logo with proper contrast */}
<Link to="/" className="flex items-center space-x-4 group">
  <div className="relative">
    {/* Dark background circle for logo visibility */}
    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-800 via-gray-900 to-slate-800 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105 border-2 border-primary-500/20">
      <img 
        src="/images/logo.png" 
        alt="Intelisans Logo" 
        className="w-9 h-9 md:w-11 md:h-11 object-contain"
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      {/* Fallback */}
      <span 
        className="text-primary-400 font-bold text-xl md:text-2xl"
        style={{ display: 'none' }}
      >
        I
      </span>
    </div>
    
    {/* Glowing ring effect */}
    <div className="absolute inset-0 w-14 h-14 md:w-16 md:h-16 rounded-full border border-primary-400/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
  </div>
  
  <div className="flex flex-col">
    <span className="text-xl md:text-2xl font-heading font-bold text-gray-800 group-hover:text-primary-600 transition-colors leading-tight">
      Intelisans
    </span>
    <span className="text-xs md:text-sm text-gray-500 font-medium leading-tight">
      AI & Software Solutions
    </span>
  </div>
</Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-2 px-4 transition-colors duration-200 font-medium ${
                  location.pathname === item.path
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            
              <a href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-primary-500 border border-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium"
            >
              Hire Us
            </a>
            <Link
              to="/contact"
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-500"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-b-xl"
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-colors font-medium ${
                  location.pathname === item.path
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              
                <a href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-4 text-center border border-primary-500 text-primary-500 rounded-lg font-medium"
              >
                Hire Us
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-center bg-primary-500 text-white rounded-lg font-medium"
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