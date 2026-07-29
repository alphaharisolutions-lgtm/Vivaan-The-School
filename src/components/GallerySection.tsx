import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem } from '../types';
import { Image, X, Calendar, Sparkles, Maximize2 } from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const { siteData } = useSiteData();
  const galleryItems = siteData.gallery;

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0E4C92] uppercase tracking-wider">
            <Image className="w-3.5 h-3.5 text-[#F6C343]" /> Life at Vivaan
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A192F] tracking-tight">
            Photo & Activity Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Glimpses of daily smart classroom activities, science exhibitions, sports tournaments, and cultural celebrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { label: 'All Moments', id: 'all' },
            { label: 'Smart Campus', id: 'campus' },
            { label: 'Science Expo', id: 'science' },
            { label: 'Sports Meet', id: 'sports' },
            { label: 'Arts & Culture', id: 'arts' },
            { label: 'Events & Days', id: 'events' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setFilter(f.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === f.id
                  ? 'bg-[#0E4C92] text-white shadow'
                  : 'bg-[#FCFAF7] border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Max 8 Initially) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setActiveItem(item)}
              className="group relative bg-[#FCFAF7] border border-slate-200/80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <div className="text-xs font-bold text-[#F6C343]">{item.date}</div>
                  <div className="text-sm font-bold line-clamp-1">{item.title}</div>
                  <div className="text-[11px] text-slate-200 line-clamp-1 mt-0.5">{item.caption}</div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-slate-800">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More / Show Less Button */}
        {filteredItems.length > 8 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-[#0E4C92] hover:bg-[#083a73] text-white font-bold rounded-2xl text-xs tracking-wide shadow-md hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#F6C343]" />
              <span>{showAll ? 'Show Less Photos' : `See More Photos (${filteredItems.length - 8} more)`}</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] bg-black flex items-center justify-center">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="max-h-[70vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#FCFAF7] space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="uppercase text-[#0E4C92] font-bold">{activeItem.category}</span>
                  <span>{activeItem.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{activeItem.title}</h3>
                <p className="text-xs text-slate-600">{activeItem.caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
