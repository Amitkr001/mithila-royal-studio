import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  couple: string;
  wedding: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Vishnu and his team captured our wedding day so beautifully. Every moment felt like a scene from a movie. We can't thank them enough for preserving our memories so perfectly.",
    couple: "Priya & Rahul",
    wedding: "December 2023",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    rating: 5,
  },
  {
    id: 2,
    quote: "The drone footage was absolutely stunning! Mithila Royal Studio went above and beyond to ensure every precious moment was captured with elegance and artistry.",
    couple: "Ananya & Vikram",
    wedding: "January 2024",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
    rating: 5,
  },
  {
    id: 3,
    quote: "From the mehendi to the reception, every photograph tells our story perfectly. The team's professionalism and creative vision made our wedding album truly extraordinary.",
    couple: "Divya & Arjun",
    wedding: "February 2024",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
    rating: 5,
  },
];

const backgroundImages = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80',
  'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1920&q=80',
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative mb-24 last:mb-0"
    >
      {/* Large Background Image with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0f]/95 via-[#0d0d0f]/85 to-[#0d0d0f]/90 z-10" />
        <img
          src={backgroundImages[index % backgroundImages.length]}
          alt="Wedding background"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content Card */}
      <motion.div 
        style={{ y }}
        className="relative backdrop-blur-xl bg-gradient-to-br from-[#1a1a1d]/60 to-[#0d0d0f]/80 border border-[#b8860b]/30 rounded-3xl p-8 md:p-12 mx-4 md:mx-0 shadow-2xl shadow-[#b8860b]/5"
      >
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#b8860b]/20 to-transparent" />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#b8860b] fill-[#b8860b]" />
          ))}
        </div>

        {/* Quote icon */}
        <div className="mb-6">
          <Quote className="w-14 h-14 text-[#b8860b]/40" />
        </div>

        {/* Quote text */}
        <blockquote style={{ fontFamily: 'Newsreader, serif' }} className="text-[#f4f1ea]/90 text-xl md:text-2xl leading-relaxed mb-8 italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Couple info */}
        <div className="flex items-center gap-6">
          {/* Couple Avatar */}
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#b8860b]/50">
            <img
              src={testimonial.image}
              alt={testimonial.couple}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-2xl font-semibold mb-1">
              {testimonial.couple}
            </p>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#b8860b] text-sm tracking-wider uppercase">
              {testimonial.wedding}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Full Section Background Image */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=80"
          alt="Wedding background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0f] via-[#0d0d0f]/95 to-[#0d0d0f]" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#b8860b]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#b8860b]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6"
          />
          <p style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#b8860b] text-sm tracking-[0.3em] uppercase mb-4">
            Happy Couples
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-5xl md:text-7xl font-bold">
            Testimonials
          </h2>
        </motion.div>

        <div>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
