import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, CheckCircle, Sparkles, BookOpen, ShieldCheck, Award, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../../data/schoolData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0E4C92', '#F6C343'],
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-[#0E4C92] text-white p-6 relative">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F6C343]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Digital School Prospectus 2026–27</h3>
                  <p className="text-xs text-blue-100">{SCHOOL_INFO.name} • {SCHOOL_INFO.group}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200/80 rounded-xl p-4 text-center space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0E4C92] flex items-center justify-center mx-auto">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-800">IIT Foundation Model</h4>
                <p className="text-[11px] text-slate-500">Comprehensive physics, math & chemistry logic for Grade VI–X.</p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-xl p-4 text-center space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#F6C343] flex items-center justify-center mx-auto">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-800">Curriculum Breakdown</h4>
                <p className="text-[11px] text-slate-500">Nursery to High School STEM integration & co-curriculars.</p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-xl p-4 text-center space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-800">Safety & Transport</h4>
                <p className="text-[11px] text-slate-500">GPS App tracking, bus routes & 24/7 CCTV details.</p>
              </div>
            </div>

            {/* Quick Interactive Prospectus Overview */}
            <div className="bg-white border border-[#0E4C92]/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider">Prospectus Summary</span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">PDF Size: 3.4 MB</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">✨ <strong>Academic Calendar 2026–27</strong> with exam & sports dates</li>
                <li className="flex items-center gap-2">✨ <strong>IIT Foundation Roadmap</strong> for Grades 6, 7, 8, 9 & 10</li>
                <li className="flex items-center gap-2">✨ <strong>Fee Structure & Scholarship Criteria</strong> details</li>
                <li className="flex items-center gap-2">✨ <strong>School Bus Route Map</strong> across Khammam district</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-slate-500">
                Need print copy? Call admissions: <strong className="text-slate-800">93813 61354</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto px-6 py-3 bg-[#0E4C92] hover:bg-[#0A386D] text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#F6C343]" />
                  {downloaded ? 'Brochure Saved! (Download Again)' : 'Download PDF Prospectus'}
                </button>
              </div>
            </div>

            {downloaded && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-emerald-700 font-medium flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Vivaan_The_School_Official_Prospectus_2026.pdf generated and ready!
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
