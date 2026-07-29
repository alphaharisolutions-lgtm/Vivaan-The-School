import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Palette, Trophy, Music, Cpu, Mic, Heart, Users, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export const StudentLife: React.FC = () => {
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

  const activities = [
    { title: 'Robotics & STEM Tinkering', desc: 'Hands-on circuit building, block coding, and micro-drone logic.', icon: Cpu, color: 'bg-blue-50 text-[#0E4C92]' },
    { title: 'Performing Arts & Classical Music', desc: 'Vocal music, classical dance, keyboard, and rhythm instruments.', icon: Music, color: 'bg-amber-50 text-amber-700' },
    { title: 'Sports Leagues & Athletics', desc: 'Inter-house cricket tournaments, basketball, badminton, and yoga.', icon: Trophy, color: 'bg-emerald-50 text-emerald-700' },
    { title: 'Public Speaking & Model UN', desc: 'Debate competitions, elocution, storytelling, and personality grooming.', icon: Mic, color: 'bg-purple-50 text-purple-700' },
    { title: 'Fine Arts & Craft Expo', desc: 'Painting, pottery, origami, and annual student art exhibitions.', icon: Palette, color: 'bg-rose-50 text-rose-700' },
    { title: 'Community & Eco Club', desc: 'Tree planting drives, cleanliness awareness, and social outreach.', icon: Heart, color: 'bg-teal-50 text-teal-700' },
  ];

  return (
    <section id="student-life" className="py-20 bg-yellow-blue-theme relative overflow-hidden border-t border-slate-200/60">
      {/* Background Animated Blobs & Graphics */}
      <div className="blue-glow-blob -top-20 -left-20 animate-pulse-glow"></div>
      <div className="yellow-glow-blob -bottom-20 -right-20 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <svg className="absolute top-12 right-12 opacity-20 animate-spin-slow hidden lg:block pointer-events-none" width="120" height="120" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" stroke="#0E4C92" strokeWidth="2" strokeDasharray="6 6" fill="none" />
        <circle cx="50" cy="50" r="28" stroke="#F6C343" strokeWidth="2" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-[#F6C343]" /> Beyond Academics
            </div>
            <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight">
              Vibrant Student Life & Co-Curriculars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              At Vivaan, education extends beyond textbooks. We nurture creative talents, leadership, physical endurance, and public confidence.
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

        {/* Continuous Sliding Activities Track */}
        <div className="overflow-hidden relative w-full py-4">
          <div className="animate-continuous-slide gap-6">
            {[...activities, ...activities].map((act, index) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:border-[#0E4C92] transition-all space-y-3 flex flex-col justify-between cursor-pointer relative z-10 hover:z-30"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${act.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{act.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{act.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Helper Hint */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-semibold pt-2 border-t border-slate-100 mt-2">
          <span>✨ Hover cursor over any activity card to stop sliding & zoom in</span>
          <span className="text-[#0E4C92] font-bold">Continuous Activities Track</span>
        </div>
      </div>
    </section>
  );
};
