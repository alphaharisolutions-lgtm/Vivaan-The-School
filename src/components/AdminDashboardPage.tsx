import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sliders,
  Trash2,
  Plus,
  Save,
  RotateCcw,
  LogOut,
  Globe,
  Sparkles,
  Building,
  Award,
  Phone,
  Type,
  Tv,
  Image,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Video,
  Layers,
} from 'lucide-react';
import { useSiteData } from '../context/SiteDataContext';
import { SchoolLogo } from './SchoolLogo';
import { ImageUploader } from './ImageUploader';

export const AdminDashboardPage: React.FC = () => {
  const {
    siteData,
    updateSiteData,
    resetSiteData,
    logoutAdmin,
    setAdminModalOpen,
  } = useSiteData();

  const [activeTab, setActiveTab] = useState<
    'hero' | 'stats' | 'brand' | 'about' | 'facilities' | 'gallery' | 'general'
  >('hero');

  const [formData, setFormData] = useState(siteData);
  const [savedMessage, setSavedMessage] = useState('');

  // Keep state synced with siteData
  React.useEffect(() => {
    setFormData(siteData);
  }, [siteData]);

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    updateSiteData(formData);
    setSavedMessage('Website updated successfully! All changes are live.');
    setTimeout(() => setSavedMessage(''), 3500);
  };

  const handleReset = () => {
    if (
      window.confirm(
        'Are you sure you want to reset all website data to original defaults?'
      )
    ) {
      resetSiteData();
      setFormData(siteData);
      setSavedMessage('All data reset to defaults.');
      setTimeout(() => setSavedMessage(''), 3500);
    }
  };

  // --- DELETE HELPERS ---
  const handleDeleteStat = (index: number) => {
    if (window.confirm('Delete this statistic item from the Hero section?')) {
      const newStats = formData.heroStats.filter((_, i) => i !== index);
      const updated = { ...formData, heroStats: newStats };
      setFormData(updated);
      updateSiteData(updated);
    }
  };

  const handleAddStat = () => {
    const newStat = {
      label: 'New Metric',
      value: '100+',
      suffix: 'Custom Statistic',
    };
    const updated = {
      ...formData,
      heroStats: [...formData.heroStats, newStat],
    };
    setFormData(updated);
    updateSiteData(updated);
  };

  const handleDeleteFacility = (id: string) => {
    if (window.confirm('Delete this facility card from the website?')) {
      const newFacs = formData.facilities.filter((f) => f.id !== id);
      const updated = { ...formData, facilities: newFacs };
      setFormData(updated);
      updateSiteData(updated);
    }
  };

  const handleAddFacility = () => {
    const newFacility = {
      id: 'facility-' + Date.now(),
      title: 'New Campus Facility',
      category: 'Campus',
      description: 'Enter facility description here...',
      features: ['Feature 1', 'Feature 2'],
      image:
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
      iconName: 'Building',
    };
    const updated = {
      ...formData,
      facilities: [...formData.facilities, newFacility],
    };
    setFormData(updated);
    updateSiteData(updated);
  };

  const handleDeleteGallery = (id: string) => {
    if (window.confirm('Delete this image item from the gallery?')) {
      const newGallery = formData.gallery.filter((g) => g.id !== id);
      const updated = { ...formData, gallery: newGallery };
      setFormData(updated);
      updateSiteData(updated);
    }
  };

  const handleAddGallery = () => {
    const newItem = {
      id: 'gallery-' + Date.now(),
      title: 'New Gallery Event Photo',
      category: 'events',
      imageUrl:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
      caption: 'Event description...',
      date: 'August 2026',
    };
    const updated = {
      ...formData,
      gallery: [...formData.gallery, newItem],
    };
    setFormData(updated);
    updateSiteData(updated);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white rounded-xl">
            <SchoolLogo size="sm" showSubtext={false} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <h1 className="text-base font-black text-white tracking-tight">
                Vivaan School Admin Control Center
              </h1>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Full-Page Website Management & Data CMS
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAdminModalOpen(false)}
            className="px-4 py-2 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
          >
            <Globe className="w-4 h-4 text-[#F6C343]" />
            <span>View Live Website</span>
          </button>

          <button
            onClick={handleReset}
            className="px-3.5 py-2 bg-red-900/40 hover:bg-red-900 text-red-200 border border-red-800/60 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={logoutAdmin}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Body Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Navigation Sidebar */}
        <aside className="w-64 bg-slate-950/80 border-r border-slate-800 p-4 space-y-2 shrink-0 overflow-y-auto">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 py-2">
            Website Sections
          </div>

          <button
            onClick={() => setActiveTab('hero')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
              activeTab === 'hero'
                ? 'bg-[#0E4C92] text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Video className="w-4 h-4 text-[#F6C343]" />
            <span>Hero & Media</span>
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
              activeTab === 'stats'
                ? 'bg-[#0E4C92] text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4 text-[#F6C343]" />
            <span>Hero Statistics Grid</span>
          </button>

          <button
            onClick={() => setActiveTab('brand')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
              activeTab === 'brand'
                ? 'bg-[#0E4C92] text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Building className="w-4 h-4 text-[#F6C343]" />
            <span>Brand Banner Section</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
              activeTab === 'about'
                ? 'bg-[#0E4C92] text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Type className="w-4 h-4 text-[#F6C343]" />
            <span>About, Mission & Vision</span>
          </button>

          <button
            onClick={() => setActiveTab('facilities')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
              activeTab === 'facilities'
                ? 'bg-[#0E4C92] text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Tv className="w-4 h-4 text-[#F6C343]" />
            <span>Facilities & Campus</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
              activeTab === 'gallery'
                ? 'bg-[#0E4C92] text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Image className="w-4 h-4 text-[#F6C343]" />
            <span>Photo & Event Gallery</span>
          </button>

          <button
            onClick={() => setActiveTab('general')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${
              activeTab === 'general'
                ? 'bg-[#0E4C92] text-white shadow-md'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Phone className="w-4 h-4 text-[#F6C343]" />
            <span>School Info & Contacts</span>
          </button>
        </aside>

        {/* Right Content Workspace */}
        <main className="flex-1 bg-slate-900 p-6 sm:p-8 overflow-y-auto space-y-6">
          {savedMessage && (
            <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl text-xs font-bold text-emerald-200 flex items-center justify-between shadow-lg animate-fadeIn">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {savedMessage}
              </span>
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest">
                Saved
              </span>
            </div>
          )}

          {/* TAB: HERO & MEDIA */}
          {activeTab === 'hero' && (
            <div className="space-y-6 max-w-4xl">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Hero Section & Media Settings
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Manage headlines, badge text, and video/image paths for the main entrance view.
                  </p>
                </div>

                <button
                  onClick={() => handleSave()}
                  className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4 text-[#F6C343]" />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Admissions Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.heroData.badgeText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        heroData: {
                          ...formData.heroData,
                          badgeText: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-medium text-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Main Hero Headline
                  </label>
                  <textarea
                    rows={2}
                    value={formData.heroData.headline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        heroData: {
                          ...formData.heroData,
                          headline: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-medium text-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <ImageUploader
                    label="Background Video File / URL"
                    value={formData.heroData.videoUrl}
                    accept="video/*"
                    placeholder="/hero video.mp4"
                    onChange={(newVal) =>
                      setFormData({
                        ...formData,
                        heroData: {
                          ...formData.heroData,
                          videoUrl: newVal,
                        },
                      })
                    }
                    helpText="Upload MP4 video from device or enter video URL"
                  />

                  <ImageUploader
                    label="Fallback Hero Background Image"
                    value={formData.heroData.bgImageUrl}
                    accept="image/*"
                    placeholder="/hero-bg.png"
                    onChange={(newVal) =>
                      setFormData({
                        ...formData,
                        heroData: {
                          ...formData.heroData,
                          bgImageUrl: newVal,
                        },
                      })
                    }
                    helpText="Upload image file from device or enter image URL"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: HERO STATISTICS GRID (WITH DELETE & ADD) */}
          {activeTab === 'stats' && (
            <div className="space-y-6 max-w-5xl">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Hero Statistics Grid Cards
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Edit numbers, labels, or add/delete statistic cards shown below the hero title.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddStat}
                    className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Metric</span>
                  </button>

                  <button
                    onClick={() => handleSave()}
                    className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                  >
                    <Save className="w-4 h-4 text-[#F6C343]" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {formData.heroStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 w-full">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Count / Number Value
                        </label>
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => {
                            const newStats = [...formData.heroStats];
                            newStats[idx].value = e.target.value;
                            setFormData({ ...formData, heroStats: newStats });
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm font-bold text-[#F6C343] focus:border-[#0E4C92] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Metric Title
                        </label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => {
                            const newStats = [...formData.heroStats];
                            newStats[idx].label = e.target.value;
                            setFormData({ ...formData, heroStats: newStats });
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-semibold text-white focus:border-[#0E4C92] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Subtitle / Suffix
                        </label>
                        <input
                          type="text"
                          value={stat.suffix}
                          onChange={(e) => {
                            const newStats = [...formData.heroStats];
                            newStats[idx].suffix = e.target.value;
                            setFormData({ ...formData, heroStats: newStats });
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-medium text-slate-300 focus:border-[#0E4C92] outline-none"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteStat(idx)}
                      className="px-3.5 py-2.5 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800/80 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                      title="Delete this statistic"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                      <span>Delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: BRAND BANNER */}
          {activeTab === 'brand' && (
            <div className="space-y-6 max-w-4xl">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Brand Banner Section
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Edit the school brand title and badge displayed right under the hero section.
                  </p>
                </div>

                <button
                  onClick={() => handleSave()}
                  className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4 text-[#F6C343]" />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    School Brand Title
                  </label>
                  <input
                    type="text"
                    value={formData.brandBannerData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brandBannerData: {
                          ...formData.brandBannerData,
                          title: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-base font-bold text-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Yellow Pill Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.brandBannerData.badgeText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brandBannerData: {
                          ...formData.brandBannerData,
                          badgeText: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-semibold text-[#F6C343] focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <ImageUploader
                  label="School Logo Image File / URL"
                  value={formData.brandBannerData.logoUrl}
                  accept="image/*"
                  placeholder="/logo.png"
                  onChange={(newVal) =>
                    setFormData({
                      ...formData,
                      brandBannerData: {
                        ...formData.brandBannerData,
                        logoUrl: newVal,
                      },
                    })
                  }
                  helpText="Upload school logo file from device or enter image URL"
                />
              </div>
            </div>
          )}

          {/* TAB: ABOUT, MISSION & VISION */}
          {activeTab === 'about' && (
            <div className="space-y-6 max-w-4xl">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">
                    About, Mission & Vision Statements
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Update school overview, mission goals, and vision statement details.
                  </p>
                </div>

                <button
                  onClick={() => handleSave()}
                  className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4 text-[#F6C343]" />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    About Section Title
                  </label>
                  <input
                    type="text"
                    value={formData.aboutData.heading}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutData: {
                          ...formData.aboutData,
                          heading: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-semibold text-white focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    About Section Overview Paragraph
                  </label>
                  <textarea
                    rows={3}
                    value={formData.aboutData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutData: {
                          ...formData.aboutData,
                          description: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs font-medium text-slate-200 focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Mission Text
                  </label>
                  <textarea
                    rows={3}
                    value={formData.aboutData.missionText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutData: {
                          ...formData.aboutData,
                          missionText: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs font-medium text-slate-200 focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Vision Text
                  </label>
                  <textarea
                    rows={3}
                    value={formData.aboutData.visionText}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        aboutData: {
                          ...formData.aboutData,
                          visionText: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs font-medium text-slate-200 focus:border-[#0E4C92] outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: FACILITIES & CAMPUS (WITH DELETE & ADD) */}
          {activeTab === 'facilities' && (
            <div className="space-y-6 max-w-5xl">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Campus Facilities & Infrastructure
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Edit facility titles, images, or add/delete campus facility cards.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddFacility}
                    className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Facility</span>
                  </button>

                  <button
                    onClick={() => handleSave()}
                    className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                  >
                    <Save className="w-4 h-4 text-[#F6C343]" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {formData.facilities.map((fac) => (
                  <div
                    key={fac.id}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row items-start justify-between gap-4"
                  >
                    <div className="w-full md:w-32 h-24 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Facility Name
                        </label>
                        <input
                          type="text"
                          value={fac.title}
                          onChange={(e) => {
                            const newFacs = formData.facilities.map((f) =>
                              f.id === fac.id ? { ...f, title: e.target.value } : f
                            );
                            setFormData({ ...formData, facilities: newFacs });
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-bold text-white focus:border-[#0E4C92] outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <ImageUploader
                          label="Facility Photo File / URL"
                          value={fac.image}
                          accept="image/*"
                          onChange={(newVal) => {
                            const newFacs = formData.facilities.map((f) =>
                              f.id === fac.id ? { ...f, image: newVal } : f
                            );
                            setFormData({ ...formData, facilities: newFacs });
                          }}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Description
                        </label>
                        <input
                          type="text"
                          value={fac.description}
                          onChange={(e) => {
                            const newFacs = formData.facilities.map((f) =>
                              f.id === fac.id
                                ? { ...f, description: e.target.value }
                                : f
                            );
                            setFormData({ ...formData, facilities: newFacs });
                          }}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-normal text-slate-300 focus:border-[#0E4C92] outline-none"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteFacility(fac.id)}
                      className="px-3.5 py-2.5 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800/80 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 self-center"
                      title="Delete this facility card"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                      <span>Delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PHOTO & EVENT GALLERY (WITH DELETE & ADD) */}
          {activeTab === 'gallery' && (
            <div className="space-y-6 max-w-5xl">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Photo & Event Gallery Items
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Add, edit, or delete event photos displayed in the website gallery.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddGallery}
                    className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Photo</span>
                  </button>

                  <button
                    onClick={() => handleSave()}
                    className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                  >
                    <Save className="w-4 h-4 text-[#F6C343]" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.gallery.map((g) => (
                  <div
                    key={g.id}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="h-36 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative">
                        <img
                          src={g.imageUrl}
                          alt={g.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-slate-900/80 text-[10px] font-bold text-[#F6C343] rounded-md">
                          {g.category}
                        </span>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Photo Title
                        </label>
                        <input
                          type="text"
                          value={g.title}
                          onChange={(e) => {
                            const newG = formData.gallery.map((item) =>
                              item.id === g.id
                                ? { ...item, title: e.target.value }
                                : item
                            );
                            setFormData({ ...formData, gallery: newG });
                          }}
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-bold text-white focus:border-[#0E4C92] outline-none"
                        />
                      </div>

                      <ImageUploader
                        label="Gallery Photo File / URL"
                        value={g.imageUrl}
                        accept="image/*"
                        onChange={(newVal) => {
                          const newG = formData.gallery.map((item) =>
                            item.id === g.id
                              ? { ...item, imageUrl: newVal }
                              : item
                          );
                          setFormData({ ...formData, gallery: newG });
                        }}
                      />
                    </div>

                    <button
                      onClick={() => handleDeleteGallery(g.id)}
                      className="w-full mt-2 py-2 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800/80 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-red-400" />
                      <span>Delete Gallery Item</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SCHOOL INFO & CONTACTS */}
          {activeTab === 'general' && (
            <div className="space-y-6 max-w-4xl">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">
                    School Information & Contact Numbers
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    Edit phone numbers, email address, campus location, and group names.
                  </p>
                </div>

                <button
                  onClick={() => handleSave()}
                  className="px-6 py-2.5 bg-[#0E4C92] hover:bg-[#083a73] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4 text-[#F6C343]" />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      value={formData.schoolInfo.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          schoolInfo: {
                            ...formData.schoolInfo,
                            name: e.target.value,
                          },
                        })
                      }
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-bold text-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Parent Educational Group
                    </label>
                    <input
                      type="text"
                      value={formData.schoolInfo.group}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          schoolInfo: {
                            ...formData.schoolInfo,
                            group: e.target.value,
                          },
                        })
                      }
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-bold text-white focus:border-[#0E4C92] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Campus Address & Location
                  </label>
                  <input
                    type="text"
                    value={formData.schoolInfo.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schoolInfo: {
                          ...formData.schoolInfo,
                          location: e.target.value,
                        },
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-medium text-slate-200 focus:border-[#0E4C92] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Helpline Phone 1
                    </label>
                    <input
                      type="text"
                      value={formData.schoolInfo.phones[0]}
                      onChange={(e) => {
                        const newP = [...formData.schoolInfo.phones];
                        newP[0] = e.target.value;
                        setFormData({
                          ...formData,
                          schoolInfo: { ...formData.schoolInfo, phones: newP },
                        });
                      }}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-bold text-[#F6C343] focus:border-[#0E4C92] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Helpline Phone 2
                    </label>
                    <input
                      type="text"
                      value={formData.schoolInfo.phones[1]}
                      onChange={(e) => {
                        const newP = [...formData.schoolInfo.phones];
                        newP[1] = e.target.value;
                        setFormData({
                          ...formData,
                          schoolInfo: { ...formData.schoolInfo, phones: newP },
                        });
                      }}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-bold text-[#F6C343] focus:border-[#0E4C92] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
