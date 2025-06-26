import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaDownload, FaStar, FaUsers, FaArrowRight, FaAndroid, FaApple, FaGlobe } from 'react-icons/fa'
import { products } from '../../data/products'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
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
               <p className="text-gray-600 mb-4 line-clamp-3">
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
                 
                 {product.appStore && (
                   
                     <a href={product.appStore}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                   >
                     <FaDownload className="mr-2 text-sm" />
                     Download
                   </a>
                 )}
                 
                 {!product.appStore && (
                   <button className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                     <FaArrowRight className="mr-2 text-sm" />
                     Learn More
                   </button>
                 )}
               </div>
             </div>
           </motion.div>
         ))}
       </motion.div>

       {/* Call to Action */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: 0.5 }}
         className="text-center mt-16"
       >
         <div className="bg-white rounded-2xl p-8 shadow-lg">
           <h3 className="text-2xl font-heading font-bold mb-4">
             Ready to Build Your Next App?
           </h3>
           <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
             Let's discuss your project requirements and create something amazing together. 
             Our team is ready to turn your ideas into reality.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
               Start Your Project
             </button>
             <button className="px-8 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors">
               Schedule Consultation
             </button>
           </div>
         </div>
       </motion.div>
     </div>

     {/* Product Detail Modal */}
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
                 className="text-gray-400 hover:text-gray-600 text-2xl"
               >
                 
               </button>
             </div>
           </div>
           
           <div className="p-6">
             {/* Demo Video */}
             {selectedProduct.demo && (
               <div className="mb-6">
                 <video
                   controls
                   className="w-full rounded-lg shadow-lg"
                   poster={selectedProduct.screenshots?.[0]}
                 >
                   <source src={selectedProduct.demo} type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
               </div>
             )}

             {/* Detailed Description */}
             <div className="mb-6">
               <h4 className="text-lg font-semibold mb-3">About This Product</h4>
               <p className="text-gray-600 leading-relaxed">
                 {selectedProduct.longDescription || selectedProduct.description}
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

             {/* Testimonial */}
             {selectedProduct.testimonials && selectedProduct.testimonials.length > 0 && (
               <div className="mb-6">
                 <h4 className="text-lg font-semibold mb-3">Client Testimonial</h4>
                 <div className="bg-gray-50 p-4 rounded-lg">
                   <p className="text-gray-600 italic mb-2">
                     "{selectedProduct.testimonials[0].comment}"
                   </p>
                   <div className="text-sm text-gray-500">
                     — {selectedProduct.testimonials[0].name}, {selectedProduct.testimonials[0].role}
                   </div>
                 </div>
               </div>
             )}

             {/* Action Buttons */}
             <div className="flex flex-col sm:flex-row gap-4">
               {selectedProduct.appStore && (
                 
                   <a href={selectedProduct.appStore}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                 >
                   <FaDownload className="mr-2" />
                   Download App
                 </a>
               )}
               <button className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors">
                 Request Similar Project
               </button>
             </div>
           </div>
         </div>
       </div>
     )}
   </section>
 )
}

export default Products