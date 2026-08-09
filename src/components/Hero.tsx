import React from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  BookOpen,
  CheckCircle2,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';
import { schoolInfo } from '../data/schoolData';

interface HeroProps {
  onOpenApplyModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApplyModal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-white">
      {/* Animated Subtle Background Pattern Accent */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#FEC722] rounded-full blur-3xl -z-10 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 left-0 w-80 h-80 bg-neutral-200/50 rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: School Copy & Hero Action */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Top Brand Pill */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] text-white text-xs font-semibold tracking-wide border border-neutral-700 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#FEC722] animate-pulse" />
              <span className="text-[#FEC722] uppercase tracking-wider font-bold">Welcome to</span>
              <span>SAMLAT EXCELLENCE ACADEMY</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0B] tracking-tight leading-[1.15]"
            >
              Building <span className="relative inline-block text-[#0B0B0B]">
                Excellence.
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                  className="absolute bottom-1 left-0 h-3 bg-[#FEC722] -z-10 rounded-sm opacity-80 block" 
                />
              </span><br />
              Inspiring <span className="text-[#0B0B0B]">Futures.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {schoolInfo.supportingText}
            </motion.p>

            {/* Value Checkmarks */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-lg mx-auto lg:mx-0 text-sm font-semibold text-neutral-800"
            >
              {[
                "Blended British-Nigerian Curriculum",
                "Moral Integrity & Leadership Roots",
                "Modern STEM, Coding & Science Labs",
                "Safe, Disciplined & Nurturing Campus"
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 transition-transform"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FEC722] shrink-0 fill-[#0B0B0B]" />
                  <span>{val}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
                id="hero-apply-btn"
                onClick={onOpenApplyModal}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-[#FEC722] hover:bg-[#eab308] text-black font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2.5 text-base cursor-pointer group"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                id="hero-contact-btn"
                href="#contact"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-[#0B0B0B] hover:bg-neutral-800 text-white font-bold px-7 py-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-base border border-neutral-700"
              >
                <PhoneCall className="w-4 h-4 text-[#FEC722]" />
                <span>Contact Us</span>
              </motion.a>
            </motion.div>

            {/* Trust Footnote */}
            <motion.div 
              variants={itemVariants}
              className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-neutral-500"
            >
              <div className="flex -space-x-2">
                <img 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                  alt="Student avatar" 
                />
                <img 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                  alt="Parent avatar" 
                />
                <img 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" 
                  alt="Teacher avatar" 
                />
              </div>
              <p>
                Trusted by <strong className="text-neutral-900 font-bold">500+ parents</strong> for holistic academic excellence.
              </p>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Golden Accent Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FEC722] to-[#0B0B0B] rounded-3xl opacity-20 blur-sm transform rotate-1" />

              {/* Main School Life Image */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                  alt="Students engaged in learning at SAMLAT Excellence Academy"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#FEC722] animate-ping" />
                    <span className="text-xs uppercase font-bold tracking-wider text-[#FEC722]">Excellence in Action</span>
                  </div>
                  <p className="text-sm font-semibold text-neutral-200">
                    Empowering every learner with curiosity, confidence, and distinction.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Admissions Open (Gentle Bobbing Motion) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEC722] flex items-center justify-center text-black font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">Admissions Open</div>
                  <div className="text-[11px] text-neutral-500 font-medium">Crèche to SSS 3</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Pass Rate & Distinction (Gentle Floating Motion) */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-5 -right-4 bg-[#0B0B0B] text-white border border-[#FEC722]/50 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEC722] flex items-center justify-center text-black font-black text-sm">
                  100%
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FEC722]">Academic Distinction</div>
                  <div className="text-[11px] text-neutral-300">National & State Exams</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
