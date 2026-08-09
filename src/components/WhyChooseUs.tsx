import React from 'react';
import { 
  GraduationCap, 
  UserCheck, 
  ShieldCheck, 
  Award, 
  Heart, 
  Laptop, 
  Trophy, 
  TrendingUp, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { whyChooseUsItems } from '../data/schoolData';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-black" />,
  UserCheck: <UserCheck className="w-6 h-6 text-black" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-black" />,
  Award: <Award className="w-6 h-6 text-black" />,
  Heart: <Heart className="w-6 h-6 text-black" />,
  Laptop: <Laptop className="w-6 h-6 text-black" />,
  Trophy: <Trophy className="w-6 h-6 text-black" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-black" />,
};

interface WhyChooseUsProps {
  onOpenApplyModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#0B0B0B] text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FEC722]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The SAMLAT Advantage
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Discerning Parents Choose <br className="hidden sm:inline" />
            <span className="text-[#FEC722]">SAMLAT EXCELLENCE ACADEMY</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal">
            We provide a holistic educational ecosystem designed to inspire intellectual vigor, moral depth, and 21st-century technological fluency.
          </p>
        </motion.div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyChooseUsItems.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`why-card-${item.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-[#FEC722] rounded-3xl p-6 transition-colors duration-300 flex flex-col justify-between group shadow-lg cursor-default"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-[#FEC722] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-black" />}
                </div>

                <div className="text-[11px] font-bold text-[#FEC722] uppercase tracking-wider mb-1">
                  Advantage 0{idx + 1}
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2.5 group-hover:text-[#FEC722] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Checkmark */}
              <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center gap-1.5 text-xs text-neutral-500 group-hover:text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FEC722]" />
                <span>Dedicated Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-neutral-900 via-black to-neutral-900 rounded-3xl p-8 sm:p-10 border-2 border-[#FEC722]/40 text-center max-w-4xl mx-auto shadow-2xl"
        >
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-3">
            Give Your Child the Foundation for a Lifetime of Success
          </h3>
          <p className="text-sm text-neutral-300 max-w-2xl mx-auto mb-6">
            Admissions for the 2026/2027 academic session are now open for Crèche, Nursery, Primary, JSS, and SSS classes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              onClick={onOpenApplyModal}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#FEC722] hover:bg-[#eab308] text-black font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors text-sm cursor-pointer"
            >
              Apply for Admission Now
            </motion.button>
            <a
              href="#contact"
              className="bg-transparent hover:bg-neutral-800 text-white font-bold px-6 py-3.5 rounded-xl border border-neutral-700 transition-colors text-sm"
            >
              Schedule Campus Tour
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
