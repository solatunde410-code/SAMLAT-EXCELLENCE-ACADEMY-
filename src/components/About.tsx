import React, { useState } from 'react';
import { 
  Target, 
  Compass, 
  Trophy, 
  ShieldCheck, 
  Lightbulb, 
  HeartHandshake, 
  Award, 
  CheckCircle,
  Sparkles,
  Users,
  GraduationCap,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { coreValues, statistics, schoolInfo } from '../data/schoolData';

const valueIconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-5 h-5 text-black" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-black" />,
  Target: <Target className="w-5 h-5 text-black" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-black" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-black" />,
  Compass: <Compass className="w-5 h-5 text-black" />,
};

interface AboutProps {
  onOpenApplyModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenApplyModal }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'philosophy'>('mission');

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-neutral-100 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FEC722]" />
            About Our Academy
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] tracking-tight">
            Nurturing Young Minds with <span className="relative inline-block">
              Purpose & Passion
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FEC722] -z-10 rounded-sm opacity-70" />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            SAMLAT EXCELLENCE ACADEMY is committed to providing quality education in a supportive, disciplined and inspiring environment. We believe every student has unique potential, and our goal is to help learners discover their strengths, develop strong character and achieve academic excellence.
          </p>
        </motion.div>

        {/* Narrative Grid: Image & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Interactive Campus Photo Collage */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
                  alt="Students engaged in classroom discovery at SAMLAT Excellence Academy"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FEC722]">Holistic Education</span>
                  <p className="text-sm font-semibold mt-0.5">Where intellectual curiosity meets grounded ethical values.</p>
                </div>
              </div>

              {/* Floating Callout Card */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0B0B0B] text-white p-5 rounded-2xl shadow-2xl border border-[#FEC722]/40 max-w-[260px] cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FEC722] flex items-center justify-center text-black font-bold shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-white">Govt. Approved</h4>
                    <p className="text-[11px] text-neutral-300">Certified for WAEC, NECO & BECE</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Mission, Vision, Philosophy Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Interactive Toggle Pills */}
            <div className="flex bg-neutral-100 p-1.5 rounded-2xl gap-1">
              {(['mission', 'vision', 'philosophy'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all relative cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#0B0B0B] text-[#FEC722] shadow-sm'
                      : 'text-neutral-600 hover:text-black hover:bg-neutral-200/60'
                  }`}
                >
                  {tab === 'mission' && 'Our Mission'}
                  {tab === 'vision' && 'Our Vision'}
                  {tab === 'philosophy' && 'Educational Philosophy'}
                </button>
              ))}
            </div>

            {/* Tab Content Display with AnimatePresence */}
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTab === 'mission' && (
                  <motion.div 
                    key="mission"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2.5 text-[#0B0B0B]">
                      <Target className="w-6 h-6 text-[#FEC722] fill-[#0B0B0B]" />
                      <h3 className="font-heading text-xl font-extrabold">Our Mission Statement</h3>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                      To deliver a transformative, world-class education rooted in academic rigor, moral discipline, creative innovation, and leadership principles, empowering students to thrive and make meaningful contributions globally.
                    </p>
                    <ul className="space-y-1.5 pt-2 text-xs sm:text-sm font-medium text-neutral-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FEC722] fill-[#0B0B0B] shrink-0" />
                        <span>Fostering critical thinking & STEM problem-solving competencies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FEC722] fill-[#0B0B0B] shrink-0" />
                        <span>Cultivating deep moral ethics, civic pride & integrity</span>
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'vision' && (
                  <motion.div 
                    key="vision"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2.5 text-[#0B0B0B]">
                      <Compass className="w-6 h-6 text-[#FEC722] fill-[#0B0B0B]" />
                      <h3 className="font-heading text-xl font-extrabold">Our Vision</h3>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                      To be the leading center of academic excellence and holistic character formation in Nigeria, producing confident scholars, visionary leaders, and compassionate change-makers who shape the future of our nation and the world.
                    </p>
                    <ul className="space-y-1.5 pt-2 text-xs sm:text-sm font-medium text-neutral-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FEC722] fill-[#0B0B0B] shrink-0" />
                        <span>Benchmark academic excellence across all examinations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FEC722] fill-[#0B0B0B] shrink-0" />
                        <span>Recognized nationally for disciplined and values-driven alumni</span>
                      </li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'philosophy' && (
                  <motion.div 
                    key="philosophy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2.5 text-[#0B0B0B]">
                      <Sparkles className="w-6 h-6 text-[#FEC722] fill-[#0B0B0B]" />
                      <h3 className="font-heading text-xl font-extrabold">Every Child is Unique</h3>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                      We reject one-size-fits-all teaching. Our educational philosophy centers on differentiated instruction: identifying each child’s distinct learning style, cultivating their natural talents, and instilling resilience so they conquer both academic challenges and life endeavors.
                    </p>
                    <ul className="space-y-1.5 pt-2 text-xs sm:text-sm font-medium text-neutral-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FEC722] fill-[#0B0B0B] shrink-0" />
                        <span>Individual mentorship and personalized study plans</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FEC722] fill-[#0B0B0B] shrink-0" />
                        <span>Balancing intellectual, spiritual, emotional & physical growth</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex items-center gap-4">
              <motion.button
                onClick={onOpenApplyModal}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#0B0B0B] hover:bg-neutral-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Join Our Community</span>
                <span className="text-[#FEC722]">→</span>
              </motion.button>
              <a
                href="#admissions"
                className="text-sm font-bold text-neutral-800 hover:text-black underline underline-offset-4 decoration-[#FEC722] decoration-2"
              >
                Explore Admission Roadmap
              </a>
            </div>

          </motion.div>

        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#FEC722] px-3 py-1 rounded-full">
              Guiding Principles
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B0B0B] mt-3">
              Our 6 Core Values
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              These fundamental virtues guide every lesson, interaction, and school policy at SAMLAT.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                key={val.name}
                id={`core-value-${val.name.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-[#FEC722] shadow-sm hover:shadow-md transition-colors duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FEC722] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {valueIconMap[val.icon] || <Sparkles className="w-5 h-5 text-black" />}
                </div>
                <h4 className="font-heading text-lg font-bold text-[#0B0B0B] mb-2 group-hover:text-black">
                  {val.name}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics & Numbers Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B0B0B] text-white rounded-3xl p-8 sm:p-12 border-2 border-[#FEC722]/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEC722]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FEC722]">
                Proven Excellence by the Numbers
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
                A Track Record of Scholastic Distinction
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
              {statistics.map((stat, idx) => (
                <motion.div 
                  key={stat.id} 
                  id={`stat-${stat.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`text-center px-4 ${idx !== 0 ? 'pt-6 sm:pt-0' : ''}`}
                >
                  <div className="font-heading text-4xl sm:text-5xl font-black text-[#FEC722] tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
