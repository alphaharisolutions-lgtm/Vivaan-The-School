import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Key, ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';

export const AdminLoginModal: React.FC = () => {
  const { loginModalOpen, setLoginModalOpen, loginAdmin } = useSiteData();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!loginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter admin password');
      return;
    }

    const success = loginAdmin(password);
    if (!success) {
      setError('Invalid password. Try "admin" or "admin123"');
    } else {
      setPassword('');
      setError('');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0E4C92] text-white flex items-center justify-center font-bold shadow-md">
                <Lock className="w-5 h-5 text-[#F6C343]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#0A192F]">Admin Login</h3>
                <p className="text-xs text-slate-500 font-medium">Access Website Control Center</p>
              </div>
            </div>
            <button
              onClick={() => setLoginModalOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Administrator Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter admin password (e.g. admin)"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#0E4C92] focus:bg-white transition-colors"
                  autoFocus
                />
                <Key className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5">
                💡 Default passcode: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-[#0E4C92]">admin</code> or <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-[#0E4C92]">admin123</code>
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold tracking-wide shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#F6C343]" />
              <span>Login to Admin Dashboard</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
