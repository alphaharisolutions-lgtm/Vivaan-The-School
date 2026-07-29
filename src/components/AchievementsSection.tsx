import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Star, CheckCircle2, Medal } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    { number: '100%', title: 'CBSE Board Pass Result', desc: 'Consistent top school performance in Khammam district.' },
    { number: '14+', title: 'Olympiad Gold Medals', desc: 'Telangana & National Mathematics & Science Olympiad winners.' },
    { number: '1:15', title: 'Teacher-Student Ratio', desc: 'Guaranteed individual academic mentorship for every student.' },
    { number: '100%', title: 'CCTV & GPS Transport', desc: 'Complete parent peace of mind with live mobile app alerts.' },
  ];

  return (
    <section className="py-20 bg-[#FCFAF7] relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-700 uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-[#F6C343]" /> Awards & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            Proven Achievements & Academic Pride
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#0E4C92]">{item.number}</div>
              <div className="text-sm font-bold text-slate-800">{item.title}</div>
              <div className="text-xs text-slate-500 font-medium">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
