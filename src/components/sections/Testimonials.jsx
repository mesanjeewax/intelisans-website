import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { testimonials } from '../../data/testimonials'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentClient = testimonials[currentTestimonial]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-accent-500" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Intelisans.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl mb-12 relative"
        >
          <div className="absolute -top-4 left-8">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <FaQuoteLeft className="text-white text-sm" />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-2xl ${
                    i < currentClient.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
              "{currentClient.testimonial}"
            </blockquote>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">
                  {currentClient.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="font-heading font-bold text-gray-800">{currentClient.name}</h4>
              <p className="text-gray-600 mb-1">{currentClient.role}</p>
              <p className="text-sm text-primary-600 font-medium">{currentClient.company}</p>
              <p className="text-xs text-gray-500 mt-2">Project: {currentClient.project}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 text-gray-400 hover:text-primary-500 transition-colors"
            >
              <FaChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 text-gray-400 hover:text-primary-500 transition-colors"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary-100">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < testimonial.rating ? 'text-yellow-300' : 'text-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-sm text-primary-100 line-clamp-3">
                "{testimonial.testimonial}"
              </p>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs text-primary-200">
                  Project: {testimonial.project}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials