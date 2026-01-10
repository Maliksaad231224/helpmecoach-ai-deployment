import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { CamperOnboardingModal } from '../components/onboarding/CamperOnboardingModal'
import { SponsorOnboardingModal } from '../components/onboarding/SponsorOnboardingModal'
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Sparkles, 
  Target, 
  Award, 
  BookOpen, 
  Coins,
  Building,
  Network,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Zap,
  Lock,
  BarChart3,
  Handshake
} from 'lucide-react'
import { Button } from '../components/ui/button'

export const CAMPMarketplacePage: React.FC = () => {
  const [showCamperModal, setShowCamperModal] = useState(false)
  const [showSponsorModal, setShowSponsorModal] = useState(false)
  const onboardingSectionRef = useRef<HTMLDivElement>(null)

  const scrollToOnboarding = () => {
    onboardingSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const sponsorBenefits = [
    {
      title: 'Direct Access to Vetted Agent Teams',
      description: 'Connect with pre-qualified campers who have completed rigorous screening and demonstrated competence through our 6-month Tech Camp program.',
      icon: Users,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'On-Chain Accountability & Measurable ROI',
      description: 'Track deliverables, milestones, and performance through blockchain-verified metrics with transparent KPIs and SLAs.',
      icon: BarChart3,
      gradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Tokenized Co-Ownership & Aligned Upside',
      description: 'Share in the economic upside through tokenized co-ownership of agent output and intellectual property.',
      icon: Coins,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Standardized Service Delivery',
      description: 'Receive consistent, high-quality outputs through our standardized service pods specializing in automation, analytics, community ops, content, and QA.',
      icon: Shield,
      gradient: 'from-amber-500 to-orange-600',
    },
  ]

  const camperBenefits = [
    {
      title: 'Fully Funded Education Pathway',
      description: 'Receive $54,000 in total funding ($18,000 Tech Camp + $36,000 Hero program) with no upfront costs.',
      icon: GraduationCap,
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Tokenized Co-Ownership Rights',
      description: 'Gain tokenized co-ownership in agent output and IP, ensuring long-term value participation beyond education.',
      icon: Award,
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Performance-Based Rewards',
      description: 'Earn long-term upside from performance-based rewards through usage-driven buybacks and structural scarcity mechanisms.',
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Enterprise Transition with Sponsor Backing',
      description: 'Seamlessly transition from education to enterprise opportunities with direct sponsor backing and established relationships.',
      icon: Building,
      gradient: 'from-rose-500 to-rose-600',
    },
  ]

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Unified CAMP Token Base',
      description: 'CAMP token serves as the monetary backbone with concentrated liquidity, enabling seamless value transfer across the ecosystem.',
      icon: Coins,
    },
    {
      step: '02', 
      title: 'Education Pipeline',
      description: '6-month Tech Camp followed by 18-month Hero program, creating a comprehensive talent development pathway.',
      icon: BookOpen,
    },
    {
      step: '03',
      title: 'Specialized Agent Teams',
      description: 'Service pods focused on automation, analytics, community ops, content creation, quality assurance, and reputation management deliver standardized outcomes.',
      icon: Network,
    },
    {
      step: '04',
      title: 'On-Chain Milestone Gates',
      description: 'Validator-gated progression system ensures quality control through blockchain-verified graduation and performance milestones.',
      icon: CheckCircle,
    },
    {
      step: '05',
      title: 'Revenue-Driven Scarcity Model',
      description: 'Usage-driven buybacks and burns convert services into structural scarcity, creating sustainable value appreciation.',
      icon: Zap,
    },
  ]

  const keyFeatures = [
    {
      title: 'Cross-Chain Freedom',
      description: 'Multi-chain agent deployment capabilities ensuring maximum reach and flexibility.',
      icon: Globe,
    },
    {
      title: 'Entertainment IP Integration',
      description: 'CAMP Games including Hardball City League, CoachAlienhunters, and XoloGods enhance engagement.',
      icon: Star,
    },
    {
      title: 'Transparent Economics',
      description: 'Governance-controlled emissions with fixed supply and transparent tokenomics.',
      icon: Lock,
    },
    {
      title: 'Quality Guardrails',
      description: 'Scholarship screening, validator review, and performance-based unlocks ensure quality.',
      icon: Shield,
    },
    {
      title: 'AAA Class Security', 
      description: 'Firm audits, monitoring, and institutional-grade APIs provide enterprise security.',
      icon: Lock,
    },
    {
      title: 'Primed Camper Supply',
      description: 'Focus on Texas prison reentry population with select scholarship process.',
      icon: Target,
    },
  ]

  const trustIndicators = [
    {
      title: 'On-Chain Transparency',
      description: 'All transactions and milestones recorded on blockchain for complete accountability.',
      icon: Lock,
    },
    {
      title: 'Validator-Gated Progression',
      description: 'Independent validators ensure quality standards at every milestone.',
      icon: CheckCircle,
    },
    {
      title: 'Performance-Based Rewards',
      description: 'Rewards tied directly to measurable outcomes and deliverable completion.',
      icon: Award,
    },
    {
      title: 'Governance Controls',
      description: 'Community governance controls emissions, parameters, and ecosystem development.',
      icon: Users,
    },
  ]

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-navy-gradient py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-transparent z-0"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
            <img 
              src="/images/tech-ecosystem-with-logo.png" 
              alt="Tech ecosystem background" 
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
                CAMP: AI‑Agent <span className="text-accent-blue">Launchpad</span> & Marketplace
              </h1>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-accent-blue mb-6">
                Sponsor‑Funded Human Talent Pipeline Built on Virtuals Protocol
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl leading-relaxed mb-10">
                Qualifying, funding, and scaling 'Camper' AI agents through a 6‑month Tech Camp and 18‑month Hero program
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#4169E1] text-white hover:bg-[#4169E1]/90 text-lg px-8 py-4 font-semibold"
                  onClick={() => setShowSponsorModal(true)}
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10 text-lg px-8 py-4"
                  onClick={scrollToOnboarding}
                >
                  Connect
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
                Dual Value Proposition
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Connecting sponsors with vetted talent while providing campers with funded pathways to tech careers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* For Sponsors */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                    <Handshake className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">
                    For Sponsors
                  </h3>
                  <p className="text-text-secondary">
                    Access vetted agent teams with clear deliverables and measurable ROI
                  </p>
                </div>

                <div className="space-y-6">
                  {sponsorBenefits.map((benefit, index) => {
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

              {/* For Campers */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <GraduationCap className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-text-primary mb-4">
                    For Campers
                  </h3>
                  <p className="text-text-secondary">
                    Funded education pathway with tokenized co-ownership and long-term upside
                  </p>
                </div>

                <div className="space-y-6">
                  {camperBenefits.map((benefit, index) => {
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

        {/* How It Works Section */}
        <section className="bg-navy-deep/50 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                How It Works
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                A systematic approach to creating, funding, and scaling AI agent teams through structured education and enterprise partnerships.
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
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Key Features
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Enterprise-grade infrastructure built for scale, security, and sustainable growth.
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

        {/* Economics Highlights */}
        <section className="bg-navy-deep/50 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Economics Highlights
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Transparent, sustainable tokenomics designed for long-term value creation and structural scarcity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-8 text-center border border-blue-500/20"
              >
                <div className="text-4xl font-bold text-accent-blue mb-2">$54,000</div>
                <div className="text-text-primary font-semibold mb-2">Program Investment</div>
                <div className="text-text-secondary text-sm">Total per Camper (funded by sponsors)</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl p-8 text-center border border-green-500/20"
              >
                <div className="text-4xl font-bold text-accent-blue mb-2">Fixed</div>
                <div className="text-text-primary font-semibold mb-2">Token Supply</div>
                <div className="text-text-secondary text-sm">Non-inflationary with governance oversight</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-8 text-center border border-purple-500/20"
              >
                <div className="text-4xl font-bold text-accent-blue mb-2">Bonding</div>
                <div className="text-text-primary font-semibold mb-2">Curve Model</div>
                <div className="text-text-secondary text-sm">CAMP-paired liquidity graduation</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-xl p-8 text-center border border-amber-500/20"
              >
                <div className="text-4xl font-bold text-accent-blue mb-2">Revenue</div>
                <div className="text-text-primary font-semibold mb-2">Driven Scarcity</div>
                <div className="text-text-secondary text-sm">Buybacks & burns create value</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 bg-navy-deep/80 rounded-xl p-8 border border-accent-blue/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                    Target Demographic Focus
                  </h3>
                  <div className="space-y-3 text-text-secondary">
                    <p className="flex items-center"><CheckCircle className="w-5 h-5 text-accent-blue mr-3" /> Young men ages 21–48 returning from Texas prisons</p>
                    <p className="flex items-center"><CheckCircle className="w-5 h-5 text-accent-blue mr-3" /> Competence, motivation, and family support screening</p>
                    <p className="flex items-center"><CheckCircle className="w-5 h-5 text-accent-blue mr-3" /> Select scholarship with course completion requirement</p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/images/diverse_men_graduation_ceremony.png" 
                    alt="CAMP graduates in graduation ceremony" 
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Trust Indicators
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Built on transparent, accountable infrastructure with proven governance and security models.
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
                    className="bg-navy-deep/80 border border-navy-light/50 rounded-xl p-6 text-center hover:border-accent-blue/30 transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-blue/20 rounded-full mb-4 group-hover:bg-accent-blue/30 transition-colors">
                      <Icon className="w-6 h-6 text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-text-primary mb-2">
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

        {/* Updated Onboarding Selection Section */}
        <section ref={onboardingSectionRef} className="py-24 px-6 bg-gradient-to-r from-accent-blue/5 to-transparent">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
                Get Started with CAMP
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
                Choose your pathway to join the AI-powered human capital development ecosystem
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Camper Path */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-green-600/10 to-green-800/10 rounded-2xl p-8 border border-green-500/20 text-center hover:border-green-500/40 transition-all duration-300 cursor-pointer"
                onClick={() => setShowCamperModal(true)}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
                  <GraduationCap className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                  I'm a Camper
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Apply for our select scholarship program and start your funded pathway to a tech career through our comprehensive 3-level system.
                </p>
                
                <div className="bg-green-500/10 rounded-lg p-4 mb-6 text-left">
                  <p className="text-green-600 font-semibold mb-2">3-Level Progression:</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p><span className="text-green-500 font-medium">• Approved:</span> Passed scholarship process, ready for placement</p>
                    <p><span className="text-green-500 font-medium">• Level 1:</span> Startup Camper - First 3 months, integration & foundation</p>
                    <p><span className="text-green-500 font-medium">• Level 2:</span> Coach Camper - Second 3 months, building KPIs & mentoring</p>
                    <p><span className="text-green-500 font-medium">• Level 3:</span> Hero Launchpad - 18-month corporate incubator program</p>
                  </div>
                </div>
                
                <Button className="w-full bg-[#4169E1] text-white hover:bg-[#4169E1]/90 text-lg py-3 font-semibold">
                  Apply for Scholarship
                </Button>
              </motion.div>

              {/* Sponsor Path */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-2xl p-8 border border-blue-500/20 text-center hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
                onClick={() => setShowSponsorModal(true)}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
                  <Handshake className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                  I'm a Sponsor
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Access vetted talent pipeline and invest in the future of AI-powered human capital with measurable ROI and tokenized co-ownership.
                </p>
                
                <div className="bg-blue-500/10 rounded-lg p-4 mb-6 text-left">
                  <p className="text-blue-600 font-semibold mb-2">Service Offerings Include:</p>
                  <div className="space-y-1 text-sm text-text-secondary">
                    <p>• Automation & Analytics</p>
                    <p>• Community Operations</p> 
                    <p>• Content Creation</p>
                    <p>• Quality Assurance</p>
                    <p>• Reputation Management</p>
                  </div>
                </div>
                
                <Button className="w-full bg-[#4169E1] text-white hover:bg-[#4169E1]/90 text-lg py-3 font-semibold">
                  Get Started as Sponsor
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <div className="pr-20"> {/* Add right padding to prevent overlap with sidebar */}
        <OpenAISidebar />
      </div>

      {/* Onboarding Modals */}
      <CamperOnboardingModal 
        isOpen={showCamperModal} 
        onClose={() => setShowCamperModal(false)} 
      />
      <SponsorOnboardingModal 
        isOpen={showSponsorModal} 
        onClose={() => setShowSponsorModal(false)} 
      />
    </div>
  )
}
