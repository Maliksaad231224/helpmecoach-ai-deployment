import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

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
    setInput('')
    setIsLoading(true)

    // Simulate AI response (replace with actual LLM integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're asking about "${input}". I'm CoachAI, specialized in the CAMP ecosystem, Real World Assets (RWA), GoldBackBond systems, and tech education. I can help you understand investment opportunities, tech boot camps, and the innovative blockchain solutions we're building. How would you like me to assist you further?`,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const suggestedQuestions = [
    "What is the CAMP ecosystem?",
    "Tell me about Founders Club opportunities",
    "How do tech boot camps work?",
    "Explain GoldBackBond system"
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Chat Messages */}
      {messages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-navy-deep/80 rounded-xl shadow-lg border border-white/20 p-6 max-h-96 overflow-y-auto"
        >
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
              <div
                className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isUser
                    ? 'bg-camp-blue text-white'
                    : 'bg-openai-off-white text-openai-near-black'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-left mb-4">
              <div className="inline-block bg-openai-off-white px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-openai-medium-gray rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-openai-medium-gray rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-openai-medium-gray rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
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
              placeholder="What's your idea? Let's build your Product Requirement Document (PRD)"
              className="chat-input pr-16"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-camp-blue hover:bg-blue-600 text-white rounded-full p-2 w-12 h-12"
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
              <span className="text-sm text-museum-stone-grey">Try asking about</span>
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
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
