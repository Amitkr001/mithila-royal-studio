import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80',
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&q=80',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="Wedding photography"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlays for Modern Look */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0f]/80 via-[#0d0d0f]/40 to-[#0d0d0f]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0f]/60 via-transparent to-[#0d0d0f]/60 z-10" />
        
        {/* Gold Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#b8860b]/10 via-transparent to-[#b8860b]/5 z-10" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#b8860b] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [-20, -100],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentImageIndex
                ? 'bg-[#b8860b] w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="text-center"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            className="text-[#b8860b] text-sm md:text-base tracking-[0.4em] uppercase mb-4"
          >
            Premium Wedding Photography
          </motion.p>
          
          <h1 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-6xl md:text-8xl lg:text-[110px] leading-[0.9] mb-4 tracking-tight font-bold">
            <span className="bg-gradient-to-r from-white via-[#f4e4bc] to-white bg-clip-text text-transparent">
              Mithila Royal
            </span>
          </h1>
          <h1 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#b8860b] text-5xl md:text-7xl lg:text-[90px] leading-[0.9] mb-8 tracking-tight font-bold">
            Studio
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontFamily: 'Newsreader, serif' }}
            className="text-[#f4f1ea]/80 text-xl md:text-2xl lg:text-3xl tracking-wide mb-12 italic"
          >
            Capturing Forever
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b8860b] to-[#d4a843] text-[#0d0d0f] text-sm tracking-wider uppercase rounded-full font-semibold hover:shadow-lg hover:shadow-[#b8860b]/30 transition-all duration-300 hover:scale-105"
          >
            Book Your Wedding
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#f4f1ea]/50 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-[#b8860b]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
