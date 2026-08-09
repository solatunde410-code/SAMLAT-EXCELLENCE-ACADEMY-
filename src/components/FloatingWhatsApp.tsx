import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { schoolInfo } from '../data/schoolData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Tooltip Card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-3 hidden sm:flex items-center gap-3 bg-[#0B0B0B] text-white p-3 rounded-2xl shadow-2xl border border-[#FEC722]/50 max-w-xs"
          >
            <div className="w-8 h-8 rounded-xl bg-[#FEC722] text-black flex items-center justify-center font-bold text-xs shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-white leading-tight">Need help with Admissions?</div>
              <div className="text-[11px] text-neutral-300">Chat with us directly on WhatsApp</div>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-white p-1 cursor-pointer"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        id="floating-whatsapp-btn"
        href={schoolInfo.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SAMLAT Excellence Academy on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 300, delay: 0.5 }}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Pulse Ripple Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
        <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-20 -z-10 animate-pulse" />

        {/* WhatsApp Icon (SVG for perfect look) */}
        <svg 
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white group-hover:scale-105 transition-transform" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.99.54 1.777.818 2.8.818l.003-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.803-5.775-5.803zm3.385 8.249c-.141.397-.714.733-1.009.779-.274.043-.633.076-1.022-.049-.252-.081-.579-.19-1.003-.374-1.782-.774-2.937-2.58-3.026-2.699-.089-.119-.724-.962-.724-1.834 0-.872.457-1.301.62-1.478.163-.177.355-.221.473-.221.118 0 .237.002.341.006.109.005.257-.041.401.306.15.362.51 1.246.554 1.336.044.09.074.195.015.313-.06.118-.089.192-.178.296-.089.104-.187.233-.267.313-.089.09-.182.188-.078.367.104.178.463.764.994 1.237.683.609 1.259.797 1.437.886.178.089.282.074.386-.045.104-.119.444-.518.563-.696.119-.178.237-.148.397-.089.159.06 1.011.476 1.185.563.174.087.291.13.334.204.043.074.043.43-.098.827z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.398C8.423 21.499 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.15c-1.637 0-3.175-.486-4.469-1.32l-.321-.208-2.954.828.835-2.883-.228-.344C3.968 14.887 3.5 13.486 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.65-8.5 8.65z"/>
        </svg>

        {/* Small Active Green Indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full" />
      </motion.a>
    </div>
  );
};
