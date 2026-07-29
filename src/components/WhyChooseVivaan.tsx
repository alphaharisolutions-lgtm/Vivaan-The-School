import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VIVAAN_PILLARS } from '../data/schoolData';
import { PillarInfo } from '../types';
import { UserCheck, GraduationCap, Atom, Trophy, Laptop, ShieldCheck, HeartHandshake, Sparkles, Palette, X, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export const WhyChooseVivaan: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<PillarInfo | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#0E4C92]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#0E4C92]" />;
      case 'Atom': return <Atom className="w-6 h-6 text-[#0E4C92]" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-[#0E4C92]" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-[#0E4C92]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#0E4C92]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#0E4C92]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#F6C343]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#0E4C92]" />;
      default: return <GraduationCap className="w-6 h-6 text-[#0E4C92]" />;
    }
  };

  return (
    <section id="why-vivaan" className="py-20 bg-yellow-blue-theme relative overflow-hidden border-t border-slate-200/60">
      {/* Background Animated Blobs & Graphics */}
      <div className="yellow-glow-blob -top-20 -right-20 animate-pulse-glow"></div>
      <div className="blue-glow-blob -bottom-20 -left-20 animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>
      <svg className="absolute top-10 left-10 opacity-15 animate-spin-slow hidden md:block pointer-events-none" width="130" height="130" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="#F6C343" strokeWidth="2" strokeDasharray="8 6" fill="none" />
        <circle cx="50" cy="50" r="24" stroke="#0E4C92" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Scroll Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E4C92]/10 border border-[#0E4C92]/20 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F6C343]" /> Key Pillars of Excellence
            </div>
            <h2 className="serif text-3xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
              Why Choose <span className="text-[#0E4C92] italic">Vivaan The School</span>?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Designed for forward-thinking parents in Khammam seeking world-class facilities, personalized mentoring, and integrated IIT Foundation coaching.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-[#0E4C92] hover:text-white hover:border-[#0E4C92] transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-[#0E4C92] hover:text-white hover:border-[#0E4C92] transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Continuous Sliding Pillars Track */}
        <div className="overflow-hidden relative w-full py-4">
          <div className="animate-continuous-slide gap-6">
            {[...VIVAAN_PILLARS, ...VIVAAN_PILLARS].map((pillar, idx) => (
              <motion.div
                key={`${pillar.id}-${idx}`}
                whileHover={{ scale: 1.08, y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPillar(pillar)}
                className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:border-[#0E4C92] transition-all cursor-pointer group flex flex-col justify-between relative z-10 hover:z-30"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(pillar.icon)}
                    </div>
                    {pillar.stats && (
                      <span className="text-[10px] font-extrabold text-[#0E4C92] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {pillar.stats}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0E4C92] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E4C92]">
                  <span>Explore Feature</span>
                  <ArrowRight className="w-4 h-4 text-[#F6C343] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Helper Bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-semibold pt-2 border-t border-slate-100 mt-2">
          <span>✨ Hover cursor over any card to stop sliding & zoom in for details</span>
          <span className="text-[#0E4C92] font-bold">Continuous Learning Track</span>
        </div>
      </div>

      {/* Detail Popup Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white border border-[#0E4C92]/20 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    {getIcon(selectedPillar.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0E4C92]">{selectedPillar.title}</h3>
                    {selectedPillar.stats && (
                      <span className="text-xs font-semibold text-emerald-600">{selectedPillar.stats}</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {selectedPillar.detailText}
              </p>

              <div className="bg-[#FCFAF7] border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
                <strong className="text-[#0E4C92] block font-bold">Why Parents Value This:</strong>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Integrated directly into everyday school hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Monitored with regular progress tracking & report updates</span>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="px-6 py-2.5 bg-[#0E4C92] text-white rounded-xl text-xs font-bold"
                >
                  Close Detail
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
