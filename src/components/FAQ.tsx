import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs, schoolInfo } from '../data/schoolData';

export const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-24 bg-neutral-50 relative border-t border-neutral-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0B0B0B] tracking-tight">
            Answers for Prospective Parents
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Got questions about enrollment, curriculum, or school transportation? Here are answers to commonly asked questions.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === faq.id;
            return (
              <motion.div
                key={faq.id}
                id={`faq-${faq.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-[#FEC722] shadow-md' 
                    : 'bg-white/80 hover:bg-white border-neutral-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-[#0B0B0B]">
                    {faq.question}
                  </span>
                  <motion.span 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#FEC722] text-black' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Questions Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="font-heading text-sm font-bold text-[#0B0B0B]">
              Have a specific question not answered here?
            </h4>
            <p className="text-xs text-neutral-500 mt-0.5">
              Our admissions team is available on WhatsApp to answer any personalized questions.
            </p>
          </div>
          <motion.a
            href={schoolInfo.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#0B0B0B] hover:bg-neutral-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FEC722]" />
            <span>Ask on WhatsApp</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
