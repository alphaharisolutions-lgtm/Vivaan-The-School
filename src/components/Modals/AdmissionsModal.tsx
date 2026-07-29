import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Sparkles, Send, Phone, User, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../../data/schoolData';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade?: string;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({ isOpen, onClose, defaultGrade = 'Grade VI (IIT Foundation)' }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: defaultGrade,
    phone: '',
    email: '',
    locality: 'Srinivasa Nagar, Khammam',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `VIV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(generatedId);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0E4C92', '#F6C343', '#E53935'],
      });
    } catch (err) {
      console.log('Confetti failed', err);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="bg-[#0E4C92] text-white p-6 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#F6C343]/20 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                  <Sparkles className="w-5 h-5 text-[#F6C343]" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-[#F6C343]">
                    Admissions Open 2026–27
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {SCHOOL_INFO.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#0E4C92] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Filling this form initiates your instant priority registration. Admissions team will reach out within 2 hours or call directly at <strong className="text-[#0E4C92]">93813 61354</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Parent / Guardian Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. K. Srinivas Rao"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92] focus:ring-2 focus:ring-[#0E4C92]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Student Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Siddharth Rao"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92] focus:ring-2 focus:ring-[#0E4C92]/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Class Seeking Admission *
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92] focus:ring-2 focus:ring-[#0E4C92]/10 transition-all appearance-none"
                      >
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Class 1 (State Syllabus)">Class 1 (State Syllabus)</option>
                        <option value="Class 2 (State Syllabus)">Class 2 (State Syllabus)</option>
                        <option value="Class 3 (State Syllabus)">Class 3 (State Syllabus)</option>
                        <option value="Class 4 (State Syllabus)">Class 4 (State Syllabus)</option>
                        <option value="Class 5 (State Syllabus)">Class 5 (State Syllabus)</option>
                        <option value="Class 6 (IIT Foundation - State Syllabus)">Class 6 (IIT Foundation - State Syllabus)</option>
                        <option value="Class 7 (IIT Foundation - State Syllabus)">Class 7 (IIT Foundation - State Syllabus)</option>
                        <option value="Class 8 (IIT Foundation - State Syllabus)">Class 8 (IIT Foundation - State Syllabus)</option>
                        <option value="Class 9 (IIT Foundation - State Syllabus)">Class 9 (IIT Foundation - State Syllabus)</option>
                        <option value="Class 10 (IIT Foundation - State Syllabus)">Class 10 (IIT Foundation - State Syllabus)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Contact Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 93813 61354"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92] focus:ring-2 focus:ring-[#0E4C92]/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Locality in Khammam
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Srinivasa Nagar / Wyra Road / Church Compound"
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92] focus:ring-2 focus:ring-[#0E4C92]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Additional Queries / Preferred Visit Date
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention any specific query regarding IIT foundation coaching, bus route, or fee schedule..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92] focus:ring-2 focus:ring-[#0E4C92]/10 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-5 py-2.5 border border-slate-300 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-7 py-2.5 bg-[#0E4C92] hover:bg-[#0A386D] text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#F6C343]" />
                    Submit Application
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="inline-block px-3 py-1 bg-[#F6C343]/20 border border-[#F6C343] rounded-full text-xs font-bold text-[#0E4C92]">
                  Application ID: {appId}
                </div>
                <h4 className="text-2xl font-bold text-[#0E4C92]">
                  Application Received Successfully!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.parentName}</strong>. We have registered <strong className="text-slate-900">{formData.studentName}</strong> for <strong className="text-[#0E4C92]">{formData.grade}</strong> at New Era's Vivaan The School.
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Campus Location:</span>
                    <span className="text-slate-900 font-semibold">{SCHOOL_INFO.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Direct Admissions Helpline:</span>
                    <span className="text-[#0E4C92] font-bold">93813 61354</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Office Timings:</span>
                    <span>8:30 AM – 4:00 PM</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Hello%20Vivaan%20Admissions%20Team%2C%20I%20have%20submitted%20application%20${appId}%20for%20${encodeURIComponent(formData.studentName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2"
                  >
                    💬 WhatsApp Admissions Team
                  </a>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-[#0E4C92] text-white rounded-xl text-xs font-semibold hover:bg-[#0A386D] transition-colors"
                  >
                    Done & Close
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
