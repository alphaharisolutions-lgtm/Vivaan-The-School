import React, { useState } from 'react';
import { SiteDataProvider, useSiteData } from './context/SiteDataContext';
import { AdminBar } from './components/AdminBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SchoolBrandBanner } from './components/SchoolBrandBanner';
import { AboutSection } from './components/AboutSection';
import { WhyChooseVivaan } from './components/WhyChooseVivaan';
import { AcademicPrograms } from './components/AcademicPrograms';
import { IITFoundationSpotlight } from './components/IITFoundationSpotlight';
import { CampusFacilities } from './components/CampusFacilities';
import { StudentLife } from './components/StudentLife';
import { GallerySection } from './components/GallerySection';
import { AchievementsSection } from './components/AchievementsSection';
import { AdmissionProcess } from './components/AdmissionProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsAndEvents } from './components/NewsAndEvents';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { AdmissionsModal } from './components/Modals/AdmissionsModal';
import { CampusVisitModal } from './components/Modals/CampusVisitModal';
import { BrochureModal } from './components/Modals/BrochureModal';
import { PortalLoginModal } from './components/Modals/PortalLoginModal';
import { SearchModal } from './components/Modals/SearchModal';
import { AdminLoginModal } from './components/Modals/AdminLoginModal';
import { AdminCMSModal } from './components/Modals/AdminCMSModal';
import { AdminDashboardPage } from './components/AdminDashboardPage';
import { AIAssistantWidget } from './components/AIAssistantWidget';

function MainApp() {
  const { viewMode } = useSiteData();
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('Grade VI (IIT Foundation)');
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  if (viewMode === 'admin') {
    return <AdminDashboardPage />;
  }

  const handleOpenAdmissions = (grade?: string) => {
    if (grade) {
      setSelectedGrade(grade);
    }
    setAdmissionsModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-slate-900 font-sans selection:bg-[#F6C343] selection:text-[#0E4C92]">
      {/* Active Admin Top Control Bar */}
      <AdminBar />

      {/* Header */}
      <Header
        onOpenAdmissions={() => handleOpenAdmissions()}
        onOpenVisit={() => setVisitModalOpen(true)}
        onOpenPortal={() => setPortalModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigateSection}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenAdmissions={() => handleOpenAdmissions()}
          onOpenVisit={() => setVisitModalOpen(true)}
          onOpenBrochure={() => setBrochureModalOpen(true)}
        />

        <SchoolBrandBanner />

        <AboutSection />

        <WhyChooseVivaan />

        <AcademicPrograms
          onOpenAdmissionsWithGrade={(grade) => handleOpenAdmissions(grade)}
        />

        <CampusFacilities />

        <StudentLife />

        <GallerySection />

        <AchievementsSection />

        <AdmissionProcess
          onOpenAdmissions={() => handleOpenAdmissions()}
          onOpenVisit={() => setVisitModalOpen(true)}
          onOpenBrochure={() => setBrochureModalOpen(true)}
        />

        <TestimonialsSection />

        <NewsAndEvents />

        <FAQSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmissions={() => handleOpenAdmissions()}
        onOpenPortal={() => setPortalModalOpen(true)}
        onOpenBrochure={() => setBrochureModalOpen(true)}
        onNavigate={handleNavigateSection}
      />

      {/* Floating AI Assistant Widget */}
      <AIAssistantWidget
        onOpenAdmissions={() => handleOpenAdmissions()}
        onOpenVisit={() => setVisitModalOpen(true)}
      />

      {/* Modals */}
      <AdmissionsModal
        isOpen={admissionsModalOpen}
        onClose={() => setAdmissionsModalOpen(false)}
        defaultGrade={selectedGrade}
      />

      <CampusVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />

      <PortalLoginModal
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigateSection={handleNavigateSection}
        onOpenAdmissions={() => handleOpenAdmissions()}
      />

      {/* Admin Modals */}
      <AdminLoginModal />
      <AdminCMSModal />
    </div>
  );
}

export default function App() {
  return (
    <SiteDataProvider>
      <MainApp />
    </SiteDataProvider>
  );
}
