import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

interface Reel {
  id: number;
  thumbnail: string;
  videoUrl?: string;
  title: string;
}

const reels: Reel[] = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-537633552985-df8429e8048b?w=400&q=80',
    title: 'Mehendi Ceremony',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&q=80',
    title: 'Traditional Rituals',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80',
    title: 'Wedding Vows',
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80',
    title: 'Reception Highlights',
  },
];

export default function ReelsSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeReel, setActiveReel] = useState(0);
  const [hoveredReel, setHoveredReel] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth;
      const newActiveReel = Math.round(scrollLeft / itemWidth);
      setActiveReel(newActiveReel);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
          alt="Wedding background"
          className="w-full h-full object-cover scale-110 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0f] via-[#0d0d0f]/95 to-[#0d0d0f]" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#b8860b]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-[#b8860b]/5 rounded-full blur-[120px]" />
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
            Stories in Motion
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-5xl md:text-7xl font-bold">
            Cinematic Reels
          </h2>
        </motion.div>

        {/* Desktop: Vertical carousel */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredReel(reel.id)}
              onHoverEnd={() => setHoveredReel(null)}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Thumbnail */}
              <motion.img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredReel === reel.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/30 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-2xl font-semibold mb-2">
                  {reel.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#b8860b] to-[#d4a843] rounded-full" />
              </div>

              {/* Play indicator on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredReel === reel.id ? 1 : 0, 
                  scale: hoveredReel === reel.id ? 1 : 0.8 
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#b8860b] to-[#d4a843] flex items-center justify-center shadow-lg shadow-[#b8860b]/30">
                  <Play className="w-6 h-6 text-[#0d0d0f] ml-1" fill="#0d0d0f" />
                </div>
              </motion.div>

              {/* Border on hover */}
              <motion.div 
                className="absolute inset-0 border-2 border-[#b8860b] rounded-2xl pointer-events-none"
                animate={{
                  opacity: hoveredReel === reel.id ? 0.6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal swipeable carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[70vw] snap-center"
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-2xl font-semibold mb-2">
                      {reel.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#b8860b] to-[#d4a843] rounded-full" />
                  </div>
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#b8860b] to-[#d4a843] flex items-center justify-center shadow-lg shadow-[#b8860b]/30">
                      <Play className="w-5 h-5 text-[#0d0d0f] ml-1" fill="#0d0d0f" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reels.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeReel ? 'bg-gradient-to-r from-[#b8860b] to-[#d4a843] w-8' : 'bg-white/30 w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Audio toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={() => setIsMuted(!isMuted)}
          className="mt-10 mx-auto flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1a1a1d]/80 border border-[#b8860b]/30 text-white hover:border-[#b8860b] hover:bg-[#b8860b]/10 transition-all duration-300"
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-[#b8860b]" /> : <Volume2 className="w-5 h-5 text-[#b8860b]" />}
          <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-sm tracking-wider">
            {isMuted ? 'UNMUTE' : 'MUTE'}
          </span>
        </motion.button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
