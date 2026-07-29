import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Download, GraduationCap, BookOpen, Bus, Star, Award, ShieldCheck, Heart, Compass, Cpu, Atom, ChevronRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { useSiteData } from '../context/SiteDataContext';

interface HeroProps {
  onOpenAdmissions: () => void;
  onOpenVisit: () => void;
  onOpenBrochure: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmissions, onOpenVisit, onOpenBrochure }) => {
  const { siteData } = useSiteData();
  const { heroData, heroStats } = siteData;

  return (
    <section id="hero" className="relative bg-blue-yellow-hero overflow-hidden flex flex-col justify-center min-h-[calc(100vh-60px)] py-3 sm:py-5 px-4 sm:px-6 lg:px-8">
      {/* Real Campus Background Video - Translucent Video Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          key={heroData.videoUrl}
          className="w-full h-full object-cover object-center opacity-70 sm:opacity-85 filter brightness-[1.02]"
        >
          <source src={heroData.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF7]/60 via-[#FCFAF7]/40 to-[#FCFAF7]/75 backdrop-blur-[0.5px]" />
      </div>

      {/* Immersive UI Background Grid Pattern & Soft Ambient Animated Blobs */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40 z-0"></div>
      <div className="blue-glow-blob -top-24 -left-20 animate-pulse-glow z-0"></div>
      <div className="yellow-glow-blob -bottom-24 -right-20 animate-pulse-glow z-0" style={{ animationDelay: '3s' }}></div>
      <div className="yellow-glow-blob top-1/3 -left-32 animate-pulse-glow z-0" style={{ animationDelay: '1.5s' }}></div>

      {/* Floating & Spinning Animated Vector Graphics */}
      <svg className="absolute top-4 right-16 opacity-20 animate-spin-slow hidden lg:block pointer-events-none" width="120" height="120" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="#F6C343" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
        <circle cx="50" cy="50" r="32" stroke="#0E4C92" strokeWidth="2" fill="none" />
        <polygon points="50,15 58,35 80,35 62,48 68,70 50,56 32,70 38,48 20,35 42,35" fill="#F6C343" opacity="0.4" />
      </svg>

      <svg className="absolute bottom-6 left-16 opacity-25 animate-float-bob hidden lg:block pointer-events-none" width="90" height="90" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" rx="15" stroke="#0E4C92" strokeWidth="2" fill="none" transform="rotate(15 50 50)" />
        <circle cx="50" cy="50" r="18" fill="#F6C343" opacity="0.6" />
      </svg>

      {/* Floating Interactive Educational Pills */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 left-[4%] hidden lg:flex items-center gap-2 p-2.5 glass-card rounded-xl shadow-xs text-slate-700 pointer-events-none z-10"
      >
        <div className="w-7 h-7 rounded-lg bg-[#0E4C92] text-white flex items-center justify-center font-bold shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 text-[#F6C343]" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-slate-800">Holistic Curriculum</div>
          <div className="text-[9px] text-slate-500 font-medium">Nursery to Grade X</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-4 right-[4%] hidden lg:flex items-center gap-2 p-2.5 glass-card rounded-xl shadow-xs pointer-events-none z-10"
      >
        <div className="w-7 h-7 rounded-lg bg-amber-100 text-[#0E4C92] flex items-center justify-center font-bold shadow-2xs">
          <GraduationCap className="w-3.5 h-3.5 text-[#0E4C92]" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-[#0E4C92]">Quality Education</div>
          <div className="text-[9px] text-slate-500 font-medium">Value-Based Learning</div>
        </div>
      </motion.div>

      {/* Center Hero Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-2 sm:space-y-3 my-auto">
        {/* Official Admissions Open Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Immersive State Syllabus Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-red-50 border border-red-100 rounded-full text-[#E53935] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-xs">
            {heroData.badgeText}
          </div>
        </motion.div>

        {/* Main Immersive Serif Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-0.5"
        >
          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl text-[#0E4C92] leading-tight max-w-3xl mx-auto tracking-tight font-black">
            {heroData.headline}
          </h1>
        </motion.div>
      </div>

      {/* Glassmorphic Metrics Grid Below Headline */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="relative z-20 max-w-5xl mx-auto mt-2 sm:mt-3 w-full px-2"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3 text-center">
          {heroStats.map((stat, index) => (
            <div key={index} className="glass-card p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center hover:shadow-md transition-all">
              <span className="text-base sm:text-lg font-black text-[#0E4C92] leading-none mb-0.5">
                {stat.value}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold leading-tight">
                {stat.label}
              </span>
              <span className="text-[9px] text-slate-400 font-medium leading-tight">
                {stat.suffix}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
