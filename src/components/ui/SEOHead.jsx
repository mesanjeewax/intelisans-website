import { useEffect } from 'react'
import { generateSEOTags } from '../../utils/seo'

const SEOHead = ({ page = 'home' }) => {
  useEffect(() => {
    const seoData = generateSEOTags(page)
    
    // Update title
    document.title = seoData.title
    
    // Update meta tags
    seoData.meta.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      let meta = document.querySelector(selector)
      
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        if (name) meta.setAttribute('name', name)
        if (property) meta.setAttribute('property', property)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    })
  }, [page])

  return null
}

export default SEOHead