import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/globals.css'
import 'aos/dist/aos.css'
import SEOHead from './components/ui/SEOHead'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SEOHead />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)