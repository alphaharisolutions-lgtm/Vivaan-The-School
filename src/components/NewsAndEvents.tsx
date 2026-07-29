import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NEWS_ITEMS } from '../data/schoolData';
import { Bell, Calendar, FileText, Award, ChevronRight } from 'lucide-react';

export const NewsAndEvents: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const filtered = categoryFilter === 'All'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter((item) => item.category === categoryFilter);

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5 text-[#F6C343]" /> Stay Updated
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            Latest News, Circulars & Events
          </h2>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {['All', 'Circular', 'Academic', 'Event', 'Achievement'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                categoryFilter === cat
                  ? 'bg-[#0E4C92] text-white'
                  : 'bg-[#FCFAF7] border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border transition-all ${
                item.isImportant
                  ? 'bg-amber-500/10 border-amber-500/30'
                  : 'bg-[#FCFAF7] border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-extrabold text-[#0E4C92] uppercase tracking-wider">{item.category}</span>
                <span className="text-slate-400 font-medium">{item.date}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
