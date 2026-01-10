import React from 'react'
import { motion } from 'framer-motion'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { Crown, Star, Diamond, Check, TrendingUp, Users, Shield, AlertTriangle, Clock, Award, Zap, Building } from 'lucide-react'
import { Button } from '../components/ui/button'

export const FoundersClubPage: React.FC = () => {
  const tiers = [
    {
      name: 'Silver Founder',
      price: '$9,997',
      icon: Star,
      gradient: 'from-slate-500 to-slate-600',
      features: [
        '9% Bi-Annual Rewards (18% APR)',
        'Equity ownership in AI tech platform',
        'Quarterly strategic briefings',
        'Early access to CAMP developments',
        'Community forum participation',
        'Tax benefits through 501(c)3 structure',
        'Named recognition for contributions',
      ],
      bonuses: [
        'VIP access to all launch events ($2,500 value)',
        'Exclusive founder merchandise package ($500 value)',
      ],

    },
    {
      name: 'Gold Founder',
      price: '$49,997',
      icon: Crown,
      gradient: 'from-amber-500 to-yellow-600',
      features: [
        '9% Bi-Annual Rewards (18% APR)',
        'Enhanced equity ownership position',
        'Governance board seat with voting rights',
        'Monthly founder consultations',
        'Priority investment opportunities',
        'Direct founder access and mentorship',
        'Smart contract transparency guarantees',
        'VIP access to strategic decisions',
      ],
      bonuses: [
        'Private founder retreat invitation ($5,000 value)',
        'One-on-one strategy sessions ($3,000 value)',
        'Exclusive tech camp preview access ($2,000 value)',
      ],

    },
    {
      name: 'Platinum Founder',
      price: '$99,997',
      icon: Diamond,
      gradient: 'from-purple-500 to-purple-600',
      features: [
        '9% Bi-Annual Rewards (18% APR)',
        'Maximum equity ownership tier',
        'Executive advisory board position',
        'Weekly founder strategy meetings',
        'Co-investment opportunities access',
        'Named unit recognition (buildings/facilities)',
        'Legacy founder status permanently',
        'Ultimate governance voting power',
        'Direct profit-sharing mechanisms',
      ],
      bonuses: [
        'Lifetime VIP access to all CAMP properties ($25,000 value)',
        'Personal tech camp naming rights ($15,000 value)',
        'Annual founder summit hosting ($10,000 value)',
        'Executive mentorship program access ($7,500 value)',
      ],


    },
  ]

  const benefits = [
    {
      title: 'Revolutionary AI Ecosystem',
      description: 'Tap into the most innovative AI-powered tech ecosystem ever conceived',
      icon: Zap,
    },
    {
      title: 'Proven Business Model',
      description: 'Based on successful frameworks with transparent smart contract accounting',
      icon: TrendingUp,
    },
    {
      title: 'Mission-Driven Impact',
      description: 'Change lives while building wealth through tech education innovation',
      icon: Building,
    },
  ]

  const guaranteeFeatures = [
    'Reserved portion of future funding rounds for early investors',
    'Structured revenue sharing aligned with platform milestones',
    'Priority access to acquisition or IPO liquidity events',
    'Transparent smart contract enforcement of liquidity terms',
  ]

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Urgency Bar */}
        <div className="bg-accent-gold text-navy-dark py-3 px-6 text-center font-bold">
          <div className="flex items-center justify-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>After the 10M is raised the $10M Founders Treasury is closed • THIS ONE-TIME OFFER ENDS AT BETA LAUNCH</span>
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-navy-gradient py-20 px-6 relative overflow-hidden">
          {/* FOUNDER Silhouette Background */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5">
            <div className="text-[400px] font-heading font-black text-white whitespace-nowrap">
              FOUNDER
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-heading font-bold text-text-primary mb-6"
            >
              Become a Founding Architect of the AI Revolution
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8"
            >
              The world is changing. AI is the new frontier. This is your one and only chance to get in on the ground floor of the most revolutionary tech education ecosystem ever created. Don't be the one saying "I could have, I should have."
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-accent-blue/20 border border-accent-blue rounded-lg p-6 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <TrendingUp className="w-5 h-5 text-accent-blue" />
                <span className="text-accent-blue font-semibold text-lg">EXCLUSIVE FOUNDERS WINDOW</span>
              </div>
              <p className="text-text-primary text-center leading-relaxed">
                This exclusive offer is available until the Founders Treasury reaches its $10 million funding goal. 
                Upon completion, the Founders Club will evolve into the Sponsors Club, with a new set of benefits and opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-navy-deep/50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-accent-blue/30 rounded-lg p-6 text-center"
                  >
                    <Icon className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Founding Tiers */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Choose Your Founding Sponsor Level
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Three exclusive tiers designed for visionary investors ready to shape the future
              </p>

            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {tiers.map((tier, index) => {
                const Icon = tier.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="relative"
                  >

                    <div className={`bg-gradient-to-br ${tier.gradient} rounded-xl p-8 h-full border-4 border-transparent relative overflow-hidden`}>

                      <div className="flex items-center justify-center mb-6">
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-3xl font-heading font-bold text-white mb-2 text-center">{tier.name}</h3>
                      <div className="text-5xl font-heading font-bold text-white mb-6 text-center">{tier.price}</div>
                      
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-white border-b border-white/30 pb-2">Core Benefits:</h4>
                        {tier.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 mr-3 flex-shrink-0 text-white mt-0.5" />
                            <span className="text-sm text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-white border-b border-white/30 pb-2">Exclusive Bonuses:</h4>
                        {tier.bonuses.map((bonus, bonusIndex) => (
                          <div key={bonusIndex} className="flex items-start">
                            <Award className="w-5 h-5 mr-3 flex-shrink-0 text-accent-gold mt-0.5" />
                            <span className="text-sm text-white/90">{bonus}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center mb-6">
                        <Button className="w-full bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 font-bold py-6 text-lg transition-all duration-200 min-h-[80px] flex flex-col items-center justify-center space-y-1">
                          <span className="text-lg font-bold leading-tight">Sponsor Now</span>
                          <span className="text-lg font-bold leading-tight">{tier.name}</span>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            {/* Consultation Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <div className="bg-navy-deep/80 border border-accent-blue/30 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-text-secondary text-lg leading-relaxed">
                  For larger contributions, select Platinum and schedule a consultation.
                  <br />
                  <a href="/contact" className="text-accent-blue hover:text-accent-blue/80 underline font-semibold">
                    Book a call
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Stacking Section */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                What you get:
                An Unbeatable Value Proposition.
              </h2>
              <p className="text-xl text-text-secondary">
                Your investment unlocks benefits worth significantly more than your contribution
              </p>
            </motion.div>

            <div className="bg-navy-deep/80 rounded-xl p-8 border border-accent-blue/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">Financial Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">9% Bi-Annual Rewards (18% APR)</span>
                      <span className="text-accent-green font-bold">Fixed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Equity Ownership Position</span>
                      <span className="text-accent-green font-bold">Invaluable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Governance Rights & Board Seat</span>
                      <span className="text-accent-green font-bold">$50,000+ value</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Tax Deduction: 100%</span>
                      <span className="text-accent-green font-bold">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Smart Contract Transparency</span>
                      <span className="text-accent-green font-bold">Priceless</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">Exclusive Access</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">VIP Event Access (Lifetime)</span>
                      <span className="text-accent-green font-bold">$25,000+ value</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Direct Founder Access</span>
                      <span className="text-accent-green font-bold">$15,000+ value</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Named Recognition/Legacy</span>
                      <span className="text-accent-green font-bold">Priceless</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Future opportunities</span>
                      <span className="text-accent-green font-bold">Unlimited potential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-accent-green/20 border-2 border-accent-green rounded-xl p-8 text-center"
            >
              <Shield className="w-16 h-16 text-accent-green mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                Founder's Exit Liquidity Program
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Our commitment to early investors goes beyond building a revolutionary platform. The Founder's Exit Liquidity Program provides a clear path to returns:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guaranteeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-6 h-6 text-accent-green mr-3 flex-shrink-0" />
                    <span className="text-text-primary font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-navy-deep/80 rounded-lg">
                <p className="text-accent-green font-bold text-lg">
                  🚀 By earmarking resources for founder liquidity, we ensure those who believed in our vision from day one have a defined opportunity for returns as the platform achieves key milestones. This program aligns our success directly with your financial outcome, creating a true partnership for long-term growth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-navy-deep/50 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
                Join the Ranks of Visionary Early Investors
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                History shows that those who invest early in revolutionary platforms like OpenAI, Palantir, and SpaceX reap extraordinary rewards. The CAMP ecosystem represents the same level of groundbreaking opportunity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-navy-deep/80 rounded-lg p-6">
                  <h3 className="font-bold text-text-primary mb-2">Early OpenAI Investors</h3>
                  <p className="text-accent-green font-bold">10,000%+ Returns</p>
                </div>
                <div className="bg-navy-deep/80 rounded-lg p-6">
                  <h3 className="font-bold text-text-primary mb-2">Tesla Pre-IPO</h3>
                  <p className="text-accent-green font-bold">50,000%+ Returns</p>
                </div>
                <div className="bg-navy-deep/80 rounded-lg p-6">
                  <h3 className="font-bold text-text-primary mb-2">Google Series A</h3>
                  <p className="text-accent-green font-bold">16,000%+ Returns</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-6">
                This Is Your Only Chance
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                The AI revolution is happening now. The CAMP ecosystem is launching. The founding positions are filling fast. Don't let this moment pass you by.
              </p>
              <div className="bg-accent-gold/20 border border-accent-gold rounded-lg p-6 mb-8">
                <p className="text-accent-gold font-bold text-lg">
                  ⚠️ WARNING: Once beta launch completes, these founding positions will NEVER be available again at these prices.
                </p>
              </div>
              <Button className="bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 text-xl px-12 py-6 font-bold transition-all duration-200">
                Secure My Founding Position Now
              </Button>
              <p className="text-sm text-text-secondary mt-4">
                Limited time offer • Exclusive until $10M Founders treasury goal is reached
              </p>
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
