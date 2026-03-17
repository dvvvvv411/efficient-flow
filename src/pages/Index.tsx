import { useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import ProblemSolution from '@/components/landing/ProblemSolution';
import ServicesGrid from '@/components/landing/ServicesGrid';
import SoftwareShowcase from '@/components/landing/SoftwareShowcase';
import Methodology from '@/components/landing/Methodology';
import Stats from '@/components/landing/Stats';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all scroll-hidden elements
    document.querySelectorAll('.scroll-hidden').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemSolution />
      <ServicesGrid />
      <SoftwareShowcase />
      <Methodology />
      <Stats />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
