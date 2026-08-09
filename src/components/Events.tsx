import React from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';
import { schoolEvents, schoolInfo } from '../data/schoolData';
import { SchoolEvent } from '../types';

export const Events: React.FC = () => {
  const handleRsvpWhatsApp = (event: SchoolEvent) => {
    const text = `Hello SAMLAT Excellence Academy,\nI would like to RSVP / inquire about the upcoming event:\n*Event:* ${event.title}\n*Date:* ${event.dateFormatted.day} ${event.dateFormatted.month} ${event.dateFormatted.year}\n*Time:* ${event.time}\nPlease send me the event schedule and attendance details.`;
    const url = `https://wa.me/2348132927484?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="events" className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-neutral-200 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] text-[#FEC722] text-xs font-bold uppercase tracking-wider mb-3">
              <CalendarIcon className="w-3.5 h-3.5" />
              School Calendar
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] tracking-tight">
              Upcoming Events & <br className="hidden sm:inline" />
              <span className="relative inline-block">
                Academic Milestones
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FEC722] -z-10 rounded-sm opacity-70" />
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md">
            Stay connected with our vibrant community through academic showcases, sporting tournaments, and family engagement forums.
          </p>
        </motion.div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schoolEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              id={`event-card-${event.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 hover:border-[#FEC722] shadow-sm hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Date Badge & Category */}
                <div className="flex items-start justify-between mb-5">
                  
                  {/* Distinctive Date Block */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0B0B0B] text-white flex flex-col items-center justify-center border border-[#FEC722]/50 shadow-md group-hover:scale-105 transition-transform">
                    <span className="text-[10px] font-black uppercase text-[#FEC722] tracking-wider leading-none">
                      {event.dateFormatted.month}
                    </span>
                    <span className="font-heading text-2xl font-black text-white leading-tight">
                      {event.dateFormatted.day}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                    {event.category}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0B0B0B] mb-3 group-hover:text-black leading-snug">
                  {event.title}
                </h3>

                {/* Event Time & Location Meta */}
                <div className="space-y-1.5 mb-4 text-xs font-semibold text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FEC722] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FEC722] shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Users className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{event.audience}</span>
                  </div>
                </div>

                {/* Event Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              {/* RSVP Action */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <motion.button
                  id={`rsvp-btn-${event.id}`}
                  onClick={() => handleRsvpWhatsApp(event)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-100 hover:bg-[#FEC722] text-[#0B0B0B] font-bold text-xs sm:text-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>RSVP / Enquire on WhatsApp</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-[#0B0B0B] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-800"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FEC722] flex items-center justify-center text-black font-bold shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-white">
                Want to book a private school walkthrough?
              </h4>
              <p className="text-xs text-neutral-300">
                Admissions officers are available Monday through Saturday.
              </p>
            </div>
          </div>
          <motion.a
            href={schoolInfo.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#FEC722] hover:bg-[#eab308] text-black font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors whitespace-nowrap"
          >
            Chat with Admissions Desk
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
