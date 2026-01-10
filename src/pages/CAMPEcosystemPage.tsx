import React from 'react'
import { motion } from 'framer-motion'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { Building, Network, Coins, ArrowRight, Sparkles, TrendingUp, Shield, Users } from 'lucide-react'
import { Button } from '../components/ui/button'

export const CAMPEcosystemPage: React.FC = () => {
  const ecosystemComponents = [
    {
      title: 'CAMP RWA Agent',
      subtitle: 'Real World Asset Tokenization Platform',
      description: 'Revolutionary platform that bridges traditional real estate with blockchain technology, enabling fractional ownership and transparent asset management.',
      image: '/images/innovation-hub-2.png',
      features: [
        'Property tokenization and fractionalization',
        'Transparent blockchain-based ownership records',
        'Automated rental income distribution',
        'AI-powered property valuation and analytics',
      ],
      icon: Building,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'CAMP Marketplace',
      subtitle: 'Tokenized AI Agent Marketplace',
      description: 'CAMP Marketplace is a fork of Virtuals Protocol tailored for a sponsor–camper marketplace, where qualified campers are represented as tokenized AI agents that sponsors can discover, evaluate, and fund, alongside services and micro‑SaaS products built by the agency.',
      image: '/images/luxury-tech-camp-common-area.png',
      features: [
        'Tokenized AI agent representation',
        'CAMP-paired liquidity model',
        'Autonomous credential showcasing',
        'Onchain commerce capabilities',
      ],
      icon: Network,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'CAMP DeFi',
      subtitle: 'Next-Generation Multi-Collateral Protocol',
      description: 'CAMP DeFi is a next-generation multi-collateral stablecoin protocol featuring USDca, backed by WBTC, USDC, USDT, ETH, and WSOL. The protocol combines AI-powered optimization through Lab Agent AI, enterprise-grade security, and a massive 1 Billion USD insurance fund (GOLDBACKBOND-secured).',
      image: '/images/goldbackbond_logo_hd.png',
      features: [
        'Multi-collateral USDca stablecoin',
        'AI-powered Lab Agent optimization',
        '$1B USD GOLDBACKBOND insurance fund',
        'Multi-chain support (24 networks)',
      ],
      icon: Coins,
      color: 'from-amber-500 to-orange-600',
    },
  ]

  const stats = [
    { label: 'Market Opportunity', value: '$86B', icon: TrendingUp },
    { label: 'Projected Camps', value: '1,000', icon: Building },
    { label: 'Community Growth', value: 'Scaling', icon: Users },
    { label: 'Success Rate', value: '95%', icon: Sparkles },
  ]

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Header */}
        <section className="bg-navy-gradient py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-heading font-bold text-text-primary mb-6"
            >
              CAMP Ecosystem
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto"
            >
              A comprehensive platform combining Real World Assets, AI-powered education, 
              and blockchain innovation to create the world's largest tech incubator network.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-navy-deep/50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-accent-blue mx-auto mb-3" />
                    <div className="text-3xl font-heading font-bold text-text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tech Ecosystem Visualization */}
        <section className="py-20 px-6 bg-navy-deep/30">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-heading font-bold text-text-primary mb-8"
            >
              Technology Ecosystem Network
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative mb-16"
            >
              <img
                src="/images/tech-ecosystem-with-coachai-logo.png"
                alt="CAMP Technology Ecosystem with CoachAI Logo"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent rounded-lg" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary max-w-3xl mx-auto"
            >
              Our integrated ecosystem connects AI coaching, real estate tokenization, 
              DeFi protocols, and marketplace solutions to create a comprehensive 
              platform for the future of work and investment.
            </motion.p>
          </div>
        </section>

        {/* Ecosystem Components */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            {ecosystemComponents.map((component, index) => {
              const Icon = component.icon
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${component.color} text-white mb-6`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{component.title}</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                      {component.subtitle}
                    </h2>
                    <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                      {component.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {component.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-accent-blue rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 transition-all duration-200">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <div className="relative">
                      <img
                        src={component.image}
                        alt={component.title}
                        className="w-full h-80 object-cover rounded-xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-6">
                Ready to Be Part of the Ecosystem?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Join the CAMP ecosystem and help build the future of tech education and real world asset innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 text-lg px-8 py-4 transition-all duration-200">
                  Join Founders Club
                </Button>
                <Button variant="outline" className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white text-lg px-8 py-4">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <OpenAISidebar />
    </div>
  )
}
