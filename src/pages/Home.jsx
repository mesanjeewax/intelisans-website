import React from 'react'
import Hero from '../components/sections/Hero'
import ProductShowcase from '../components/sections/ProductShowcase'
import Services from '../components/sections/Services'
import DataAnalytics from '../components/sections/DataAnalytics'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <Services />
      <DataAnalytics />
    </div>
  )
}

export default Home