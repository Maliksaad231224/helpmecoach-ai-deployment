import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageSquare, Users, LogIn, LogOut, User } from 'lucide-react'
import { Button } from './ui/button'
import { useAuth } from '../contexts/AuthContext'
import { LoginModal } from './auth/LoginModal'

export const Header: React.FC = () => {
  const location = useLocation()
  const isFoundersClubActive = location.pathname === '/founders-club'
  const [showLoginModal, setShowLoginModal] = useState(false)
  const { user, loading, signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <header className="bg-white/5 border-b border-white/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 pr-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <MessageSquare className="w-8 h-8 text-accent-blue" />
              <span className="text-2xl font-heading font-bold text-text-primary">
                CoachAI
              </span>
            </motion.div>
          </Link>

          {/* Navigation Buttons */}
          <nav className="flex items-center space-x-4 mr-8">
            {/* Authentication Button */}
            {loading ? (
              <div className="w-20 h-10 bg-navy-light/30 rounded animate-pulse"></div>
            ) : user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user.email?.split('@')[0]}</span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="flex items-center space-x-2 bg-navy-deep text-red-400 border-red-400/50 hover:bg-red-400/10 hover:text-red-300 px-3 py-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="font-medium text-sm">Sign Out</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setShowLoginModal(true)}
                variant="outline"
                className="flex items-center space-x-2 bg-navy-deep text-accent-blue border-accent-blue hover:bg-accent-blue hover:text-white px-4 py-2"
              >
                <LogIn className="w-4 h-4" />
                <span className="font-medium">LOGIN</span>
              </Button>
            )}

            {/* Founders Club Button */}
            <Link to="/founders-club">
              <Button
                variant="outline"
                className={`flex items-center space-x-2 transition-all duration-200 px-4 py-2 ${
                  isFoundersClubActive
                    ? 'bg-accent-blue text-white border-accent-blue'
                    : 'bg-navy-deep text-accent-blue border-accent-blue hover:bg-accent-blue hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="font-medium whitespace-nowrap">Founders Club</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </header>
  )
}
