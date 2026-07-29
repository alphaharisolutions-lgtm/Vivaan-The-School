import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, RotateCcw, Building, Sparkles, Sliders, Image, Type, Phone, CheckCircle2, Award, Tv, Layers } from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';

export const AdminCMSModal: React.FC = () => {
  const { adminModalOpen, setAdminModalOpen, siteData, updateSiteData, resetSiteData, logoutAdmin } = useSiteData();
  const [activeTab, setActiveTab] = useState<'hero' | 'general' | 'stats' | 'brand' | 'about' | 'facilities'>('hero');
  const [formData, setFormData] = useState(siteData);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state if modal reopens
  React.useEffect(() => {
    setFormData(siteData);
  }, [siteData, adminModalOpen]);

  if (!adminModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteData(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all website data to original defaults?')) {
      resetSiteData();
      setFormData(siteData);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white border border-slate-200 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Top Header */}
          <div className="bg-[#0E4C92] text-white p-4 sm:p-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center font-bold border border-white/20">
                <Sliders className="w-5 h-5 text-[#F6C343]" />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight">Website Control Center (Admin CMS)</h3>
                <p className="text-xs text-blue-200 font-medium">Edit images, text, statistics, numbers, and data live across every section</p>
              </div>
            </div>
            <button
              onClick={() => setAdminModalOpen(false)}
              className="p-2 rounded-xl text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-3 gap-2 overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveTab('hero')}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 border-t border-x ${
                activeTab === 'hero'
                  ? 'bg-white text-[#0E4C92] border-slate-200 border-b-white -mb-px'
                  : 'text-slate-600 border-transparent hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#F6C343]" /> Hero Section & Media
            </button>

            <button
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 border-t border-x ${
                activeTab === 'stats'
                  ? 'bg-white text-[#0E4C92] border-slate-200 border-b-white -mb-px'
                  : 'text-slate-600 border-transparent hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-[#F6C343]" /> Hero Statistics Grid
            </button>

            <button
              onClick={() => setActiveTab('brand')}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 border-t border-x ${
                activeTab === 'brand'
                  ? 'bg-white text-[#0E4C92] border-slate-200 border-b-white -mb-px'
                  : 'text-slate-600 border-transparent hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4 text-[#F6C343]" /> Brand Banner Section
            </button>

            <button
              onClick={() => setActiveTab('general')}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 border-t border-x ${
                activeTab === 'general'
                  ? 'bg-white text-[#0E4C92] border-slate-200 border-b-white -mb-px'
                  : 'text-slate-600 border-transparent hover:text-slate-900'
              }`}
            >
              <Phone className="w-4 h-4 text-[#F6C343]" /> School Info & Contacts
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 border-t border-x ${
                activeTab === 'about'
                  ? 'bg-white text-[#0E4C92] border-slate-200 border-b-white -mb-px'
                  : 'text-slate-600 border-transparent hover:text-slate-900'
              }`}
            >
              <Type className="w-4 h-4 text-[#F6C343]" /> About, Mission & Vision
            </button>

            <button
              onClick={() => setActiveTab('facilities')}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 border-t border-x ${
                activeTab === 'facilities'
                  ? 'bg-white text-[#0E4C92] border-slate-200 border-b-white -mb-px'
                  : 'text-slate-600 border-transparent hover:text-slate-900'
              }`}
            >
              <Tv className="w-4 h-4 text-[#F6C343]" /> Facilities & Images
            </button>
          </div>

          {/* Form Content Body */}
          <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-6 flex-1">
            {savedSuccess && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs font-bold text-emerald-800 flex items-center justify-between shadow-sm animate-fadeIn">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Website content updated successfully! All changes are live.
                </span>
                <span className="text-[10px] text-emerald-600 uppercase tracking-widest">Saved</span>
              </div>
            )}

            {/* TAB: HERO SECTION & MEDIA */}
            {activeTab === 'hero' && (
              <div className="space-y-4">
                <h4 className="text-sm font-black text-[#0E4C92] uppercase tracking-wider border-b pb-2">Hero Section Headlines & Media</h4>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Admissions Badge Text</label>
                  <input
                    type="text"
                    value={formData.heroData.badgeText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        heroData: { ...formData.heroData, badgeText: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Main Hero Headline</label>
                  <textarea
                    rows={2}
                    value={formData.heroData.headline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        heroData: { ...formData.heroData, headline: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Background Video Path / URL</label>
                    <input
                      type="text"
                      value={formData.heroData.videoUrl}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          heroData: { ...formData.heroData, videoUrl: e.target.value },
                        })
                      }
                      placeholder="/hero video.mp4"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Fallback Image Path / URL</label>
                    <input
                      type="text"
                      value={formData.heroData.bgImageUrl}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          heroData: { ...formData.heroData, bgImageUrl: e.target.value },
                        })
                      }
                      placeholder="/hero-bg.png"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB: HERO STATISTICS GRID */}
            {activeTab === 'stats' && (
              <div className="space-y-4">
                <h4 className="text-sm font-black text-[#0E4C92] uppercase tracking-wider border-b pb-2">Hero Statistics Grid Numbers</h4>
                <p className="text-xs text-slate-500 font-medium">Edit the values, titles, and descriptions shown in the 5 cards below the main hero title:</p>

                <div className="space-y-3">
                  {formData.heroStats.map((stat, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Count / Number Value</label>
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => {
                            const newStats = [...formData.heroStats];
                            newStats[idx].value = e.target.value;
                            setFormData({ ...formData, heroStats: newStats });
                          }}
                          className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#0E4C92] focus:border-[#0E4C92] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Stat Label</label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => {
                            const newStats = [...formData.heroStats];
                            newStats[idx].label = e.target.value;
                            setFormData({ ...formData, heroStats: newStats });
                          }}
                          className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:border-[#0E4C92] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Stat Subtitle / Suffix</label>
                        <input
                          type="text"
                          value={stat.suffix}
                          onChange={(e) => {
                            const newStats = [...formData.heroStats];
                            newStats[idx].suffix = e.target.value;
                            setFormData({ ...formData, heroStats: newStats });
                          }}
                          className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 focus:border-[#0E4C92] outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: BRAND BANNER */}
            {activeTab === 'brand' && (
              <div className="space-y-4">
                <h4 className="text-sm font-black text-[#0E4C92] uppercase tracking-wider border-b pb-2">Brand Banner Section Data</h4>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">School Brand Title</label>
                  <input
                    type="text"
                    value={formData.brandBannerData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brandBannerData: { ...formData.brandBannerData, title: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Yellow Badge Text</label>
                  <input
                    type="text"
                    value={formData.brandBannerData.badgeText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brandBannerData: { ...formData.brandBannerData, badgeText: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">School Logo Image Path / URL</label>
                  <input
                    type="text"
                    value={formData.brandBannerData.logoUrl}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brandBannerData: { ...formData.brandBannerData, logoUrl: e.target.value },
                      })
                    }
                    placeholder="/logo.png"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>
              </div>
            )}

            {/* TAB: SCHOOL INFO & CONTACTS */}
            {activeTab === 'general' && (
              <div className="space-y-4">
                <h4 className="text-sm font-black text-[#0E4C92] uppercase tracking-wider border-b pb-2">School Details & Phone Numbers</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Official School Name</label>
                    <input
                      type="text"
                      value={formData.schoolInfo.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          schoolInfo: { ...formData.schoolInfo, name: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:bg-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent Educational Group</label>
                    <input
                      type="text"
                      value={formData.schoolInfo.group}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          schoolInfo: { ...formData.schoolInfo, group: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:bg-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Campus Location & Address</label>
                  <input
                    type="text"
                    value={formData.schoolInfo.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schoolInfo: { ...formData.schoolInfo, location: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Helpline Phone 1</label>
                    <input
                      type="text"
                      value={formData.schoolInfo.phones[0]}
                      onChange={(e) => {
                        const newPhones = [...formData.schoolInfo.phones];
                        newPhones[0] = e.target.value;
                        setFormData({
                          ...formData,
                          schoolInfo: { ...formData.schoolInfo, phones: newPhones },
                        });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0E4C92] focus:bg-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Helpline Phone 2</label>
                    <input
                      type="text"
                      value={formData.schoolInfo.phones[1]}
                      onChange={(e) => {
                        const newPhones = [...formData.schoolInfo.phones];
                        newPhones[1] = e.target.value;
                        setFormData({
                          ...formData,
                          schoolInfo: { ...formData.schoolInfo, phones: newPhones },
                        });
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0E4C92] focus:bg-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB: ABOUT, MISSION & VISION */}
            {activeTab === 'about' && (
              <div className="space-y-4">
                <h4 className="text-sm font-black text-[#0E4C92] uppercase tracking-wider border-b pb-2">About Section & Vision</h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">About Section Title</label>
                  <input
                    type="text"
                    value={formData.aboutData.heading}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutData: { ...formData.aboutData, heading: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">About Section Overview</label>
                  <textarea
                    rows={2}
                    value={formData.aboutData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutData: { ...formData.aboutData, description: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mission Statement</label>
                  <textarea
                    rows={3}
                    value={formData.aboutData.missionText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutData: { ...formData.aboutData, missionText: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Vision Statement</label>
                  <textarea
                    rows={3}
                    value={formData.aboutData.visionText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutData: { ...formData.aboutData, visionText: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Teacher Student Ratio Count</label>
                    <input
                      type="text"
                      value={formData.aboutData.teacherRatio}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          aboutData: { ...formData.aboutData, teacherRatio: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-[#0E4C92] focus:bg-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">High School Stream Name</label>
                    <input
                      type="text"
                      value={formData.aboutData.highSchoolStream}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          aboutData: { ...formData.aboutData, highSchoolStream: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-amber-700 focus:bg-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB: FACILITIES & IMAGES */}
            {activeTab === 'facilities' && (
              <div className="space-y-4">
                <h4 className="text-sm font-black text-[#0E4C92] uppercase tracking-wider border-b pb-2">Facilities Titles & Image URLs</h4>
                
                <div className="space-y-4">
                  {formData.facilities.map((fac, idx) => (
                    <div key={fac.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Facility Name</label>
                          <input
                            type="text"
                            value={fac.title}
                            onChange={(e) => {
                              const newFacs = [...formData.facilities];
                              newFacs[idx].title = e.target.value;
                              setFormData({ ...formData, facilities: newFacs });
                            }}
                            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:border-[#0E4C92] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Image URL / Path</label>
                          <input
                            type="text"
                            value={fac.image}
                            onChange={(e) => {
                              const newFacs = [...formData.facilities];
                              newFacs[idx].image = e.target.value;
                              setFormData({ ...formData, facilities: newFacs });
                            }}
                            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:border-[#0E4C92] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Description</label>
                        <input
                          type="text"
                          value={fac.description}
                          onChange={(e) => {
                            const newFacs = [...formData.facilities];
                            newFacs[idx].description = e.target.value;
                            setFormData({ ...formData, facilities: newFacs });
                          }}
                          className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-normal text-slate-600 focus:border-[#0E4C92] outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Form Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All to Defaults</span>
                </button>

                <button
                  type="button"
                  onClick={logoutAdmin}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                >
                  Logout
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAdminModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold tracking-wide shadow-md shadow-blue-900/20 transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4 text-[#F6C343]" />
                  <span>Save Changes Live</span>
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
