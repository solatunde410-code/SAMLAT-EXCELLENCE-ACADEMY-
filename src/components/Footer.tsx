import React from 'react';
import { 
  GraduationCap, 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  ArrowUp,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { schoolInfo } from '../data/schoolData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-white pt-16 pb-12 border-t-2 border-[#FEC722]/30 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FEC722]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800"
        >
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FEC722] flex items-center justify-center p-2 text-black shadow-lg">
                <GraduationCap className="w-7 h-7 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg tracking-tight text-white leading-tight">
                  SAMLAT EXCELLENCE
                </span>
                <span className="text-[11px] tracking-widest uppercase font-bold text-[#FEC722]">
                  ACADEMY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              {schoolInfo.supportingText}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-[#FEC722] text-xs font-semibold border border-neutral-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Building Excellence. Inspiring Futures.</span>
            </div>
          </div>

          {/* Col 2: Academic Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#FEC722]">
              Academic Divisions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#academics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#FEC722]" />
                  <span>Early Years (Crèche & Nursery)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#FEC722]" />
                  <span>Primary Education (Basic 1 – 6)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#FEC722]" />
                  <span>Junior Secondary School (JSS 1 – 3)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#FEC722]" />
                  <span>Senior Secondary (Science, Arts, Comm.)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#FEC722]" />
                  <span>STEM & Robotics Innovation Track</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#FEC722]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Our School</a></li>
              <li><a href="#admissions" className="hover:text-white transition-colors">Admission Process</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">School Life Gallery</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Parent Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Enquiries</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#FEC722]">
              Contact Details
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <a 
                href={`tel:${schoolInfo.phoneRaw}`} 
                className="flex items-center gap-2 hover:text-[#FEC722] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FEC722] shrink-0" />
                <span>{schoolInfo.phoneNumber}</span>
              </a>

              <a 
                href={schoolInfo.whatsAppUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FEC722] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#FEC722] shrink-0" />
                <span>WhatsApp: {schoolInfo.whatsAppNumber}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FEC722] shrink-0 mt-0.5" />
                <span>{schoolInfo.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FEC722] shrink-0" />
                <span>Mon – Fri: 7:30 AM – 4:30 PM</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-neutral-300">SAMLAT EXCELLENCE ACADEMY</strong>. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#admissions" className="hover:text-white transition-colors">Admissions Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Privacy & Child Protection</a>
            <span>•</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-neutral-900 hover:bg-[#FEC722] hover:text-black text-neutral-400 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
};
