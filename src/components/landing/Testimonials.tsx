import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'EfficientFlow hat unsere internen Abläufe komplett transformiert. Die Effizienzsteigerung von über 35% hat unsere Erwartungen übertroffen.',
    name: 'Stefan Müller',
    role: 'CEO',
    company: 'TechVentures GmbH',
  },
  {
    quote: 'Die Kombination aus strategischer Beratung und maßgeschneiderter Software ist einzigartig. Endlich ein Partner, der beides versteht.',
    name: 'Laura Schmidt',
    role: 'Head of Operations',
    company: 'DataCore AG',
  },
  {
    quote: 'Vom ersten Gespräch bis zum Go-Live — professionell, transparent und immer auf Augenhöhe. Klare Empfehlung.',
    name: 'Michael Weber',
    role: 'CTO',
    company: 'NovaSystems',
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Kundenstimmen</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Was unsere <span className="text-gradient-blue">Kunden sagen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} relative p-8 rounded-2xl border border-border/60 bg-white hover:shadow-lg hover:shadow-primary/[0.05] hover:border-primary/20 transition-all duration-300`}
            >
              <Quote size={28} className="text-primary/20 mb-4" />
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
