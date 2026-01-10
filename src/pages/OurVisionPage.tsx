import React from 'react'
import { motion } from 'framer-motion'
import { Network, Users, Target, TrendingUp, Sparkles, Globe, Building2, Lightbulb, Rocket, Shield } from 'lucide-react'
import { Button } from '../components/ui/button'
import { OpenAISidebar } from '../components/OpenAISidebar'

export const OurVisionPage: React.FC = () => {
  const visionPillars = [
    {
      icon: Network,
      title: 'C.A.M.P. Marketplace Protocol',
      description: 'A decentralized ecosystem where AI agents become tokenized assets, creating direct value for developers and seamless access for sponsors.',
      details: [
        'Tokenized AI "Campers" representing unique digital skills',
        'Direct sponsor-camper marketplace eliminating traditional barriers',
        'Transparent, efficient AI capability trading platform',
        'Innovation cycles reduced from months to days'
      ]
    },
    {
      icon: Users,
      title: 'Founders Club Genesis',
      description: 'Early believers become integral partners in building the foundation of this revolutionary ecosystem.',
      details: [
        'Investment as partnership, not just capital',
        'Founder\'s Exit Liquidity Program ensuring clear path to returns',
        'First sponsors in a marketplace of limitless potential',
        'Aligned success through structured liquidity opportunities'
      ]
    },
    {
      icon: Globe,
      title: 'Decentralized Innovation Future',
      description: 'A blueprint for the next generation of builders, thinkers, and pioneers across all fields of innovation.',
      details: [
        'Open, equitable, and radically innovative infrastructure',
        'Skills marketplaces extending beyond AI to biotech, robotics, arts',
        'Anyone, anywhere can contribute skills and own their creation',
        'Protocol principles applicable to any innovation field'
      ]
    }
  ]

  const innovationAreas = [
    { name: 'Artificial Intelligence', icon: Lightbulb, color: 'text-accent-blue' },
    { name: 'Biotechnology', icon: Building2, color: 'text-accent-green' },
    { name: 'Robotics', icon: Rocket, color: 'text-accent-gold' },
    { name: 'Creative Arts', icon: Sparkles, color: 'text-purple-400' },
    { name: 'DeFi & Blockchain', icon: Shield, color: 'text-cyan-400' },
    { name: 'Space Technology', icon: Target, color: 'text-red-400' }
  ]

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-navy-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold text-text-primary mb-6"
          >
            Our Vision: The Future is <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">Composable</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8"
          >
            We are building more than an AI platform; we are architecting a new ecosystem for innovation. A future where creativity is unlocked, collaboration is borderless, and value is shared fairly among creators, sponsors, and investors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button className="bg-accent-blue hover:bg-accent-blue/80 text-white px-8 py-4 text-lg">
              Join the Revolution
            </Button>
            <Button variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green hover:text-navy-dark px-8 py-4 text-lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
              Three Pillars of Our Revolutionary Vision
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our comprehensive approach to transforming how innovation happens across all industries
            </p>
          </motion.div>

          <div className="space-y-16">
            {visionPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-6">
                      <div className="bg-accent-blue/20 p-4 rounded-xl mr-4">
                        <Icon className="w-8 h-8 text-accent-blue" />
                      </div>
                      <h3 className="text-3xl font-heading font-bold text-text-primary">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="space-y-3">
                      {pillar.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-text-primary">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-navy-deep/50 border border-accent-blue/30 rounded-xl p-8 backdrop-blur-sm">
                      <div className="text-center">
                        <Icon className="w-24 h-24 text-accent-blue mx-auto mb-4" />
                        <h4 className="text-xl font-heading font-semibold text-text-primary mb-2">
                          {pillar.title}
                        </h4>
                        <div className="w-full bg-navy-deep rounded-lg p-4">
                          <div className="flex items-center justify-center space-x-2">
                            <TrendingUp className="w-6 h-6 text-accent-green" />
                            <span className="text-accent-green font-bold">Innovation Accelerated</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="bg-navy-deep/50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
              Beyond AI: The Universal Protocol
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              CoachAI is the first step. Our protocol principles extend far beyond artificial intelligence into every field of human innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {innovationAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-navy-deep/80 border border-white/10 rounded-xl p-6 text-center hover:border-accent-blue/50 transition-colors duration-300"
                >
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${area.color}`} />
                  <h3 className="font-heading font-semibold text-text-primary">
                    {area.name}
                  </h3>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-accent-blue/20 to-accent-green/20 border border-accent-blue/30 rounded-xl p-12 text-center"
          >
            <h2 className="text-4xl font-heading font-bold text-text-primary mb-6">
              Join Us in Building the Future
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              This is more than an investment opportunity – it's a chance to be part of the foundation that will reshape how innovation happens across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent-blue hover:bg-accent-blue/80 text-white px-8 py-4 text-lg">
                Explore Founders Club
              </Button>
              <Button variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green hover:text-navy-dark px-8 py-4 text-lg">
                Contact Our Team
              </Button>
            </div>
            <div className="mt-8 p-6 bg-navy-deep/80 rounded-lg">
              <p className="text-text-primary font-bold text-lg">
                <strong>Join us in building a future that is open, equitable, and radically innovative.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <OpenAISidebar />
    </div>
  )
}
