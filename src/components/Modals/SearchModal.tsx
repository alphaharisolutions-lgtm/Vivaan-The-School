import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, BookOpen, MapPin, Phone, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, VIVAAN_PILLARS, ACADEMIC_PROGRAMS, FACILITIES, FAQ_LIST } from '../../data/schoolData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenAdmissions: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigateSection, onOpenAdmissions }) => {
  const [query, setQuery] = useState('');

  const sampleSearchTopics = [
    { label: 'IIT Foundation', id: 'iit-foundation' },
    { label: 'Admissions 2026-27', id: 'admissions' },
    { label: 'School Bus Transport', id: 'facilities' },
    { label: 'Classes Offered (Nursery-X)', id: 'academics' },
    { label: 'Fee & Campus Visit', id: 'admissions' },
    { label: 'Location in Khammam', id: 'contact' },
  ];

  const filteredPillars = VIVAAN_PILLARS.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()));
  const filteredFacilities = FACILITIES.filter(f => f.title.toLowerCase().includes(query.toLowerCase()) || f.description.toLowerCase().includes(query.toLowerCase()));
  const filteredPrograms = ACADEMIC_PROGRAMS.filter(pr => pr.title.toLowerCase().includes(query.toLowerCase()) || pr.description.toLowerCase().includes(query.toLowerCase()));
  const filteredFaqs = FAQ_LIST.filter(f => f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase()));

  const handleSelectSection = (id: string) => {
    onNavigateSection(id);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full max-w-2xl bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="p-4 border-b border-slate-200/80 bg-white flex items-center gap-3">
            <Search className="w-5 h-5 text-[#0E4C92]" />
            <input
              type="text"
              autoFocus
              placeholder="Search anything (e.g. IIT Foundation, Bus, Fee, Nursery, Phone)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-2 bg-transparent text-slate-800 text-sm font-medium focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-600 transition-colors"
            >
              ESC
            </button>
          </div>

          <div className="p-5 max-h-[65vh] overflow-y-auto space-y-4">
            {!query ? (
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Popular Quick Searches:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleSearchTopics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectSection(topic.id)}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:border-[#0E4C92] hover:bg-[#0E4C92]/5 rounded-xl text-xs font-semibold text-slate-700 transition-all flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#F6C343]" />
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPrograms.length > 0 && (
                  <div>
                    <h5 className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider mb-2">Academic Programs</h5>
                    <div className="space-y-2">
                      {filteredPrograms.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => handleSelectSection('academics')}
                          className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#0E4C92] cursor-pointer transition-all"
                        >
                          <div className="text-xs font-bold text-slate-900">{p.title} ({p.grades})</div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">{p.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {filteredPillars.length > 0 && (
                  <div>
                    <h5 className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider mb-2">School Features & Pillars</h5>
                    <div className="space-y-2">
                      {filteredPillars.map((pil) => (
                        <div
                          key={pil.id}
                          onClick={() => handleSelectSection('why-vivaan')}
                          className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#0E4C92] cursor-pointer transition-all"
                        >
                          <div className="text-xs font-bold text-slate-900">{pil.title}</div>
                          <div className="text-[11px] text-slate-500">{pil.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {filteredFacilities.length > 0 && (
                  <div>
                    <h5 className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider mb-2">Facilities</h5>
                    <div className="space-y-2">
                      {filteredFacilities.map((f) => (
                        <div
                          key={f.id}
                          onClick={() => handleSelectSection('facilities')}
                          className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#0E4C92] cursor-pointer transition-all"
                        >
                          <div className="text-xs font-bold text-slate-900">{f.title}</div>
                          <div className="text-[11px] text-slate-500">{f.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {filteredFaqs.length > 0 && (
                  <div>
                    <h5 className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider mb-2">FAQs</h5>
                    <div className="space-y-2">
                      {filteredFaqs.map((faq) => (
                        <div
                          key={faq.id}
                          onClick={() => handleSelectSection('faq')}
                          className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#0E4C92] cursor-pointer transition-all"
                        >
                          <div className="text-xs font-bold text-slate-900">{faq.question}</div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">{faq.answer}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
