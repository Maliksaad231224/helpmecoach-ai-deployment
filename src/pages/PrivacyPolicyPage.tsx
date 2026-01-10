import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { Shield, Eye, Database, Users, Lock, FileText } from 'lucide-react'

export const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect personal information that you voluntarily provide to us when you register for our services, including but not limited to: name, email address, phone number, mailing address, payment information, and educational background. We also collect information when you communicate with us, participate in surveys, or interact with our platform.'
        },
        {
          subtitle: 'Automatically Collected Information',
          text: 'When you access our services, we automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, access times, pages viewed, and the website you visited before navigating to our services.'
        },
        {
          subtitle: 'Educational and Financial Data',
          text: 'For our CAMP ecosystem services, we may collect educational records and data related to your participation in our tech boot camps and founder programs.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, including educational programs and AI coaching services. This includes personalizing your experience and providing customer support.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send you updates about our services, educational content, and important notices about your account or services.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage patterns to understand how our services are used, improve functionality, and develop new features and services.'
        }
      ]
    },
    {
      title: 'Information Sharing and Disclosure',
      icon: Users,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required to do so by law or in good faith belief that such action is necessary to comply with legal obligations, protect our rights or property, or ensure user safety.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control.'
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.'
        }
      ]
    },
    {
      title: 'Your Rights and Choices',
      icon: Shield,
      content: [
        {
          subtitle: 'Access and Control',
          text: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications and control how your information is used for marketing purposes.'
        },
        {
          subtitle: 'Data Portability',
          text: 'Upon request, we will provide you with a copy of your personal information in a structured, commonly used format.'
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
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto"
            >
              Your privacy is important to us. This policy explains how CoachAI collects, 
              uses, and protects your personal information.
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

        {/* Introduction */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-8 mb-12"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-navy-deep rounded-lg">
                  <FileText className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
                    Our Commitment to Privacy
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    CoachAI, including all entities under the CoachAI brand (CoachAI Tech Camps, 
                    CoachAI Development Fund, and subsidiaries), is committed to protecting your privacy 
                    and ensuring the security of your personal information. This Privacy Policy describes 
                    how we collect, use, disclose, and safeguard your information when you use our services, 
                    including our educational programs, investment platforms, and AI coaching services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
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
                          <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                            {item.subtitle}
                          </h3>
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

        {/* Contact Information */}
        <section className="bg-navy-deep/50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
                Questions About This Policy?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us.
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

export default PrivacyPolicyPage