import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryItems } from '../data/schoolData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'classrooms', label: 'Classrooms' },
    { id: 'academics', label: 'Students Learning' },
    { id: 'science', label: 'Science & Tech' },
    { id: 'sports', label: 'Sports & Athletics' },
    { id: 'cultural', label: 'Cultural & Arts' },
    { id: 'events', label: 'Graduation & Events' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FEC722]" />
            School Life & Campus Moments
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] tracking-tight">
            Vibrant Moments at <br className="hidden sm:inline" />
            <span className="relative inline-block">
              SAMLAT EXCELLENCE ACADEMY
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FEC722] -z-10 rounded-sm opacity-70" />
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal">
            Take a visual tour of our dynamic learning environments, modern laboratories, creative arts performances, and athletic championships.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer relative ${
                activeCategory === cat.id
                  ? 'bg-[#0B0B0B] text-[#FEC722] shadow-sm'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry / Grid Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                id={`gallery-item-${item.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-3xl overflow-hidden bg-neutral-900 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer h-72 sm:h-80 border border-neutral-200"
              >
                {/* Main Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0B0B]/80 backdrop-blur-sm text-[#FEC722] text-[11px] font-bold border border-[#FEC722]/30">
                    <Tag className="w-3 h-3" />
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform group-hover:-translate-y-1 transition-transform">
                  <h4 className="font-heading text-lg font-bold text-white mb-1 group-hover:text-[#FEC722] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Replacement Tip Note for User */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          Tip: You can easily update or add your own school photos anytime inside <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded font-mono">src/data/schoolData.ts</code>.
        </div>

      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-[#FEC722] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/70 text-white hover:bg-[#FEC722] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/70 text-white hover:bg-[#FEC722] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Image */}
              <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[65vh]"
                />
              </div>

              {/* Modal Caption */}
              <div className="p-6 bg-neutral-900 border-t border-neutral-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-[#FEC722] uppercase tracking-wider mb-1">
                    {selectedImage.categoryLabel}
                  </div>
                  <h3 className="font-heading text-xl font-bold">{selectedImage.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">{selectedImage.caption}</p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
