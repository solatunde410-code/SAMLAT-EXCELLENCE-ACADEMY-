import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Menu, 
  X, 
  GraduationCap, 
  Clock, 
  ChevronRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { schoolInfo } from '../data/schoolData';

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'School Life', href: '#gallery' },
    { label: 'Events', href: '#events' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Scroll Progress Bar at the absolute top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FEC722] origin-left z-50 shadow-[0_0_10px_#FEC722]"
        style={{ scaleX }}
      />

      {/* Top Announcement & Quick Contact Bar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0B0B0B] text-white text-xs py-2 px-4 border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-neutral-300">
            <a 
              id="topbar-phone"
              href={`tel:${schoolInfo.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#FEC722] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FEC722]" />
              <span className="font-medium">{schoolInfo.phoneNumber}</span>
            </a>
            <a 
              id="topbar-whatsapp"
              href={schoolInfo.whatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#FEC722] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FEC722]" />
              <span className="font-medium">WhatsApp: {schoolInfo.whatsAppNumber}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-[#FEC722]" />
              <span>Mon – Fri: 7:30 AM – 4:30 PM</span>
            </span>
          </div>

          {/* Right admission callout */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FEC722]/20 text-[#FEC722] border border-[#FEC722]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FEC722] animate-ping" />
              2026/2027 Admissions Ongoing
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation Bar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-neutral-200' 
            : 'bg-white py-4 border-b border-neutral-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* School Brand & Logo Crest */}
            <motion.a 
              id="brand-logo-link" 
              href="#home" 
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#0B0B0B] flex items-center justify-center p-2 shadow-md group-hover:scale-105 transition-transform border border-[#FEC722]/40">
                <GraduationCap className="w-6 h-6 text-[#FEC722]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-[#0B0B0B] leading-tight group-hover:text-black">
                  SAMLAT EXCELLENCE
                </span>
                <span className="text-[11px] tracking-widest uppercase font-semibold text-[#FEC722] bg-[#0B0B0B] px-1.5 py-0.5 rounded-sm w-fit mt-0.5">
                  ACADEMY
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-neutral-700 hover:text-black hover:bg-neutral-100/80 transition-all relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#FEC722] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA Action */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                id="navbar-apply-btn"
                onClick={onOpenApplyModal}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#FEC722] hover:bg-[#eab308] text-black font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-colors flex items-center gap-1.5 text-sm cursor-pointer"
              >
                <span>Apply Now</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <motion.button
                id="mobile-apply-btn-quick"
                onClick={onOpenApplyModal}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FEC722] text-black text-xs font-bold px-3 py-2 rounded-lg"
              >
                Apply
              </motion.button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-t border-neutral-200 shadow-xl px-4 pt-3 pb-6 space-y-1 overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-100 flex items-center justify-between transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </motion.a>
                ))}
              </div>

              <div className="pt-4 mt-2 border-t border-neutral-100 flex flex-col gap-2.5">
                <motion.button
                  id="mobile-drawer-apply-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApplyModal();
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#FEC722] hover:bg-[#eab308] text-black font-bold py-3 rounded-xl shadow-sm text-center flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Apply for Admission</span>
                </motion.button>

                <div className="grid grid-cols-2 gap-2 text-xs font-medium pt-1">
                  <a
                    href={`tel:${schoolInfo.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FEC722]" />
                    <span>Call School</span>
                  </a>
                  <a
                    href={schoolInfo.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#0B0B0B] text-white hover:bg-neutral-800 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#FEC722]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
