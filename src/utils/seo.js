export const seoData = {
  home: {
    title: 'Intelisans - Innovative Software Solutions & Data Intelligence',
    description: 'Expert software development company specializing in mobile apps, data analytics, and AI solutions. Transform your business with our innovative technology solutions.',
    keywords: 'software development, mobile apps, data analytics, AI solutions, Flutter development, React development, Sri Lanka software company',
    ogImage: '/images/og-home.jpg'
  },
  products: {
    title: 'Our Products - Innovative Apps & Platforms | Intelisans',
    description: 'Discover our portfolio of intelligent applications including Budget Buddy, Promo Buddy, and advanced data analytics platforms.',
    keywords: 'mobile apps, budget tracker, promotion platform, data analytics, business intelligence',
    ogImage: '/images/og-products.jpg'
  },
  services: {
    title: 'Software Development Services | Intelisans',
    description: 'Comprehensive technology services including mobile app development, data analytics, AI/ML solutions, and cloud deployment.',
    keywords: 'software development services, mobile app development, data analytics services, AI ML solutions, cloud solutions',
    ogImage: '/images/og-services.jpg'
  },
  about: {
    title: 'About Intelisans - Your Technology Partner',
    description: 'Learn about Intelisans, a leading software development company specializing in innovative solutions and data intelligence.',
    keywords: 'about intelisans, software company, technology partner, innovation',
    ogImage: '/images/og-about.jpg'
  },
  contact: {
    title: 'Contact Intelisans - Get Your Free Consultation',
    description: 'Ready to transform your business? Contact Intelisans today for a free consultation on your software development needs.',
    keywords: 'contact intelisans, free consultation, software development quote',
    ogImage: '/images/og-contact.jpg'
  }
}

export const generateSEOTags = (page = 'home') => {
  const data = seoData[page] || seoData.home
  
  return {
    title: data.title,
    meta: [
      { name: 'description', content: data.description },
      { name: 'keywords', content: data.keywords },
      { property: 'og:title', content: data.title },
      { property: 'og:description', content: data.description },
      { property: 'og:image', content: data.ogImage },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: data.title },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: data.ogImage }
    ]
  }
}