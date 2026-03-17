import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Send } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" ref={ref} className="py-24 md:py-32 bg-gradient-blue relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-white/[0.05] blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-primary-foreground">
            Bereit für den nächsten Schritt?
          </h2>
        </div>
        <p className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} text-lg text-white/80 max-w-xl mx-auto mb-10`}>
          Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Prozesse
          optimieren und Ihr Unternehmen digitalisieren können.
        </p>
        <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="flex w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 h-13 pl-5 pr-4 rounded-l-full border-0 bg-white/20 backdrop-blur-sm text-sm text-primary-foreground placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            <a
              href="mailto:info@efficientflow.de"
              className="inline-flex items-center gap-2 px-6 h-13 rounded-r-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all duration-200 shrink-0"
            >
              Loslegen
              <Send size={15} />
            </a>
          </div>
        </div>
        <p className={`scroll-hidden delay-3 ${isVisible ? 'scroll-visible' : ''} mt-6 text-sm text-white/60`}>
          Keine Verpflichtung. Kein Risiko. Nur Ergebnisse.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
