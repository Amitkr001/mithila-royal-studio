import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube, MapPin, Clock, Camera } from 'lucide-react';

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-6 h-6" />, href: '#', label: 'Facebook' },
    { icon: <Youtube className="w-6 h-6" />, href: '#', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'contact@mithilaroyalstudio.com', href: 'mailto:contact@mithilaroyalstudio.com' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Mithila Nagar, Darbhanga, Bihar 846004', href: '#' },
    { icon: <Clock className="w-5 h-5" />, label: 'Hours', value: 'Mon - Sat: 10AM - 8PM', href: '#' },
  ];

  return (
    <footer ref={sectionRef} className="relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Wedding background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0f] via-[#0d0d0f]/98 to-[#0d0d0f]" />
      </motion.div>

      {/* Decorative Mesh Gradient */}
      <div className="absolute inset-0 opacity-30 -z-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#b8860b]/20 via-transparent to-purple-900/10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#b8860b]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* About Section with Large Owner Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Large Owner Photo */}
            <div className="relative mb-8">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-2xl overflow-hidden border-4 border-[#b8860b]/40 shadow-2xl shadow-[#b8860b]/30 relative group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Vishnu Bihari"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/60 via-transparent to-transparent" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-2xl border border-[#b8860b]/20 pointer-events-none" />
            </div>
            
            <div className="text-center mb-6">
              <h3 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-3xl md:text-4xl font-bold mb-2">Vishnu Bihari</h3>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#b8860b] text-sm tracking-[0.2em] uppercase">Founder & Lead Photographer</p>
            </div>
            
            <div className="space-y-4">
              <h4 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-2xl md:text-3xl font-semibold text-center">About Us</h4>
              <p style={{ fontFamily: 'Newsreader, serif' }} className="text-[#f4f1ea]/70 leading-relaxed text-center text-lg">
                With over 10 years of experience capturing beautiful moments, Mithila Royal Studio has become one of the most trusted names in wedding photography across Bihar and beyond.
              </p>
              <p style={{ fontFamily: 'Newsreader, serif' }} className="text-[#f4f1ea]/70 leading-relaxed text-center text-lg">
                We specialize in cinematic wedding films, stunning drone coverage, and timeless photography that preserves your precious memories forever.
              </p>
              <div className="flex items-center justify-center gap-3 pt-4">
                <Camera className="w-6 h-6 text-[#b8860b]" />
                <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#f4f1ea]/60 text-sm tracking-wider">500+ Weddings Captured</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-2xl md:text-3xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b8860b]/10 border border-[#b8860b]/30 flex items-center justify-center text-[#b8860b] group-hover:bg-[#b8860b]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#f4f1ea]/50 text-xs tracking-[0.15em] uppercase">{item.label}</p>
                    <p style={{ fontFamily: 'Newsreader, serif' }} className="text-[#f4f1ea] text-lg group-hover:text-[#b8860b] transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-2xl md:text-3xl font-semibold mb-6">Connect</h4>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#b8860b]/20 to-[#b8860b]/5 border border-[#b8860b]/30 flex items-center justify-center text-[#f4f1ea] hover:text-[#b8860b] hover:border-[#b8860b] hover:shadow-lg hover:shadow-[#b8860b]/20 transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="tel:+919876543210"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              className="inline-flex items-center gap-3 w-full justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#b8860b] to-[#d4a843] text-[#0d0d0f] text-sm tracking-[0.15em] uppercase font-semibold hover:shadow-lg hover:shadow-[#b8860b]/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5" />
              Book Your Wedding
            </a>

            <a
              href="mailto:contact@mithilaroyalstudio.com"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              className="mt-4 inline-flex items-center gap-3 w-full justify-center px-8 py-4 rounded-xl border-2 border-[#b8860b]/40 text-[#f4f1ea] text-sm tracking-[0.15em] uppercase hover:border-[#b8860b] hover:bg-[#b8860b]/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Inquiry
            </a>
          </motion.div>
        </div>

        {/* Studio Name Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center py-12 border-y border-[#b8860b]/20"
        >
          <h2 style={{ fontFamily: 'Fraunces, serif' }} className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-[#b8860b] via-[#d4a843] to-[#b8860b] bg-clip-text text-transparent">
              Mithila Royal Studio
            </span>
          </h2>
          <p style={{ fontFamily: 'Newsreader, serif' }} className="text-[#f4f1ea]/50 mt-4 text-lg italic">
            Preserving your most precious moments with cinematic elegance
          </p>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <p style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#f4f1ea]/40 text-sm tracking-wide">
            © 2024 Mithila Royal Studio. All rights reserved. | Crafted with ❤️ in Bihar
          </p>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />
    </footer>
  );
}
