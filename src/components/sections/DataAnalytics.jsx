import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDatabase, FaChartLine, FaBrain, FaCloud, FaFileUpload, FaDownload, FaEye, FaCog } from 'react-icons/fa'

const DataAnalytics = () => {
  const [selectedService, setSelectedService] = useState(null)

  // Simple data services since we don't have the data file yet
  const dataServices = [
    {
      id: 'financial-analytics',
      name: 'Financial Data Analytics',
      description: 'Advanced analytics for banking and financial transaction data with AI-powered insights.',
      features: [
        'Transaction pattern analysis',
        'Customer behavior modeling',
        'Fraud detection algorithms',
        'Risk assessment models'
      ],
      tech: ['Python', 'Pandas', 'Scikit-learn', 'PostgreSQL']
    },
    {
      id: 'retail-analytics',
      name: 'Retail Analytics',
      description: 'Comprehensive analytics solution for retail businesses to optimize operations.',
      features: [
        'Sales performance tracking',
        'Inventory optimization',
        'Customer journey analysis',
        'Price optimization'
      ],
      tech: ['Python', 'R', 'Power BI', 'AWS']
    },
    {
      id: 'custom-solutions',
      name: 'Custom Data Solutions',
      description: 'Tailored data analytics solutions for any industry with flexible deployment.',
      features: [
        'Custom data pipeline development',
        'Multi-source data integration',
        'Advanced visualization',
        'Machine learning models'
      ],
      tech: ['Python', 'Apache Spark', 'Docker', 'Azure']
    }
  ]

  const iconMap = {
    'financial-analytics': FaChartLine,
    'retail-analytics': FaDatabase,
    'custom-solutions': FaBrain
  }

  return (
    <section className="section-padding bg-white" id="data-analytics">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-500/10 text-accent-600 rounded-full text-sm font-medium mb-4">
            Data Analytics & Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Transform Data into{' '}
            <span className="text-gradient">Actionable Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock the power of your data with our advanced analytics solutions. From transaction analysis to predictive modeling.
          </p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">Our Data Analytics Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFileUpload className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-2">Data Collection</h4>
              <p className="text-sm text-gray-600">Upload Excel, CSV files or connect to databases</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCog className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-2">Data Processing</h4>
              <p className="text-sm text-gray-600">Clean, transform, and prepare data for analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBrain className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-2">AI Analysis</h4>
              <p className="text-sm text-gray-600">Apply machine learning and statistical models</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEye className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-2">Insights & Reports</h4>
              <p className="text-sm text-gray-600">Generate actionable insights and visualizations</p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dataServices.map((service) => {
            const Icon = iconMap[service.id] || FaDatabase
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{service.name}</h3>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{service.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Learn More
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">Ready to Unlock Your Data's Potential?</h3>
            <p className="mb-6 opacity-90">Contact us today to discuss your data analytics needs.</p>
            <button className="px-8 py-3 bg-white text-primary-500 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DataAnalytics