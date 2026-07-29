import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_LIST } from '../data/schoolData';
import { HelpCircle, ChevronDown, Sparkles, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_LIST.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-[#FCFAF7] relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#F6C343]" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative max-w-lg mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search FAQ questions (e.g. fees, bus, IIT foundation)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 shadow-sm focus:outline-none focus:border-[#0E4C92]"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-[#0E4C92] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F6C343]"></span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#0E4C92]' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-100 bg-[#FCFAF7] p-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
