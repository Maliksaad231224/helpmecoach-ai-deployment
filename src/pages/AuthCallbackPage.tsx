import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export const AuthCallbackPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      if (user) {
        // User is authenticated, redirect to home
        navigate('/')
      } else {
        // No user found, redirect to home with error
        navigate('/?error=Authentication+failed')
      }
    }
  }, [user, loading, navigate])

  return (
    <div className="min-h-screen bg-navy-gradient flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <Loader2 className="w-12 h-12 text-accent-blue mx-auto mb-4 animate-spin" />
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
          Completing Sign In...
        </h2>
        <p className="text-text-secondary">
          Please wait while we complete your authentication.
        </p>
      </motion.div>
    </div>
  )
}
