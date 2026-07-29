import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, User, Key, ShieldCheck, CheckCircle2, ArrowRight, Bus, BookOpen, Award, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';

interface PortalLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalLoginModal: React.FC<PortalLoginModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'parent' | 'student' | 'staff'>('parent');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleDemoLogin = (type: 'parent' | 'student' | 'staff') => {
    setRole(type);
    if (type === 'parent') {
      setUsername('PAR-93813');
      setPassword('••••••••');
    } else if (type === 'student') {
      setUsername('STU-VIV-2026');
      setPassword('••••••••');
    } else {
      setUsername('STAFF-KHM-102');
      setPassword('••••••••');
    }
    setLoggedIn(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const resetModal = () => {
    setLoggedIn(false);
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
          className="relative w-full max-w-lg bg-[#FCFAF7] border border-[#0E4C92]/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-[#0E4C92] text-white p-6 relative">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F6C343]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Vivaan ERP & Portal Login</h3>
                  <p className="text-xs text-blue-100">{SCHOOL_INFO.name} • Secure Access</p>
                </div>
              </div>
              <button
                onClick={resetModal}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-5">
            {!loggedIn ? (
              <>
                {/* Role Tabs */}
                <div className="flex bg-slate-200/60 p-1 rounded-xl">
                  <button
                    onClick={() => setRole('parent')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      role === 'parent' ? 'bg-[#0E4C92] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Parent Portal
                  </button>
                  <button
                    onClick={() => setRole('student')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      role === 'student' ? 'bg-[#0E4C92] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Student Portal
                  </button>
                  <button
                    onClick={() => setRole('staff')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      role === 'staff' ? 'bg-[#0E4C92] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Staff ERP
                  </button>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {role === 'parent' ? 'Parent Registered Mobile / ID' : role === 'student' ? 'Student Roll Number' : 'Staff Employee ID'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder={role === 'parent' ? '93813 61354' : role === 'student' ? 'VIV-2026-104' : 'EMP-KHM-088'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Password / PIN</label>
                    <div className="relative">
                      <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0E4C92] hover:bg-[#0A386D] text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    Log In to {role === 'parent' ? 'Parent Portal' : role === 'student' ? 'Student Portal' : 'Staff ERP'}
                    <ArrowRight className="w-4 h-4 text-[#F6C343]" />
                  </button>
                </form>

                <div className="border-t border-slate-200 pt-4 space-y-2">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                    Instant Demo Portal Previews:
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleDemoLogin('parent')}
                      className="py-2 px-3 bg-white border border-[#0E4C92]/20 hover:border-[#0E4C92] rounded-xl text-[11px] font-semibold text-[#0E4C92] transition-all"
                    >
                      👨‍👩‍👧 Parent Demo
                    </button>
                    <button
                      onClick={() => handleDemoLogin('student')}
                      className="py-2 px-3 bg-white border border-[#0E4C92]/20 hover:border-[#0E4C92] rounded-xl text-[11px] font-semibold text-[#0E4C92] transition-all"
                    >
                      🎓 Student Demo
                    </button>
                    <button
                      onClick={() => handleDemoLogin('staff')}
                      className="py-2 px-3 bg-white border border-[#0E4C92]/20 hover:border-[#0E4C92] rounded-xl text-[11px] font-semibold text-[#0E4C92] transition-all"
                    >
                      🏫 Staff Demo
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Successfully authenticated as {role.toUpperCase()} (ID: {username || 'PAR-93813'})
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                  <h4 className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
                    {role === 'parent' ? 'Parent Dashboard Quick View' : role === 'student' ? 'Student Learning Portal' : 'Staff Attendance & Exam Panel'}
                  </h4>

                  {role === 'parent' && (
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                        <span className="text-slate-500 block text-[10px]">Student Attendance</span>
                        <strong className="text-emerald-600 font-bold">98.5% (Present Today)</strong>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                        <span className="text-slate-500 block text-[10px]">Bus GPS Live Route</span>
                        <strong className="text-[#0E4C92] font-bold flex items-center gap-1">
                          <Bus className="w-3.5 h-3.5 text-[#F6C343]" /> Route #4 Active
                        </strong>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                        <span className="text-slate-500 block text-[10px]">IIT Foundation Rank</span>
                        <strong className="text-purple-700 font-bold">Rank 3 in Grade VII</strong>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                        <span className="text-slate-500 block text-[10px]">Fee Receipt</span>
                        <strong className="text-slate-800 font-bold">Paid • Q2 Clear</strong>
                      </div>
                    </div>
                  )}

                  {role === 'student' && (
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
                        <span>📖 Today's Homework (Physics - IIT Foundation):</span>
                        <strong className="text-emerald-600">Submitted</strong>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
                        <span>🧪 Next Lab Session:</span>
                        <strong className="text-[#0E4C92]">Chemistry Lab (Wed 11 AM)</strong>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
                        <span>🏆 Olympiad Prep Quiz:</span>
                        <strong className="text-amber-600">Score 92/100</strong>
                      </div>
                    </div>
                  )}

                  {role === 'staff' && (
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
                        <span>Class Grade VII-A Attendance:</span>
                        <strong className="text-emerald-600">32/32 Marked</strong>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
                        <span>IIT Foundation Test Marks Upload:</span>
                        <strong className="text-[#0E4C92]">Completed</strong>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setLoggedIn(false)}
                    className="text-xs font-medium text-slate-500 hover:text-slate-800"
                  >
                    ← Back to Login
                  </button>
                  <button
                    onClick={resetModal}
                    className="px-5 py-2 bg-[#0E4C92] text-white rounded-xl text-xs font-semibold"
                  >
                    Close Demo View
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
