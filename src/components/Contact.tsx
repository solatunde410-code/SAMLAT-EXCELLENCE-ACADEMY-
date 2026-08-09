import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { schoolInfo, generateWhatsAppEnquiryUrl } from '../data/schoolData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    parentName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    gradeInterest: 'General Enquiry',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.trim().length < 8) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide details for your enquiry';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Generate WhatsApp URL with the requested format
    const waUrl = generateWhatsAppEnquiryUrl({
      fullName: formData.fullName,
      parentName: formData.parentName || formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      subject: formData.subject || (formData.gradeInterest ? `Enquiry regarding ${formData.gradeInterest}` : 'General School Enquiry'),
      gradeInterest: formData.gradeInterest,
      message: formData.message,
    });

    setSubmittedStatus(true);

    // Open WhatsApp directly
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      parentName: '',
      phoneNumber: '',
      email: '',
      subject: '',
      gradeInterest: 'General Enquiry',
      message: '',
    });
    setValidationErrors({});
    setSubmittedStatus(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] tracking-tight">
            Connect with Our <br className="hidden sm:inline" />
            <span className="relative inline-block">
              Admissions & Academic Team
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FEC722] -z-10 rounded-sm opacity-70" />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Have questions about admissions, academic programs, fees, or transportation? We are here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & School Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card (Clickable tel link) */}
            <motion.a
              id="contact-card-phone"
              href={`tel:${schoolInfo.phoneRaw}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="block bg-neutral-50 hover:bg-[#0B0B0B] text-neutral-900 hover:text-white rounded-3xl p-6 border border-neutral-200 hover:border-[#FEC722] shadow-sm hover:shadow-xl transition-colors duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FEC722] text-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-500 group-hover:text-[#FEC722] uppercase tracking-wider">
                    Official Telephone
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold mt-0.5">
                    {schoolInfo.phoneNumber}
                  </h3>
                  <p className="text-xs text-neutral-500 group-hover:text-neutral-300 mt-1">
                    Click to call our principal and administrative line directly.
                  </p>
                </div>
              </div>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              id="contact-card-whatsapp"
              href={schoolInfo.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="block bg-[#0B0B0B] text-white rounded-3xl p-6 border-2 border-[#FEC722]/60 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FEC722] text-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#FEC722] uppercase tracking-wider">
                      Instant WhatsApp Desk
                    </span>
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-bold border border-green-500/30">
                      Online
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-0.5">
                    {schoolInfo.whatsAppNumber}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    Chat with admissions for instant answers, prospectus & fee schedules.
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-200 text-neutral-800 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Official Email
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#0B0B0B] mt-0.5 break-all">
                    {schoolInfo.email}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    For formal academic correspondence and transcript requests.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Address & Hours Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 shadow-sm space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-200 text-neutral-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Campus Location
                  </span>
                  <p className="text-sm font-semibold text-[#0B0B0B] mt-0.5">
                    {schoolInfo.address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200/80 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-200 text-neutral-800 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Administrative Hours
                  </span>
                  <div className="text-xs font-medium text-neutral-700 space-y-0.5 mt-0.5">
                    <p>{schoolInfo.openingHours.weekdays}</p>
                    <p>{schoolInfo.openingHours.saturday}</p>
                    <p className="text-neutral-400">{schoolInfo.openingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: WhatsApp-Powered Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0B0B0B] text-white rounded-3xl p-8 sm:p-10 border-2 border-neutral-800 shadow-2xl relative overflow-hidden"
          >
            
            {/* Form Title & Context */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEC722]/20 text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-2">
                <Send className="w-3.5 h-3.5" />
                Direct WhatsApp Enquiry
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Send Us an Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Fill this form and click <strong>Send Enquiry</strong> to automatically generate and launch your formatted message in WhatsApp to the school.
              </p>
            </div>

            <AnimatePresence>
              {submittedStatus && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-green-950/80 border border-green-500/50 text-green-200 flex items-start justify-between gap-3 overflow-hidden"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="block text-green-300 font-bold mb-0.5">WhatsApp Launched!</strong>
                      Your enquiry was prepared. If WhatsApp did not open automatically, you can chat directly with us at{' '}
                      <a href={schoolInfo.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold text-white">
                        {schoolInfo.whatsAppNumber}
                      </a>.
                    </div>
                  </div>
                  <button
                    onClick={resetForm}
                    className="text-xs text-green-300 hover:text-white underline cursor-pointer"
                  >
                    Reset
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Parent Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="contact-full-name"
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-neutral-900 border ${
                      validationErrors.fullName ? 'border-red-500' : 'border-neutral-700'
                    } rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]`}
                  />
                  {validationErrors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 block">{validationErrors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Parent / Guardian Name
                  </label>
                  <input
                    id="contact-parent-name"
                    type="text"
                    placeholder="Parent / Guardian Name (if applicable)"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="e.g. +234 813 292 7484"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className={`w-full bg-neutral-900 border ${
                      validationErrors.phoneNumber ? 'border-red-500' : 'border-neutral-700'
                    } rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]`}
                  />
                  {validationErrors.phoneNumber && (
                    <span className="text-[11px] text-red-400 mt-1 block">{validationErrors.phoneNumber}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                  />
                </div>
              </div>

              {/* Subject & Grade Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Admission Enquiry / Tuition Schedule"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Grade Section of Interest
                  </label>
                  <select
                    id="contact-grade-level"
                    value={formData.gradeInterest}
                    onChange={(e) => setFormData({ ...formData, gradeInterest: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FEC722]"
                  >
                    <option value="General Enquiry">General School Enquiry</option>
                    <option value="Early Years (Crèche & Nursery)">Early Years (Crèche & Nursery)</option>
                    <option value="Primary Education (Basic 1 - 6)">Primary Education (Basic 1 - 6)</option>
                    <option value="Junior Secondary (JSS 1 - 3)">Junior Secondary (JSS 1 - 3)</option>
                    <option value="Senior Secondary (SSS 1 - 3)">Senior Secondary (SSS 1 - 3)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Please write your questions or enquiry details here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-neutral-900 border ${
                    validationErrors.message ? 'border-red-500' : 'border-neutral-700'
                  } rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FEC722] resize-none`}
                />
                {validationErrors.message && (
                  <span className="text-[11px] text-red-400 mt-1 block">{validationErrors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                id="contact-submit-btn"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FEC722] hover:bg-[#eab308] text-black font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200 flex items-center justify-center gap-2.5 text-base cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-black" />
                <span>Send Enquiry (Opens WhatsApp)</span>
              </motion.button>

              <div className="pt-2 text-center text-xs text-neutral-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FEC722]" />
                <span>Direct WhatsApp submission • No server storage • Fast response</span>
              </div>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
