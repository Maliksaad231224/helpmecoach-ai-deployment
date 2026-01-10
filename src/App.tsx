import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AuthProvider } from './contexts/AuthContext'

import { HomePage } from './pages/HomePage'
import { FoundersClubPage } from './pages/FoundersClubPage'
import { CAMPEcosystemPage } from './pages/CAMPEcosystemPage'
import { CAMPMarketplacePage } from './pages/CAMPMarketplacePage'
import { CAMPDeFiPage } from './pages/CAMPDeFiPage'
import { CAMPRWAAgentPage } from './pages/CAMPRWAAgentPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicePage } from './pages/TermsOfServicePage'
import { OurVisionPage } from './pages/OurVisionPage'
import { OurAITechnologyPage } from './pages/OurAITechnologyPage'
import { CAMPAlphaPage } from './pages/CAMPAlphaPage'
import { AuthCallbackPage } from './pages/AuthCallbackPage'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-navy-gradient flex flex-col">
          <Header />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-1"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/founders-club" element={<FoundersClubPage />} />
              <Route path="/camp-ecosystem" element={<CAMPEcosystemPage />} />
              <Route path="/camp-marketplace" element={<CAMPMarketplacePage />} />
              <Route path="/camp-defi" element={<CAMPDeFiPage />} />
              <Route path="/camp-rwa-agent" element={<CAMPRWAAgentPage />} />
              <Route path="/our-vision" element={<OurVisionPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/our-ai-technology" element={<OurAITechnologyPage />} />
              <Route path="/camp-alpha" element={<CAMPAlphaPage />} />
              <Route path="/auth/callback" element={<AuthCallbackPage />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App