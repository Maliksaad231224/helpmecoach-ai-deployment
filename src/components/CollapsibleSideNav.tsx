import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Info,
  Network,
  ShoppingCart,
  Shield,
  Target,
  Mail,
  Cpu,
  ChevronRight,
  ChevronDown,
  Home,
  Users,
  Building,
  Zap,
  Bot,
  ChevronLeft,
  MoreHorizontal
} from 'lucide-react'

interface CAMPEcosystemItem {
  name: string
  description: string
  icon: any
  href?: string
}

interface NavigationItem {
  name: string
  href?: string
  icon: any
  external?: boolean
  expandable?: boolean
  campContent?: CAMPEcosystemItem[]
}

export const CollapsibleSideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const location = useLocation()

  const campEcosystemContent = {
    home: [
      {
        name: 'CoachAI',
        description: 'AI-powered executive coaching platform',
        icon: Bot,
        href: '/'
      },
      {
        name: 'ConnectAI',
        description: 'AI-powered networking and collaboration tools',
        icon: Network,
      },
      {
        name: 'CaptureAI',
        description: 'AI-powered content creation and management',
        icon: Zap,
      }
    ],
    ecosystem: [
      {
        name: 'Alpha',
        description: 'CAMP Alpha is an AI-driven suite of application design, development and launch tools including marketing, sales, SEO and content management automation. The Design suite is a full stack prototyping tool to get your idea expressed instantly.',
        icon: Target,
        href: '/camp-alpha'
      },
      {
        name: 'RWA Agent',
        description: 'Real World Asset tokenization and management platform. Leverage blockchain technology to tokenize physical assets, enabling fractional ownership, transparent transactions, and automated compliance through smart contracts.',
        icon: Building,
        href: '/camp-rwa-agent'
      },
      {
        name: 'Marketplace',
        description: 'Tokenized AI agent marketplace for sponsors and campers. A comprehensive platform where AI agents can be bought, sold, and traded, with automated revenue sharing and transparent smart contract execution.',
        icon: ShoppingCart,
        href: '/camp-marketplace'
      },
      {
        name: 'DeFi',
        description: 'Multi-collateral stablecoin protocol with AI optimization. Advanced decentralized finance tools featuring automated market making, yield farming, and intelligent risk management powered by AI algorithms.',
        icon: Shield,
        href: '/camp-defi'
      }
    ],
    founders: [
      {
        name: 'Investment Model',
        description: 'Transparent, profitable social impact investment',
        icon: Target,
      },
      {
        name: 'Founder Benefits',
        description: 'Exclusive bonuses and access for founding members',
        icon: Users,
      }
    ]
  }

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/', icon: Home, expandable: true, campContent: campEcosystemContent.home },
    { name: 'Founders Club', href: '/founders-club', icon: Users, expandable: true, campContent: campEcosystemContent.founders },
    { name: 'CAMP Ecosystem', href: '/camp-ecosystem', icon: Network, expandable: true, campContent: campEcosystemContent.ecosystem },
    { name: 'Our Vision', href: '/our-vision', icon: Target },
    { name: 'Our AI Technology', href: '/our-ai-technology', icon: Cpu },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  const toggleSidebar = () => setIsOpen(!isOpen)
  const toggleCollapse = () => setIsCollapsed(!isCollapsed)
  
  const toggleExpand = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    )
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-3 bg-navy-deep/80 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-navy-deep transition-colors duration-200"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className={`fixed right-0 top-0 h-full bg-navy-deep/95 backdrop-blur-md border-l border-white/20 z-40 overflow-y-auto transition-all duration-300 ${
              isCollapsed ? 'w-16' : 'w-80'
            }`}
          >
            <div className={`${isCollapsed ? 'p-3 pt-20' : 'p-6 pt-20'}`}>
              {/* Logo Section */}
              <div className={`flex items-center mb-6 ${isCollapsed ? 'justify-center' : ''}`}>
                <img 
                  src="/images/COACHAI SMALL LOGO.png" 
                  alt="CoachAI Logo" 
                  className="w-10 h-10 object-contain"
                />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden ml-3"
                    >
                      <h2 className="text-lg font-heading font-semibold text-white">
                        CoachAI Platform
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Show full navigation when expanded, only A,R,M,D when collapsed */}
              {!isCollapsed && (
                <div className="space-y-2">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.href
                    const isExpanded = expandedItems.includes(item.name)
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        {/* Main Item */}
                        <div
                          className={`group relative flex items-center p-4 rounded-lg transition-all duration-250 cursor-pointer ${
                            isActive
                              ? 'bg-navy-light/50 border border-accent-blue/30 text-accent-blue'
                              : 'bg-transparent border border-transparent hover:bg-navy-light/50 hover:border-accent-blue/30'
                          }`}
                          onClick={() => {
                            if (item.expandable && item.campContent) {
                              toggleExpand(item.name)
                            } else if (item.href) {
                              if (item.external) {
                                window.open(item.href, '_blank')
                              } else {
                                toggleSidebar()
                              }
                            }
                          }}
                        >
                          <Icon className={`w-5 h-5 flex-shrink-0 mr-4 ${
                            isActive
                              ? 'text-accent-blue'
                              : 'text-text-secondary group-hover:text-accent-blue'
                          }`} />
                          
                          <div className="overflow-hidden flex-1 flex items-center justify-between">
                            {item.href ? (
                              <Link
                                to={item.href}
                                className={`font-medium ${
                                  isActive
                                    ? 'text-accent-blue'
                                    : 'text-text-secondary group-hover:text-accent-blue'
                                }`}
                                onClick={(e) => {
                                  if (!item.expandable) {
                                    toggleSidebar()
                                  } else {
                                    e.preventDefault()
                                  }
                                }}
                              >
                                {item.name}
                              </Link>
                            ) : (
                              <span className={`font-medium ${
                                isActive
                                  ? 'text-accent-blue'
                                  : 'text-text-secondary group-hover:text-accent-blue'
                              }`}>
                                {item.name}
                              </span>
                            )}
                            
                            {item.expandable && item.campContent && (
                              <motion.div
                                animate={{ rotate: isExpanded ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight className={`w-4 h-4 ${
                                  isActive
                                    ? 'text-accent-blue'
                                    : 'text-text-secondary group-hover:text-accent-blue'
                                }`} />
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* Expandable Content */}
                        <AnimatePresence>
                          {isExpanded && item.campContent && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4 mt-2 space-y-2 overflow-hidden"
                            >
                              {item.campContent.map((subItem, subIndex) => {
                                const SubIcon = subItem.icon
                                return (
                                  <motion.div
                                    key={subItem.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * subIndex }}
                                    className="bg-navy-deep/60 border border-navy-light/30 rounded-lg p-3 hover:bg-navy-deep/80 hover:border-accent-blue/30 transition-all cursor-pointer"
                                    onClick={() => {
                                      if (subItem.href) {
                                        if (subItem.href.startsWith('http')) {
                                          window.open(subItem.href, '_blank')
                                        } else {
                                          window.location.href = subItem.href
                                        }
                                        toggleSidebar()
                                      }
                                    }}
                                  >
                                    <div className="flex items-start space-x-3">
                                      <div className="p-2 rounded-lg bg-accent-blue/20">
                                        <SubIcon className="w-4 h-4 text-accent-blue" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-medium text-text-primary text-sm mb-1">{subItem.name}</h4>
                                        <p className="text-xs text-text-secondary leading-relaxed">{subItem.description}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                )
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              )}

              {/* Collapsed State: Show only A,R,M,D icons vertically */}
              {isCollapsed && (
                <div className="space-y-3">
                  {/* Expand Toggle at Top */}
                  <button
                    onClick={toggleCollapse}
                    className="w-full flex items-center justify-center p-3 text-text-secondary hover:text-accent-blue transition-colors rounded-lg hover:bg-navy-light/50 group relative mb-4"
                    onMouseEnter={() => setHoveredItem('toggle')}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <ChevronRight className="w-4 h-4" />
                    {hoveredItem === 'toggle' && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-full ml-2 px-3 py-2 bg-navy-dark border border-white/20 rounded-lg text-sm text-white whitespace-nowrap z-50 shadow-lg"
                      >
                        Expand Menu
                      </motion.div>
                    )}
                  </button>
                  
                  {/* Vertical A,R,M,D Icons */}
                  {campEcosystemContent.ecosystem.map((item, index) => {
                    const letter = item.name.charAt(0).toUpperCase()
                    const colors = [
                      { text: 'text-blue-600', bg: 'bg-blue-600/20' },
                      { text: 'text-accent-blue', bg: 'bg-accent-blue/20' },
                      { text: 'text-accent-green', bg: 'bg-accent-green/20' },
                      { text: 'text-accent-gold', bg: 'bg-accent-gold/20' }
                    ]
                    const color = colors[index] || colors[0]
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className={`aspect-square ${color.bg} border border-navy-light/30 rounded-lg flex items-center justify-center hover:bg-navy-deep/80 hover:border-accent-blue/30 transition-all cursor-pointer group relative`}
                        onClick={() => {
                          if (item.href) {
                            window.location.href = item.href
                            toggleSidebar()
                          }
                        }}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className={`text-lg font-bold ${color.text} group-hover:scale-110 transition-transform duration-200 font-heading`}
                          style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 10px currentColor',
                            filter: 'drop-shadow(0 0 8px currentColor)'
                          }}
                        >
                          {letter}
                        </span>
                        
                        {/* Tooltip for collapsed icons */}
                        {hoveredItem === item.name && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-full ml-2 px-3 py-2 bg-navy-dark border border-white/20 rounded-lg text-sm text-white whitespace-nowrap z-50 shadow-lg max-w-xs"
                          >
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-xs text-text-secondary mt-1 leading-tight">
                              {item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              )}
              
              {!isCollapsed && (
                <div className="mt-6 pt-6 border-t border-white/20">
                  <button
                    onClick={toggleCollapse}
                    className="w-full flex items-center justify-center p-3 text-text-secondary hover:text-accent-blue transition-colors rounded-lg hover:bg-navy-light/50 group relative"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    <span className="text-sm">Collapse Menu</span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
