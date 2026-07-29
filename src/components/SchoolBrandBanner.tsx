import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';

export const SchoolBrandBanner: React.FC = () => {
  const { siteData } = useSiteData();
  const { brandBannerData } = siteData;

  return (
    <section className="py-12 sm:py-16 bg-[#FCFAF7] border-y border-slate-200/60 relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F6C343]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center justify-center space-y-4 sm:space-y-5">
        {/* Blue Square Brand Icon with Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 sm:w-28 sm:h-28 bg-[#0E4C92] rounded-3xl p-3 shadow-xl border border-blue-900/30 flex items-center justify-center hover:scale-105 transition-transform"
        >
          <img
            src={brandBannerData.logoUrl}
            alt="New Era Group Logo"
            className="w-full h-full aspect-square object-cover object-center rounded-2xl filter drop-shadow-sm"
          />
        </motion.div>

        {/* Vivaan The School Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A192F] tracking-tight font-sans"
        >
          {brandBannerData.title}
        </motion.h2>

        {/* Golden Yellow Rounded Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F6C343] text-[#0A192F] rounded-full text-xs sm:text-sm font-black tracking-wide shadow-md border border-amber-300/80"
        >
          <Sparkles className="w-4 h-4 text-amber-900 fill-amber-700" />
          <span>{brandBannerData.badgeText}</span>
        </motion.div>
      </div>
    </section>
  );
};
