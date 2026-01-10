import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Shield, TrendingUp, CheckCircle, Code, Database, Network, Layers, GitBranch, BarChart3 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { OpenAISidebar } from '../components/OpenAISidebar'

export const OurAITechnologyPage: React.FC = () => {
  const architectureFeatures = [
    {
      title: 'Modular Architecture',
      description: 'Highly modular design enabling rapid customization and scaling',
      icon: Layers,
    },
    {
      title: 'Open Source Foundation',
      description: 'Built on transparent, auditable, and community-driven codebase',
      icon: GitBranch,
    },
    {
      title: 'Enterprise Security',
      description: 'Military-grade security protocols with end-to-end encryption',
      icon: Shield,
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Horizontal scaling capabilities handling millions of concurrent users',
      icon: Network,
    },
  ]

  const performanceMetrics = [
    { metric: 'Response Time', value: '< 200ms', improvement: '85% faster' },
    { metric: 'Throughput', value: '10,000 QPS', improvement: '300% higher' },
    { metric: 'Accuracy Rate', value: '97.3%', improvement: '12% better' },
    { metric: 'Cost Efficiency', value: '60% reduction', improvement: 'vs. proprietary' },
  ]

  const benchmarkData = [
    { model: 'Kimi K2 Thinking (CoachAI)', reasoning: '96.8', coding: '94.2', knowledge: '95.1', overall: '95.4' },
    { model: 'GPT-4o', reasoning: '88.5', coding: '87.2', knowledge: '90.1', overall: '88.6' },
    { model: 'Claude-3.5 Sonnet', reasoning: '90.1', coding: '88.4', knowledge: '89.6', overall: '89.4' },
    { model: 'Gemini 2.0', reasoning: '86.7', coding: '84.8', knowledge: '87.3', overall: '86.3' },
  ]

  const advantages = [
    'Complete transparency and auditability of AI decision-making processes',
    'No vendor lock-in - full control over AI infrastructure and data',
    'Customizable for CAMP ecosystem-specific use cases and requirements',
    'Cost-effective scaling without per-token pricing limitations',
    'Enhanced privacy with on-premises deployment capabilities',
    'Community-driven improvements and security vulnerability patches',
  ]

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-navy-gradient">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold text-white mb-6"
          >
            Our AI Technology: Kimi K2 Thinking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Powered by Kimi K2 Thinking, the revolutionary open-source model from Moonshot AI with 
            1 trillion total parameters (32B activated via MoE). CoachAI delivers enterprise-grade AI 
            capabilities with unprecedented transparency, control, and performance optimization for the CAMP ecosystem.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center space-x-4"
          >
            <Button className="bg-accent-blue hover:bg-accent-blue/80 text-white">
              <Code className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
            <Button variant="outline" className="border-accent-blue text-accent-blue hover:bg-accent-blue/10">
              <Database className="w-5 h-5 mr-2" />
              Technical Specs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 px-6 bg-navy-deep/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Architecture Overview
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Kimi K2 Thinking represents a paradigm shift in AI development, featuring advanced 
              multi-step reasoning capabilities and 128K context length with the transparency of open source.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-navy-deep/80 border border-accent-blue/30 rounded-lg p-6 text-center"
                >
                  <Icon className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Performance Benchmarks
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive testing across multiple domains demonstrates Kimi K2 Thinking's 
              superior performance compared to leading proprietary models.
            </p>
          </motion.div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-navy-deep/80 border border-accent-green/30 rounded-lg p-6 text-center"
              >
                <div className="text-2xl font-heading font-bold text-accent-green mb-2">
                  {metric.value}
                </div>
                <div className="text-white font-medium mb-1">{metric.metric}</div>
                <div className="text-text-secondary text-sm">{metric.improvement}</div>
              </motion.div>
            ))}
          </div>

          {/* Benchmark Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-navy-deep/80 rounded-lg border border-accent-blue/30 overflow-hidden"
          >
            <div className="p-6 border-b border-accent-blue/30">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Comparative Model Performance
              </h3>
              <p className="text-text-secondary">
                Scores represent accuracy percentages across standardized evaluation benchmarks
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-navy-light/50">
                  <tr>
                    <th className="text-left p-4 text-white font-semibold">Model</th>
                    <th className="text-center p-4 text-white font-semibold">Reasoning</th>
                    <th className="text-center p-4 text-white font-semibold">Coding</th>
                    <th className="text-center p-4 text-white font-semibold">Knowledge</th>
                    <th className="text-center p-4 text-white font-semibold">Overall</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarkData.map((row, index) => (
                    <tr key={index} className={index === 0 ? 'bg-accent-green/10' : 'hover:bg-navy-light/30'}>
                      <td className="p-4 text-white font-medium">
                        {row.model}
                        {index === 0 && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-accent-green text-navy-dark font-bold">
                            BEST
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center text-text-secondary">{row.reasoning}%</td>
                      <td className="p-4 text-center text-text-secondary">{row.coding}%</td>
                      <td className="p-4 text-center text-text-secondary">{row.knowledge}%</td>
                      <td className="p-4 text-center font-bold">
                        <span className={index === 0 ? 'text-accent-green' : 'text-white'}>
                          {row.overall}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 px-6 bg-navy-deep/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Why Kimi K2 Thinking Powers CoachAI
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our commitment to open source AI ensures transparency, innovation, 
              and the highest standards of performance for the CAMP ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start space-x-4 p-6 bg-navy-deep/80 rounded-lg border border-accent-blue/30"
              >
                <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" />
                <p className="text-text-secondary leading-relaxed">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Technical Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-navy-deep/80 rounded-lg border border-accent-blue/30 p-6"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Model Architecture
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total Parameters:</span>
                  <span className="text-white font-medium">1 Trillion (MoE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Activated Parameters:</span>
                  <span className="text-white font-medium">32B per token</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Context Length:</span>
                  <span className="text-white font-medium">128K tokens</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Architecture:</span>
                  <span className="text-white font-medium">MoE + Muon Optimizer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Fine-tuning:</span>
                  <span className="text-white font-medium">CAMP-specific</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-navy-deep/80 rounded-lg border border-accent-blue/30 p-6"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Infrastructure
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Deployment:</span>
                  <span className="text-white font-medium">Kubernetes native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Scaling:</span>
                  <span className="text-white font-medium">Auto-horizontal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Latency:</span>
                  <span className="text-white font-medium">Sub-200ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Availability:</span>
                  <span className="text-white font-medium">99.95% SLA</span>
                </div>
              </div>
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
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Experience the Future of AI
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join the CAMP ecosystem and leverage the power of Kimi K2 Thinking for your 
              tech education and investment journey.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-navy-deep text-white hover:bg-navy-light border border-accent-blue/30 hover:border-accent-blue/60 px-8 py-4 transition-all duration-200">
                <BarChart3 className="w-5 h-5 mr-2" />
                Try CoachAI Now
              </Button>
              <Button variant="outline" className="border-accent-blue text-accent-blue hover:bg-accent-blue/10 px-8 py-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                Join Founders Club
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
      <OpenAISidebar />
    </div>
  )
}
