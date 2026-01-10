import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

export const AuthCallbackPage: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    handleAuthCallback()
  }, [])

  async function handleAuthCallback() {
    try {
      // Get the hash fragment from the URL
      const hashFragment = window.location.hash

      if (hashFragment && hashFragment.length > 0) {
        // Exchange the auth code for a session
        const { data, error } = await supabase.auth.exchangeCodeForSession(hashFragment)

        if (error) {
          console.error('Error exchanging code for session:', error.message)
          // Redirect to home with error
          navigate('/?error=' + encodeURIComponent(error.message))
          return
        }

        if (data.session) {
          // Successfully signed in, redirect to home
          navigate('/')
          return
        }
      }

      // If we get here, something went wrong
      navigate('/?error=No session found')
    } catch (error: any) {
      console.error('Auth callback error:', error)
      navigate('/?error=' + encodeURIComponent(error.message || 'Authentication failed'))
    }
  }

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
