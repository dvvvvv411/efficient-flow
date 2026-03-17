import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import sarahMeier from '@/assets/team/sarah-meier.jpg';
import michaelFischer from '@/assets/team/michael-fischer.jpg';
import jonasHartmann from '@/assets/team/jonas-hartmann.jpg';
import thomasWeber from '@/assets/team/thomas-weber.jpg';
import lauraSchneider from '@/assets/team/laura-schneider.jpg';
import danielKrause from '@/assets/team/daniel-krause.jpg';
import annaHoffmann from '@/assets/team/anna-hoffmann.jpg';
import markusBauer from '@/assets/team/markus-bauer.jpg';
import juliaWagner from '@/assets/team/julia-wagner.jpg';
import sebastianRichter from '@/assets/team/sebastian-richter.jpg';

const teamMembers = [
  {
    name: 'Dr. Thomas Weber',
    role: 'Geschäftsführer / CEO',
    description: 'Visionär mit über 20 Jahren Erfahrung in der digitalen Transformation und strategischen Unternehmensführung.',
    image: thomasWeber,
  },
  {
    name: 'Laura Schneider',
    role: 'Head of Software Engineering',
    description: 'Leitet unser Entwicklungsteam mit Leidenschaft für Clean Code und skalierbare Architekturen.',
    image: lauraSchneider,
  },
  {
    name: 'Michael Fischer',
    role: 'Projektleiter',
    description: 'Steuert komplexe Kundenprojekte von der Konzeption bis zum erfolgreichen Go-Live.',
    image: michaelFischer,
  },
  {
    name: 'Julia Wagner',
    role: 'Business Consultant',
    description: 'Verbindet betriebswirtschaftliches Know-how mit technologischem Verständnis für optimale Beratungsergebnisse.',
    image: juliaWagner,
  },
  {
    name: 'Daniel Krause',
    role: 'Senior Backend Developer',
    description: 'Experte für performante APIs, Datenbanken und serverlose Infrastrukturen.',
    image: danielKrause,
  },
  {
    name: 'Anna Hoffmann',
    role: 'UX/UI Designerin',
    description: 'Gestaltet intuitive Benutzeroberflächen, die Nutzerbedürfnisse in den Mittelpunkt stellen.',
    image: annaHoffmann,
  },
  {
    name: 'Markus Bauer',
    role: 'Data Analyst',
    description: 'Verwandelt komplexe Datensätze in klare Insights und messbare Handlungsempfehlungen.',
    image: markusBauer,
  },
  {
    name: 'Sarah Meier',
    role: 'HR Managerin',
    description: 'Sorgt für ein starkes Team und eine Unternehmenskultur, in der Talente wachsen können.',
    image: sarahMeier,
  },
  {
    name: 'Jonas Hartmann',
    role: 'Recruiter',
    description: 'Findet die besten Köpfe der Branche und begleitet sie auf ihrem Weg zu EfficientFlow.',
    image: jonasHartmann,
  },
  {
    name: 'Sebastian Richter',
    role: 'DevOps Engineer',
    description: 'Automatisiert Deployments und sorgt für reibungslose CI/CD-Pipelines und stabile Systeme.',
    image: sebastianRichter,
  },
];

const Team = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="Unser"
        highlight="Team"
        subtitle="Die Menschen hinter EfficientFlow — Expert:innen mit Leidenschaft für digitale Exzellenz."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Team' },
        ]}
      />

      <section ref={ref} className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`scroll-hidden delay-${Math.min(i % 4 + 1, 4)} ${isVisible ? 'scroll-visible' : ''} group rounded-2xl border border-border/60 bg-white overflow-hidden hover:shadow-lg hover:shadow-primary/[0.05] hover:border-primary/20 transition-all duration-300`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-sm font-bold text-foreground">{member.name}</h3>
                <p className="text-xs font-semibold text-primary mt-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Team;
