import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Academics } from './components/Academics';
import { Admissions } from './components/Admissions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Events } from './components/Events';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AcademicModal } from './components/Modals/AcademicModal';
import { ApplyModal } from './components/Modals/ApplyModal';
import { AcademicDivision } from './types';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedDivisionForApply, setSelectedDivisionForApply] = useState<string>('Primary (Basic 1 - 6)');
  const [selectedDivisionForModal, setSelectedDivisionForModal] = useState<AcademicDivision | null>(null);

  const handleOpenApplyModal = (divisionName?: string) => {
    if (divisionName) {
      setSelectedDivisionForApply(divisionName);
    }
    setIsApplyModalOpen(true);
  };

  const handleSelectDivision = (division: AcademicDivision) => {
    setSelectedDivisionForModal(division);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#FEC722] selection:text-black">
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenApplyModal={() => handleOpenApplyModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero onOpenApplyModal={() => handleOpenApplyModal()} />

        {/* 1b. Dark Features Panel (Underneath Hero) */}
        <Features />

        {/* 2. About Us Section (Mission, Vision, Core Values, Statistics) */}
        <About onOpenApplyModal={() => handleOpenApplyModal()} />

        {/* 3. Academics (Offerings & Approach to Learning) */}
        <Academics 
          onSelectDivision={handleSelectDivision} 
          onOpenApplyModal={() => handleOpenApplyModal()} 
        />

        {/* 4. Admissions (4 Steps, Requirements, Enquiry) */}
        <Admissions onOpenApplyModal={() => handleOpenApplyModal()} />

        {/* 5. Why Choose Us (8 Advantages) */}
        <WhyChooseUs onOpenApplyModal={() => handleOpenApplyModal()} />

        {/* 6. School Life / Gallery (Filterable photo showcase) */}
        <Gallery />

        {/* 7. Upcoming Events */}
        <Events />

        {/* 8. Testimonials (Parents, Students, Alumni) */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* 9. Contact & WhatsApp-Powered Enquiry Form */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating WhatsApp Button (Bottom-Right) */}
      <FloatingWhatsApp />

      {/* Interactive Academic Division Details Modal */}
      <AcademicModal
        division={selectedDivisionForModal}
        onClose={() => setSelectedDivisionForModal(null)}
        onApplyForDivision={(divisionTitle) => handleOpenApplyModal(divisionTitle)}
      />

      {/* Interactive Admissions Application Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialDivision={selectedDivisionForApply}
      />

    </div>
  );
}
