import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Building, CreditCard, Wallet, CheckCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { StripeProvider } from '../payment/StripeProvider'
import { supabase } from '../../lib/supabase'

interface SponsorOnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SponsorOnboardingModal: React.FC<SponsorOnboardingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [profileId, setProfileId] = useState<number | null>(null)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [formData, setFormData] = useState({
    organizationName: '',
    individualName: '',
    contactEmail: '',
    contactPhone: '',
    businessFocusAreas: [],
    preferredCamperSpecializations: [],
    sponsorshipTier: 'full_camp', // Default to popular option
    paymentMethod: 'stripe', // Default to credit card
    walletAddress: '',
    termsAccepted: false
  })

  const totalSteps = 4

  const sponsorshipTiers = [
    {
      name: '45 Days Quarter Scholarship',
      value: 'quarter',
      price: 4500,
      duration: '45 days',
      description: 'Support camper training fundamentals',
      features: ['45-day intensive training', 'Weekly progress reports', 'Direct camper mentorship', 'Project portfolio development']
    },
    {
      name: '90 Days Half Scholarship',
      value: 'half',
      price: 9000,
      duration: '90 days',
      description: 'Extended skill development program',
      features: ['90-day comprehensive training', 'Bi-weekly progress reports', 'Skill certification prep', 'Real-world project experience']
    },
    {
      name: 'Full Tech Camp Scholarship',
      value: 'full_camp',
      price: 18000,
      duration: 'Full program',
      description: 'Complete technical education pathway',
      features: ['Full camp curriculum access', 'Weekly progress meetings', 'Career placement support', 'Industry networking access'],
      popular: true
    },
    {
      name: 'Hero Scholarship',
      value: 'hero',
      price: 36000,
      duration: 'Hero tier',
      description: 'Advanced leadership development program',
      features: ['Hero-level training program', 'Leadership skill development', 'Startup incubation access', 'Equity participation opportunities']
    },
    {
      name: 'Full Ride (Tech Camp + Hero)',
      value: 'full_ride',
      price: 54000,
      duration: 'Complete pathway',
      description: 'Comprehensive education to entrepreneurship',
      features: ['Complete Tech Camp + Hero program', 'Full entrepreneurship pathway', 'Startup funding pipeline', 'Long-term mentorship']
    },
    {
      name: '2 Full Rides',
      value: 'double_ride',
      price: 108000,
      duration: 'Multiple beneficiaries',
      description: 'Support two complete educational journeys',
      features: ['Sponsor two complete pathways', 'Maximum social impact', 'Enterprise partnership tier', 'Custom program development']
    }
  ]

  const specializationOptions = [
    'AI/ML Development',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'DevOps/Infrastructure',
    'Cybersecurity',
    'Blockchain/DeFi',
    'Game Development',
    'IoT Development',
    'Quality Assurance'
  ]

  const businessFocusOptions = [
    'Technology Startup',
    'Enterprise Software',
    'E-commerce',
    'FinTech',
    'HealthTech',
    'EdTech',
    'Real Estate Tech',
    'Energy/Cleantech',
    'Gaming/Entertainment',
    'Social Impact'
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field: string, option: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field as keyof typeof prev] as string[], option]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== option)
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCreateProfile = async () => {
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions to proceed.')
      return
    }

    setIsSubmitting(true)
    try {
      const { data, error } = await supabase.functions.invoke('sponsor-profile-create', {
        body: {
          organizationName: formData.organizationName,
          individualName: formData.individualName,
          contactEmail: formData.contactEmail,
          contactPhone: formData.contactPhone,
          businessFocusAreas: formData.businessFocusAreas,
          preferredCamperSpecializations: formData.preferredCamperSpecializations,
          sponsorshipTier: formData.sponsorshipTier,
          paymentMethod: formData.paymentMethod,
          walletAddress: formData.walletAddress,
          termsAccepted: formData.termsAccepted
        }
      })

      if (error) throw error

      setProfileId(data?.data?.profileId)
      setSubmitMessage(data?.data?.message || 'Profile created successfully!')
      
      // If payment method is Stripe, show payment form
      if (formData.paymentMethod === 'stripe') {
        setCurrentStep(4) // Payment step
        setShowPayment(true)
      } else {
        // For crypto payments, go directly to success
        setCurrentStep(5) // Success step
        // Auto-close modal after showing success for 3 seconds
        setTimeout(() => {
          onClose()
        }, 3000)
      }
    } catch (error: any) {
      console.error('Profile creation error:', error)
      alert(error.message || 'Failed to create profile. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePaymentSuccess = (paymentIntent: any) => {
    console.log('Payment successful:', paymentIntent)
    setPaymentCompleted(true)
    setSubmitMessage('Payment processed successfully! Welcome to CAMP! Check your email for next steps.')
    setCurrentStep(5) // Success step
    // Auto-close modal after showing success for 4 seconds
    setTimeout(() => {
      onClose()
    }, 4000)
  }

  const handlePaymentError = (error: string) => {
    console.error('Payment failed:', error)
    alert(`Payment failed: ${error}. Please try again or contact support.`)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-navy-deep border border-navy-light rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-navy-light/50 border-b border-navy-light p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              Sponsor Onboarding
            </h2>
            <p className="text-text-secondary mt-1">
              Step {currentStep > 4 ? 4 : currentStep} of {currentStep > 4 ? 4 : totalSteps}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-navy-light rounded-lg transition-colors z-10 relative"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-text-secondary hover:text-text-primary" />
          </button>
        </div>

        {/* Progress Bar */}
        {currentStep <= 4 && (
          <div className="px-6 py-4 bg-navy-light/20">
            <div className="w-full bg-navy-light rounded-full h-2">
              <div
                className="bg-accent-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep > 4 ? 4 : currentStep) / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Step 1: Profile Creation */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Building className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Profile Information
                </h3>
                <p className="text-text-secondary">
                  Tell us about your organization or investment focus
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.organizationName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    placeholder="Company, Fund, or Organization name"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Individual Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.individualName}
                    onChange={(e) => handleInputChange('individualName', e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-3">
                  Business/Investment Focus Areas
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {businessFocusOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 rounded focus:ring-accent-blue focus:ring-2"
                        checked={formData.businessFocusAreas.includes(option)}
                        onChange={(e) => handleArrayChange('businessFocusAreas', option, e.target.checked)}
                      />
                      <span className="text-text-secondary text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-3">
                  Preferred Camper Specializations
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {specializationOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 rounded focus:ring-accent-blue focus:ring-2"
                        checked={formData.preferredCamperSpecializations.includes(option)}
                        onChange={(e) => handleArrayChange('preferredCamperSpecializations', option, e.target.checked)}
                      />
                      <span className="text-text-secondary text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Sponsorship Tier Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <CreditCard className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Sponsorship Tier
                </h3>
                <p className="text-text-secondary">
                  Choose the sponsorship level that aligns with your goals
                </p>
              </div>

              {/* Benefits Highlight Section */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Sponsor Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400 mb-2">✅</div>
                    <div className="text-green-300 font-bold text-lg mb-1">100% Tax Deductible</div>
                    <div className="text-text-secondary text-sm">Full tax write-off via 501(c)3</div>
                  </div>
                  <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400 mb-2">🏛️</div>
                    <div className="text-blue-300 font-bold text-lg mb-1">Equity & Ecosystem</div>
                    <div className="text-text-secondary text-sm">Participation in CAMP growth</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-2xl font-bold text-purple-400 mb-2">📈</div>
                    <div className="text-purple-300 font-bold text-lg mb-1">Upside Potential</div>
                    <div className="text-text-secondary text-sm">Long-term value creation</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sponsorshipTiers.map((tier) => (
                  <div
                    key={tier.value}
                    className={`border rounded-xl p-6 cursor-pointer transition-all duration-200 relative ${
                      formData.sponsorshipTier === tier.value
                        ? 'border-accent-blue bg-accent-blue/10 shadow-lg'
                        : 'border-navy-light hover:border-accent-blue/50 bg-navy-light/30 hover:shadow-md'
                    }`}
                    onClick={() => handleInputChange('sponsorshipTier', tier.value)}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-bold">
                          POPULAR
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-text-primary mb-1">{tier.name}</h4>
                        <div className="text-accent-blue text-sm font-medium">{tier.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent-blue">
                          ${tier.price.toLocaleString()}
                        </div>
                        <div className="text-text-secondary text-sm">USD</div>
                      </div>
                    </div>
                    <p className="text-text-secondary mb-4">{tier.description}</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-text-secondary text-sm">
                          <CheckCircle className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Payment Method */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Wallet className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Payment Method
                </h3>
                <p className="text-text-secondary">
                  Choose how you'd like to complete your sponsorship
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`border rounded-xl p-6 cursor-pointer transition-all duration-200 relative ${
                    formData.paymentMethod === 'stripe'
                      ? 'border-accent-blue bg-accent-blue/10 shadow-lg'
                      : 'border-navy-light hover:border-accent-blue/50 bg-navy-light/30 hover:shadow-md'
                  }`}
                  onClick={() => handleInputChange('paymentMethod', 'stripe')}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-bold">
                      RECOMMENDED
                    </span>
                  </div>
                  <CreditCard className="w-8 h-8 text-accent-blue mb-4" />
                  <h4 className="text-lg font-bold text-text-primary mb-2">Pay with Credit or Debit Card</h4>
                  <p className="text-text-secondary text-sm mb-3">Secure payment processing via Stripe</p>
                  <ul className="mt-3 space-y-1 text-text-secondary text-xs">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Secure payment processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Instant confirmation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>100% Tax Deductible Receipt</span>
                    </li>
                  </ul>
                </div>

                <div
                  className={`border rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                    formData.paymentMethod === 'crypto'
                      ? 'border-accent-blue bg-accent-blue/10 shadow-lg'
                      : 'border-navy-light hover:border-accent-blue/50 bg-navy-light/30'
                  }`}
                  onClick={() => handleInputChange('paymentMethod', 'crypto')}
                >
                  <Wallet className="w-8 h-8 text-accent-blue mb-4" />
                  <h4 className="text-lg font-bold text-text-primary mb-2">Connect Wallet</h4>
                  <p className="text-text-secondary text-sm mb-3">Pay with cryptocurrency</p>
                  <ul className="mt-3 space-y-1 text-text-secondary text-xs">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>USDC, ETH, BTC accepted</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Lower transaction fees</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Blockchain transparency</span>
                    </li>
                  </ul>
                </div>
              </div>

              {formData.paymentMethod === 'crypto' && (
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.walletAddress}
                    onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                    placeholder="0x..."
                  />
                </div>
              )}

              <div className="bg-navy-light/30 rounded-lg p-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-accent-blue bg-navy-light border-gray-300 rounded focus:ring-accent-blue focus:ring-2"
                    checked={formData.termsAccepted}
                    onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                  />
                  <div className="text-text-secondary">
                    <p className="font-medium text-text-primary mb-2">I accept the terms and conditions:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Sponsorship agreement and payment terms</li>
                      <li>• Camper-sponsor communication guidelines</li>
                      <li>• Intellectual property sharing arrangements</li>
                      <li>• Performance milestone requirements</li>
                      <li>• Privacy and data protection policies</li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Step 4: Payment Processing */}
          {currentStep === 4 && showPayment && profileId && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <CreditCard className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Complete Payment
                </h3>
                <p className="text-text-secondary">
                  Secure payment processing powered by Stripe
                </p>
              </div>

              <StripeProvider
                amount={sponsorshipTiers.find(tier => tier.value === formData.sponsorshipTier)?.price || 0}
                currency="usd"
                sponsorshipTier={formData.sponsorshipTier}
                customerEmail={formData.contactEmail}
                sponsorId={profileId}
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
              />
            </div>
          )}

          {/* Step 4: Terms and Final Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <CheckCircle className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Terms & Confirmation
                </h3>
                <p className="text-text-secondary">
                  Review and accept the terms of sponsorship
                </p>
              </div>

              {/* Sponsorship Summary */}
              <div className="bg-accent-blue/10 rounded-lg p-6 border border-accent-blue/20">
                <h4 className="text-lg font-bold text-text-primary mb-4">Sponsorship Summary</h4>
                <div className="space-y-3 text-text-secondary">
                  <div className="flex justify-between">
                    <span>Organization:</span>
                    <span className="text-text-primary font-medium">{formData.organizationName || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact:</span>
                    <span className="text-text-primary font-medium">{formData.individualName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="text-text-primary font-medium">{formData.contactEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tier:</span>
                    <span className="text-text-primary font-medium capitalize">{formData.sponsorshipTier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="text-text-primary font-medium capitalize">{formData.paymentMethod === 'stripe' ? 'Credit Card' : 'Cryptocurrency'}</span>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-navy-light/30 rounded-lg p-6 border border-navy-light">
                <h4 className="text-lg font-bold text-text-primary mb-4">Terms and Conditions</h4>
                <div className="text-text-secondary text-sm space-y-3 max-h-48 overflow-y-auto">
                  <p>By proceeding with this sponsorship, you agree to:</p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Provide funding for the selected sponsorship tier as committed</li>
                    <li>Participate in regular progress reviews and milestone evaluations</li>
                    <li>Support the camper's development through the CAMP program</li>
                    <li>Maintain professional communication standards</li>
                    <li>Respect the intellectual property agreements and co-ownership terms</li>
                    <li>Follow the dispute resolution processes outlined in the full agreement</li>
                    <li>Comply with all CAMP ecosystem guidelines and policies</li>
                  </ul>
                  <p className="mt-4 font-medium">Full terms and conditions will be provided upon completion of payment.</p>
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="bg-navy-light/20 rounded-lg p-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-accent-blue bg-navy-light border-gray-300 rounded focus:ring-accent-blue focus:ring-2"
                    checked={formData.termsAccepted}
                    onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                  />
                  <div className="text-text-secondary">
                    <p className="font-medium text-text-primary mb-1">I Accept the Terms and Conditions</p>
                    <p className="text-sm">
                      I acknowledge that I have read, understood, and agree to be bound by the terms and conditions of the CAMP sponsorship program.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Success Step */}
          {currentStep === 5 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                Welcome to CAMP!
              </h3>
              <p className="text-text-secondary max-w-md mx-auto leading-relaxed">
                {submitMessage}
              </p>
              
              {paymentCompleted && (
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <p className="text-green-400 font-medium mb-2">✅ Payment Confirmed</p>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Receipt sent to your email</li>
                    <li>• 100% tax deductible donation</li>
                    <li>• Sponsor dashboard access within 24 hours</li>
                  </ul>
                </div>
              )}
              
              <div className="bg-accent-blue/10 rounded-lg p-4 border border-accent-blue/20">
                <p className="text-text-primary font-medium mb-2">What's Next:</p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>• Access to camper profiles within 24 hours</li>
                  <li>• Matching with suitable candidates</li>
                  <li>• Initial sponsor-camper introduction call</li>
                  <li>• Program onboarding and milestone setup</li>
                </ul>
              </div>
              
              <p className="text-text-secondary text-sm">
                This window will close automatically in a few seconds...
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {currentStep <= 4 && (
          <div className="bg-navy-light/20 border-t border-navy-light p-6 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10 font-semibold px-6 py-3 text-lg shadow-md"
            >
              Previous
            </Button>
            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={currentStep === 1 && !formData.contactEmail}
                className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleCreateProfile}
                disabled={!formData.termsAccepted || isSubmitting}
                className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
              >
                {isSubmitting ? 'Processing...' : 'Create Profile & Continue'}
              </Button>
            )}
          </div>
        )}

        {currentStep === 5 && (
          <div className="bg-navy-light/20 border-t border-navy-light p-6 text-center">
            <Button
              onClick={onClose}
              className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
            >
              Get Started
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  )
}