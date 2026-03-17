import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lightbulb, Monitor, Code2, Cog, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    number: '01',
    total: '04',
    title: 'Strategische Prozessberatung',
    headline: 'Consulting',
    description:
      'Wir analysieren Ihre bestehenden Abläufe, identifizieren Engpässe und entwickeln maßgeschneiderte Strategien für nachhaltige Effizienzsteigerung — datenbasiert und transparent.',
    features: ['Prozessanalyse', 'Potenzialermittlung', 'Roadmap-Entwicklung'],
  },
  {
    icon: Monitor,
    number: '02',
    total: '04',
    title: 'Von Legacy zu Modern',
    headline: 'Digitalisierung',
    description:
      'Transformation Ihrer analogen und veralteten Systeme in eine zukunftsfähige digitale Infrastruktur. Keine halben Sachen — vollständige Modernisierung.',
    features: ['System-Migration', 'Cloud-Transformation', 'Digitale Workflows'],
  },
  {
    icon: Code2,
    number: '03',
    total: '04',
    title: 'Maßgeschneiderte Lösungen',
    headline: 'Software-Entwicklung',
    description:
      'Individuelle Softwarelösungen, die exakt auf Ihre Geschäftsprozesse zugeschnitten sind — von Konzept bis Deployment, mit erstklassiger UX.',
    features: ['Web-Applikationen', 'API-Entwicklung', 'Dashboard & Analytics'],
  },
  {
    icon: Cog,
    number: '04',
    total: '04',
    title: 'Systematische Verbesserung',
    headline: 'Prozessoptimierung',
    description:
      'Datengestützte Analyse und Optimierung Ihrer Workflows für messbare Ergebnisse und weniger Verschwendung — kontinuierlich und nachhaltig.',
    features: ['Workflow-Automation', 'KPI-Tracking', 'Lean Management'],
  },
];

const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="leistungen" ref={ref} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Leistungen</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Vier Säulen. <span className="text-gradient-blue">Ein Ziel.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Maximale Effizienz durch ganzheitliche Beratung und moderne Technologie.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} group relative rounded-2xl border border-border/60 bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.05] transition-all duration-500 overflow-hidden`}
              >
                <div className="grid md:grid-cols-[1fr_1fr] gap-0">
                  {/* Text side */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground tracking-wider">
                        {service.number}/{service.total}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{service.title}</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">{service.headline}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((f) => (
                        <span key={f} className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">
                          {f}
                        </span>
                      ))}
                    </div>
                    <a href="#kontakt" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline group/link">
                      Mehr erfahren
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Visual side - abstract UI mockup */}
                  <div className="hidden md:flex items-center justify-center p-8 bg-muted/30 border-l border-border/40">
                    <div className="w-full max-w-sm space-y-3">
                      {[0, 1, 2].map((j) => (
                        <div key={j} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border/40">
                          <div className={`w-8 h-8 rounded-lg shrink-0 ${j === 0 ? 'bg-primary/15' : j === 1 ? 'bg-accent' : 'bg-muted'}`} />
                          <div className="flex-1 space-y-1.5">
                            <div className="h-2 rounded bg-foreground/10" style={{ width: `${70 - j * 15}%` }} />
                            <div className="h-1.5 rounded bg-muted-foreground/10" style={{ width: `${90 - j * 10}%` }} />
                          </div>
                          <div className={`w-12 h-6 rounded-md text-[10px] font-bold flex items-center justify-center ${
                            j === 0 ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                          }`}>
                            {j === 0 ? '94%' : j === 1 ? '67%' : '—'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
