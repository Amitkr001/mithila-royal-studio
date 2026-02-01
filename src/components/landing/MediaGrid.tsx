import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

// Sample media items with Unsplash wedding photos
const mediaItems: MediaItem[] = [
  { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80', aspectRatio: 'portrait' },
  { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80', aspectRatio: 'landscape' },
  { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80', aspectRatio: 'square' },
  { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80', aspectRatio: 'portrait' },
  { id: 5, type: 'image', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80', aspectRatio: 'landscape' },
  { id: 6, type: 'image', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80', aspectRatio: 'square' },
  { id: 7, type: 'image', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80', aspectRatio: 'portrait' },
  { id: 8, type: 'image', src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=400&q=80', aspectRatio: 'landscape' },
  { id: 9, type: 'image', src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80', thumbnail: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&q=80', aspectRatio: 'square' },
];

export default function MediaGrid() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const openLightbox = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedMedia) return;
    const currentIndex = mediaItems.findIndex(item => item.id === selectedMedia.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % mediaItems.length
      : (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    setSelectedMedia(mediaItems[newIndex]);
  };

  const getGridClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'portrait':
        return 'row-span-2';
      case 'landscape':
        return 'col-span-2';
      case 'square':
      default:
        return '';
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#0d0d0f] relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#b8860b]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#b8860b]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6"
          />
          <p style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-5xl md:text-7xl font-bold">
            Portfolio
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getGridClass(item.aspectRatio)}`}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.thumbnail}
                alt={`Wedding photography ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/90 via-[#0d0d0f]/40 to-transparent flex items-center justify-center"
              >
                {item.type === 'video' && (
                  <Play className="w-12 h-12 text-[#b8860b]" />
                )}
              </motion.div>

              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-[#b8860b] rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d0d0f]/98 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-[#b8860b]/10 border border-[#b8860b]/30 flex items-center justify-center text-white hover:text-[#b8860b] hover:bg-[#b8860b]/20 transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('prev');
              }}
              className="absolute left-6 w-12 h-12 rounded-xl bg-[#b8860b]/10 border border-[#b8860b]/30 flex items-center justify-center text-white hover:text-[#b8860b] hover:bg-[#b8860b]/20 transition-all z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('next');
              }}
              className="absolute right-6 w-12 h-12 rounded-xl bg-[#b8860b]/10 border border-[#b8860b]/30 flex items-center justify-center text-white hover:text-[#b8860b] hover:bg-[#b8860b]/20 transition-all z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedMedia.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedMedia.src}
              alt={`Wedding photography ${selectedMedia.id}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
