import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Video, Plane, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Wedding Photography',
    description: 'Timeless moments captured with artistic precision and cinematic storytelling',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    features: ['Pre-Wedding Shoots', 'Traditional Ceremonies', 'Candid Moments', 'Couple Portraits'],
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Cinematic Videography',
    description: 'Capturing your beautiful journey through stunning cinematic excellence and emotion',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    features: ['4K Quality', 'Cinematic Edits', 'Same-Day Highlights', 'Full Ceremony Coverage'],
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'Drone Coverage',
    description: 'Breathtaking aerial perspectives of your grand celebration',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    features: ['Aerial Shots', 'Venue Overview', '4K Drone Footage', 'Smooth Transitions'],
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80"
          alt="Wedding background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0f] via-[#0d0d0f]/98 to-[#0d0d0f]" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#b8860b] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#b8860b] rounded-full blur-[120px]" />
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
            What We Do Best
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-5xl md:text-7xl font-bold">
            Our Craft
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="relative bg-gradient-to-b from-[#1a1a1d]/90 to-[#0d0d0f]/95 border border-[#b8860b]/20 rounded-2xl overflow-hidden backdrop-blur-xl h-full cursor-pointer"
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(184, 134, 11, 0.25)' }}
                transition={{ duration: 0.4 }}
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br from-[#b8860b] to-[#d4a843] flex items-center justify-center text-[#0d0d0f]"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontFamily: 'Newsreader, serif' }} className="text-[#f4f1ea]/70 text-base leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        className="px-3 py-1 text-xs text-[#b8860b] border border-[#b8860b]/30 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    className="flex items-center gap-2 text-[#b8860b] text-sm tracking-wider uppercase"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#b8860b] rounded-2xl opacity-0 pointer-events-none"
                  animate={{
                    opacity: hoveredIndex === index ? 0.6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
