import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reels', href: '#reels' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0d0d0f]/95 backdrop-blur-xl border-b border-[#b8860b]/30 shadow-lg shadow-black/20'
            : 'bg-gradient-to-b from-[#0d0d0f]/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <span style={{ fontFamily: 'Fraunces, serif' }} className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-[#f4e4bc] to-[#b8860b] bg-clip-text text-transparent">
                Mithila Royal
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  className="text-[#f4f1ea]/80 text-sm tracking-wider uppercase hover:text-[#b8860b] transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b8860b] to-[#d4a843] group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="tel:+919876543210"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#b8860b] to-[#d4a843] text-[#0d0d0f] text-sm tracking-wider uppercase rounded-full font-semibold hover:shadow-lg hover:shadow-[#b8860b]/30 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-[#b8860b]/10 border border-[#b8860b]/30 flex items-center justify-center text-white hover:text-[#b8860b] hover:bg-[#b8860b]/20 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f] border-l border-[#b8860b]/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#b8860b]/20">
                <span style={{ fontFamily: 'Fraunces, serif' }} className="text-2xl font-bold bg-gradient-to-r from-white to-[#b8860b] bg-clip-text text-transparent">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-lg bg-[#b8860b]/10 border border-[#b8860b]/30 flex items-center justify-center text-white hover:text-[#b8860b] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="px-6 py-8 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-[#b8860b]/10 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#b8860b]/50 group-hover:bg-[#b8860b] transition-colors" />
                    <span style={{ fontFamily: 'Fraunces, serif' }} className="text-[#f4f1ea] text-2xl font-semibold group-hover:text-[#b8860b] transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#b8860b]/20 bg-gradient-to-t from-[#0d0d0f] to-transparent">
                <a
                  href="tel:+919876543210"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#b8860b] to-[#d4a843] text-[#0d0d0f] text-sm tracking-wider uppercase rounded-xl font-semibold hover:shadow-lg hover:shadow-[#b8860b]/30 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Book Your Wedding
                </a>
                <p style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-[#b8860b]/60 text-xs tracking-wider uppercase text-center mt-4">
                  Owner: Vishnu Bihari
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
