import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles, MessageSquare, Phone, Building, Calendar, Minimize2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

interface AIAssistantWidgetProps {
  onOpenAdmissions: () => void;
  onOpenVisit: () => void;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ onOpenAdmissions, onOpenVisit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: `Hello! 👋 Welcome to New Era's Vivaan The School. I am your Vivaan AI Admissions Assistant. How may I help you today with admissions, IIT Foundation coaching, bus transport, or campus visits?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();
      const botReply = data.reply || "Thank you for reaching out! Please call our admissions office at 93813 61354 or book a campus visit.";

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: "You can reach New Era's Vivaan The School directly at 📱 +91 93813 61354 or +91 93980 52389. Our campus is located at Srinivasa Nagar, Khammam.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="w-80 sm:w-96 bg-[#FCFAF7] border border-[#0E4C92]/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col mb-4"
            style={{ height: '480px' }}
          >
            {/* Header */}
            <div className="bg-[#0E4C92] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F6C343] text-[#0E4C92] flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-none">Vivaan AI Admissions Assistant</h4>
                  <span className="text-[10px] text-[#F6C343] font-medium flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online 2026–27 Desk
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Chips */}
            <div className="p-2 bg-slate-100 border-b border-slate-200/80 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
              <button
                onClick={() => handleSend("What is the IIT Foundation coaching model for Grade VI to X?")}
                className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shrink-0 text-slate-700 font-medium"
              >
                💡 IIT Foundation
              </button>
              <button
                onClick={() => handleSend("Where is the school located in Khammam?")}
                className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shrink-0 text-slate-700 font-medium"
              >
                📍 Location
              </button>
              <button
                onClick={() => handleSend("What are the admission process and timings?")}
                className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shrink-0 text-slate-700 font-medium"
              >
                📋 Admissions
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] p-3 rounded-2xl shadow-sm ${
                      m.sender === 'user'
                        ? 'bg-[#0E4C92] text-white rounded-br-none'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">{m.text}</p>
                    <span
                      className={`block text-[9px] mt-1 ${
                        m.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'
                      }`}
                    >
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none text-slate-500 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#F6C343] animate-spin" />
                    Vivaan AI is thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Footer CTAs */}
            <div className="p-2 bg-slate-100 border-t border-slate-200 flex items-center justify-around text-xs">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAdmissions();
                }}
                className="text-[#0E4C92] font-semibold hover:underline flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F6C343]" /> Apply Online
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenVisit();
                }}
                className="text-[#0E4C92] font-semibold hover:underline flex items-center gap-1"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0E4C92]" /> Book Visit
              </button>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Vivaan AI a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-100 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0E4C92]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-2 bg-[#0E4C92] hover:bg-[#0A386D] text-white rounded-xl disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4 text-[#F6C343]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group bg-[#0E4C92] hover:bg-[#0A386D] text-white p-3.5 rounded-full shadow-2xl border-2 border-[#F6C343] flex items-center gap-2.5 transition-all"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-[#F6C343]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0E4C92] animate-ping"></span>
          </div>
          <span className="text-xs font-bold pr-1 hidden sm:inline">Ask Vivaan AI</span>
        </motion.button>
      )}
    </div>
  );
};
