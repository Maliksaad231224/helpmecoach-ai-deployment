import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles, Bot, User, AlertCircle } from 'lucide-react'
import { Button } from './ui/button'

// API Base URL for CoachAI Multi-Agent System
const COACH_AI_API_URL = 'https://agent.helpmecoach.ai'

// Agent display names and colors
const AGENT_CONFIG: Record<string, { name: string; color: string; icon: string }> = {
  marketing: { name: 'Marketing Expert', color: 'bg-purple-500', icon: '📈' },
  cfo: { name: 'CFO Expert', color: 'bg-green-500', icon: '💰' },
  tech_lead: { name: 'Tech Lead', color: 'bg-blue-500', icon: '💻' },
  pm: { name: 'Product Manager', color: 'bg-orange-500', icon: '📋' },
  artists: { name: 'Creative Coach', color: 'bg-pink-500', icon: '🎨' },
}

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
  node?: string
}

// Generate a unique session ID
const generateSessionId = (): string => {
  return 'session_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
}

export const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentAgent, setCurrentAgent] = useState<string | null>(null)
  const [sessionId] = useState(() => generateSessionId())
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    const queryText = input
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${COACH_AI_API_URL}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          query: queryText,
        }),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      
      // Update current agent if returned
      if (data.node) {
        setCurrentAgent(data.node)
      }

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || 'I apologize, but I could not generate a response. Please try again.',
        isUser: false,
        timestamp: new Date(),
        node: data.node,
      }
      setMessages(prev => [...prev, aiResponse])
    } catch (err) {
      console.error('Chat API Error:', err)
      setError(err instanceof Error ? err.message : 'Failed to connect to CoachAI. Please try again.')
      
      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, but I encountered an error connecting to the AI service. Please try again in a moment.',
        isUser: false,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    "How can I improve my startup's growth?",
    "Help me plan my product requirements",
    "What technical architecture should I use?",
    "I need help with my business finances"
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Current Agent Indicator */}
      {currentAgent && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center justify-center"
        >
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${AGENT_CONFIG[currentAgent]?.color || 'bg-gray-500'} text-white text-sm font-medium`}>
            <span className="mr-2">{AGENT_CONFIG[currentAgent]?.icon || '🤖'}</span>
            Speaking with: {AGENT_CONFIG[currentAgent]?.name || 'AI Expert'}
          </div>
        </motion.div>
      )}

      {/* Error Banner */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center justify-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </div>
        </motion.div>
      )}

      {/* Chat Messages */}
      {messages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-navy-deep/80 rounded-xl shadow-lg border border-white/20 p-6 max-h-[500px] overflow-y-auto"
        >
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
              {/* Agent badge for AI messages */}
              {!message.isUser && message.node && (
                <div className="mb-1">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${AGENT_CONFIG[message.node]?.color || 'bg-gray-500'} text-white`}>
                    {AGENT_CONFIG[message.node]?.icon || '🤖'} {AGENT_CONFIG[message.node]?.name || 'AI'}
                  </span>
                </div>
              )}
              <div className="flex items-start gap-2 justify-end">
                {message.isUser && (
                  <div className={`inline-block max-w-xs lg:max-w-lg xl:max-w-2xl px-4 py-3 rounded-2xl bg-camp-blue text-white`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                )}
                {message.isUser && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-camp-blue/50 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              {!message.isUser && (
                <div className="flex items-start gap-2">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${message.node ? AGENT_CONFIG[message.node]?.color || 'bg-gray-500' : 'bg-gray-500'} flex items-center justify-center`}>
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className={`inline-block max-w-xs lg:max-w-lg xl:max-w-2xl px-4 py-3 rounded-2xl bg-openai-off-white text-openai-near-black`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="text-left mb-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="inline-block bg-openai-off-white px-4 py-3 rounded-2xl">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-openai-medium-gray rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-openai-medium-gray rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-openai-medium-gray rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </motion.div>
      )}

      {/* Main Chat Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about marketing, finance, tech, product, or creative guidance..."
              className="chat-input pr-16"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-camp-blue hover:bg-blue-600 text-white rounded-full p-2 w-12 h-12 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>

        {/* Suggested Questions */}
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-4 h-4 text-museum-stone-grey mr-2" />
              <span className="text-sm text-museum-stone-grey">I can connect you with 5 expert advisors</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestedQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setInput(question)}
                  className="text-left p-3 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 rounded-lg text-sm text-museum-pure-white transition-all duration-200 focus:ring-2 focus:ring-museum-electric-blue focus:outline-none"
                >
                  {question}
                </motion.button>
              ))}
            </div>
            
            {/* Agent Types Info */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {Object.entries(AGENT_CONFIG).map(([key, config]) => (
                <span
                  key={key}
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color} text-white opacity-70`}
                >
                  {config.icon} {config.name}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
