import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Phone, Search, Lock, MoreVertical, X, GraduationCap, ChevronDown, BookOpen, Building2, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface HeaderProps {
  onOpenAdmissions: () => void;
  onOpenVisit: () => void;
  onOpenPortal: () => void;
  onOpenSearch: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAdmissions,
  onOpenVisit,
  onOpenPortal,
  onOpenSearch,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Auto-hide navbar when scrolling DOWN, reveal when scrolling UP
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY.current + 8) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 8) {
          // Scrolling up -> reveal navbar
          setIsVisible(true);
        }
      } else {
        // At top of page -> always visible
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLinkItem {
    label: string;
    id: string;
    hasMega?: boolean;
    isSpecial?: boolean;
  }

  const navLinks: NavLinkItem[] = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Why Vivaan', id: 'why-vivaan' },
    { label: 'Academics', id: 'academics', hasMega: true },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Student Life', id: 'student-life' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Utility Contact Bar */}
      <div className="bg-[#0E4C92] text-white text-xs py-2 px-4 sm:px-8 border-b border-blue-900/30 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-200 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F6C343]" />
              Srinivasa Nagar, Khammam, Telangana
            </span>
            <span className="hidden md:inline text-blue-300">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#F6C343]" />
              Helpline: <strong>93813 61354</strong> / <strong>93980 52389</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={onOpenVisit}
              className="hover:text-[#F6C343] transition-colors font-semibold"
            >
              Book Campus Tour
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFAF7]/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5 sm:py-3'
            : 'bg-[#FCFAF7] border-b border-slate-200/50 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Box */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <SchoolLogo size="md" showSubtext={true} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div key={link.id} className="relative">
                <button
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => link.hasMega && setMegaMenuOpen(true)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    activeSection === link.id
                      ? 'text-[#0E4C92] bg-[#0E4C92]/10'
                      : link.isSpecial
                      ? 'text-[#E53935] bg-red-50 hover:bg-red-100 border border-red-200/80'
                      : 'text-slate-700 hover:text-[#0E4C92] hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                  {link.hasMega && <ChevronDown className="w-3 h-3 text-slate-400" />}
                </button>

                {/* Mega Menu Dropdown */}
                {link.hasMega && megaMenuOpen && (
                  <div
                    onMouseLeave={() => setMegaMenuOpen(false)}
                    className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-xl p-3 z-50 animate-fadeIn"
                  >
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                      Academic Streams
                    </div>
                    <div className="space-y-1">
                      <button
                        onClick={() => handleNavClick('academics')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-800">Nursery & Kindergarten</div>
                        <div className="text-[10px] text-slate-500">Play-way & Montessori sensory development</div>
                      </button>
                      <button
                        onClick={() => handleNavClick('academics')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-800">Primary (Grades I – V)</div>
                        <div className="text-[10px] text-slate-500">Activity-based STEM & foundational fluency</div>
                      </button>
                      <button
                        onClick={() => handleNavClick('academics')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-800">High School (Classes VI – X)</div>
                        <div className="text-[10px] text-slate-500">Telangana State Board (SSC) academic rigor</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Controls - Organized per device */}
          <div className="flex items-center gap-2">
            {/* Desktop Only Search Button */}
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex p-2.5 bg-white border border-slate-200 hover:border-[#0E4C92] rounded-xl text-slate-600 hover:text-[#0E4C92] transition-colors shadow-2xs"
              title="Search school topics"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Desktop Only Enquire Now Button */}
            <button
              onClick={onOpenAdmissions}
              className="hidden lg:flex px-6 py-2.5 bg-[#0E4C92] text-white rounded-full text-xs font-bold tracking-wide shadow-lg shadow-blue-900/10 hover:bg-[#083a73] transition-all items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F6C343]" />
              <span>ENQUIRE NOW</span>
            </button>

            {/* Mobile Only Menu Trigger (3 Dots Icon) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-white border border-slate-200 rounded-xl text-[#0E4C92] hover:bg-slate-100 transition-colors shadow-2xs shrink-0"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <MoreVertical className="w-5 h-5 text-[#0E4C92]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {/* Mobile Search Button Option */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full text-left px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#0E4C92]" />
                    Search School Info
                  </span>
                  <span className="text-[10px] text-slate-400">🔍</span>
                </button>

                {/* Mobile Nav Links */}
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      activeSection === link.id
                        ? 'bg-[#0E4C92] text-white'
                        : link.isSpecial
                        ? 'bg-red-50 text-[#E53935] border border-red-200'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.isSpecial && <Sparkles className="w-3.5 h-3.5 text-[#F6C343]" />}
                  </button>
                ))}

                {/* Mobile Drawer Action Buttons */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAdmissions();
                    }}
                    className="w-full py-3 px-4 bg-[#0E4C92] text-white rounded-xl text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F6C343]" />
                    <span>ENQUIRE NOW</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenVisit();
                    }}
                    className="w-full py-2.5 px-3 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold text-[#0E4C92] text-center"
                  >
                    Book Campus Tour
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};
