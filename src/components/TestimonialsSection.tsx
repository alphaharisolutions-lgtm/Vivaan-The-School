import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/schoolData';
import { Quote, Star, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-20 bg-[#FCFAF7] relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5 text-[#F6C343]" /> Parent Words of Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            What Parents Say About Vivaan
          </h2>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-3xl mx-auto bg-white border border-[#0E4C92]/15 rounded-3xl p-8 sm:p-10 shadow-xl relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 text-[#F6C343]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#0E4C92] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Verified Parent Review
            </span>
          </div>

          <motion.blockquote
            key={current.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium italic mb-8"
          >
            "{current.quote}"
          </motion.blockquote>

          <div className="flex items-center justify-between border-t border-slate-100 pt-6">
            <div className="flex items-center gap-3">
              <img
                src={current.avatar}
                alt={current.parentName}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#0E4C92]"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900">{current.parentName}</h4>
                <p className="text-xs text-slate-500 font-medium">
                  Parent of {current.studentName} • <strong className="text-[#0E4C92]">{current.grade}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[#0E4C92] text-white hover:bg-[#0A386D] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
