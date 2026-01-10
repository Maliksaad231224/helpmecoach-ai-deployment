import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { 
  Building, 
  TrendingUp, 
  Shield, 
  Globe, 
  Zap, 
  Target,
  BarChart3,
  Users,
  Coins,
  Lock,
  CheckCircle,
  Network,
  Briefcase,
  Award,
  ArrowRight,
  Star,
  Handshake,
  BookOpen,
  Layers,
  DollarSign
} from 'lucide-react'
import { Button } from '../components/ui/button'

export const CAMPRWAAgentPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const onboardingSectionRef = useRef<HTMLDivElement>(null)

  const scrollToOnboarding = () => {
    onboardingSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const developerBenefits = [
    {
      title: 'Custom NFT Marketplaces',
      description: 'Purpose-built blockchain platforms for real estate tokenization with integrated smart contract development and DAO governance systems.',
      icon: Building,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Multi-Chain Integration & LayerZero Protocol',
      description: 'Seamless deployment across Base, Solana, and Ethereum networks using LayerZero technology for maximum reach and interoperability.',
      icon: Network,
      gradient: 'from-green-500 to-green-600',
    },
    {
      title: 'GoldBackBond Protection Framework',
      description: 'Comprehensive 70% appraised value protection service with enterprise-grade risk assessment and qualification processes.',
      icon: Shield,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Enterprise Integration Suite',
      description: 'Bloomberg terminal connectivity, institutional APIs, KYC/AML compliance automation, and white-label solutions for enterprise clients.',
      icon: Briefcase,
      gradient: 'from-amber-500 to-orange-600',
    },
  ]

  const investorBenefits = [
    {
      title: 'Property Tokenization Platform',
      description: 'Transform physical real estate into liquid digital assets with automated sales management and comprehensive investor relations tools.',
      icon: Coins,
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Advanced Analytics & Reporting',
      description: 'Transparent performance tracking, portfolio management, and automated distribution systems with institutional-grade compliance.',
      icon: BarChart3,
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Cross-Chain Asset Freedom',
      description: 'Deploy and manage tokenized real estate across 100+ blockchain networks with unified liquidity and optimized yield opportunities.',
      icon: Globe,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Institutional Security Standards',
      description: 'AAA class security firm audits, continuous monitoring, and enterprise-grade APIs with comprehensive insurance coverage.',
      icon: Lock,
      gradient: 'from-rose-500 to-rose-600',
    },
  ]

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Property Assessment & Tokenization',
      description: 'Professional appraisal, legal structure setup, and smart contract deployment for real estate assets with comprehensive due diligence.',
      icon: Building,
    },
    {
      step: '02', 
      title: 'Multi-Chain Platform Deployment',
      description: 'Custom NFT marketplace creation with DAO governance, automated distribution systems, and cross-chain compatibility.',
      icon: Network,
    },
    {
      step: '03',
      title: 'GoldBackBond Protection Activation',
      description: 'Risk assessment completion, qualification process, and activation of 70% appraised value protection coverage.',
      icon: Shield,
    },
    {
      step: '04',
      title: 'Enterprise Integration & Compliance',
      description: 'Bloomberg terminal integration, KYC/AML automation, institutional API connectivity, and regulatory compliance setup.',
      icon: Briefcase,
    },
    {
      step: '05',
      title: 'Analytics & Performance Management',
      description: 'Transparent reporting systems, portfolio optimization, automated distributions, and continuous performance monitoring.',
      icon: BarChart3,
    },
  ]

  const keyFeatures = [
    {
      title: 'Cross-Chain Freedom',
      description: '100+ blockchain networks using LayerZero Technology for maximum interoperability.',
      icon: Globe,
    },
    {
      title: 'Property Tokenization',
      description: 'Transform physical real estate into liquid digital assets with automated management.',
      icon: Coins,
    },
    {
      title: 'Enterprise Security',
      description: 'AAA class security firm audits, monitoring, and institutional-grade APIs.',
      icon: Lock,
    },
    {
      title: 'GoldBackBond Protection',
      description: '70% appraised value protection via comprehensive risk assessment framework.',
      icon: Shield,
    },
    {
      title: 'Advanced Analytics', 
      description: 'Transparent reporting, portfolio management, and automated distribution systems.',
      icon: BarChart3,
    },
    {
      title: 'Multi-Chain Integration',
      description: 'Seamless deployment across Base, Solana, and Ethereum networks.',
      icon: Network,
    },
  ]

  const trustIndicators = [
    {
      title: 'Blockchain Transparency',
      description: 'All property transactions and ownership records immutably stored on blockchain.',
      icon: Lock,
    },
    {
      title: 'Professional Appraisal',
      description: 'Independent property valuations and comprehensive due diligence processes.',
      icon: CheckCircle,
    },
    {
      title: 'Insurance Coverage',
      description: '70% appraised value protection through GoldBackBond comprehensive framework.',
      icon: Award,
    },
    {
      title: 'Regulatory Compliance',
      description: 'KYC/AML automation and institutional-grade compliance management.',
      icon: Users,
    },
  ]

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-navy-gradient py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-transparent z-0"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
            <img 
              src="/images/property_tokenization.png" 
              alt="Property tokenization visualization" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-6xl md:text-7xl font-heading font-bold text-text-primary mb-6 leading-tight">
                CAMP: Real Estate <span className="text-accent-blue">Tokenization</span> Platform
              </h1>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-accent-blue mb-6">
                Blockchain-Powered Property Investment with GoldBackBond Protection
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl leading-relaxed mb-10">
                Revolutionizing real estate investment through advanced NFT platforms, cross-chain integration, 
                and comprehensive protection for qualifying property tokenization projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#4169E1] text-white hover:bg-[#4169E1]/90 text-lg px-8 py-4 font-semibold"
                  onClick={() => window.open('https://rwa.helpmecoach.ai', '_blank')}
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10 text-lg px-8 py-4"
                  onClick={() => window.open('https://rwa.helpmecoach.ai', '_blank')}
                >
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dual Value Proposition Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Comprehensive Real Estate Solutions
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Serving developers and investors with enterprise-grade blockchain technology and comprehensive protection frameworks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* For Developers */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                    <Building className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">
                    For Developers
                  </h3>
                  <p className="text-text-secondary">
                    Enterprise-grade blockchain platforms with comprehensive development and integration services
                  </p>
                </div>

                <div className="space-y-6">
                  {developerBenefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-navy-deep/80 border border-navy-light/50 rounded-xl p-6 hover:border-accent-blue/30 transition-all duration-300 hover:bg-navy-deep/90"
                      >
                        <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r ${benefit.gradient} text-white mb-4`}>
                          <Icon className="w-5 h-5" />
                          <span className="font-semibold">{benefit.title}</span>
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                          {benefit.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* For Investors */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <TrendingUp className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">
                    For Investors
                  </h3>
                  <p className="text-text-secondary">
                    Liquid real estate investment opportunities with comprehensive analytics and protection
                  </p>
                </div>

                <div className="space-y-6">
                  {investorBenefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-navy-deep/80 border border-navy-light/50 rounded-xl p-6 hover:border-accent-blue/30 transition-all duration-300 hover:bg-navy-deep/90"
                      >
                        <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r ${benefit.gradient} text-white mb-4`}>
                          <Icon className="w-5 h-5" />
                          <span className="font-semibold">{benefit.title}</span>
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                          {benefit.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Property Tokenization Showcase */}
        <section className="bg-navy-deep/50 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Property Tokenization Process
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Transform physical real estate into liquid digital assets through our comprehensive blockchain platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-navy-deep/80 border border-accent-blue/30 rounded-xl p-8">
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                    Advanced Tokenization Features
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-text-primary">Smart Contract Automation:</span>
                        <span className="text-text-secondary ml-2">Automated rent distribution, ownership transfer, and compliance management</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-text-primary">Cross-Chain Compatibility:</span>
                        <span className="text-text-secondary ml-2">Deploy across Base, Solana, Ethereum with LayerZero integration</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-text-primary">Fractional Ownership:</span>
                        <span className="text-text-secondary ml-2">Enable partial ownership with automated dividend distribution</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent-green mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-text-primary">Liquidity Solutions:</span>
                        <span className="text-text-secondary ml-2">Secondary market trading with institutional-grade security</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-accent-blue/20 to-accent-green/20 rounded-xl p-8 border border-accent-blue/30">
                  <img 
                    src="/images/property_tokenization.png" 
                    alt="Property Tokenization Process" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="mt-6 text-center">
                    <h4 className="text-xl font-heading font-bold text-text-primary mb-2">
                      From Physical to Digital Assets
                    </h4>
                    <p className="text-text-secondary">
                      Comprehensive transformation of real estate into blockchain-native tokenized investments
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                A systematic approach to real estate tokenization with comprehensive protection and enterprise-grade infrastructure.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-blue to-transparent opacity-30"></div>
              
              <div className="space-y-16">
                {howItWorksSteps.map((step, index) => {
                  const Icon = step.icon
                  const isEven = index % 2 === 0
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    >
                      <div className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                        <div className="bg-navy-deep/80 border border-navy-light/50 rounded-xl p-8">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/20 rounded-full mr-4">
                              <Icon className="w-6 h-6 text-accent-blue" />
                            </div>
                            <div className="text-4xl font-bold text-accent-blue/40">
                              {step.step}
                            </div>
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                            {step.title}
                          </h3>
                          <p className="text-text-secondary leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Center dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-blue rounded-full border-4 border-navy-deep"></div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-navy-deep/50 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Platform Features
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Enterprise-grade infrastructure built for scale, security, and optimal real estate investment outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-navy-light/50 rounded-xl p-8 text-center hover:border-accent-blue/30 transition-all duration-300 hover:bg-navy-deep/90 group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue/20 rounded-full mb-6 group-hover:bg-accent-blue/30 transition-colors">
                      <Icon className="w-8 h-8 text-accent-blue" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* GoldBackBond Protection Disclosure */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-navy-deep/80 border border-accent-gold/50 rounded-xl p-8"
            >
              <div className="text-center mb-8">
                <Shield className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                  GoldBackBond Protection Service Disclosure
                </h2>
              </div>
              
              <div className="space-y-6 text-text-primary">
                <p className="leading-relaxed text-center">
                  GoldBackBond Inc. serves as a strategic partner providing comprehensive ecosystem protection through the $1 Billion GoldBackBond Protocol Protection Fund. This fund is capitalized by Trust Certificate Debentures from corporate treasury and functions as discretionary capital backstop for CAMP protocols.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-accent-green mb-3">Coverage Includes:</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                        Smart contract exploits
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                        Extreme market dislocation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                        Systemic risk events
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-3">Coverage Exclusions:</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start">
                        <span className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0">✗</span>
                        Individual user errors
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0">✗</span>
                        Market volatility losses
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0">✗</span>
                        Investment return guarantees
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-navy-deep/60 border border-accent-blue/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-accent-blue mb-4">Important Disclaimers:</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      GoldBackBond Inc. is NOT a licensed insurance or financial institution
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      The fund is NOT an insurance policy or investment guarantee
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Protection is governed by Multi-Signature process with USDGB Trust Fund fiduciaries
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Strategic partnership provides risk management framework for protocol stability
                    </li>
                  </ul>
                </div>
                
                <p className="text-center text-text-secondary italic">
                  This protection service represents a strategic commitment with clear governance structures, specific coverage parameters, and defined limitations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="bg-navy-deep/50 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Trust & Security Framework
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Enterprise-grade security and transparency standards for institutional real estate investment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-navy-light/50 rounded-xl p-6 text-center hover:border-accent-blue/30 transition-all duration-300"
                  >
                    <Icon className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-text-primary mb-2">
                      {indicator.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {indicator.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-accent-blue/20 to-accent-green/20 border border-accent-blue/30 rounded-xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
                Transform Your Real Estate Portfolio
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Join the future of property investment with blockchain technology, 
                comprehensive protection, and institutional-grade infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://rwa.helpmecoach.ai', '_blank')}
                  className="bg-accent-blue text-white hover:bg-accent-blue/90 px-12 py-4 text-xl font-bold"
                >
                  Start Your Project Now
                </Button>
                <Button 
                  onClick={() => window.open('https://rwa.helpmecoach.ai', '_blank')}
                  className="bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue/10 px-12 py-4 text-xl font-bold"
                >
                  Request Consultation
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-accent-blue/20">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Shield className="w-6 h-6 text-accent-gold" />
                  <span className="text-accent-gold font-semibold text-xl">GOLDBACKBOND PROTECTION</span>
                </div>
                <p className="text-text-secondary">
                  70% appraised value protection • Enterprise-grade security • Comprehensive risk management
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
