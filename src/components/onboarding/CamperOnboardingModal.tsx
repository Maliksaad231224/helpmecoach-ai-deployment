import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, User, Mail, Phone, MapPin, Calendar, GraduationCap, Target } from 'lucide-react'
import { Button } from '../ui/button'
import { db } from '../../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

interface CamperOnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CamperOnboardingModal: React.FC<CamperOnboardingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [formData, setFormData] = useState({
    // Agreement section
    agreementAccepted: false,
    
    fullName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    currentAddress: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    familySupportRepresentativeName: '',
    familySupportContactInfo: '',
    estimatedReleaseDate: '',
    locationInfo: '',
    
    // New family/community support questions
    isFamilyCommunitySupport: '',
    willContinueAssistanceIfNotQualified: '',
    willProvideAssistanceIfExpelled: '',
    
    educationalBackground: '',
    currentStatus: '',
    
    // New background questions
    hasChildren: '',
    hasFamily: '',
    isMarried: '',
    
    skillsAssessment: {
      programmingExperience: '',
      technicalSkills: [],
      previousWork: '',
      certifications: ''
    },
    motivationGoals: '',
    technologyExperienceLevel: 'beginner',
    commitmentVerification: false,
    additionalQuestions: {
      whyCAMP: '',
      challenges: '',
      careerGoals: ''
    }
  })

  const totalSteps = 4

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setFormData(prev => {
        const parentObj = prev[parent as keyof typeof prev] as Record<string, any>
        return {
          ...prev,
          [parent]: {
            ...parentObj,
            [child]: value
          }
        }
      })
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
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

  const handleSubmit = async () => {
    if (!formData.commitmentVerification) {
      alert('Please confirm your commitment to the program before submitting.')
      return
    }

    setIsSubmitting(true)
    try {
      await addDoc(collection(db, 'camper_applications'), {
        ...formData,
        submittedAt: serverTimestamp(),
        status: 'pending'
      })

      setSubmitMessage('Application submitted successfully! Please check your email for confirmation.')
      setCurrentStep(5) // Success step
      
      // Auto-close modal after showing success for 4 seconds
      setTimeout(() => {
        window.open('https://marketplace.campdefi.app', '_blank')
        onClose()
      }, 4000)
    } catch (error: any) {
      console.error('Submission error:', error)
      alert(error.message || 'Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-navy-deep border border-navy-light rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-navy-light/50 border-b border-navy-light p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              CAMP Scholarship Application
            </h2>
            <p className="text-text-secondary mt-1">
              Step {currentStep > 4 ? 4 : currentStep} of {totalSteps}
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
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <User className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Basic Information
                </h3>
                <p className="text-text-secondary">
                  Let's start with Applicant's basic details:
                </p>
              </div>

              {/* Agreement Section */}
              <div className="bg-accent-blue/10 rounded-lg p-6 border border-accent-blue/20 mb-6">
                <p className="text-text-primary mb-4">
                  Please complete this entire form with accurate information. If you agree, check here:
                </p>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-accent-blue bg-navy-light border-gray-300 rounded focus:ring-accent-blue focus:ring-2"
                    checked={formData.agreementAccepted}
                    onChange={(e) => handleInputChange('agreementAccepted', e.target.checked)}
                    required
                  />
                  <span className="text-text-primary font-medium">I agree to complete this form accurately</span>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
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
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Current Address
                </label>
                <textarea
                  className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                  rows={3}
                  value={formData.currentAddress}
                  onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 2: CAMP-Specific Questions */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Target className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  CAMP-Specific Information
                </h3>
                <p className="text-text-secondary">
                  Help us understand your situation better
                </p>
              </div>

              {/* Family/Community Support Questions */}
              <div className="bg-accent-blue/10 rounded-lg p-6 border border-accent-blue/20 mb-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Family/Community Support Questions</h4>
                
                <div className="space-y-6">
                  {/* Question 1 */}
                  <div>
                    <label className="block text-text-primary font-medium mb-3">
                      Are you their family or community support?
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="isFamilyCommunitySupport"
                          value="yes"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.isFamilyCommunitySupport === 'yes'}
                          onChange={(e) => handleInputChange('isFamilyCommunitySupport', e.target.value)}
                        />
                        <span className="text-text-primary">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="isFamilyCommunitySupport"
                          value="no"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.isFamilyCommunitySupport === 'no'}
                          onChange={(e) => handleInputChange('isFamilyCommunitySupport', e.target.value)}
                        />
                        <span className="text-text-primary">No</span>
                      </label>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div>
                    <label className="block text-text-primary font-medium mb-3">
                      If the applicant does not initially qualify, will you continue to assist them to become qualified?
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="willContinueAssistanceIfNotQualified"
                          value="yes"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.willContinueAssistanceIfNotQualified === 'yes'}
                          onChange={(e) => handleInputChange('willContinueAssistanceIfNotQualified', e.target.value)}
                        />
                        <span className="text-text-primary">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="willContinueAssistanceIfNotQualified"
                          value="no"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.willContinueAssistanceIfNotQualified === 'no'}
                          onChange={(e) => handleInputChange('willContinueAssistanceIfNotQualified', e.target.value)}
                        />
                        <span className="text-text-primary">No</span>
                      </label>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div>
                    <label className="block text-text-primary font-medium mb-3">
                      If the applicant is accepted and placed in Tech Camp and is later expelled from the program for violation of terms and conditions, will you continue to provide assistance?
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="willProvideAssistanceIfExpelled"
                          value="yes"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.willProvideAssistanceIfExpelled === 'yes'}
                          onChange={(e) => handleInputChange('willProvideAssistanceIfExpelled', e.target.value)}
                        />
                        <span className="text-text-primary">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="willProvideAssistanceIfExpelled"
                          value="no"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.willProvideAssistanceIfExpelled === 'no'}
                          onChange={(e) => handleInputChange('willProvideAssistanceIfExpelled', e.target.value)}
                        />
                        <span className="text-text-primary">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Family Support Representative Information
                </label>
                <p className="text-text-secondary text-sm mb-3">
                  If you are the family support representative for the applicant, please list your name and contact information here:
                </p>
                <textarea
                  className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                  rows={3}
                  value={formData.familySupportContactInfo}
                  onChange={(e) => handleInputChange('familySupportContactInfo', e.target.value)}
                  placeholder="Name, relationship, phone number, email..."
                />
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Estimated Release Date
                </label>
                <p className="text-text-secondary text-sm mb-3">
                  If the applicant is coming home soon, what's their estimated release date?
                </p>
                <input
                  type="date"
                  className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                  value={formData.estimatedReleaseDate}
                  onChange={(e) => handleInputChange('estimatedReleaseDate', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Location Information for Mailing
                </label>
                <p className="text-text-secondary text-sm mb-3">
                  Please provide the applicant's location information so we can mail them the scholarship program, upon preliminary approval.
                </p>
                <textarea
                  className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                  rows={4}
                  value={formData.locationInfo}
                  onChange={(e) => handleInputChange('locationInfo', e.target.value)}
                  placeholder="Full mailing address including facility name, unit, etc..."
                />
              </div>
            </div>
          )}

          {/* Step 3: Background & Skills */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <GraduationCap className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Background & Skills Assessment
                </h3>
                <p className="text-text-secondary">
                  Tell us about your experience and goals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Current Status
                  </label>
                  <select
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.currentStatus}
                    onChange={(e) => handleInputChange('currentStatus', e.target.value)}
                  >
                    <option value="">Select status</option>
                    <option value="currently_incarcerated">Currently Incarcerated</option>
                    <option value="recently_released">Recently Released</option>
                    <option value="released_6_months_plus">Released 6+ Months Ago</option>
                    <option value="family_member">Family Member/Support Person</option>
                  </select>
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Technology Experience Level
                  </label>
                  <select
                    className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                    value={formData.technologyExperienceLevel}
                    onChange={(e) => handleInputChange('technologyExperienceLevel', e.target.value)}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="some_experience">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* New Background Questions Section */}
              <div className="bg-accent-blue/10 rounded-lg p-6 border border-accent-blue/20">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Background Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-text-primary font-medium mb-3">
                      Do you have children?
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasChildren"
                          value="yes"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.hasChildren === 'yes'}
                          onChange={(e) => handleInputChange('hasChildren', e.target.value)}
                        />
                        <span className="text-text-primary">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasChildren"
                          value="no"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.hasChildren === 'no'}
                          onChange={(e) => handleInputChange('hasChildren', e.target.value)}
                        />
                        <span className="text-text-primary">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-primary font-medium mb-3">
                      Family?
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasFamily"
                          value="yes"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.hasFamily === 'yes'}
                          onChange={(e) => handleInputChange('hasFamily', e.target.value)}
                        />
                        <span className="text-text-primary">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasFamily"
                          value="no"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.hasFamily === 'no'}
                          onChange={(e) => handleInputChange('hasFamily', e.target.value)}
                        />
                        <span className="text-text-primary">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-primary font-medium mb-3">
                      Married?
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="isMarried"
                          value="yes"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.isMarried === 'yes'}
                          onChange={(e) => handleInputChange('isMarried', e.target.value)}
                        />
                        <span className="text-text-primary">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="isMarried"
                          value="no"
                          className="w-4 h-4 text-accent-blue bg-navy-light border-gray-300 focus:ring-accent-blue focus:ring-2"
                          checked={formData.isMarried === 'no'}
                          onChange={(e) => handleInputChange('isMarried', e.target.value)}
                        />
                        <span className="text-text-primary">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Educational Background
                </label>
                <textarea
                  className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                  rows={3}
                  value={formData.educationalBackground}
                  onChange={(e) => handleInputChange('educationalBackground', e.target.value)}
                  placeholder="High school, college, trade school, certifications, etc..."
                />
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Previous Programming Experience
                </label>
                <textarea
                  className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                  rows={3}
                  value={formData.skillsAssessment.programmingExperience}
                  onChange={(e) => handleInputChange('skillsAssessment.programmingExperience', e.target.value)}
                  placeholder="Languages, frameworks, projects, self-taught experience..."
                />
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Motivation and Career Goals
                </label>
                <textarea
                  className="w-full bg-navy-light/50 border border-navy-light rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:outline-none"
                  rows={4}
                  value={formData.motivationGoals}
                  onChange={(e) => handleInputChange('motivationGoals', e.target.value)}
                  placeholder="Why are you interested in CAMP? What are your career goals? How will this program help you?"
                />
              </div>
            </div>
          )}

          {/* Step 4: Commitment Verification */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Calendar className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Program Commitment
                </h3>
                <p className="text-text-secondary">
                  Understanding the CAMP program requirements
                </p>
              </div>

              <div className="bg-accent-blue/10 rounded-lg p-6 border border-accent-blue/20">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  CAMP Program Structure:
                </h4>
                <div className="space-y-3 text-text-secondary">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Approved Level</p>
                      <p className="text-sm">Passed the scholarship process, ready for placement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Level 1 - Startup Camper</p>
                      <p className="text-sm">First 3 months of Tech Camp placement. Integration and building foundation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Level 2 - Coach Camper</p>
                      <p className="text-sm">Second 3 months of CAMP placement. Learned on the system, momentum with daily KPIs, assisting at least 1 Level 1 camper, building market share for graduation to Level 3.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Level 3 - Hero Launchpad</p>
                      <p className="text-sm">18-month Hero program. Corporate incubator for innovative Tech, Energy and infrastructure projects. Own agency and performing ecosystem with active client book, adding structured value to the world.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-light/30 rounded-lg p-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-accent-blue bg-navy-light border-gray-300 rounded focus:ring-accent-blue focus:ring-2"
                    checked={formData.commitmentVerification}
                    onChange={(e) => handleInputChange('commitmentVerification', e.target.checked)}
                  />
                  <div className="text-text-secondary">
                    <p className="font-medium text-text-primary mb-2">I understand and commit to:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Full participation in the 6-month Tech Camp program</li>
                      <li>• Completion of all educational requirements and assessments</li>
                      <li>• Progression through the 18-month Hero program upon qualification</li>
                      <li>• Adherence to all program guidelines and code of conduct</li>
                      <li>• Active engagement with mentors and peer support systems</li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Success Step */}
          {currentStep === 5 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                Application Submitted Successfully!
              </h3>
              <p className="text-text-secondary max-w-md mx-auto leading-relaxed">
                {submitMessage}
              </p>
              <div className="bg-accent-blue/10 rounded-lg p-4 border border-accent-blue/20">
                <p className="text-text-primary font-medium mb-2">Next Steps:</p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>• Application review: 5-7 business days</li>
                  <li>• Phone interview if pre-approved</li>
                  <li>• Scholarship materials mailed upon approval</li>
                  <li>• Program start date coordination</li>
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
            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={currentStep === 1 && (!formData.fullName || !formData.email || !formData.dateOfBirth || !formData.agreementAccepted)}
                className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!formData.commitmentVerification || isSubmitting}
                className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white font-semibold px-8 py-3 text-lg shadow-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            )}
          </div>
        )}

        {currentStep === 5 && (
          <div className="bg-navy-light/20 border-t border-navy-light p-6 text-center">
            <Button
              onClick={onClose}
              className="bg-accent-blue hover:bg-accent-blue/90 text-navy-dark"
            >
              Close
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  )
}