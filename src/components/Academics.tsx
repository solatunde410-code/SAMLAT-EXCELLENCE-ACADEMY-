import React, { useState } from 'react';
import { 
  Baby, 
  BookOpen, 
  GraduationCap, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  FlaskConical, 
  MessageSquareText, 
  Palette, 
  Activity, 
  Compass,
  Check,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { academicDivisions, approachPillars } from '../data/schoolData';
import { AcademicDivision } from '../types';

const divisionIconMap: Record<string, React.ReactNode> = {
  Baby: <Baby className="w-6 h-6 text-black" />,
  BookOpen: <BookOpen className="w-6 h-6 text-black" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-black" />,
  Award: <Award className="w-6 h-6 text-black" />,
};

const approachIconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-[#0B0B0B]" />,
  FlaskConical: <FlaskConical className="w-6 h-6 text-[#0B0B0B]" />,
  MessageSquareText: <MessageSquareText className="w-6 h-6 text-[#0B0B0B]" />,
  Palette: <Palette className="w-6 h-6 text-[#0B0B0B]" />,
  Activity: <Activity className="w-6 h-6 text-[#0B0B0B]" />,
  Compass: <Compass className="w-6 h-6 text-[#0B0B0B]" />,
};

interface AcademicsProps {
  onSelectDivision: (division: AcademicDivision) => void;
  onOpenApplyModal: () => void;
}

export const Academics: React.FC<AcademicsProps> = ({ 
  onSelectDivision,
  onOpenApplyModal 
}) => {
  const [selectedPillar, setSelectedPillar] = useState<string>(approachPillars[0].id);

  return (
    <section id="academics" className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Offerings
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] tracking-tight">
            Comprehensive Education from <br className="hidden sm:inline" />
            <span className="relative inline-block">
              Foundations to College Readiness
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FEC722] -z-10 rounded-sm opacity-70" />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Every developmental stage receives targeted pedagogical care, specialized classrooms, and rigorous curriculum frameworks.
          </p>
        </motion.div>

        {/* 4 Academic Offerings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {academicDivisions.map((division, idx) => (
            <motion.div
              key={division.id}
              id={`division-card-${division.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 hover:border-[#FEC722] shadow-sm hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
            >
              {/* Image Header with Badge */}
              <div className="relative h-48 overflow-hidden bg-neutral-900">
                <img
                  src={division.imageUrl}
                  alt={division.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Age Badge */}
                <div className="absolute top-3 right-3 bg-[#0B0B0B]/90 backdrop-blur-sm text-[#FEC722] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#FEC722]/30">
                  {division.ageRange}
                </div>

                {/* Division Icon */}
                <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#FEC722] flex items-center justify-center shadow-md">
                  {divisionIconMap[division.icon] || <BookOpen className="w-5 h-5 text-black" />}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                    {division.grades}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0B0B0B] mb-2 group-hover:text-black">
                    {division.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {division.description}
                  </p>
                </div>

                {/* Highlights Summary List */}
                <div className="space-y-1.5 mb-6 pt-2 border-t border-neutral-100">
                  {division.keyHighlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#FEC722] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.button
                  id={`learn-more-${division.id}`}
                  onClick={() => onSelectDivision(division)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-100 hover:bg-[#FEC722] text-[#0B0B0B] font-bold text-xs sm:text-sm transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* “Our Approach to Learning” Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl"
        >
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-neutral-200 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0B0B0B] bg-[#FEC722] px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                Modern Pedagogy
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B0B0B] tracking-tight">
                Our Approach to Learning
              </h3>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              We cultivate well-rounded 21st-century scholars through balanced, hands-on instructional methods designed for maximum engagement and retention.
            </p>
          </div>

          {/* Approach Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachPillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                onClick={() => setSelectedPillar(pillar.id)}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                  selectedPillar === pillar.id
                    ? 'bg-[#0B0B0B] text-white border-[#FEC722] shadow-lg ring-2 ring-[#FEC722]/40'
                    : 'bg-neutral-50 hover:bg-neutral-100/80 border-neutral-200 text-neutral-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      selectedPillar === pillar.id ? 'bg-[#FEC722]' : 'bg-white border border-neutral-200'
                    }`}>
                      {approachIconMap[pillar.icon] || <Sparkles className="w-5 h-5 text-black" />}
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      selectedPillar === pillar.id ? 'bg-neutral-800 text-[#FEC722]' : 'bg-neutral-200 text-neutral-700'
                    }`}>
                      Core Method
                    </span>
                  </div>

                  <h4 className={`font-heading text-lg font-bold mb-2 ${
                    selectedPillar === pillar.id ? 'text-white' : 'text-[#0B0B0B]'
                  }`}>
                    {pillar.title}
                  </h4>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    selectedPillar === pillar.id ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {pillar.details}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200/40">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                        selectedPillar === pillar.id
                          ? 'bg-neutral-800 text-neutral-200 border border-neutral-700'
                          : 'bg-white text-neutral-700 border border-neutral-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner Call to Action */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B0B0B] via-neutral-900 to-[#0B0B0B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#FEC722]/30">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                Looking for the Right Curriculum for Your Child?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                Book a personalized academic consultation with our head of academics.
              </p>
            </div>
            <motion.button
              onClick={onOpenApplyModal}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#FEC722] hover:bg-[#eab308] text-black font-bold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer"
            >
              Start Admission Process
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
