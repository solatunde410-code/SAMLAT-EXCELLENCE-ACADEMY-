import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  FileSpreadsheet, 
  UserCheck, 
  Sparkles,
  Phone,
  FileCheck,
  Clock,
  Send
} from 'lucide-react';
import { motion } from 'motion/react';
import { admissionSteps, schoolInfo, generateWhatsAppEnquiryUrl } from '../data/schoolData';

const stepIconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-6 h-6 text-black" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-black" />,
  UserCheck: <UserCheck className="w-6 h-6 text-black" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-black" />,
};

interface AdmissionsProps {
  onOpenApplyModal: () => void;
}

export const Admissions: React.FC<AdmissionsProps> = ({ onOpenApplyModal }) => {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [gradeLevel, setGradeLevel] = useState('Primary (Basic 1 - 6)');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim()) {
      setFormError('Please enter your name and phone number to proceed.');
      return;
    }
    setFormError('');

    const targetUrl = generateWhatsAppEnquiryUrl({
      fullName: studentName ? `${studentName} (Student)` : parentName,
      parentName: parentName,
      phoneNumber: phone,
      subject: `Admission Application (${gradeLevel})`,
      gradeInterest: gradeLevel,
      message: notes.trim() || `I would like to apply for admission for my child into ${gradeLevel} at SAMLAT Excellence Academy. Please provide the registration procedures.`,
    });

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions 2026/2027
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] tracking-tight">
            Start Your Child’s <br className="hidden sm:inline" />
            <span className="relative inline-block">
              Journey to Excellence
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FEC722] -z-10 rounded-sm opacity-70" />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Joining the SAMLAT family is a smooth, transparent 4-step process designed to understand your child’s unique abilities and welcome them into an environment of discovery.
          </p>
        </motion.div>

        {/* 4 Steps Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {admissionSteps.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              id={`admission-step-${step.stepNumber}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-neutral-50 rounded-3xl p-6 sm:p-7 border border-neutral-200 hover:border-[#FEC722] shadow-sm hover:shadow-lg transition-colors duration-300 flex flex-col justify-between group relative cursor-default"
            >
              <div>
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FEC722] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {stepIconMap[step.icon] || <CheckCircle2 className="w-6 h-6 text-black" />}
                  </div>
                  <span className="font-heading text-2xl font-black text-neutral-300 group-hover:text-black transition-colors">
                    0{step.stepNumber}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#0B0B0B] uppercase tracking-wider mb-1 bg-[#FEC722]/30 px-2 py-0.5 rounded w-fit">
                  {step.timeline}
                </div>

                <h3 className="font-heading text-lg font-bold text-[#0B0B0B] mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Step Details list */}
              <div className="pt-3 border-t border-neutral-200/80 space-y-1.5 text-xs text-neutral-700 font-medium">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-1.5">
                    <span className="text-[#FEC722] font-bold">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Admission Form & Requirements Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Quick Admission / Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0B0B0B] text-white rounded-3xl p-8 sm:p-10 border border-neutral-800 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEC722]/20 text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-3">
                <Send className="w-3 h-3" />
                Express Online Enquiry
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Submit an Admission Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Fill this quick form and instantly connect with our admissions officer on WhatsApp for priority processing.
              </p>

              {formError && (
                <div className="mb-4 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-medium">
                  {formError}
                </div>
              )}

              <form onSubmit={handleQuickEnquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. & Mrs. Adeleke"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0813 292 7484"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Student’s Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Child’s full name"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Academic Level of Interest
                    </label>
                    <select
                      value={gradeLevel}
                      onChange={(e) => setGradeLevel(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FEC722]"
                    >
                      <option value="Early Years (Crèche / Nursery)">Early Years (Crèche / Nursery)</option>
                      <option value="Primary (Basic 1 - 6)">Primary (Basic 1 - 6)</option>
                      <option value="Junior Secondary (JSS 1 - 3)">Junior Secondary (JSS 1 - 3)</option>
                      <option value="Senior Secondary (SSS 1 - 3)">Senior Secondary (SSS 1 - 3)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Any Questions or Notes?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Inquiring about bus services, curriculum, or school fees..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722] resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#FEC722] hover:bg-[#eab308] text-black font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp to Admissions Desk</span>
                </motion.button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
              <span>Direct WhatsApp: {schoolInfo.whatsAppNumber}</span>
              <span>Fast 30-min response time</span>
            </div>
          </motion.div>

          {/* Right: Admission Requirements & Prospectus */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-200 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-3">
                <FileCheck className="w-3.5 h-3.5" />
                Checklist
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-[#0B0B0B] mb-3">
                Requirements for Admission
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                Please have the following documents ready when proceeding with the full application:
              </p>

              <div className="space-y-3.5">
                {[
                  "Photocopy of child's Birth Certificate or National ID (NIN)",
                  "Two (2) recent colored passport-sized photographs",
                  "Previous academic transcripts / report cards (for primary & secondary transfers)",
                  "Medical clearance report and updated immunization records",
                  "Completed SAMLAT Excellence Academy Registration Form"
                ].map((req, rIdx) => (
                  <motion.div 
                    key={rIdx} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: rIdx * 0.08 }}
                    className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#FEC722] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span className="font-medium">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <motion.button
                onClick={onOpenApplyModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#0B0B0B] hover:bg-neutral-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer group"
              >
                <span>Launch Full Application Portal</span>
                <ArrowRight className="w-4 h-4 text-[#FEC722] group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
