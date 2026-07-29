import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 'md',
  showSubtext = true
}) => {
  const sizeClass = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Perfect 1:1 Square Uncompressed Logo */}
      <img
        src="/logo.png"
        alt="A NEW ERA GROUP Logo"
        className={`${sizeClass} aspect-square object-cover object-center shrink-0 rounded-xl shadow-sm border border-slate-200/60 transition-transform duration-300 hover:scale-105`}
      />

      {showSubtext && (
        <div className="flex flex-col">
          <span className="serif text-lg sm:text-2xl font-black text-[#0A192F] tracking-tight leading-none">
            Vivaan <span className="text-[#004e9a] font-semibold">The School</span>
          </span>
          <span className="text-[10px] font-bold text-[#004e9a] tracking-wider uppercase mt-1">
            A New Era Group Institution
          </span>
        </div>
      )}
    </div>
  );
};
