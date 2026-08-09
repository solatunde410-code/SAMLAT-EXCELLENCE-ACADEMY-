import React from 'react';
import { 
  X, 
  CheckCircle2, 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  Sparkles,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AcademicDivision } from '../../types';

interface AcademicModalProps {
  division: AcademicDivision | null;
  onClose: () => void;
  onApplyForDivision: (divisionTitle: string) => void;
}

export const AcademicModal: React.FC<AcademicModalProps> = ({ 
  division, 
  onClose,
  onApplyForDivision 
}) => {
  if (!division) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8"
        >
          
          {/* Modal Header with Image */}
          <div className="relative h-48 sm:h-56 bg-neutral-900 overflow-hidden">
            <img
              src={division.imageUrl}
              alt={division.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-[#FEC722] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Title on Image */}
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FEC722] text-black text-[11px] font-bold uppercase tracking-wider mb-1.5">
                <span>{division.grades}</span>
                <span>•</span>
                <span>{division.ageRange}</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                {division.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            
            {/* Full Overview */}
            <div>
              <h4 className="font-heading text-base font-bold text-[#0B0B0B] mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#FEC722]" />
                <span>Curriculum & Learning Focus</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {division.fullOverview}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
              <h4 className="font-heading text-sm font-bold text-[#0B0B0B] mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FEC722]" />
                <span>Distinctive Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {division.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FEC722] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Subjects */}
            <div>
              <h4 className="font-heading text-sm font-bold text-[#0B0B0B] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FEC722]" />
                <span>Core Subjects & Disciplines</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {division.subjects.map((sub, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm font-semibold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
            >
              Close Overview
            </button>

            <motion.button
              onClick={() => {
                onClose();
                onApplyForDivision(division.title);
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-[#FEC722] hover:bg-[#eab308] text-black font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply for {division.title}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
