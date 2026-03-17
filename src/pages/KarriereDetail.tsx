import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Gift, Briefcase } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { stellen } from '@/data/karriereStellen';

const KarriereDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const stelle = stellen.find((s) => s.slug === slug);
  const { ref, isVisible } = useScrollAnimation();

  if (!stelle) return <Navigate to="/karriere" replace />;

  const sections = [
    { icon: Briefcase, title: 'Deine Aufgaben', items: stelle.aufgaben },
    { icon: CheckCircle2, title: 'Was du mitbringst', items: stelle.voraussetzungen },
    { icon: Gift, title: 'Was wir bieten', items: stelle.benefits },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title={stelle.titel}
        subtitle={stelle.kurzbeschreibung}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Karriere', href: '/karriere' },
          { label: stelle.titel },
        ]}
      />

      <section ref={ref} className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Meta */}
          <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} flex items-center gap-4 mb-8 text-sm text-muted-foreground`}>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {stelle.standort}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
              {stelle.modell}
            </span>
          </div>

          {/* Description */}
          <div className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} mb-12`}>
            <p className="text-muted-foreground leading-relaxed">{stelle.beschreibung}</p>
          </div>

          {/* Sections */}
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className={`scroll-hidden delay-${i + 2} ${isVisible ? 'scroll-visible' : ''} mb-10`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gradient-blue flex items-center justify-center">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-2.5 ml-12">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* CTA */}
          <div className={`scroll-hidden delay-5 ${isVisible ? 'scroll-visible' : ''} mt-14 text-center`}>
            <Link
              to={`/karriere/bewerbung?stelle=${encodeURIComponent(stelle.titel)}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-blue text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-200"
            >
              Jetzt bewerben
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KarriereDetail;
