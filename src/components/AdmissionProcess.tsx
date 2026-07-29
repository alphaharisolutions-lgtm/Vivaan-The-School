import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, FileText, CheckCircle2, UserCheck, ShieldCheck, ArrowRight, Calculator } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionProcessProps {
  onOpenAdmissions: () => void;
  onOpenVisit: () => void;
  onOpenBrochure: () => void;
}

export const AdmissionProcess: React.FC<AdmissionProcessProps> = ({ onOpenAdmissions, onOpenVisit, onOpenBrochure }) => {
  const [calcGrade, setCalcGrade] = useState('Grade VI (IIT Foundation)');

  const steps = [
    { num: '01', title: 'Online Enquiry & Application', desc: 'Fill out our instant online application form or call admissions at 93813 61354.' },
    { num: '02', title: 'Campus Tour & Orientation', desc: 'Visit our Srinivasa Nagar campus to inspect classrooms, labs, and sports turf.' },
    { num: '03', title: 'Registration & Documentation', desc: 'Submit birth certificate, previous report cards, transfer certificate, and passport photos.' },
    { num: '04', title: 'Diagnostic Assessment', desc: 'A friendly conceptual interaction for proper grade mapping and foundation baseline.' },
    { num: '05', title: 'Admission Confirmation', desc: 'Receive official admission offer letter, pay initial fees, and secure seat.' },
    { num: '06', title: 'Welcome & Orientation', desc: 'Collect uniforms, books, bus pass, parent app credentials, and attend orientation.' },
  ];

  return (
    <section id="admissions" className="py-20 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F6C343]" /> Admission Guide 2026–27
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            Simple 6-Step Admission Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Transparent, welcoming, and parent-friendly admissions from Nursery to Grade X (IIT Foundation).
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-[#FCFAF7] border border-slate-200/80 rounded-2xl p-6 relative overflow-hidden space-y-3 shadow-xs hover:border-[#0E4C92]/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#0E4C92]/20">{step.num}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#F6C343]"></span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Action Banner Card */}
        <div className="bg-[#0E4C92] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-bold text-[#F6C343] uppercase tracking-wider">Admissions Hotline 2026–27</div>
            <h3 className="text-2xl font-bold">Ready to Give Your Child a Future-Ready Start?</h3>
            <p className="text-blue-100 text-xs max-w-xl">
              Limited seats available for Nursery to Grade X (IIT Foundation). Connect with our counselor now!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmissions}
              className="px-6 py-3 bg-[#F6C343] hover:bg-amber-400 text-[#0E4C92] font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" /> Apply Online
            </button>
            <button
              onClick={onOpenVisit}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-[#0E4C92] font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" /> Schedule Visit
            </button>
            <button
              onClick={onOpenBrochure}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#F6C343]" /> Prospectus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
