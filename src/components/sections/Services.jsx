import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaMobile, 
  FaChartLine, 
  FaBrain, 
  FaCloud, 
  FaCode, 
  FaUsers,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa'

const Services = () => {
  // Simple services data
  const services = [
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications built with cutting-edge technologies.',
      features: [
        'Native iOS and Android development',
        'Cross-platform development with Flutter',
        'UI/UX design and prototyping',
        'App Store optimization'
      ],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin']
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: [
        'Data warehouse design',
        'ETL pipeline development',
        'Business intelligence dashboards',
        'Predictive analytics'
      ],
      technologies: ['Python', 'R', 'Tableau', 'Power BI']
    },
    {
      id: 'ai-ml-solutions',
      name: 'AI & Machine Learning',
      description: 'Intelligent automation and AI-powered solutions to enhance your business operations.',
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive modeling'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API']
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: [
        'Cloud strategy and consulting',
        'Migration planning and execution',
        'Infrastructure as Code',
        'DevOps and CI/CD'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker']
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies.',
      features: [
        'Responsive web design',
        'Single Page Applications',
        'Progressive Web Apps',
        'E-commerce platforms'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Python']
    },
    {
      id: 'consulting',
      name: 'Technology Consulting',
      description: 'Strategic technology consulting to guide your digital transformation journey.',
      features: [
        'Digital transformation strategy',
        'Technology stack evaluation',
        'Architecture design',
        'Project management'
      ],
      technologies: ['Agile', 'DevOps', 'Architecture', 'Strategy']
    }
  ]

  const iconMap = {
    'mobile-app-development': FaMobile,
    'data-analytics': FaChartLine,
    'ai-ml-solutions': FaBrain,
    'cloud-solutions': FaCloud,
    'web-development': FaCode,
    'consulting': FaUsers
  }

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary-500/10 text-secondary-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Comprehensive{' '}
            <span className="text-gradient">Technology Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From mobile app development to AI-powered analytics, we provide end-to-end technology solutions that drive business growth and innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = iconMap[service.id] || FaCode
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 transition-colors">
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{service.name}</h3>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <FaCheck className="text-primary-500 mt-1 mr-2 flex-shrink-0 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Let's discuss your requirements and create a customized solution that fits your needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-primary-500 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services