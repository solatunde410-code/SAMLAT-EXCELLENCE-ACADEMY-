import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  MessageSquare,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { schoolInfo, generateWhatsAppEnquiryUrl } from '../../data/schoolData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDivision?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ 
  isOpen, 
  onClose,
  initialDivision = 'Primary (Basic 1 - 6)' 
}) => {
  const [fullName, setFullName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [division, setDivision] = useState(initialDivision);
  const [studentAge, setStudentAge] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialDivision) {
      setDivision(initialDivision);
    }
  }, [initialDivision]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMessage('Please fill in your name and phone number to continue.');
      return;
    }

    setErrorMessage('');

    // Generate formatted WhatsApp message
    const waUrl = generateWhatsAppEnquiryUrl({
      fullName: fullName,
      parentName: parentName || fullName,
      phoneNumber: phoneNumber,
      email: email,
      subject: `Admission Application: ${division} (Student Age: ${studentAge || 'Not specified'})`,
      gradeInterest: division,
      message: notes.trim() 
        ? `${notes}\n[Applicant requested admission into ${division}]` 
        : `I would like to apply for admission into ${division} at SAMLAT Excellence Academy for the 2026/2027 academic session. Please send the registration package and assessment schedule.`,
    });

    onClose();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-xl w-full bg-[#0B0B0B] text-white rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FEC722]/50 my-8"
        >
          
          {/* Header Ribbon */}
          <div className="bg-gradient-to-r from-black via-neutral-900 to-black p-6 sm:p-8 border-b border-neutral-800 relative">
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </motion.button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEC722]/20 text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Admissions 2026/2027
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Apply for Admission
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Complete this form to submit your application directly to the SAMLAT Excellence Academy admissions office via WhatsApp.
            </p>
          </div>

          {/* Modal Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[65vh] overflow-y-auto">
            
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            {/* Student & Parent Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Student's Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master David Adeleke"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mrs. Folashade Adeleke"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Phone Number (WhatsApp Active) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0813 292 7484"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="parent@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                />
              </div>
            </div>

            {/* Academic Division & Child's Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Applying For Grade Level
                </label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FEC722]"
                >
                  <option value="Early Years (Crèche & Nursery)">Early Years (Crèche & Nursery)</option>
                  <option value="Primary Education (Basic 1 - 6)">Primary Education (Basic 1 - 6)</option>
                  <option value="Junior Secondary School (JSS 1 - 3)">Junior Secondary School (JSS 1 - 3)</option>
                  <option value="Senior Secondary School (SSS 1 - 3: Science)">Senior Secondary (Sciences)</option>
                  <option value="Senior Secondary School (SSS 1 - 3: Arts)">Senior Secondary (Arts)</option>
                  <option value="Senior Secondary School (SSS 1 - 3: Commercial)">Senior Secondary (Commercial)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Child's Current Age
                </label>
                <input
                  type="text"
                  placeholder="e.g. 7 years old"
                  value={studentAge}
                  onChange={(e) => setStudentAge(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                Additional Details or Special Inquiries
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Inquiring about bus service route, school uniform, or previous school transfer..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722] resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FEC722] hover:bg-[#eab308] text-black font-bold py-4 px-6 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Submit Application via WhatsApp</span>
              </motion.button>
            </div>

            <div className="pt-2 text-center text-xs text-neutral-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FEC722]" />
              <span>Opens WhatsApp automatically with your application pre-filled</span>
            </div>

          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
