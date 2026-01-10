import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Alpha', path: '/camp-alpha' },
    { name: 'DeFi', path: '/camp-defi' },
    { name: 'RWA', path: '/camp-rwa-agent' },
    { name: 'Marketplace', path: '/camp-marketplace' },
    { name: 'Founders', path: '/founders-club' },
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ]

  const socialMedia = [
    { name: 'X (Twitter)', url: 'https://twitter.com/coachai', icon: 'X' },
    { name: 'Instagram', url: 'https://instagram.com/coachai', icon: 'Instagram' },
    { name: 'Facebook', url: 'https://facebook.com/coachai', icon: 'Facebook' },
    { name: 'Telegram', url: 'https://t.me/coachai', icon: 'Telegram' },
  ]

  const renderSocialIcon = (icon: string) => {
    const iconProps = "w-5 h-5"
    switch (icon) {
      case 'X':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        )
      case 'Instagram':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.447-3.37-1.193l3.37-3.37c.746.746 1.193 1.297 1.193 2.281s-.447 1.535-1.193 2.282zm7.119 0c-.746-.747-1.193-1.298-1.193-2.282s.447-1.535 1.193-2.281l3.37 3.37c-.922.746-2.073 1.193-3.37 1.193z"/>
          </svg>
        )
      case 'Facebook':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      case 'Telegram':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        )
      default:
        return <ExternalLink className={iconProps} />
    }
  }

  return (
    <footer className="bg-navy-deep border-t border-navy-light/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About & Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="mb-6">
              <img
                src="/images/coachai-3d-logo.png"
                alt="CoachAI Logo"
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              CoachAI is revolutionizing education and investment through our innovative 
              CAMP ecosystem, combining tech boot camps, DeFi protocols, and 
              real-world asset tokenization.
            </p>

          </motion.div>

          {/* Column 2 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-text-secondary hover:text-accent-blue transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-accent-blue transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
              Follow Us
            </h3>
            <div className="space-y-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-text-secondary hover:text-accent-blue transition-colors duration-200 text-sm"
                >
                  {renderSocialIcon(social.icon)}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-navy-light/30 mt-6 pt-4">
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              © CoachAi Development Fund 2018. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer