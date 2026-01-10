import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { Send, MessageCircle, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { supabase } from '../lib/supabase'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  inquiryType: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  })

  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })
  const [showAISupport, setShowAISupport] = useState(false)

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'founders-club', label: 'Founders Club Investment' },
    { value: 'bootcamp', label: 'Tech Boot Camp Enrollment' },
    { value: 'defi', label: 'CAMP DeFi Platform' },
    { value: 'rwa', label: 'Real World Assets' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'support', label: 'Technical Support' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Submitting your inquiry...' })

    try {
      // Insert into Supabase
      const { data, error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            subject: formData.subject,
            message: formData.message,
            inquiry_type: formData.inquiryType,
            created_at: new Date().toISOString(),
            status: 'new'
          }
        ])
        .select()

      if (error) {
        throw error
      }

      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your inquiry has been submitted successfully. Our team will respond within 24 hours.' 
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      })

      // Show AI support option after successful submission
      setShowAISupport(true)

    } catch (error: any) {
      console.error('Error submitting form:', error)
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error submitting your inquiry. Please try again or contact us directly.' 
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleAISupport = () => {
    // Scroll to chat interface at the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Navigate to home page with chat interface
    window.location.href = '/'
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 md:mr-20">
        {/* Header */}
        <section className="bg-navy-gradient py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-heading font-bold text-text-primary mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto"
            >
              Submit your inquiry below and our team will respond within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Send us a Message
              </h2>
              <p className="text-xl text-text-secondary">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-navy-deep/80 rounded-xl shadow-lg border border-navy-light/50 p-8"
            >
              {/* Status Message */}
              {status.type !== 'idle' && (
                <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                  status.type === 'success' ? 'bg-green-900/20 border border-green-500/30' :
                  status.type === 'error' ? 'bg-red-900/20 border border-red-500/30' :
                  'bg-blue-900/20 border border-blue-500/30'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : status.type === 'error' ? (
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  ) : (
                    <Clock className="w-5 h-5 text-blue-400 animate-spin" />
                  )}
                  <span className={`text-sm ${
                    status.type === 'success' ? 'text-green-300' :
                    status.type === 'error' ? 'text-red-300' :
                    'text-blue-300'
                  }`}>
                    {status.message}
                  </span>
                </div>
              )}

              {/* AI Support Suggestion */}
              {showAISupport && status.type === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-purple-900/20 border border-purple-500/30">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-purple-400" />
                    <div className="flex-1">
                      <p className="text-purple-300 text-sm">
                        Need immediate assistance? Try our AI assistant for instant answers about our services.
                      </p>
                    </div>
                    <Button
                      onClick={handleAISupport}
                      className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-4 py-2"
                    >
                      Chat with AI
                    </Button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      disabled={status.type === 'loading'}
                      className="w-full bg-navy-deep border-navy-light text-text-primary placeholder-text-secondary focus:border-accent-blue focus:ring-2 focus:ring-accent-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      disabled={status.type === 'loading'}
                      className="w-full bg-navy-deep border-navy-light text-text-primary placeholder-text-secondary focus:border-accent-blue focus:ring-2 focus:ring-accent-blue"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      disabled={status.type === 'loading'}
                      className="w-full bg-navy-deep border-navy-light text-text-primary placeholder-text-secondary focus:border-accent-blue focus:ring-2 focus:ring-accent-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Company/Organization
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      disabled={status.type === 'loading'}
                      className="w-full bg-navy-deep border-navy-light text-text-primary placeholder-text-secondary focus:border-accent-blue focus:ring-2 focus:ring-accent-blue"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    disabled={status.type === 'loading'}
                    className="w-full bg-navy-deep border border-navy-light text-text-primary rounded-md px-3 py-2 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    disabled={status.type === 'loading'}
                    className="w-full bg-navy-deep border-navy-light text-text-primary placeholder-text-secondary focus:border-accent-blue focus:ring-2 focus:ring-accent-blue"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    disabled={status.type === 'loading'}
                    className="w-full h-32 resize-none bg-navy-deep border-navy-light text-text-primary placeholder-text-secondary focus:border-accent-blue focus:ring-2 focus:ring-accent-blue"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 text-lg py-6 transition-all duration-200 disabled:opacity-50"
                >
                  {status.type === 'loading' ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      {/* OpenAI-style Sidebar */}
      <OpenAISidebar />
    </div>
  )
}

export default ContactPage