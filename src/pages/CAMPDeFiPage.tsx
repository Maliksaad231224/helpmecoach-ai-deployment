import React from 'react'
import { motion } from 'framer-motion'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { 
  Coins, 
  Shield, 
  Network, 
  TrendingUp, 
  Bot, 
  Globe, 
  Lock, 
  Zap, 
  BarChart3,
  Target,
  Layers,
  CheckCircle,
  ArrowUpRight,
  DollarSign,
  Gauge
} from 'lucide-react'
import { Button } from '../components/ui/button'

export const CAMPDeFiPage: React.FC = () => {
  const features = [
    {
      title: 'USDca Multi-Collateral Stablecoin',
      description: 'Revolutionary stablecoin backed by diversified assets including WBTC, USDC, USDT, ETH, and WSOL. Built on Ethena-based protocol architecture for maximum stability and capital efficiency.',
      icon: Coins,
      value: '5 Assets',
      gradient: 'from-blue-500 to-blue-600',
      details: ['Multi-asset backing', 'Ethena protocol base', 'Delta-neutral strategies', 'Real-time rebalancing']
    },
    {
      title: 'Delta-Neutral Hedging',
      description: 'Advanced hedging strategies that maintain stable asset value regardless of market volatility through sophisticated derivatives and yield farming protocols.',
      icon: Target,
      value: 'Risk-Free',
      gradient: 'from-emerald-500 to-emerald-600',
      details: ['Market-neutral positions', 'Automated hedging', 'Volatility protection', 'Stable yields']
    },
    {
      title: 'AI Lab Agent Optimization',
      description: 'Intelligent AI system that continuously optimizes collateral ratios, yield strategies, and risk management across all supported protocols and chains.',
      icon: Bot,
      value: 'AI-Powered',
      gradient: 'from-purple-500 to-purple-600',
      details: ['Real-time optimization', 'Risk assessment', 'Strategy automation', '24/7 monitoring']
    },
    {
      title: 'Cross-Chain Infrastructure',
      description: 'Deploy seamlessly across 24 blockchain networks with unified liquidity and optimized yield opportunities through LayerZero and Base Chain integration.',
      icon: Network,
      value: '24 Networks',
      gradient: 'from-orange-500 to-red-600',
      details: ['LayerZero integration', 'Base Chain support', 'Unified liquidity', 'Cross-chain yield']
    },
    {
      title: 'GOLDBACKBOND Protection',
      description: 'Enterprise-grade security with $1 Billion protection fund providing comprehensive coverage for smart contracts, oracle failures, and market volatility.',
      icon: Shield,
      value: '$1B USD',
      gradient: 'from-yellow-500 to-amber-600',
      details: ['100% smart contract coverage', '100% oracle protection', '85% volatility coverage', '84.7% fund utilization']
    },
    {
      title: 'Institutional DeFi Integration',
      description: 'Seamless integration with leading DeFi protocols including Aave, Compound, Uniswap, Morpho, and Aerodrome for optimized yield farming.',
      icon: Layers,
      value: '5+ Protocols',
      gradient: 'from-cyan-500 to-blue-600',
      details: ['Aave lending', 'Compound yield', 'Uniswap liquidity', 'Morpho optimization']
    }
  ]

  const stats = [
    { label: 'Average APR', value: '18%', icon: TrendingUp, description: 'Optimized yield through AI strategies' },
    { label: 'USDca Supply', value: '24.8M', icon: DollarSign, description: 'Multi-collateral stablecoin supply' },
    { label: 'Protection Fund', value: '$1B', icon: Shield, description: 'GOLDBACKBOND-secured protection' },
    { label: 'Active Strategies', value: '19', icon: BarChart3, description: 'AI-powered optimization strategies' },

  ]

  const benefits = [
    {
      title: 'Enterprise-Grade Security',
      description: 'GOLDBACKBOND-secured infrastructure with institutional-level protection and audit compliance.',
      icon: Shield,
    },
    {
      title: 'Proven Treasury Management',
      description: 'High Yield optimization Strategies with 6 years of 3rd party Audited positive performance.',
      icon: Zap,
    },
    {
      title: 'Universal Access',
      description: 'Serving everyone from individual traders to enterprise clients with scalable infrastructure.',
      icon: Globe,
    },
  ]

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        {/* Header with Logo Silhouette */}
        <section className="bg-navy-gradient py-20 px-6 relative overflow-hidden">
          {/* Logo Silhouette Background */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5">
            <div className="text-[400px] font-heading font-black text-white whitespace-nowrap">
              CAMP
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-heading font-bold text-text-primary mb-6"
            >
              CAMP DeFi <span className="text-accent-blue">Elite</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
            >
              Revolutionary multi-collateral stablecoin protocol featuring USDca stable asset, 
              Ethena-based delta-neutral hedging, AI-powered optimization, and enterprise-grade protection. 
              Experience the future of institutional DeFi with 18% average APR and comprehensive risk protection.
            </motion.p>
          </div>
        </section>

        {/* 4-Box Statistics Grid */}
        <section className="bg-navy-deep/50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-navy-light/50 rounded-xl p-8 text-center hover:border-accent-blue/30 transition-all duration-300 min-h-[160px] flex flex-col justify-center"
                  >
                    <Icon className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                    <div className="text-4xl font-heading font-bold text-text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg text-text-secondary font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-text-secondary/70">{stat.description}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-navy-deep/80 rounded-xl p-8 border border-accent-blue/20 mb-8"
            >
              <h2 className="text-3xl font-heading font-semibold text-text-primary mb-6">
                USDca: Next-Generation Stablecoin Architecture
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    USDca represents a breakthrough in stablecoin technology, built on proven Ethena protocol architecture with advanced delta-neutral hedging strategies. Our multi-collateral approach provides unparalleled stability and capital efficiency.
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-green mr-3" />
                      Ethena-based protocol foundation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-green mr-3" />
                      Delta-neutral market positioning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-green mr-3" />
                      24.8M USDca circulating supply
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-green mr-3" />
                      Multi-asset collateral backing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Technical Specifications</h3>
                  <div className="bg-navy-light/30 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Collateral Assets:</span>
                      <span className="text-text-primary font-medium">WBTC, USDC, USDT, ETH, WSOL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Insurance Coverage:</span>
                      <span className="text-accent-green font-medium">100% Smart Contract</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Oracle Protection:</span>
                      <span className="text-accent-green font-medium">100% Coverage</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Volatility Protection:</span>
                      <span className="text-accent-green font-medium">70% Coverage</span>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>

            {/* Delta-Neutral Strategy Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-4 flex items-center">
                <Target className="w-8 h-8 text-emerald-400 mr-3" />
                Delta-Neutral Hedging Excellence
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Our sophisticated delta-neutral strategies ensure stable returns regardless of market conditions. 
                By maintaining balanced long and short positions across multiple assets, USDca delivers consistent 
                performance while preserving capital through comprehensive risk management.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Risk Neutralization</h4>
                  <p className="text-text-secondary text-sm">Market volatility protection through balanced positioning</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Stable Yields</h4>
                  <p className="text-text-secondary text-sm">Consistent 18% APR through optimized strategies</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Bot className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">AI Automation</h4>
                  <p className="text-text-secondary text-sm">Continuous optimization through Lab Agent AI</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Protocol Features
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Enterprise-grade DeFi infrastructure built for scale, security, and optimal returns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-navy-light/50 rounded-xl p-8 hover:border-accent-blue/30 transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${feature.gradient} text-white`}>
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{feature.title}</span>
                      </div>
                      <span className="text-accent-blue font-bold text-lg">{feature.value}</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    {feature.details && (
                      <div className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <ArrowUpRight className="w-4 h-4 text-accent-blue mr-2 flex-shrink-0" />
                            <span className="text-text-secondary">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-navy-deep/50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                Why Choose CAMP DeFi?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 text-center"
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

        {/* Ethena Integration Section */}
        <section className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-t border-purple-500/20 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                Powered by <span className="text-purple-400">Ethena Protocol</span> & <span className="text-blue-400">LayerZero</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-4xl mx-auto">
                Built on battle-tested infrastructure with seamless cross-chain capabilities and institutional-grade security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-navy-deep/80 border border-purple-500/30 rounded-lg p-6 text-center"
              >
                <Network className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">Ethena Foundation</h3>
                <p className="text-text-secondary text-sm">Proven protocol architecture ensuring stability and scalability</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-navy-deep/80 border border-blue-500/30 rounded-lg p-6 text-center"
              >
                <Layers className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">LayerZero Bridge</h3>
                <p className="text-text-secondary text-sm">Seamless asset movement across 24 blockchain networks</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-navy-deep/80 border border-orange-500/30 rounded-lg p-6 text-center"
              >
                <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">Base Chain Native</h3>
                <p className="text-text-secondary text-sm">Optimized for Base ecosystem with low fees and fast transactions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-navy-deep/80 border border-emerald-500/30 rounded-lg p-6 text-center"
              >
                <Bot className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">Morpho & Aave</h3>
                <p className="text-text-secondary text-sm">Advanced yield optimization through leading DeFi protocols</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Experience the Future of <span className="text-accent-blue">Institutional DeFi</span>
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
                Join users earning stable yields through USDca's delta-neutral strategies. 
                Start with no minimum deposit and experience enterprise-grade DeFi security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => window.open('https://campdefi.app', '_blank')}
                >
                  Launch App - Earn 18% APR
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white text-lg px-8 py-4"
                  onClick={() => window.open('https://docs.campdefi.app', '_blank')}
                >
                  Technical Documentation
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-blue">18%</div>
                  <div className="text-sm text-text-secondary">Average APR</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-green">$1B</div>
                  <div className="text-sm text-text-secondary">Protection Fund</div>
                </div>
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
