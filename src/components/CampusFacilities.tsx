import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FACILITIES } from '../data/schoolData';
import { Facility } from '../types';
import {
  Tv,
  FlaskConical,
  Book,
  Cpu,
  Dumbbell,
  Bus,
  ShieldCheck,
  Smile,
  Building2,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Play,
  Pause
} from 'lucide-react';

export const CampusFacilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Academics', 'Practicals', 'Learning Resources', 'Technology', 'Sports', 'Safety', 'Early Childhood'];

  const filteredFacilities = selectedCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === selectedCategory);

  // Auto-scroll effect for horizontal facilities track
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv': return <Tv className="w-5 h-5 text-[#0E4C92]" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-[#0E4C92]" />;
      case 'Book': return <Book className="w-5 h-5 text-[#0E4C92]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0E4C92]" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#0E4C92]" />;
      case 'Bus': return <Bus className="w-5 h-5 text-[#0E4C92]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#0E4C92]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-[#0E4C92]" />;
      default: return <Building2 className="w-5 h-5 text-[#0E4C92]" />;
    }
  };

  const tickerItems = [
    "🏫 Air-Cooled Smart Digital Classrooms",
    "🔬 State-of-the-Art Science Laboratories",
    "📚 10,000+ Print & E-Learning Digital Library",
    "💻 Advanced AI & Computer Tinkering Lab",
    "🏏 Multi-Sport Turf & Athletic Track",
    "🚌 GPS Monitored AC Bus Fleet Across Khammam",
    "🛡️ 24/7 CCTV & Biometric Campus Security",
    "🧸 Cushioned Early Childhood Play Park"
  ];

  return (
    <section id="facilities" className="py-20 bg-yellow-blue-theme relative overflow-hidden border-t border-slate-200/60">
      {/* Background Decorative Animated Elements */}
      <div className="yellow-glow-blob -top-24 -left-20 animate-pulse-glow"></div>
      <div className="blue-glow-blob -bottom-24 -right-20 animate-pulse-glow" style={{ animationDelay: '3.5s' }}></div>
      <svg className="absolute bottom-10 right-10 opacity-20 animate-float-bob hidden lg:block pointer-events-none" width="120" height="120" viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" fill="none" stroke="#F6C343" strokeWidth="2" strokeDasharray="6 4" />
        <circle cx="50" cy="60" r="15" fill="#0E4C92" opacity="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#F6C343]" /> World-Class Infrastructure
          </div>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight">
            Campus Infrastructure & Facilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Spacious, ventilated, safe, and technologically enriched spaces designed to inspire state board academic mastery, sports, and holistic student growth.
          </p>
        </div>

        {/* 1. Infinite Horizontal Scrolling Infrastructure Ticker */}
        <div className="mb-10 bg-[#0E4C92] text-white rounded-2xl py-3 px-4 shadow-md overflow-hidden relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F6C343] shrink-0 border-r border-blue-800 pr-4 z-10 relative bg-[#0E4C92]">
            <Sparkles className="w-4 h-4 animate-pulse text-[#F6C343]" /> INFRA HIGHLIGHTS
          </div>

          <div className="overflow-hidden whitespace-nowrap flex items-center ml-4">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
              className="inline-flex items-center gap-8 text-xs font-semibold text-blue-100"
            >
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span key={index} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  {item}
                  <span className="text-blue-400/60">•</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 2. Category Filter Tabs */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex overflow-x-auto no-scrollbar gap-2 py-1 scroll-smooth max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#0E4C92] text-white border-[#0E4C92] shadow-md'
                    : 'bg-[#FCFAF7] text-slate-700 border-slate-200 hover:border-[#0E4C92] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Controls: Manual Scroll Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={scrollLeft}
              className="p-2.5 bg-[#FCFAF7] border border-slate-200 rounded-xl text-slate-700 hover:bg-white hover:border-[#0E4C92] transition-all shadow-2xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2.5 bg-[#FCFAF7] border border-slate-200 rounded-xl text-slate-700 hover:bg-white hover:border-[#0E4C92] transition-all shadow-2xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Continuous Sliding Facilities Track */}
        <div className="overflow-hidden relative w-full py-4">
          <div className="animate-continuous-slide gap-6">
            {[...filteredFacilities, ...filteredFacilities].map((facility, idx) => (
              <motion.div
                key={`${facility.id}-${idx}`}
                whileHover={{ scale: 1.08, y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedFacility(facility)}
                className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 bg-[#FCFAF7] border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#0E4C92] transition-all cursor-pointer flex flex-col justify-between group/card relative z-10 hover:z-30"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80"></div>
                    
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0E4C92] uppercase tracking-wider border border-slate-200 shadow-xs">
                      {facility.category}
                    </div>

                    <div className="absolute bottom-3 right-3 text-white">
                      <span className="p-1.5 bg-white/20 backdrop-blur rounded-full text-white group-hover/card:bg-[#F6C343] group-hover/card:text-[#0E4C92] transition-colors inline-flex">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover/card:text-[#0E4C92] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                      {facility.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-200/60 mt-2 flex items-center justify-between text-xs font-bold text-[#0E4C92]">
                  <span>Explore Specs & Features</span>
                  <span className="text-[#F6C343] group-hover/card:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Helper Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold pt-2 border-t border-slate-100">
          <span>✨ Hover cursor over any facility card to stop sliding & zoom in for specs</span>
          <span className="hidden sm:inline text-[#0E4C92] font-bold">
            Continuous Campus Showcase
          </span>
        </div>
      </div>

      {/* Facility Detail Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white border border-[#0E4C92]/20 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="relative h-56 sm:h-64">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center border border-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[10px] font-extrabold text-[#F6C343] uppercase tracking-widest bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-[#F6C343]/30">
                    {selectedFacility.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-1 text-white">{selectedFacility.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedFacility.description}
                </p>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Infrastructure Key Highlights:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedFacility.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#FCFAF7] rounded-xl border border-slate-200/80 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">Srinivasa Nagar Campus, Khammam</span>
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
