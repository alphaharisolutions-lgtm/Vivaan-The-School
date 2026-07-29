import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';
import { ProgramInfo } from '../types';
import { BookOpen, Baby, Brain, Zap, CheckCircle2, Sparkles, GraduationCap, ArrowRight, Calculator } from 'lucide-react';

interface AcademicProgramsProps {
  onOpenAdmissionsWithGrade: (grade: string) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onOpenAdmissionsWithGrade }) => {
  const [activeProgramId, setActiveProgramId] = useState<string>('high_iit');

  const activeProgram = ACADEMIC_PROGRAMS.find((p) => p.id === activeProgramId) || ACADEMIC_PROGRAMS[3];

  const getProgramIcon = (icon: string) => {
    switch (icon) {
      case 'Baby': return <Baby className="w-5 h-5 text-[#0E4C92]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#0E4C92]" />;
      case 'Brain': return <Brain className="w-5 h-5 text-[#0E4C92]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#F6C343]" />;
      default: return <GraduationCap className="w-5 h-5 text-[#0E4C92]" />;
    }
  };

  return (
    <section id="academics" className="py-20 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#F6C343]" /> Academic Excellence
          </div>
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight">
            Comprehensive Academics (Nursery to Class 10)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Progressive stage-wise curriculum blending Telangana State Syllabus (SSC) academic rigor, activity-based discovery, and specialized Class VI–X IIT & NEET Foundation coaching.
          </p>
        </div>

        {/* Program Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {ACADEMIC_PROGRAMS.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveProgramId(prog.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                activeProgramId === prog.id
                  ? 'bg-[#0E4C92] text-white border-[#0E4C92] shadow-lg'
                  : 'bg-[#FCFAF7] border-slate-200/80 text-slate-700 hover:border-[#0E4C92]/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    activeProgramId === prog.id ? 'bg-white/10 text-white' : 'bg-blue-50 text-[#0E4C92]'
                  }`}
                >
                  {getProgramIcon(prog.icon)}
                </div>
                {prog.id === 'high_iit' && (
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F6C343] text-[#0E4C92]">
                    IIT Special
                  </span>
                )}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold leading-snug">{prog.title}</h4>
                <p className={`text-[11px] ${activeProgramId === prog.id ? 'text-blue-100' : 'text-slate-500'}`}>
                  {prog.grades}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Program Card Showcase */}
        <motion.div
          key={activeProgram.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E53935] uppercase tracking-widest bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                Eligibility: {activeProgram.ageGroup}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0E4C92]">
                {activeProgram.title} ({activeProgram.grades})
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {activeProgram.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Pedagogical Highlights:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProgram.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAdmissionsWithGrade(activeProgram.title)}
                className="px-6 py-3 bg-[#0E4C92] hover:bg-[#0A386D] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#F6C343]" />
                Apply for {activeProgram.title}
              </button>
            </div>
          </div>

          {/* Right Curriculum Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider">Curriculum Focus Areas</h4>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">State Board (SSC)</span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              {activeProgram.curriculum.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5 p-2 bg-[#FCFAF7] rounded-lg border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-[#0E4C92] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
