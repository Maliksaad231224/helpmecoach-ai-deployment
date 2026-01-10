import React from 'react'
import { motion } from 'framer-motion'
import { OpenAISidebar } from '../components/OpenAISidebar'
import { MetaTags, pageMetaConfigs } from '../components/MetaTags'
import { Target, Users, Zap, Globe, Award, TrendingUp, BookOpen, Building2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We pioneer breakthrough technologies in education and finance, creating solutions that transform traditional paradigms.',
      icon: Zap,
      color: 'text-accent-blue',
    },
    {
      title: 'Educational Excellence',
      description: 'Our mission is to democratize access to world-class tech education through our revolutionary boot camp model.',
      icon: BookOpen,
      color: 'text-camp-green',
    },
    {
      title: 'Financial Empowerment',
      description: 'We provide accessible investment opportunities and financial education to build generational wealth.',
      icon: TrendingUp,
      color: 'text-accent-gold',
    },
    {
      title: 'Global Impact',
      description: 'Creating sustainable change through technology, education, and community building across diverse markets.',
      icon: Globe,
      color: 'text-purple-400',
    },
  ]

  const ecosystem = [
    {
      name: 'CAMP Alpha',
      description: 'Premium tech boot camps with guaranteed job placement and comprehensive career support.',
      path: '/camp-alpha'
    },
    {
      name: 'CAMP DeFi',
      description: 'Revolutionary multi-collateral stablecoin protocol with AI optimization and massive insurance fund.',
      path: '/camp-defi'
    },
    {
      name: 'CAMP RWA',
      description: 'Real World Asset tokenization platform connecting traditional assets with blockchain technology.',
      path: '/camp-rwa-agent'
    },
    {
      name: 'CAMP Marketplace',
      description: 'Comprehensive platform connecting education, investment, and career opportunities.',
      path: '/camp-marketplace'
    },
    {
      name: 'Founders Club',
      description: 'Exclusive investment opportunity with equity ownership, governance rights, and premium benefits.',
      path: '/founders-club'
    }
  ]

  return (
    <>
      <MetaTags {...pageMetaConfigs.about} />
      <div className="flex min-h-screen">
      <div className="flex-1 md:mr-20">
        {/* Header */}
        <section className="bg-navy-gradient py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <img
                src="/images/coachai-3d-logo.png"
                alt="CoachAI Logo"
                className="h-20 w-auto mx-auto mb-8"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-heading font-bold text-text-primary mb-6"
            >
              About CoachAI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
            >
              We are the bridge connecting successful businesses and individuals with underserved communities, 
              leveraging cutting-edge technology innovations to create profitable, impactful solutions. Our mission 
              is to empower those who wish to serve while building sustainable, transformative businesses through 
              our comprehensive CAMP ecosystem.
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-navy-deep rounded-lg">
                    <Target className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-text-primary">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  We serve as the essential bridge between successful businesses and individuals who are 
                  passionate about making a difference, connecting them with underserved communities through 
                  cutting-edge technology innovations.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Our target demographic includes established entrepreneurs, business leaders, and successful 
                  professionals who seek to create meaningful impact while building profitable, sustainable 
                  ventures. We provide the technology platform and expertise to transform their desire to 
                  serve into scalable, transformative business solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-navy-deep rounded-lg">
                    <Award className="w-8 h-8 text-camp-green" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-text-primary">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  To create a world where successful individuals and businesses can seamlessly 
                  channel their resources and expertise to serve underserved communities through 
                  profitable, technology-driven solutions.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We envision a sustainable ecosystem where doing good and doing well are perfectly 
                  aligned. By providing the right tools, education, and platforms, we enable our 
                  community to create lasting impact while building generational wealth through 
                  innovative technology solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                The principles that guide everything we do and shape our approach to 
                innovation, education, and community building.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-8"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-navy-deep rounded-lg flex-shrink-0">
                        <Icon className={`w-6 h-6 ${value.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-text-primary mb-3 text-xl">
                          {value.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ecosystem Overview */}
        <section className="bg-navy-deep/50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                The CAMP Ecosystem
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                A comprehensive platform that integrates education, finance, and technology 
                to create unprecedented opportunities for growth and success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystem.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-navy-deep/80 border border-navy-light/50 rounded-lg p-6 hover:border-accent-blue/50 transition-colors duration-200"
                >
                  <h3 className="font-heading font-semibold text-text-primary mb-3 text-lg">
                    {item.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Link
                    to={item.path}
                    className="text-accent-blue hover:text-accent-blue/80 text-sm font-medium transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">
                Leadership & Expertise
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Our team combines decades of experience in education, technology, finance, 
                and blockchain innovation to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center bg-navy-deep/80 border border-navy-light/50 rounded-lg p-8"
              >
                <div className="p-4 bg-navy-deep rounded-lg w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent-blue" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary mb-3">
                  Educational Innovation
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Former executives from top educational institutions and tech companies, 
                  bringing proven methodologies and cutting-edge curriculum design.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center bg-navy-deep/80 border border-navy-light/50 rounded-lg p-8"
              >
                <div className="p-4 bg-navy-deep rounded-lg w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-camp-green" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary mb-3">
                  Financial Technology
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Blockchain and DeFi experts with experience at leading financial institutions, 
                  cryptocurrency exchanges, and fintech startups.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center bg-navy-deep/80 border border-navy-light/50 rounded-lg p-8"
              >
                <div className="p-4 bg-navy-deep rounded-lg w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary mb-3">
                  Technology Leadership
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Senior technologists from FAANG companies and successful startups, 
                  specializing in AI, blockchain, and scalable platform development.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-navy-deep/50 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Explore our ecosystem and discover how CoachAI can transform your 
                education, career, and financial future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/founders-club">
                  <Button className="bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 px-8 py-3">
                    Explore Founders Club
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue/10 px-8 py-3">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
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

export default AboutPage