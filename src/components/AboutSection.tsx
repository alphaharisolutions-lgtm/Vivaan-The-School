import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Target, Heart, Award, Shield, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { useSiteData } from '../context/SiteDataContext';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values' | 'legacy'>('mission');
  const { siteData } = useSiteData();
  const { aboutData } = siteData;

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-[#F6C343]" /> About Our School
          </div>
          <h2 className="serif text-3xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
            {aboutData.heading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            {aboutData.description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#FCFAF7] border border-slate-200 rounded-2xl shadow-inner gap-1 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'mission'
                  ? 'bg-[#0E4C92] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="w-4 h-4 text-[#F6C343]" /> Our Mission
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'vision'
                  ? 'bg-[#0E4C92] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4 text-[#F6C343]" /> Our Vision
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'values'
                  ? 'bg-[#0E4C92] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Heart className="w-4 h-4 text-[#F6C343]" /> Core Values
            </button>
            <button
              onClick={() => setActiveTab('legacy')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'legacy'
                  ? 'bg-[#0E4C92] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-[#F6C343]" /> Legacy & Group
            </button>
          </div>
        </div>

        {/* Content Showcase Box */}
        <div className="bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F6C343]/10 rounded-full blur-3xl pointer-events-none"></div>

          {activeTab === 'mission' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="serif text-2xl sm:text-3xl font-black text-[#0E4C92]">Mission for Student Empowerment</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Our mission is to provide an empowering, inclusive, and technologically advanced learning environment from Nursery to Class 10 (State Syllabus). We cultivate critical thinking, mathematical logic, scientific inquiry, and ethical leadership in every student.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Conceptual clarity and Telangana State Board (SSC) academic rigor
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Integrated Class VI–X analytical & competitive foundation
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Equal emphasis on physical health, sports & fine arts
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-4 shadow-sm">
                <div className="text-xs font-bold text-[#E53935] uppercase tracking-wider">Mission Highlights</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100">
                    <div className="text-2xl font-black text-[#0E4C92]">1:15</div>
                    <div className="text-xs text-slate-600 font-bold mt-1">Teacher Student Ratio</div>
                  </div>
                  <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-100">
                    <div className="text-2xl font-black text-amber-700">Class VI–X</div>
                    <div className="text-xs text-slate-600 font-bold mt-1">High School Stream</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'vision' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="serif text-2xl sm:text-3xl font-black text-[#0E4C92]">Vision for Tomorrow's Leaders</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  To be a benchmark of international school education in Telangana, recognized for cultivating intellectually curious, resilient, empathetic, and future-ready global citizens equipped to excel in top competitive universities and global platforms.
                </p>
                <div className="p-4 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-700 space-y-2 shadow-xs">
                  <strong className="text-[#0E4C92] block font-bold">Key Vision Pillars:</strong>
                  <p>1. Building a benchmark academic ecosystem in Khammam.</p>
                  <p>2. Fostering innovation, robotics, coding, and scientific research in early school years.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 shadow-sm">
                <div className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider">Global Pedagogy</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  By blending national curriculum guidelines with active inquiry frameworks, our students master both school examinations and national competitive assessments naturally.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0E4C92] flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Integrity & Respect</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Instilling strong moral values, honesty, and deep respect for elders, teachers, peers, and diverse cultures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-[#F6C343]" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Inquiry & Curiosity</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Encouraging children to ask "Why" and "How", driving self-motivated research, robotics projects, and experimentations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Empathy & Service</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Community initiatives, environment drives, and team sports building compassionate human beings.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'legacy' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-blue-50/50 rounded-2xl border border-blue-100 shrink-0">
                  <SchoolLogo size="lg" showSubtext={false} />
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h4 className="serif text-xl sm:text-2xl font-bold text-[#0E4C92]">Part of A New Era Group Institution</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    New Era Educational Group is widely recognized across Telangana for establishing State Board academic benchmarks, disciplined administrative standards, top faculty retention, and stellar alumni accomplishments.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xl font-bold text-[#0E4C92]">20+ Years</div>
                  <div className="text-xs text-slate-500 font-medium">Educational Leadership</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xl font-bold text-[#0E4C92]">100% SSC</div>
                  <div className="text-xs text-slate-500 font-medium">State Board Pass Rate</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xl font-bold text-[#0E4C92]">Khammam</div>
                  <div className="text-xs text-slate-500 font-medium">Srinivasa Nagar Campus</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
