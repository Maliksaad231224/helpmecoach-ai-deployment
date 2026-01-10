import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { Scale, Shield, AlertTriangle, FileText, Users, CreditCard } from 'lucide-react'

export const TermsOfServicePage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        {
          text: 'By accessing or using any services provided by CoachAI, including CoachAI Tech Camps, CoachAI Development Fund, and all subsidiaries under the CoachAI Brand, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services.'
        },
        {
          text: 'These terms constitute a legally binding agreement between you and CoachAI. We may modify these terms at any time, and such modifications will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any modified terms.'
        }
      ]
    },
    {
      title: 'Nature of Services',
      icon: Users,
      content: [
        {
          subtitle: 'Technology and Education Services',
          text: 'CoachAI provides technology-based information and education services, including but not limited to AI coaching, educational programs, tech boot camps, and investment guidance. We are a technology provider focused on delivering educational content and informational services.'
        },
        {
          subtitle: 'No Professional Advice',
          text: 'Our services are for informational and educational purposes only. CoachAI does not provide financial, legal, tax, or investment advice. Any information provided should not be construed as professional advice, and users should consult with qualified professionals before making any financial or investment decisions.'
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: Shield,
      content: [
        {
          subtitle: 'General Limitations',
          text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, COACHAI, INCLUDING ALL ENTITIES UNDER THE COACHAI BRAND, SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.'
        },
        {
          subtitle: 'Maximum Liability Cap',
          text: 'IN NO EVENT SHALL COACHAI\'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE AMOUNT PAID BY YOU TO COACHAI IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.'
        },
        {
          subtitle: 'Investment and Financial Risks',
          text: 'Users acknowledge that all investments carry inherent risks, including the potential loss of principal. CoachAI is not responsible for any investment losses, market fluctuations, or financial decisions made by users based on information provided through our services.'
        }
      ]
    },
    {
      title: 'User Responsibilities',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Account Security',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.'
        },
        {
          subtitle: 'Compliance with Laws',
          text: 'You agree to use our services in compliance with all applicable laws and regulations. You are solely responsible for ensuring that your use of our services complies with local, state, federal, and international laws.'
        },
        {
          subtitle: 'Prohibited Uses',
          text: 'You may not use our services for any unlawful purpose, to harm others, to interfere with our services, or in any way that violates these terms or our policies.'
        }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Scale,
      content: [
        {
          subtitle: 'CoachAI Property',
          text: 'All content, features, and functionality of our services, including but not limited to text, graphics, logos, images, and software, are owned by CoachAI and are protected by copyright, trademark, and other intellectual property laws.'
        },
        {
          subtitle: 'Limited License',
          text: 'We grant you a limited, non-exclusive, non-transferable license to access and use our services for your personal or internal business purposes, subject to these terms.'
        }
      ]
    },
    {
      title: 'Payment and Billing',
      icon: CreditCard,
      content: [
        {
          subtitle: 'Payment Terms',
          text: 'Payment for services is due according to the terms specified at the time of purchase. All fees are non-refundable except as expressly stated in our refund policy or as required by law.'
        },
        {
          subtitle: 'Billing Disputes',
          text: 'Any billing disputes must be reported within thirty (30) days of the charge date. We will work with you to resolve any legitimate billing issues promptly.'
        }
      ]
    }
  ]

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
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto"
            >
              These terms govern your use of CoachAI services and establish the 
              legal framework for our relationship.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-text-secondary mt-4"
            >
              Last updated: January 16, 2025
            </motion.p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/20 border border-red-500/30 rounded-lg p-8 mb-12"
            >
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-heading font-bold text-red-300 mb-3">
                    Important Legal Notice
                  </h2>
                  <p className="text-red-200 leading-relaxed">
                    <strong>PLEASE READ THESE TERMS CAREFULLY.</strong> By using CoachAI services, 
                    you agree to indemnify and hold harmless CoachAI, CoachAI Tech Camps, 
                    CoachAI Development Fund, and all subsidiaries from any and all liability, 
                    claims, damages, or losses arising from your use of our services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="mb-12"
                >
                  <div className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-navy-deep rounded-lg">
                        <Icon className="w-6 h-6 text-accent-blue" />
                      </div>
                      <h2 className="text-2xl font-heading font-bold text-text-primary">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item.subtitle && (
                            <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                              {item.subtitle}
                            </h3>
                          )}
                          <p className="text-text-secondary leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Indemnification */}
        <section className="bg-navy-deep/50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-navy-deep rounded-lg">
                  <Scale className="w-6 h-6 text-accent-blue" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-text-primary">
                  Indemnification and Hold Harmless
                </h2>
              </div>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">Complete Indemnification:</strong> You agree to indemnify, 
                  defend, and hold harmless CoachAI, CoachAI Tech Camps, CoachAI Development Fund, 
                  and all subsidiaries under the CoachAI Brand, including their officers, directors, 
                  employees, agents, and representatives, from and against any and all claims, 
                  liabilities, damages, losses, costs, expenses, or fees (including reasonable 
                  attorney's fees) arising from or relating to:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use of or access to our services</li>
                  <li>Your violation of these Terms of Service</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any investment or financial decisions made based on our services</li>
                  <li>Any content you submit or transmit through our services</li>
                  <li>Your conduct in connection with our services</li>
                </ul>
                
                <p>
                  <strong className="text-text-primary">Technology Provider Status:</strong> CoachAI operates 
                  solely as a technology provider of information and educational services. We do not 
                  provide investment advice, financial planning, or professional consulting services. 
                  All information provided is for educational purposes only.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-navy-deep hover:bg-navy-light border-2 border-accent-blue hover:border-accent-blue/80 text-white px-8 py-3 rounded-lg transition-all duration-200 text-lg font-medium"
              >
                CONTACT
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* OpenAI-style Sidebar */}
      <OpenAISidebar />
    </div>
  )
}

export default TermsOfServicePage