import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Network, Building, ArrowRight, Sparkles, Shield, TrendingUp, ChevronRight, Users, Home, Zap, Bot, ShoppingCart, Target, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from './ui/button'

export const CAMPSidebar: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [isCAMPCollapsed, setIsCAMPCollapsed] = useState(true)

  const campEcosystemItems = [
    {
      letter: 'A',
      title: 'Alpha',
      description: 'CAMP Alpha is an AI-driven suite of application design, development and launch tools including marketing, sales, SEO and content management automation. The Design suite is a full stack prototyping tool to get your idea expressed instantly. The CRM, CMS and Email management systems are simple setup launch tools to get your application to marketplace creating sales and raising capital fast and on autopilot so you can keep building.',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/20',
      href: '/camp-alpha'
    },
    {
      letter: 'R',
      title: 'RWA Agent',
      description: 'Real World Asset tokenization and management platform. Leverage blockchain technology to tokenize physical assets, enabling fractional ownership, transparent transactions, and automated compliance through smart contracts for real estate, commodities, and other tangible assets.',
      icon: Building,
      color: 'text-accent-blue',
      bgColor: 'bg-accent-blue/20',
      href: '/camp-rwa-agent'
    },
    {
      letter: 'M',
      title: 'Marketplace',
      description: 'Tokenized AI agent marketplace for sponsors and campers. A comprehensive platform where AI agents can be bought, sold, and traded with automated revenue sharing, transparent smart contract execution, and community-driven governance for sustainable ecosystem growth.',
      icon: ShoppingCart,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/20',
      href: '/camp-marketplace'
    },
    {
      letter: 'D',
      title: 'DeFi',
      description: 'Multi-collateral stablecoin protocol with AI optimization. Advanced decentralized finance tools featuring automated market making, yield farming, intelligent risk management, and algorithmic trading strategies powered by cutting-edge AI technology.',
      icon: Shield,
      color: 'text-accent-gold',
      bgColor: 'bg-accent-gold/20',
      href: '/camp-defi'
    }
  ]

  const toggleExpand = (itemTitle: string) => {
    setExpandedItems(prev => 
      prev.includes(itemTitle) 
        ? prev.filter(title => title !== itemTitle)
        : [...prev, itemTitle]
    )
  }

  const features = [
    {
      title: 'AI-Powered Insights',
      description: 'Advanced analytics for investment decisions',
      icon: Sparkles,
    },
    {
      title: 'Blockchain Security',
      description: 'Transparent and immutable transaction records',
      icon: Shield,
    },
    {
      title: 'Proven Business Model',
      description: 'Smart contract transparency & guarantees',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="w-80 bg-navy-deep/80 border-l border-navy-light/50 backdrop-blur-sm p-6 space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            CAMP Ecosystem
          </h3>
          <button
            onClick={() => setIsCAMPCollapsed(!isCAMPCollapsed)}
            className="p-2 rounded-lg bg-navy-deep/60 border border-navy-light/30 hover:bg-navy-deep/80 hover:border-accent-blue/30 transition-all"
          >
            {isCAMPCollapsed ? (
              <ChevronDown className="w-4 h-4 text-text-secondary" />
            ) : (
              <ChevronUp className="w-4 h-4 text-text-secondary" />
            )}
          </button>
        </div>
        
        <AnimatePresence mode="wait">
          {isCAMPCollapsed ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-4 gap-3"
            >
              {campEcosystemItems.map((item, index) => (
                <motion.div
                  key={item.letter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="aspect-square bg-navy-deep/60 border border-navy-light/30 rounded-lg flex items-center justify-center hover:bg-navy-deep/80 hover:border-accent-blue/30 transition-all cursor-pointer group"
                  onClick={() => {
                    if (item.href) {
                      window.location.href = item.href
                    }
                  }}
                >
                  <span className={`text-2xl font-bold ${item.color} group-hover:scale-110 transition-transform duration-200 font-heading`}
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 10px currentColor',
                      filter: 'drop-shadow(0 0 8px currentColor)'
                    }}
                  >
                    {item.letter}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {campEcosystemItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/60 border border-navy-light/30 rounded-lg p-4 hover:bg-navy-deep/80 hover:border-accent-blue/30 transition-all cursor-pointer"
                    onClick={() => {
                      if (item.href) {
                        window.location.href = item.href
                      }
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${item.bgColor}`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-text-primary">{item.title}</h4>
                          <div className={`w-6 h-6 rounded-full ${item.bgColor} flex items-center justify-center`}>
                            <span className={`text-xs font-bold ${item.color}`}>{item.letter}</span>
                          </div>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div>
        <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
          Key Features
        </h3>
        <div className="space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + 0.1 * index }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-navy-deep/60 transition-colors"
              >
                <Icon className="w-4 h-4 text-accent-blue" />
                <div>
                  <div className="font-medium text-text-primary text-sm">{feature.title}</div>
                  <div className="text-xs text-text-secondary">{feature.description}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-accent-blue to-accent-green text-white rounded-xl p-6 text-center"
      >

        <Button className="w-full bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60">
          Explore Opportunities
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  )
}
