import React from 'react'
import { motion } from 'framer-motion'

interface ArtisticImage {
  src: string
  alt: string
  isVideo?: boolean
  size: 'small' | 'medium' | 'large' | 'xlarge'
  hasWhiteBackground?: boolean
  backgroundStyle?: string
  position: {
    row: number
    col: number
    rowSpan: number
    colSpan: number
  }
}

interface TiledImagesProps {
  className?: string
}

// Top row images that will be positioned around the spinning coin
const topRowImages: ArtisticImage[] = [
  {
    src: '/images/redesigned_blueprint.png',
    alt: 'Redesigned Blueprint',
    size: 'medium',
    position: { row: 1, col: 1, rowSpan: 1, colSpan: 1 }
  },
  {
    src: '/images/COACHAI TECH CAMP 2400.png',
    alt: 'COACHAI Tech Camp',
    size: 'medium',
    position: { row: 1, col: 3, rowSpan: 1, colSpan: 1 }
  }
]

// Bottom row images with new arrangement
const bottomRowImages: ArtisticImage[] = [
  {
    src: '/images/luxury-tech-camp-common-area.png',
    alt: 'Luxury Tech Camp Living Room',
    size: 'large',
    position: { row: 1, col: 1, rowSpan: 1, colSpan: 1 }
  },
  {
    src: '/images/CAMP beta Skyview.jpg',
    alt: 'CAMP Beta Skyview',
    size: 'medium',
    position: { row: 1, col: 2, rowSpan: 1, colSpan: 1 }
  },
  {
    src: '/images/luxury-tech-camp-4plex-unit.png',
    alt: 'Camp Unit',
    size: 'large',
    position: { row: 1, col: 3, rowSpan: 1, colSpan: 1 }
  }
]

// Helper function to render image with proper centering
const renderImage = (image: ArtisticImage, index: number, delayMultiplier: number = 0.15) => {
  // Special handling for blueprint image to show all 4 corners
  const isBlueprint = image.src.includes('redesigned_blueprint.png')
  const imageObjectFit = isBlueprint ? 'object-contain' : 'object-cover'
  const imageBackground = isBlueprint ? 'bg-white/90' : ''
  
  return (
    <motion.div
      key={`${image.src}-${index}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 0.3 + index * delayMultiplier, 
        duration: 0.7,
        ease: 'easeOut'
      }}
      className="relative overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group h-48"
    >
      {/* Image container with proper centering */}
      <div className={`relative h-full w-full overflow-hidden ${imageBackground}`}>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={`h-full w-full ${imageObjectFit} object-center transition-all duration-700 group-hover:scale-110 filter brightness-105 contrast-105`}
        />
        
        {/* Artistic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Border accent */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-blue/50 transition-colors duration-500 rounded-xl"></div>
        
        {/* Floating elements for extra artistry */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-accent-blue rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent-green rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </motion.div>
  )
}

export const TiledImages: React.FC<TiledImagesProps> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className} relative`}>
      {/* Top Row Layout: Blueprint - Spinning Coin - COACHAI TECH CAMP */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full flex justify-center items-center gap-8 mb-12"
      >
        {/* Blueprint Image - LEFT */}
        <div className="flex-1 max-w-sm">
          {renderImage(topRowImages[0], 0)}
        </div>

        {/* Centered Spinning Coin Animation - CENTER */}
        <div className="relative w-48 h-48 bg-gradient-to-br from-accent-blue/20 via-navy-deep/30 to-purple-600/20 rounded-2xl p-6 shadow-2xl border border-accent-blue/30">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-blue/10 to-transparent rounded-2xl"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Primary Video Element */}
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
              style={{ filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' }}
              onError={(e) => {
                console.error('Video failed to load:', e)
                // Hide video and show fallback
                const videoEl = e.target as HTMLVideoElement
                videoEl.style.display = 'none'
                const fallback = videoEl.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
              onLoadStart={() => console.log('Video loading started')}
              onCanPlay={() => console.log('Video can play')}
            >
              <source src="/3d-spinning-coin.mp4" type="video/mp4" />
            </video>
            
            {/* Fallback Spinning Animation */}
            <div 
              className="absolute inset-0 flex items-center justify-center" 
              style={{ display: 'none' }}
            >
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-gold to-accent-green rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-2 bg-navy-deep rounded-full flex items-center justify-center">
                  <span className="text-accent-blue font-bold text-4xl">C</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-accent-blue/30 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Ambient glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-blue/20 via-purple-500/20 to-accent-blue/20 rounded-3xl blur-xl -z-10"></div>
        </div>

        {/* COACHAI TECH CAMP Image - RIGHT */}
        <div className="flex-1 max-w-sm">
          {renderImage(topRowImages[1], 1)}
        </div>
      </motion.div>

      {/* Bottom Row Layout: Living Room - Sky View - Camp Unit */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="grid grid-cols-3 gap-6"
      >
        {bottomRowImages.map((image, index) => (
          <div key={`bottom-${index}`}>
            {renderImage(image, index + 2, 0.1)}
          </div>
        ))}
      </motion.div>
      
      {/* Artistic decorative elements */}
      <div className="absolute top-20 left-4 w-1 h-8 bg-gradient-to-b from-accent-blue/40 to-transparent rounded-full opacity-60"></div>
      <div className="absolute top-32 right-8 w-2 h-2 bg-accent-green/50 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-12 w-3 h-1 bg-purple-500/40 rounded-full"></div>
    </div>
  )
}
