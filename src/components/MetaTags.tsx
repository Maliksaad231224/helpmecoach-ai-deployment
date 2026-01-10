import React from 'react'

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = "CoachAI - Your AI Coach for Business Building | CAMP Ecosystem",
  description = "CoachAI is your specialized AI coach for business building, powered by Kimi K2 Thinking. Get expert insights on Real World Assets, tech education, and blockchain innovation from the CAMP ecosystem.",
  keywords = "AI coach, business building, CAMP ecosystem, Real World Assets, blockchain, tech education, Kimi K2, founders club, DeFi, RWA tokenization, tech bootcamp",
  ogImage = "/images/coachai-logo.png",
  canonicalUrl = "https://coachai-platform.netlify.app/"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.content = content
    }
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
    
    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    updateMetaTag('bingbot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    
    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', `https://coachai-platform.netlify.app${ogImage}`, true)
    updateMetaTag('og:url', canonicalUrl, true)
    updateMetaTag('og:type', 'website', true)
    
    // Twitter tags
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', `https://coachai-platform.netlify.app${ogImage}`, true)
    updateMetaTag('twitter:card', 'summary_large_image', true)
    
    // Additional meta for crawlers
    updateMetaTag('crawl-permission', 'allow')
    updateMetaTag('bot-access', 'unrestricted')
    updateMetaTag('content-access', 'public')
  }, [title, description, keywords, ogImage, canonicalUrl])
  
  return null
}

// Predefined meta configurations for different pages
export const pageMetaConfigs = {
  home: {
    title: "CoachAI - Your AI Coach for Business Building | CAMP Ecosystem",
    description: "CoachAI is your specialized AI coach for business building, powered by Kimi K2 Thinking. Get expert insights on Real World Assets, tech education, and blockchain innovation.",
    keywords: "AI coach, business building, CAMP ecosystem, Real World Assets, blockchain, tech education, Kimi K2, founders club, DeFi, RWA tokenization, tech bootcamp",
    canonicalUrl: "https://coachai-platform.netlify.app/"
  },
  about: {
    title: "About CoachAI - Leading AI-Powered Business Coaching Platform",
    description: "Learn about CoachAI's mission to bridge successful businesses with underserved communities through cutting-edge AI technology and the comprehensive CAMP ecosystem.",
    keywords: "about CoachAI, AI business coaching, CAMP ecosystem, tech education, blockchain innovation, business building mission",
    canonicalUrl: "https://coachai-platform.netlify.app/about"
  },
  foundersClub: {
    title: "Founders Club - Exclusive Investment Opportunity | CoachAI",
    description: "Join the CoachAI Founders Club for exclusive investment opportunities with equity ownership, governance rights, and premium benefits in the CAMP ecosystem.",
    keywords: "founders club, investment opportunity, equity ownership, governance rights, CAMP ecosystem, CoachAI investment",
    canonicalUrl: "https://coachai-platform.netlify.app/founders-club"
  },
  campEcosystem: {
    title: "CAMP Ecosystem - Comprehensive Tech & Finance Platform | CoachAI",
    description: "Explore the CAMP ecosystem connecting education, investment, and career opportunities through AI-powered technology and blockchain innovation.",
    keywords: "CAMP ecosystem, tech platform, finance platform, blockchain, AI technology, career opportunities, education",
    canonicalUrl: "https://coachai-platform.netlify.app/camp-ecosystem"
  },
  campMarketplace: {
    title: "CAMP Marketplace - Education & Investment Platform | CoachAI",
    description: "Access the CAMP Marketplace connecting education, investment, and career opportunities in one comprehensive platform powered by AI.",
    keywords: "CAMP marketplace, education platform, investment platform, career opportunities, AI-powered marketplace",
    canonicalUrl: "https://coachai-platform.netlify.app/camp-marketplace"
  },
  campDefi: {
    title: "CAMP DeFi - AI-Optimized Stablecoin Protocol | CoachAI",
    description: "Discover CAMP DeFi's revolutionary multi-collateral stablecoin protocol with AI optimization and massive insurance fund for enhanced stability.",
    keywords: "CAMP DeFi, stablecoin protocol, AI optimization, multi-collateral, insurance fund, decentralized finance",
    canonicalUrl: "https://coachai-platform.netlify.app/camp-defi"
  },
  campRwa: {
    title: "CAMP RWA Agent - Real World Asset Tokenization | CoachAI",
    description: "Explore CAMP RWA Agent for Real World Asset tokenization, connecting traditional assets with blockchain technology for enhanced liquidity.",
    keywords: "CAMP RWA, real world assets, tokenization, blockchain technology, asset liquidity, RWA agent",
    canonicalUrl: "https://coachai-platform.netlify.app/camp-rwa-agent"
  },
  campAlpha: {
    title: "CAMP Alpha - Premium Tech Bootcamp with Job Guarantee | CoachAI",
    description: "Join CAMP Alpha premium tech boot camps with guaranteed job placement and comprehensive career support in cutting-edge technologies.",
    keywords: "CAMP Alpha, tech bootcamp, job guarantee, career support, tech education, coding bootcamp, job placement",
    canonicalUrl: "https://coachai-platform.netlify.app/camp-alpha"
  },
  vision: {
    title: "Our Vision - Transforming Education & Finance | CoachAI",
    description: "Learn about CoachAI's vision to transform education and finance through AI-powered technology and sustainable community building.",
    keywords: "CoachAI vision, education transformation, finance innovation, AI technology, community building, sustainable development",
    canonicalUrl: "https://coachai-platform.netlify.app/our-vision"
  },
  aiTechnology: {
    title: "Our AI Technology - Kimi K2 Thinking Powered Platform | CoachAI",
    description: "Discover CoachAI's advanced AI technology powered by Kimi K2 Thinking for superior business coaching and insights.",
    keywords: "AI technology, Kimi K2, open source AI, business coaching, AI insights, artificial intelligence, machine learning",
    canonicalUrl: "https://coachai-platform.netlify.app/our-ai-technology"
  },
  contact: {
    title: "Contact CoachAI - Get in Touch with Our Team",
    description: "Contact CoachAI for inquiries about our AI coaching services, CAMP ecosystem, investment opportunities, and partnership possibilities.",
    keywords: "contact CoachAI, customer support, inquiries, partnerships, AI coaching services, CAMP ecosystem contact",
    canonicalUrl: "https://coachai-platform.netlify.app/contact"
  },
  privacy: {
    title: "Privacy Policy - CoachAI Data Protection & Privacy",
    description: "Read CoachAI's comprehensive privacy policy detailing how we protect your personal information and ensure data security.",
    keywords: "privacy policy, data protection, personal information, data security, GDPR compliance, privacy rights",
    canonicalUrl: "https://coachai-platform.netlify.app/privacy-policy"
  },
  terms: {
    title: "Terms of Service - CoachAI Platform Usage Terms",
    description: "Review CoachAI's terms of service outlining the conditions for using our AI coaching platform and CAMP ecosystem services.",
    keywords: "terms of service, usage terms, platform conditions, service agreement, legal terms, user agreement",
    canonicalUrl: "https://coachai-platform.netlify.app/terms-of-service"
  }
}