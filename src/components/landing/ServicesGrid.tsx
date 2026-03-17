import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lightbulb, Monitor, Code2, Cog } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Consulting',
    subtitle: 'Strategische Prozessberatung',
    description:
      'Wir analysieren Ihre bestehenden Abläufe und entwickeln maßgeschneiderte Strategien für nachhaltige Effizienzsteigerung.',
  },
  {
    icon: Monitor,
    title: 'Digitalisierung',
    subtitle: 'Von Legacy zu Modern',
    description:
      'Transformation Ihrer analogen und veralteten Systeme in eine zukunftsfähige digitale Infrastruktur.',
  },
  {
    icon: Code2,
    title: 'Software-Entwicklung',
    subtitle: 'Maßgeschneiderte Lösungen',
    description:
      'Individuelle Softwarelösungen, die exakt auf Ihre Geschäftsprozesse zugeschnitten sind — von Konzept bis Deployment.',
  },
  {
    icon: Cog,
    title: 'Prozessoptimierung',
    subtitle: 'Systematische Verbesserung',
    description:
      'Datengestützte Analyse und Optimierung Ihrer Workflows für messbare Ergebnisse und weniger Verschwendung.',
  },
];

const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="leistungen" ref={ref} className="py-24 md:py-32 bg-gradient-blue-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Leistungen</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Vier Säulen. <span className="text-gradient-blue">Ein Ziel.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Maximale Effizienz durch ganzheitliche Beratung und moderne Technologie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} group relative p-8 rounded-2xl glass-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-white" />
                </div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{service.subtitle}</p>
                <h3 className="text-xl font-bold tracking-tight mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
