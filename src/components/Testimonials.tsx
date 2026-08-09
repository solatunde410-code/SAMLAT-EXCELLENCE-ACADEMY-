import React from 'react';
import { 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake 
} from 'lucide-react';
import { motion } from 'motion/react';
import { testimonials } from '../data/schoolData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FEC722]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#FEC722]" />
            Voices of Our Community
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] tracking-tight">
            Loved by Parents, <br className="hidden sm:inline" />
            <span className="relative inline-block">
              Cherished by Students
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FEC722] -z-10 rounded-sm opacity-70" />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Discover how SAMLAT Excellence Academy inspires scholastic excellence and moral character from those who know us best.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-neutral-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200 hover:border-[#FEC722] shadow-sm hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Top Row: Stars and Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FEC722] text-[#FEC722]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300 group-hover:text-[#FEC722] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-200/80 flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FEC722] shrink-0"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#0B0B0B] leading-snug">
                    {item.author}
                  </h4>
                  <span className="text-[11px] font-semibold text-neutral-500 block">
                    {item.association}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#FEC722]/30 px-1.5 py-0.5 rounded w-fit inline-block mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
