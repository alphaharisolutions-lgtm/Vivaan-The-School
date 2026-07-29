import React from 'react';
import { Sliders, RotateCcw, LogOut, ShieldCheck } from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';

export const AdminBar: React.FC = () => {
  const { isAdminLoggedIn, viewMode, setViewMode, logoutAdmin, resetSiteData } = useSiteData();

  if (!isAdminLoggedIn) return null;

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-amber-500/50 sticky top-0 z-50 flex items-center justify-between shadow-lg font-mono">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <ShieldCheck className="w-4 h-4 text-[#F6C343]" />
        <span className="font-bold text-[#F6C343]">Admin Mode Active</span>
        <span className="text-slate-400 hidden sm:inline">| Edit & delete images, stats & data</span>
      </div>

      <div className="flex items-center gap-3">
        {viewMode === 'website' ? (
          <button
            onClick={() => setViewMode('admin')}
            className="px-3.5 py-1.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-lg font-bold flex items-center gap-1.5 transition-colors text-[11px] shadow-sm"
          >
            <Sliders className="w-3.5 h-3.5 text-[#F6C343]" />
            <span>Open Admin Dashboard Page</span>
          </button>
        ) : (
          <button
            onClick={() => setViewMode('website')}
            className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg font-bold flex items-center gap-1.5 transition-colors text-[11px] shadow-sm"
          >
            <Sliders className="w-3.5 h-3.5 text-emerald-300" />
            <span>View Live Website</span>
          </button>
        )}

        <button
          onClick={() => {
            if (window.confirm('Reset all website content to defaults?')) {
              resetSiteData();
            }
          }}
          className="px-2.5 py-1 bg-red-900/60 hover:bg-red-900 text-red-200 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-colors hidden md:flex"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Defaults</span>
        </button>

        <button
          onClick={logoutAdmin}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[11px] font-medium flex items-center gap-1 transition-colors"
        >
          <LogOut className="w-3 h-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
