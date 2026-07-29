import React, { useRef } from 'react';
import { Upload, Image as ImageIcon, X, Link, CheckCircle2 } from 'lucide-react';

interface ImageUploaderProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  accept?: string;
  placeholder?: string;
  helpText?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  value,
  onChange,
  accept = 'image/*',
  placeholder = 'Enter image URL or select file...',
  helpText = 'Upload a photo/video from your device or paste a web URL',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert file to Data URL for instant live rendering
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        onChange(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClear = () => {
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isVideo = accept.includes('video') || value.endsWith('.mp4') || value.startsWith('data:video');

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
        {label}
      </label>

      {/* Media Preview Box */}
      {value ? (
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-2 flex items-center justify-between gap-3">
          <div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center">
            {isVideo ? (
              <video src={value} className="w-full h-full object-cover" autoPlay loop muted playsInline />
            ) : (
              <img src={value} alt="Preview" className="w-full h-full object-cover" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Media Selected</span>
            </div>
            <p className="text-[11px] text-slate-400 truncate mt-0.5" title={value}>
              {value.startsWith('data:') ? 'Local file uploaded' : value}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClear}
            className="p-2 bg-slate-800 hover:bg-red-900 text-slate-400 hover:text-red-200 rounded-xl transition-colors shrink-0"
            title="Remove media"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : null}

      {/* Upload Buttons & URL Input */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <input
          type="file"
          ref={fileInputRef}
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <Upload className="w-4 h-4 text-[#F6C343]" />
          <span>Upload File from Device</span>
        </button>

        <div className="relative flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-medium text-white focus:border-[#0E4C92] outline-none"
          />
          <Link className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3 pointer-events-none" />
        </div>
      </div>

      {helpText && <p className="text-[11px] text-slate-500">{helpText}</p>}
    </div>
  );
};
