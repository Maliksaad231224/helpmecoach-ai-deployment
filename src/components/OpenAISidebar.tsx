import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Target, Building, ShoppingCart, Shield, Menu } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export const OpenAISidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  // Get current path for highlighting active item
  const getCurrentActiveItem = () => {
    switch (location.pathname) {
      case '/camp-alpha':
        return 'A'
      case '/camp-rwa-agent':
        return 'R'
      case '/camp-marketplace':
        return 'M'
      case '/camp-defi':
        return 'D'
      default:
        return null // No highlighting for homepage and other pages
    }
  }

  const activeItem = getCurrentActiveItem()

  const campEcosystemItems = [
    {
      letter: 'A',
      title: 'Alpha',
      description: 'AI-driven suite of application design, development and launch tools including marketing, sales, SEO and content management automation.',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/20',
      href: '/camp-alpha'
    },
    {
      letter: 'R',
      title: 'RWA Agent',
      description: 'Real World Asset tokenization and management platform with blockchain technology for fractional ownership.',
      icon: Building,
      color: 'text-accent-blue',
      bgColor: 'bg-accent-blue/20',
      href: '/camp-rwa-agent'
    },
    {
      letter: 'M',
      title: 'Marketplace',
      description: 'Tokenized AI agent marketplace for sponsors and campers with automated revenue sharing and smart contracts.',
      icon: ShoppingCart,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/20',
      href: '/camp-marketplace'
    },
    {
      letter: 'D',
      title: 'DeFi',
      description: 'Multi-collateral stablecoin protocol with AI optimization and automated market making features.',
      icon: Shield,
      color: 'text-accent-gold',
      bgColor: 'bg-accent-gold/20',
      href: '/camp-defi'
    }
  ]

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileSidebar}
        className="fixed top-20 right-6 z-50 md:hidden bg-navy-deep/95 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-navy-light/50 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-200"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5 text-white" />
      </button>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMobileSidebar}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed right-0 top-0 h-full w-80 bg-navy-deep/95 backdrop-blur-md border-l border-white/20 z-50 overflow-hidden md:hidden"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-heading font-semibold text-white">
                  CAMP Ecosystem
                </h2>
                <button
                  onClick={toggleMobileSidebar}
                  className="p-3 rounded-lg bg-navy-light/30 hover:bg-navy-light/50 border border-white/20 hover:border-accent-blue/40 transition-all duration-200 shadow-lg"
                  aria-label="Close navigation menu"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Mobile Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-6">
                  {campEcosystemItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeItem === item.letter
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${
                          isActive ? 'bg-accent-blue/20 border-accent-blue' : 'bg-navy-deep/80 border-navy-light/30'
                        } border rounded-lg p-4 hover:bg-navy-deep/90 hover:border-accent-blue/40 transition-all duration-200 cursor-pointer group`}
                        onClick={() => {
                          if (item.href) {
                            window.location.href = item.href
                            setIsMobileOpen(false)
                          }
                        }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${isActive ? 'bg-accent-blue/30' : item.bgColor} group-hover:scale-105 transition-transform duration-300`}>
                            <Icon className={`w-6 h-6 ${isActive ? 'text-accent-blue' : item.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className={`font-medium ${isActive ? 'text-accent-blue' : 'text-white'} group-hover:text-accent-blue transition-colors duration-300`}>
                                {item.title}
                              </h4>
                              <div className={`w-8 h-8 rounded-full ${isActive ? 'bg-accent-blue/30' : item.bgColor} flex items-center justify-center flex-shrink-0`}>
                                <span className={`text-sm font-bold ${isActive ? 'text-accent-blue' : item.color}`}>
                                  {item.letter}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="text-center">
                  <p className="text-xs text-text-secondary mb-2">
                    Powered by AI Technology
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-accent-blue via-accent-green to-accent-gold rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          width: isExpanded ? 320 : 96,
          transition: {
            type: 'spring',
            stiffness: 400,
            damping: 30
          }
        }}
        className="fixed right-0 top-0 h-full bg-navy-deep/95 backdrop-blur-md border-l border-white/20 z-50 overflow-hidden hidden md:block"
      >
        <div className="px-2 py-6 h-full flex flex-col">
          {/* Header with Toggle Button */}
          <div className="flex items-center justify-between mb-8 pl-0">
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg font-heading font-semibold text-white"
                >
                  CAMP Ecosystem
                </motion.h2>
              )}
            </AnimatePresence>
            
            <button
              onClick={toggleSidebar}
              className="p-3 rounded-lg bg-navy-light/30 hover:bg-navy-light/50 border border-white/20 hover:border-accent-blue/40 transition-all duration-200 group shadow-lg ml-auto mr-4"
              aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            >
              {isExpanded ? (
                <ChevronRight className="w-5 h-5 text-white group-hover:text-accent-blue transition-colors" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-white group-hover:text-accent-blue transition-colors" />
              )}
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                /* Expanded State */
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  className="space-y-4"
                >
                  {campEcosystemItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeItem === item.letter
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${isActive ? 'bg-accent-blue/20 border-accent-blue shadow-lg shadow-accent-blue/20' : 'bg-navy-deep/80 border-navy-light/30'} border-2 rounded-xl p-6 hover:bg-navy-deep/90 hover:border-accent-blue/40 hover:shadow-lg hover:shadow-accent-blue/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
                        onClick={() => {
                          if (item.href) {
                            window.location.href = item.href
                          }
                        }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${isActive ? 'bg-accent-blue/30' : item.bgColor} group-hover:scale-105 transition-transform duration-300`}>
                            <Icon className={`w-6 h-6 ${isActive ? 'text-accent-blue' : item.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className={`font-medium ${isActive ? 'text-accent-blue' : 'text-white'} group-hover:text-accent-blue transition-colors duration-300`}>
                                {item.title}
                              </h4>
                              <div className={`w-8 h-8 rounded-full ${isActive ? 'bg-accent-blue/30' : item.bgColor} flex items-center justify-center flex-shrink-0`}>
                                <span className={`text-sm font-bold ${isActive ? 'text-accent-blue' : item.color}`}>
                                  {item.letter}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              ) : (
                /* Collapsed State - Vertical Icons */
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  className="space-y-8 pt-4"
                >
                  {campEcosystemItems.map((item, index) => {
                    const isActive = activeItem === item.letter
                    return (
                      <motion.div
                        key={item.letter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`w-16 h-16 ${isActive ? 'bg-accent-blue/30 border-accent-blue shadow-lg shadow-accent-blue/20' : `${item.bgColor} border-navy-light/30`} border-2 rounded-xl flex items-center justify-center hover:bg-navy-deep/80 hover:border-accent-blue/40 hover:shadow-lg hover:shadow-accent-blue/10 hover:scale-105 transition-all duration-300 cursor-pointer group relative ml-1`}
                        onClick={() => {
                          if (item.href) {
                            window.location.href = item.href
                          }
                        }}
                      >
                        <span 
                          className={`text-xl font-bold ${isActive ? 'text-accent-blue' : item.color} group-hover:scale-110 transition-transform duration-300 font-heading`}
                          style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 12px currentColor',
                            filter: 'drop-shadow(0 0 10px currentColor)'
                          }}
                        >
                          {item.letter}
                        </span>
                      
                      {/* Tooltip */}
                      <div className="absolute right-full mr-4 px-4 py-3 bg-navy-dark/95 backdrop-blur-sm border border-white/30 rounded-lg text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-20 shadow-xl">
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-xs text-text-secondary mt-1">
                          Click to explore
                        </div>
                        {/* Arrow */}
                        <div className="absolute left-full top-1/2 -translate-y-1/2 w-3 h-3 bg-navy-dark/95 border-r border-b border-white/30 rotate-45 -translate-x-1.5"></div>
                      </div>
                    </motion.div>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-6 pt-4 border-t border-white/20"
              >
                <div className="text-center">
                  <p className="text-xs text-text-secondary mb-2">
                    Powered by AI Technology
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-accent-blue via-accent-green to-accent-gold rounded-full opacity-60"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}
