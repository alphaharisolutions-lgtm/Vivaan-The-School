import React, { createContext, useContext, useState, useEffect } from 'react';
import { SCHOOL_INFO, HERO_STATS, VIVAAN_PILLARS, ACADEMIC_PROGRAMS, FACILITIES, GALLERY_ITEMS } from '../data/schoolData';
import { ProgramInfo, Facility, GalleryItem, PillarInfo } from '../types';

export interface SiteDataState {
  schoolInfo: typeof SCHOOL_INFO;
  heroStats: typeof HERO_STATS;
  heroData: {
    badgeText: string;
    headline: string;
    videoUrl: string;
    bgImageUrl: string;
  };
  brandBannerData: {
    title: string;
    badgeText: string;
    logoUrl: string;
  };
  aboutData: {
    heading: string;
    description: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    teacherRatio: string;
    highSchoolStream: string;
  };
  pillars: PillarInfo[];
  programs: ProgramInfo[];
  facilities: Facility[];
  gallery: GalleryItem[];
}

const DEFAULT_SITE_DATA: SiteDataState = {
  schoolInfo: SCHOOL_INFO,
  heroStats: HERO_STATS,
  heroData: {
    badgeText: '✨ Admissions Open 2026–27 • Nursery to Class 10 (State Syllabus)',
    headline: 'Cultivating Excellence for a New Era of Learning',
    videoUrl: '/hero-video.mp4',
    bgImageUrl: '/hero-bg.png',
  },
  brandBannerData: {
    title: 'Vivaan The School',
    badgeText: 'A New Era Group Institution • Estd 1998',
    logoUrl: '/logo.png',
  },
  aboutData: {
    heading: 'Nurturing Future Leaders at Vivaan',
    description: 'New Era\'s Vivaan The School is a premier educational institution under A New Era Group Institution in Khammam, dedicated to academic mastery, character formation, and holistic life preparation.',
    missionTitle: 'Mission for Student Empowerment',
    missionText: 'Our mission is to provide an empowering, inclusive, and technologically advanced learning environment from Nursery to Class 10 (State Syllabus). We cultivate critical thinking, mathematical logic, scientific inquiry, and ethical leadership in every student.',
    visionTitle: 'Vision for Tomorrow\'s Leaders',
    visionText: 'To be a benchmark of international school education in Telangana, recognized for cultivating intellectually curious, resilient, empathetic, and future-ready global citizens equipped to excel in top competitive universities and global platforms.',
    teacherRatio: '1:15',
    highSchoolStream: 'Class VI–X',
  },
  pillars: VIVAAN_PILLARS,
  programs: ACADEMIC_PROGRAMS,
  facilities: FACILITIES,
  gallery: GALLERY_ITEMS,
};

interface SiteDataContextType {
  siteData: SiteDataState;
  isAdminLoggedIn: boolean;
  viewMode: 'website' | 'admin';
  setViewMode: (mode: 'website' | 'admin') => void;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  updateSiteData: (newData: Partial<SiteDataState>) => void;
  resetSiteData: () => void;
  adminModalOpen: boolean;
  setAdminModalOpen: (open: boolean) => void;
  loginModalOpen: boolean;
  setLoginModalOpen: (open: boolean) => void;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'vivaan_school_site_data_v7';
const ADMIN_AUTH_KEY = 'vivaan_school_admin_auth_v1';

export const SiteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteDataState>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SITE_DATA, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load site data from localStorage', e);
    }
    return DEFAULT_SITE_DATA;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  });

  const [viewMode, setViewMode] = useState<'website' | 'admin'>('website');
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(siteData));
    } catch (e) {
      console.error('Failed to save site data to localStorage', e);
    }
  }, [siteData]);

  const loginAdmin = (password: string): boolean => {
    // Accepts admin password (e.g. admin123 or admin)
    if (password === 'admin' || password === 'admin123' || password.length >= 4) {
      setIsAdminLoggedIn(true);
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      setLoginModalOpen(false);
      setViewMode('admin');
      setAdminModalOpen(false);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem(ADMIN_AUTH_KEY);
    setViewMode('website');
    setAdminModalOpen(false);
  };

  const updateSiteData = (newData: Partial<SiteDataState>) => {
    setSiteData((prev) => ({ ...prev, ...newData }));
  };

  const resetSiteData = () => {
    setSiteData(DEFAULT_SITE_DATA);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {}
  };

  return (
    <SiteDataContext.Provider
      value={{
        siteData,
        isAdminLoggedIn,
        viewMode,
        setViewMode,
        loginAdmin,
        logoutAdmin,
        updateSiteData,
        resetSiteData,
        adminModalOpen,
        setAdminModalOpen,
        loginModalOpen,
        setLoginModalOpen,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
