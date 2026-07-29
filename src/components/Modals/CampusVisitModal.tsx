import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Building2, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../../data/schoolData';

interface CampusVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusVisitModal: React.FC<CampusVisitModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 11:30 AM (Morning Slot)');
  const [grade, setGrade] = useState('Grade VI (IIT Foundation)');
  const [confirmed, setConfirmed] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0E4C92', '#F6C343'],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => {
    setConfirmed(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-[#0E4C92] text-white p-6 relative">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F6C343]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Book a Campus Tour Visit</h3>
                  <p className="text-xs text-blue-100">{SCHOOL_INFO.name} • Srinivasa Nagar, Khammam</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {!confirmed ? (
              <form onSubmit={handleBook} className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 text-xs text-slate-600">
                  <h4 className="font-bold text-[#0E4C92] flex items-center gap-1.5 text-xs uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#F6C343]" /> What to expect on your tour:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 pt-1 text-slate-700">
                    <li className="flex items-center gap-1.5">✓ Smart Digital Classrooms</li>
                    <li className="flex items-center gap-1.5">✓ Science & Computer Labs</li>
                    <li className="flex items-center gap-1.5">✓ IIT Foundation Wing</li>
                    <li className="flex items-center gap-1.5">✓ Principal & Mentor Interaction</li>
                  </ul>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Parent Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. K. Srinivas Rao"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 93813 61354"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Grade of Interest</label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
                    >
                      <option value="Nursery to UKG">Nursery to UKG</option>
                      <option value="Grades I to V">Grades I to V (Primary)</option>
                      <option value="Grades VI to VIII (IIT Foundation)">Grades VI to VIII (IIT Foundation)</option>
                      <option value="Grades IX & X (IIT Foundation)">Grades IX & X (IIT Foundation)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time Slot</label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
                    >
                      <option value="10:00 AM - 11:30 AM (Morning Slot)">10:00 AM - 11:30 AM</option>
                      <option value="11:30 AM - 01:00 PM (Midday Slot)">11:30 AM - 01:00 PM</option>
                      <option value="02:30 PM - 04:00 PM (Afternoon Slot)">02:30 PM - 04:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-medium text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#0E4C92] text-white rounded-xl text-xs font-semibold hover:bg-[#0A386D] shadow-md flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#F6C343]" />
                    Confirm Campus Visit
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h4 className="text-xl font-bold text-[#0E4C92]">Campus Visit Scheduled!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  We look forward to welcoming you, <strong className="text-slate-900">{parentName}</strong>, at our campus in Srinivasa Nagar, Khammam.
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-1.5 max-w-sm mx-auto text-left">
                  <p><strong>📅 Visit Date:</strong> {visitDate || 'Tomorrow'}</p>
                  <p><strong>⏰ Slot:</strong> {timeSlot}</p>
                  <p><strong>📍 Location:</strong> Srinivasa Nagar, Khammam</p>
                  <p><strong>📞 Support Hotline:</strong> 93813 61354 / 93980 52389</p>
                </div>

                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-[#0E4C92] text-white rounded-xl text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
