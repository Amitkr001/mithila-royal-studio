import { useEffect } from 'react';
import Navigation from './landing/Navigation';
import HeroSection from './landing/HeroSection';
import ServicesSection from './landing/ServicesSection';
import MediaGrid from './landing/MediaGrid';
import ReelsSection from './landing/ReelsSection';
import TestimonialsSection from './landing/TestimonialsSection';
import Footer from './landing/Footer';

function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0d0d0f] overflow-x-hidden">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <MediaGrid />
      </div>
      <div id="reels">
        <ReelsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
