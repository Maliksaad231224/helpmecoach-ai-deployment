import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { OpenAISidebar } from '../components/OpenAISidebar'
import {
  Zap,
  Code,
  Palette,
  Rocket,
  TrendingUp,
  Mail,
  ShoppingCart,
  Settings,
  Target,
  Brain,
  ArrowRight,
  Clock,
  Sparkles,
  Bot,
  Database,
  BarChart3,
  Globe,
  Check,
  CreditCard,
  Monitor
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../lib/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export const CAMPAlphaPage: React.FC = () => {
  const { user } = useAuth()
  const [subscription, setSubscription] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchSubscription = useCallback(async () => {
    if (!user) return

    try {
      const q = query(
        collection(db, 'camp_alpha_subscriptions'),
        where('userId', '==', user.uid),
        where('status', '==', 'active')
      )
      const querySnapshot = await getDocs(q)
      if (!querySnapshot.empty) {
        setSubscription(querySnapshot.docs[0].data())
      }
    } catch (error) {
      console.error('Failed to fetch subscription:', error)
    }
  }, [user])

  useEffect(() => {
    if (user) fetchSubscription()

    // Handle payment result
    const urlParams = new URLSearchParams(window.location.search)
    const subscriptionStatus = urlParams.get('subscription')

    if (subscriptionStatus === 'success') {
      window.history.replaceState({}, document.title, window.location.pathname)
      setTimeout(() => {
        fetchSubscription()
      }, 2000)
    } else if (subscriptionStatus === 'cancelled') {
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [user, fetchSubscription])

  const handleSubscribe = async () => {
    if (!user) {
      // Redirect to auth or show auth modal
      return
    }

    setLoading(true)

    try {
      // Call Firebase Cloud Function for subscription
      const response = await fetch(`${import.meta.env.VITE_FIREBASE_FUNCTIONS_URL || ''}/createSubscription`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planType: 'alpha',
          customerEmail: user.email,
          userId: user.uid
        })
      })

      const data = await response.json()

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      }
    } catch (error: any) {
      console.error('Subscription error:', error)
    } finally {
      setLoading(false)
    }
  }
  const designSuiteFeatures = [
    {
      title: 'Full Stack Prototyping',
      description: 'Rapid prototyping tool that transforms ideas into functional applications instantly',
      icon: Code,
      color: 'text-blue-500'
    },
    {
      title: 'Instant Idea Expression',
      description: 'AI-powered design generation that brings your concepts to life in minutes, not months',
      icon: Palette,
      color: 'text-blue-400'
    },
    {
      title: 'Rapid Development',
      description: 'From concept to working prototype with intelligent code generation and design automation',
      icon: Zap,
      color: 'text-blue-600'
    }
  ]

  const automationTools = [
    {
      title: 'Marketing Automation',
      description: 'AI-driven marketing campaigns, content creation, and audience targeting on autopilot',
      icon: TrendingUp,
      color: 'text-blue-500'
    },
    {
      title: 'Sales Automation',
      description: 'Intelligent lead nurturing, conversion optimization, and sales funnel management',
      icon: Target,
      color: 'text-blue-400'
    },
    {
      title: 'SEO Automation',
      description: 'Automated keyword optimization, content SEO, and search ranking improvements',
      icon: Globe,
      color: 'text-blue-600'
    },
    {
      title: 'Content Management',
      description: 'AI-powered content creation, scheduling, and optimization across all platforms',
      icon: Bot,
      color: 'text-blue-500'
    }
  ]

  const launchTools = [
    {
      title: 'CRM Systems',
      description: 'Simple setup customer relationship management with AI-powered insights and automation',
      icon: Database,
      color: 'text-blue-500'
    },
    {
      title: 'CMS Systems',
      description: 'Content management systems that deploy instantly with intelligent content organization',
      icon: Settings,
      color: 'text-blue-400'
    },
    {
      title: 'Email Management',
      description: 'Automated email marketing, customer communication, and engagement tracking',
      icon: Mail,
      color: 'text-blue-600'
    },
    {
      title: 'Marketplace Deployment',
      description: 'Tools to get applications to marketplace fast with automated submission and optimization',
      icon: ShoppingCart,
      color: 'text-blue-500'
    },
    {
      title: 'Sales & Capital Raising',
      description: 'Create compelling sales materials and raise capital quickly with AI-powered pitch generation',
      icon: BarChart3,
      color: 'text-blue-400'
    },
    {
      title: 'Metrics Dashboard',
      description: 'Operate on autopilot, monitor your metrics with an interactive Dashboard, so you can keep building while your tools handle the day-to-day operations',
      icon: Monitor,
      color: 'text-blue-600'
    }
  ]

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-navy-gradient py-20 px-6 relative overflow-hidden">
          {/* ALPHA Silhouette Background */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5">
            <div className="text-[400px] font-heading font-black text-white whitespace-nowrap">
              ALPHA
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-blue-500">A</span>
                </div>
                <h1 className="text-5xl font-heading font-bold text-text-primary">
                  CAMP Alpha
                </h1>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full mx-auto mb-6"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-text-primary max-w-5xl mx-auto leading-relaxed mb-8 font-medium"
            >
              AI-driven suite of application design, development and launch tools including marketing, sales, SEO and content management automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-500/20 border border-blue-500 rounded-lg p-6 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Brain className="w-6 h-6 text-blue-500" />
                <span className="text-blue-500 font-semibold text-xl">AI-POWERED BUSINESS TRANSFORMATION LAUNCHPAD</span>
              </div>
              <p className="text-text-primary text-center leading-relaxed text-lg">
                Transform your ideas into fully functional applications instantly. From design to deployment,
                Alpha handles everything so you can focus on building the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Design Suite */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Design Suite
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Lovable-inspired full stack prototyping tool to get your idea expressed instantly
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designSuiteFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-blue-500/30 rounded-lg p-8 text-center hover:bg-navy-deep/90 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="bg-blue-500/20 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors">
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="font-heading font-semibold text-text-primary mb-4 text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Automation Tools */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Automation Tools
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Comprehensive automation suite for marketing, sales, SEO and content management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {automationTools.map((tool, index) => {
                const Icon = tool.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-blue-500/30 rounded-lg p-6 hover:bg-navy-deep/90 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/20 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                        <Icon className={`w-6 h-6 ${tool.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                          {tool.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Launch Tools */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Launch Tools
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Complete suite of tools to get applications to marketplace, create sales and raise capital fast
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {launchTools.map((tool, index) => {
                const Icon = tool.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-blue-500/30 rounded-lg p-6 hover:bg-navy-deep/90 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="text-center">
                      <div className="bg-blue-500/20 rounded-lg w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                        <Icon className={`w-7 h-7 ${tool.color}`} />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-text-primary mb-3">
                        {tool.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{tool.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-6">
                Why Choose CAMP Alpha?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6">
                  <Brain className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold text-text-primary mb-2">AI-Driven</h3>
                  <p className="text-sm text-text-secondary">Advanced automation powered by cutting-edge AI</p>
                </div>
                <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6">
                  <Sparkles className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold text-text-primary mb-2">Instant Express</h3>
                  <p className="text-sm text-text-secondary">Get your ideas expressed instantly, no delays</p>
                </div>
                <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6">
                  <Rocket className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold text-text-primary mb-2">Fast Deploy</h3>
                  <p className="text-sm text-text-secondary">Rapid marketplace deployment and launch</p>
                </div>
                <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6">
                  <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold text-text-primary mb-2">Auto Sales</h3>
                  <p className="text-sm text-text-secondary">Automated sales and capital raising systems</p>
                </div>
                <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold text-text-primary mb-2">Focus Build</h3>
                  <p className="text-sm text-text-secondary">Focus on building while tools handle operations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-6">
                Start Building with CAMP Alpha
              </h2>
              <p className="text-xl text-text-secondary mb-12">
                Transform your ideas into reality with our AI-powered development suite.
              </p>

              {/* Pricing Card */}
              <div className="max-w-md mx-auto">
                <div className="bg-blue-500/10 border-2 border-blue-500 rounded-2xl p-8 relative overflow-hidden">

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                      CAMP Alpha Suite
                    </h3>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-blue-500">$20</span>
                      <span className="text-xl text-text-secondary ml-2">/month</span>
                    </div>
                    <p className="text-text-secondary">
                      Complete AI-driven development toolkit
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-left">
                      <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-text-primary">Full Stack Prototyping Tools</span>
                    </div>
                    <div className="flex items-center text-left">
                      <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-text-primary">AI Marketing & Sales Automation</span>
                    </div>
                    <div className="flex items-center text-left">
                      <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-text-primary">CRM & CMS Systems</span>
                    </div>
                    <div className="flex items-center text-left">
                      <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-text-primary">Marketplace Deployment Tools</span>
                    </div>
                    <div className="flex items-center text-left">
                      <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-text-primary">Interactive Metrics Dashboard</span>
                    </div>
                    <div className="flex items-center text-left">
                      <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-text-primary">Direct Access to Funding Launchpad</span>
                    </div>
                    <div className="flex items-center text-left">
                      <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-text-primary">24/7 Support & Updates</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {subscription ? (
                    <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-4">
                      <p className="text-green-400 font-semibold">✅ Active Subscription</p>
                      <p className="text-text-secondary text-sm">You have access to all Alpha features</p>
                    </div>
                  ) : (
                    <Button
                      onClick={handleSubscribe}
                      disabled={loading || !user}
                      className="w-full bg-blue-500 text-white hover:bg-blue-600 border border-blue-500 hover:border-blue-600 text-lg py-4 font-bold transition-all duration-200 mb-4"
                    >
                      {loading ? (
                        'Processing...'
                      ) : !user ? (
                        'Sign In to Subscribe'
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 mr-2" />
                          Subscribe to CAMP Alpha
                        </>
                      )}
                    </Button>
                  )}

                  {!user && (
                    <p className="text-text-secondary text-sm">
                      Please sign in to start your subscription
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6 mt-8">
                <p className="text-blue-500 font-bold text-lg">
                  🚀 Get instant access to the complete Alpha development suite and start building the future today.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="pr-20"> {/* Add right padding to prevent overlap with sidebar */}
        <OpenAISidebar />
      </div>
    </div>
  )
}
