import React from 'react';
import { motion } from 'motion/react';
import { Atom, Sparkles, Award, Target, BookOpen, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface IITFoundationSpotlightProps {
  onOpenAdmissions: () => void;
}

export const IITFoundationSpotlight: React.FC<IITFoundationSpotlightProps> = ({ onOpenAdmissions }) => {
  const iitFeatures = [
    { title: 'Integrated Grade VI–X Syllabus', desc: 'No separate evening coaching needed. Concept mastery happens smoothly within regular school hours.' },
    { title: 'Analytical Physics & Math', desc: 'Focus on multi-concept numericals, spatial geometry, vector mechanics, and chemical equations.' },
    { title: 'Olympiad & NTSE Mastery', desc: 'Specialized training for National Science Olympiad (NSO), Math Olympiad (IMO), and NTSE.' },
    { title: 'Weekly Diagnostic Mock Exams', desc: 'Computerized & paper-based practice tests with topic-wise speed and accuracy feedback reports for parents.' },
  ];

  return (
    <section id="iit-foundation" className="py-20 bg-[#FCFAF7] relative overflow-hidden border-t border-slate-200/60">
      {/* Background Subtle Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#0e4c920d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0E4C92] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#F6C343]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#F6C343] uppercase tracking-wider">
                <Atom className="w-4 h-4 text-[#F6C343] animate-spin" /> Flagship Excellence Program
              </div>

              <h2 className="serif text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Integrated IIT & NEET Foundation <br />
                <span className="text-[#F6C343] italic">Grades VI to X</span>
              </h2>

              <p className="text-blue-100 text-sm leading-relaxed font-medium">
                New Era's Vivaan The School provides early, structured competitive exam foundation for students from Grade VI onwards. By building fundamental physics, math, and chemistry logic early, our students gain a massive competitive edge for JEE Mains, Advanced, NEET, and Olympiads.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {iitFeatures.map((feat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur border border-white/15 p-4 rounded-2xl space-y-1">
                    <h4 className="text-xs font-bold text-[#F6C343] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> {feat.title}
                    </h4>
                    <p className="text-[11px] text-blue-100 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAdmissions}
                  className="px-7 py-3.5 bg-[#F6C343] hover:bg-amber-400 text-[#0E4C92] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  Apply for IIT Foundation (Grades VI–X)
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card Callout */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl border border-white/20">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-[#0E4C92] uppercase tracking-widest">
                  IIT Foundation Methodology
                </h3>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  VI – X Benchmarks
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-900">Grade VI & VII: Fundamentals</div>
                  <div className="text-slate-600 text-[11px]">Building core mathematical speed, logical reasoning, and physical phenomenon understanding.</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-900">Grade VIII & IX: Advanced Problem Solving</div>
                  <div className="text-slate-600 text-[11px]">Application of algebra, vector mechanics, chemical reaction equations, and Olympiad tests.</div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 space-y-1">
                  <div className="font-bold text-[#0E4C92]">Class 10: Board & Competitive Mastery</div>
                  <div className="text-slate-600 text-[11px]">Simultaneous 100% Telangana State Board (SSC) preparation + senior JEE/NEET entrance benchmark problems.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
