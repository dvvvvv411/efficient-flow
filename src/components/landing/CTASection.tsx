import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" ref={ref} className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Bereit für den{' '}
            <span className="text-gradient-blue">nächsten Schritt?</span>
          </h2>
        </div>
        <p className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} text-lg text-muted-foreground max-w-xl mx-auto mb-10`}>
          Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Prozesse
          optimieren und Ihr Unternehmen digitalisieren können.
        </p>
        <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''}`}>
          <a
            href="mailto:info@efficientflow.de"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-blue text-white font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 animate-glow-pulse"
          >
            Kostenlose Erstberatung
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <p className={`scroll-hidden delay-3 ${isVisible ? 'scroll-visible' : ''} mt-6 text-sm text-muted-foreground`}>
          Keine Verpflichtung. Kein Risiko. Nur Ergebnisse.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
