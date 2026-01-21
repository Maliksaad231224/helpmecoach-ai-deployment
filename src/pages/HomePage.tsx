import React from 'react'
import { motion } from 'framer-motion'
import { ChatInterface } from '../components/ChatInterface'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { TiledImages } from '../components/TiledImages'
import { MetaTags, pageMetaConfigs } from '../components/MetaTags'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Users, Building, TrendingUp } from 'lucide-react'
import { Button } from '../components/ui/button'

export const HomePage: React.FC = () => {
  // Stats removed per user requirements

  return (
    <>
      <MetaTags {...pageMetaConfigs.home} />
      <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-heading font-medium text-text-primary mb-8"
              >
                Where should we start?
              </motion.h1>
            </div>

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <ChatInterface />
            </motion.div>

            {/* Powered by Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-12"
            >
              <div className="bg-navy-deep/80 border border-accent-blue/30 rounded-xl p-6 max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Powered by the best open source models available
                </h3>
                <p className="text-text-secondary mb-4">
                  Currently running Kimi K2 Thinking - Advanced AI technology for superior insights and performance
                </p>
                <Link to="/our-ai-technology">
                  <Button className="bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-all duration-200">
                    Learn More About Our AI Technology
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Specialized AI Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16 text-center"
            >
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
                Your AI Coach for business building
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Get expert insights on Real World Assets, tech education, and blockchain innovation 
                from an AI trained specifically on the CAMP ecosystem knowledge base.
              </p>
            </motion.div>

            {/* Tiled Images Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <TiledImages />
            </motion.div>

            {/* Donation Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16 text-center"
            >
              <div className="bg-navy-deep/80 border border-accent-blue/30 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Support Our Mission
                </h3>
                <p className="text-text-secondary mb-6">
                  CoachAI honors all donations with a 100% donation receipt and tax credit. If you wish to support, click below:
                </p>
                <Button 
                  className="bg-accent-blue hover:bg-accent-blue/90 text-white text-lg px-8 py-4 mb-6"
                  onClick={() => window.open('https://donorbox.org/technology-sales-bootcamps-for-ex-offenders', '_blank')}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
                <p className="text-text-secondary mb-4">
                  If you wish to be a founder in the Tech revolution, click below:
                </p>
                <Link to="/founders-club">
                  <Button className="bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 text-lg px-8 py-4 transition-all duration-200">
                    Join Founders Club
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              

            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 text-center"
              >
                <Building className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">
                  Real World Assets
                </h3>
                <p className="text-text-secondary">
                  Expert guidance on RWA tokenization, property investment, and blockchain integration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 text-center"
              >
                <Users className="w-12 h-12 text-camp-green mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">
                  Tech Education
                </h3>
                <p className="text-text-secondary">
                  Insights into our revolutionary tech boot camp model and educational innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 text-center"
              >
                <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-text-primary mb-2">
                  Investment Opportunities
                </h3>
                <p className="text-text-secondary">
                  Analysis of Founders Club benefits, ROI projections, and investment strategies.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link to="/founders-club">
                <Button className="bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 text-lg px-8 py-4 transition-all duration-200">
                  Explore Founders Club
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* OpenAI-style Sidebar */}
      <OpenAISidebar />
    </div>
    </>
  )
}
