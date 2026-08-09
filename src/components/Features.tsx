import React from 'react';
import { 
  GraduationCap, 
  Users, 
  Award, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { motion } from 'motion/react';
import { heroFeatures } from '../data/schoolData';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#FEC722]" />,
  Users: <Users className="w-6 h-6 text-[#FEC722]" />,
  Award: <Award className="w-6 h-6 text-[#FEC722]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#FEC722]" />,
};

interface FeaturesProps {
  onLearnMore?: (featureId: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onLearnMore }) => {
  return (
    <section className="relative bg-[#0B0B0B] text-white py-14 border-y-2 border-[#FEC722]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Ribbon / Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-800 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FEC722] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FEC722] animate-ping" />
              The Pillars of SAMLAT Excellence
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Our Students Stand Out
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Our deliberate educational model blends high intellectual rigor with strong moral conviction and cutting-edge facilities.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-neutral-900/90 hover:bg-neutral-800/90 border border-neutral-800 hover:border-[#FEC722]/60 rounded-2xl p-6 transition-colors duration-300 flex flex-col justify-between shadow-lg cursor-default"
            >
              {/* Top Row: Icon and Badge */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="w-12 h-12 rounded-xl bg-black border border-neutral-700 flex items-center justify-center group-hover:border-[#FEC722] transition-colors shadow-inner"
                  >
                    {iconMap[feature.icon] || <Sparkles className="w-6 h-6 text-[#FEC722]" />}
                  </motion.div>
                  {feature.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FEC722]/10 text-[#FEC722] border border-[#FEC722]/20">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-white mb-2.5 group-hover:text-[#FEC722] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-[#FEC722] transition-colors">
                <span>Core Academy Pillar 0{idx + 1}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
