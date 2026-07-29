import React from 'react';
import { GraduationCap, Phone, MapPin, Mail, Lock, ArrowUp, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { useSiteData } from '../context/SiteDataContext';

interface FooterProps {
  onOpenAdmissions: () => void;
  onOpenPortal: () => void;
  onOpenBrochure: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissions, onOpenPortal, onOpenBrochure, onNavigate }) => {
  const { setLoginModalOpen, setAdminModalOpen, isAdminLoggedIn } = useSiteData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-3 bg-white/95 rounded-2xl w-max shadow-md">
              <SchoolLogo size="md" showSubtext={true} />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              World-class educational institution in Khammam providing holistic Telangana State Syllabus (SSC) education from Nursery to Class 10.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F6C343] shrink-0" />
                <span>{SCHOOL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F6C343] shrink-0" />
                <span>+91 {SCHOOL_INFO.phones[0]} / +91 {SCHOOL_INFO.phones[1]}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F6C343] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About School
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-vivaan')} className="hover:text-white transition-colors">
                  Why Vivaan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('academics')} className="hover:text-white transition-colors">
                  Academic Streams
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F6C343] uppercase tracking-wider">Admissions</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={onOpenAdmissions} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F6C343]" />
                  <span>Enquire for Admission</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenBrochure} className="hover:text-white transition-colors">
                  Download Prospectus
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F6C343] uppercase tracking-wider">Campus Info</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('facilities')} className="hover:text-white transition-colors">
                  Facilities & Security
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Photo & Event Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Admissions Desk
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => (isAdminLoggedIn ? setAdminModalOpen(true) : setLoginModalOpen(true))}
                  className="px-3 py-1.5 bg-[#0E4C92]/60 hover:bg-[#0E4C92] text-[#F6C343] border border-blue-800 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Admin CMS Portal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 New Era's Vivaan The School. All Rights Reserved. A New Era Group Institution.
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-[#0E4C92] hover:bg-[#0A386D] text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
          >
            <ArrowUp className="w-4 h-4 text-[#F6C343]" /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
