import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaRobot, FaTimes, FaPaperPlane, FaCommentDots } from 'react-icons/fa'
import { BOT_GREETING, SUGGESTIONS, answerQuestion } from '../data/chatbotKnowledge'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: BOT_GREETING }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping, isOpen])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const sendMessage = (rawText) => {
    const text = (rawText ?? input).trim()
    if (!text || isTyping) return
    setMessages((prev) => [...prev, { from: 'user', text }])
    setInput('')
    setIsTyping(true)
    const reply = answerQuestion(text)
    // Small delay so it feels like the bot is "thinking", not instant.
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: reply }])
      setIsTyping(false)
    }, 650)
  }

  const showSuggestions = messages.length <= 1 && !isTyping

  return (
    <>
      {/* Floating chat button — bottom-left so it never covers the CV button (bottom-right) */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close chat with Hamza AI' : 'Chat with Hamza AI'}
        className="fixed bottom-8 left-8 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-4 text-white shadow-2xl shadow-cyan-500/40 transition-shadow hover:shadow-cyan-400/60"
      >
        <span className="relative">
          {isOpen ? <FaTimes className="text-xl" /> : <FaCommentDots className="text-xl" />}
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-lime-400 ring-2 ring-cyan-500 animate-pulse" aria-hidden="true" />
        </span>
        {!isOpen && <span className="hidden sm:inline text-sm font-semibold">Ask about Hamza</span>}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 left-4 sm:left-8 z-50 flex h-[480px] max-h-[70vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-white/10 bg-panel/95 shadow-2xl shadow-black/60 backdrop-blur-xl"
            role="dialog"
            aria-label="Chat with Hamza AI"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-white">
                <FaRobot className="text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-sm font-bold tracking-wide text-textPrimary">HAMZA AI</div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-lime-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" aria-hidden="true" />
                  ONLINE — ANSWERS FROM HIS PROFILE
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-2 text-textSecondary transition-colors hover:bg-white/10 hover:text-textPrimary"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'rounded-br-sm bg-gradient-to-r from-cyan-500 to-violet-500 text-white'
                        : 'rounded-bl-sm border border-white/10 bg-white/[0.05] text-textPrimary'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.05] px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion chips */}
            {showSuggestions && (
              <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-3">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:border-cyan-400/60 hover:bg-cyan-400/20"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-white/[0.03] p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Hamza..."
                aria-label="Type your question"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-textPrimary placeholder:text-muted outline-none transition-colors focus:border-cyan-400/60"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim() || isTyping}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
